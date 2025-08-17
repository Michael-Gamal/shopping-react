import  {createContext, useEffect,useState} from 'react'
import { products} from '../assets/data.js'
import { toast } from 'react-toastify'
import {  useNavigate } from 'react-router-dom'
export const ShopContext = createContext()
const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([])
  const [currentUser, setCurrentUser] = useState(null)
  const navigate = useNavigate()
  const currency = "$ "; 
  const delivery_charges = 10;
  const addToCart = (productId,color) => {
    if (!color) {
      toast.error("Please select a color")
      return
    }else {
      toast.success("Added to your cart")
    }
    const cartData = structuredClone(cartItems)
    const cartProductColor = cartData[productId]
    if (cartProductColor) {
      if (cartProductColor[color]) {
        cartProductColor[color] += 1
      }else {
        cartProductColor[color] = 1
      }
    }else {
      cartData[productId] = {}
      cartData[productId][color] = 1
    }
    setCartItems(cartData)
  }
  // Getting Total Cart Count
  const getCartCount = () => {
    let totalCount = 0
    for (const items in cartItems) {
      const cartProductColor =cartItems[items];
      if (Object.prototype.hasOwnProperty.call(cartItems,items)) {
        for (const item in cartProductColor) {
          if (Object.prototype.hasOwnProperty.call(cartItems,items)) {
              try {
                if (cartProductColor[item]) { totalCount += cartProductColor[item] }
              } catch { console.log('Error in getting cart count')  }
            } 
        } 
      }
    }
    return totalCount
  }
const updateQuantity = (item, color, quantity) => {
  const cartData = structuredClone(cartItems)
  const cartProduct = cartData[item]
  cartProduct[color] = quantity
  setCartItems(cartData)
}
// Get total price of cart items
const getCartAmount = () => {
  let totalAmount = 0
  for (const items in cartItems) {
    if (Object.prototype.hasOwnProperty.call(cartItems, items)) {
      const itemInfo = products.find((product) => product._id === items)
      for (const item in cartItems[items]) {
          const cartProductColor = cartItems[items][item];
        if (Object.prototype.hasOwnProperty.call(cartItems, items)) {
          try {
            if (cartProductColor > 0) {
              totalAmount += itemInfo.price * cartProductColor
              
            }
          } catch (error) {
            console.log('Error in getting total price', error)
          }
        }
      }
    }
  }
  return totalAmount
};
// login user
useEffect(() => {
  const user = localStorage.getItem("currentUser");
  if (user) {
    setCurrentUser(JSON.parse(user))
  }
},[])  
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
    }
  return (
    <ShopContext.Provider value={value}> 
      {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider
