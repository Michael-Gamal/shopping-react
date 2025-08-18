import {useContext, useEffect, useState} from 'react'
import './cart.css'
import Title from '../../component/Title/Title'
import { ShopContext } from '../../ShopContext/ShopContextInstance'
import {  FaRegWindowClose } from 'react-icons/fa'
import { FaMinus, FaPlus } from 'react-icons/fa6'
import CartTotal from '../../component/CartTotal/CartTotal'
import Footer from '../../component/Footer/Footer'
import Header from '../../component/Header'
import { isSafeInput, sanitizeKey, safeHasOwn } from '../../utils/validation'
const Cart = () => {

  const {products, currency, cartItems, getCartCount,updateQuantity } = useContext(ShopContext)
  

  const [ cartData, setCartData ] = useState([])
  const [ quantities, setQuantities ] = useState({})

  useEffect(() => {
    if (products.length > 0) {
      const tempData = [];
      const initialQuantities = {};
      for (const items in cartItems) {
        if (safeHasOwn(cartItems, items)) {
          const cartItem = cartItems[items];
          for (const item in cartItem) {
            if (safeHasOwn(cartItem, item)) {
              const quantityValue = cartItem[item];
              
              if (isSafeInput(quantityValue) && quantityValue > 0) {
                const safeItems = sanitizeKey(items);
                const safeItem = sanitizeKey(item);
                
                tempData.push({
                  _id: safeItems,
                  color: safeItem,
                  quantity: quantityValue,
                });
                
                initialQuantities[`${safeItems}-${safeItem}`] = quantityValue;
              }
            }
          }
        }
      }
      setCartData(tempData);
      setQuantities(initialQuantities);
    }
  }, [cartItems, products])
const increment = (id, color) => {
  const safeId = sanitizeKey(id);
  const safeColor = sanitizeKey(color);
  const key = `${safeId}-${safeColor}`;
  const currentQuantity = quantities[key] || 0;
  const newValue = currentQuantity + 1;
  setQuantities((prev) => ({ ...prev, [key]: newValue }));
  updateQuantity(safeId, safeColor, newValue);
}

const decrement = (id, color) => {
  const safeId = sanitizeKey(id);
  const safeColor = sanitizeKey(color);
  const key = `${safeId}-${safeColor}`;
  let currentQuantity = quantities[key] || 0;

  if (currentQuantity > 1) {
    const newValue = currentQuantity - 1;
    setQuantities((prev) => ({ ...prev, [key]: newValue }));
    updateQuantity(safeId, safeColor, newValue);
  }
}

  return (
    <section className='cart-page'>
        <Header />
        <div className="cart">
            <div className="head">
                <div className="title">
                <Title title1 = "Cart" title2 = "List" style1= {{
                    fontSize: "28px",
                }} style2= {{
                    fontWeight: 'normal',
                    textDecoration: 'underline',
                    color : 'rgb(255 143 156)',
                }}  />      
                </div>
                <div className="count-item">
                    <p>({getCartCount()} Items)</p>
                </div>
            </div>
            <div className="body">
                <div className="products">
                    {
                        cartData.map((item) => {
                            const safeId = sanitizeKey(item._id);
                            const safeColor = sanitizeKey(item.color);
                            const key = `${safeId}-${safeColor}`;
                            let quantity = quantities[key] || 0;
                            const productData = products.find((product) => product._id === safeId);
                            return (
                                <div key={item._id} className="product">
                                    <div className="image">
                                        <img className='' src={productData.image[0]} alt="Product" />
                                    </div>
                                    <div className="content">
                                        <div className="name-delate-product">
                                            <h5 className=''>{productData.name}</h5>
                                            <FaRegWindowClose 
                                            onClick={() => {updateQuantity(item._id, item.color, 0)}}
                                            className='icon'/>
                                        </div>
                                        <div className="color-product">
                                            <p className=''>{item.color}</p>
                                        </div>
                                        <div className="count-price-product">
                                            <div className="count">
                                                <button onClick={() => decrement(item._id,item.color)} className=''>
                                                    <FaMinus className='minus icon' />
                                                </button>
                                                <p>{quantity}</p>
                                                <button onClick={() => increment(item._id, item.color)} className=''>
                                                    <FaPlus className='plus icon' />
                                                </button>
                                            </div>
                                            <div className="price">
                                                <h4 className=''>{currency}{productData.price}</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="">
                    <CartTotal />
            </div>
        </div>
        <Footer />
    </section>
  )
}

export default Cart
