import { useContext } from 'react'
import './carttotal.css'
import Title from "../Title/Title"
import { ShopContext } from '../../ShopContext/ShopContextInstance'
import { Link } from 'react-router-dom'
const CartTotal = () => {
    const {getCartAmount, currency, delivery_charges} = useContext(ShopContext)


  return (


    <section className='cart-total'>
        <div className="cart-amount">
            <div className="title">
                <Title title1 = "Cart" title2 = "Total" style1= {{
                    fontSize: "32px",
                }} style2= {{
                    fontWeight: 'normal',
                    textDecoration: 'underline',
                    color : 'rgb(255 143 156)',
                }}  />      
            </div>
            <div className="content">
                <div className="details">
                    <div className="sub-total">
                        <p>SubTotal:</p>
                        <span>{currency}{getCartAmount()}.00</span>
                    </div>
                    <div className="shopping-fees">
                        <p>Shopping Fees:</p>
                        <span>{currency}{!getCartAmount() ? "0" : delivery_charges }.00</span>

                    </div>
                    <div className="total-products">
                        <p>Total:</p>
                        <span>{currency}{!getCartAmount() ? "0" : delivery_charges + getCartAmount()}.00</span>

                    </div>
                </div>
                <div className="proceed-to-check-out">
                    <Link to = '/place-order '>proceed to checkout </Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CartTotal
