import { TbLocation } from 'react-icons/tb'
import { RiSecurePaymentFill, RiSoundModuleLine } from 'react-icons/ri'
import { FaUsersLine, FaQuoteLeft } from 'react-icons/fa6'
const AboutusFueaures = () => {
  return (
    <div>
        <div className="box">
                <div className="icon">
                    <RiSecurePaymentFill />
                </div>
                <div className="text">
                    <h5>Fast & Secure</h5>
                    <p>Optimized preformance</p>
                </div>
            </div>
            <div className="box">
                <div className="icon">
                    <RiSoundModuleLine />
                </div>
                <div className="text">
                    <h3>Advanced Filtering</h3>
                    <p>Optimized preformance</p>
                </div>
            </div>
            <div className="box">
                <div className="icon">
                    <FaUsersLine />
                </div>
                <div className="text">
            <h5 >User Reviews</h5>
            <p>Ratings & feedback</p>
                </div>
            </div>
            <div className="box">
                <div className="icon">
                    <TbLocation />
                </div>
                <div className="text">
                    <h3>Order Tracking</h3>
                    <p>Live order status</p>
                </div>
        </div>
    </div>
  )
}

export default AboutusFueaures
