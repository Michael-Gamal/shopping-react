import {useState} from 'react'
import './placeorder.css'
import CartTotal from '../../component/CartTotal/CartTotal'
import Title from '../../component/Title/Title'
import Header from '../../component/Header'
import Footer from '../../component/Footer/Footer'
const PlaceOrder = () => {
      const [method, setMethod] = useState('cod')

  return (
    <div className='place-order-page'>
        <Header />
        <div className="content-page">
            {/* Container */}
            <div className="left-side">

                <form className='' action="">
                <div className="title">
                    <Title title1 = "Delivery" title2 = "Information" style1= {{
                        fontSize: "32px",
                        marginBottom: "30px"
                    }} style2= {{
                        fontWeight: 'normal',
                        textDecoration: 'underline',
                        color : 'rgb(255 143 156)',
                    }}  />    
                </div>
                    <div className="inputs-container">
                        <div className="width-50">
                            <input type="text" placeholder="First Name" />
                            <input type="text" placeholder="Last Name" />
                        </div>
                        <div className="width-100">
                            <input type="text" placeholder="Email Address" />
                            <input type="text" placeholder="Phone Number" />
                            <input type="text" placeholder="Street" />
                        </div>
                        <div className="width-50">
                            <input type="text" placeholder="City" />
                            <input type="text" placeholder="State" />
                        </div>
                        <div className="width-50">
                            <input type="text" placeholder="Zip Code" />
                            <input type="text" placeholder="Country" />
                        </div>
                    </div>
                </form>
            </div>
            {/* right side */}
            <div className="right-side">
                <CartTotal />
                <div className="payment-mothed">
                    <h3 className=''> Payment Mothed </h3>
                    <div className="">
                            <button onClick={() => setMethod("stripe")} 
                            className={`${method === "stripe" ? "active" : ""} `}>Stripe</button>
                            <button  onClick={() => setMethod("cod")}
                            className={`${method === "cod" ? "active" : ""} `}>Cash on Delivery</button>
                    </div>
                </div>
                    <div className="">
                        <button type='submit' className='submit'>Place Order</button>
                    </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default PlaceOrder
