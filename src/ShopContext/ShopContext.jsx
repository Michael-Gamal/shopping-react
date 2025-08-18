import { useEffect, useState } from 'react';
import { products} from '../assets/data.js'
import { toast } from 'react-toastify'
import {  useNavigate } from 'react-router-dom'
import { ShopContext } from './ShopContextInstance'
import { sanitizeKey, safeHasOwn } from '../utils/validation'

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({})
  const [currentUser, setCurrentUser] = useState(null)
  const navigate = useNavigate()
  const currency = "$ ";
  const delivery_charges = 10;
  
  const addToCart = (productId, color) => {
    if (!color) {
      toast.error("Please select a color");
      return;
    }
    
    toast.success("Added to your cart");
    const cartData = structuredClone(cartItems);
    const safeProductId = sanitizeKey(productId);
    const safeColor = sanitizeKey(color);

    if (safeHasOwn(cartData, safeProductId)) {
      const cartProduct = cartData[safeProductId];
      // منع التعيين على خصائص البروتوتايب
      if (safeColor !== '__proto__' && safeColor !== 'constructor') {
        if (safeHasOwn(cartProduct, safeColor)) {
          cartProduct[safeColor] += 1;
        } else {
          cartProduct[safeColor] = 1;
        }
      }
    } else {
      const sanitizedColor = sanitizeKey(safeColor);
      // إنشاء كائن بدون بروتوتايب
      const newObj = Object.create(null);
      newObj[sanitizedColor] = 1;
      cartData[safeProductId] = newObj;
    }
    setCartItems(cartData);
  }

  const getCartCount = () => {
    let totalCount = 0;
    for (const items in cartItems) {
      if (safeHasOwn(cartItems, items)) {
        const cartProduct = cartItems[items];
        for (const item in cartProduct) {
          if (safeHasOwn(cartProduct, item)) {
            totalCount += cartProduct[item];
          }
        }
      }
    }
    return totalCount;
  }

  const updateQuantity = (item, color, quantity) => {
    const cartData = structuredClone(cartItems);
    const safeItem = sanitizeKey(item);
    const safeColor = sanitizeKey(color);

    if (!safeHasOwn(cartData, safeItem)) {
      cartData[safeItem] = {};
    }
    cartData[safeItem][safeColor] = quantity;
    setCartItems(cartData);
  }
const getCartAmount = () => {
  let totalAmount = 0;
  for (const items in cartItems) {
    if (safeHasOwn(cartItems, items)) {
      const safeItems = sanitizeKey(items);
      const itemInfo = products.find((product) => {
        const safeProductId = sanitizeKey(product._id);
        return safeProductId === safeItems;
      });
      
      if (itemInfo) {
        const cartProduct = cartItems[items];
        for (const item in cartProduct) {
          if (safeHasOwn(cartProduct, item)) {
            const quantity = cartProduct[item];
            totalAmount += itemInfo.price * quantity;
          }
        }
      }
    }
  }
  return totalAmount;
};
useEffect(() => {
  const user = localStorage.getItem("currentUser");
  if (user) {
    setCurrentUser(JSON.parse(user));
  }
}, []);

const value = {
  products,
  addToCart,
  getCartCount,
  cartItems,
  navigate,
  currency,
  delivery_charges,
  updateQuantity,
  getCartAmount,
  currentUser,
  setCurrentUser
};

return (
  <ShopContext.Provider value={value}>
    {props.children}
  </ShopContext.Provider>
);
}

export default ShopContextProvider
