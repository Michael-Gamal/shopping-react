import React,{useContext, useEffect, useState} from 'react'
import './cart.css'
import Title from '../../component/Title/Title'
import { ShopContext } from '../../ShopContext/ShopContext'
import {  FaRegWindowClose } from 'react-icons/fa'
import { FaMinus, FaPlus } from 'react-icons/fa6'
import CartTotal from '../../component/CartTotal/CartTotal'
import Footer from '../../component/Footer/Footer'
import Header from '../../component/Header'
const Cart = () => {


  const {products, currency, cartItems, getCartCount,updateQuantity , navigate} = useContext(ShopContext)
  

  const [ cartData, setCartData ] = useState([])
  const [ quantities, setQuantities ] = useState({})

  useEffect(() => {
    if (products.length > 0) {
      const tempData = [];
      const initialQuantities = {};
      for (const items in cartItems) {
          {console.log(items)}
          for (const item in cartItems[items]) {          
                      {console.log(item);
          }
            if (cartItems[items][item] > 0) {
              tempData.push({
                _id: items,
                color: item,
                quantity: cartItems[items][item],
              });
              initialQuantities[`${items}-${item}`] = cartItems[items][item];
              {console.log(initialQuantities[`${items}-${item}`] = cartItems[items][item]);
}
            } 
          }
      }
      setCartData(tempData);
      // console.log('cartData', tempData);
      setQuantities(initialQuantities);
    }
  }, [cartItems, products])

const increment = (id, color) => {
  const key = `${id}-${color}`;
  const newValue = quantities[key] + 1;
  setQuantities((prev) => ({ ...prev, [key]: newValue }));
  updateQuantity(id, color, newValue);
}

const decrement = (id, color) => {
  const key = `${id}-${color}`;
  if (quantities[key] > 1) {
    const newValue = quantities[key] - 1;
    setQuantities((prev) => ({ ...prev, [key]: newValue }));
    updateQuantity(id, color, newValue);
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
                        cartData.map((item,i) => {
                            const productData = products.find((product) => product._id === item._id);
                            const key = `${item._id}-${item.color}`;
                            return (
                                <div key={i} className="product">
                                    <div className="image">
                                        <img className='' src={productData.image[0]} alt="Product Image" />

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
                                                <p className=''>{quantities[key]}</p>
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
