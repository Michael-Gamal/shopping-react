import { RiRefund2Line } from "react-icons/ri";
import { FaShippingFast } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";

import './features.css'
const Features = () => {
  const features = [
    {
      title: "Money back guarantee",
      description: "Full refund within 30 days if you are not satisfied with the product",
      icon: <RiRefund2Line />
    },
    {
      title: "Free shipping",
      description: "Free shipping for all orders over 500 EGP",
      icon: <FaShippingFast />
    },
    {
      title: "Technical support",
      description: "24/7 technical support available for all products",        
      icon: <BiSupport />
    }
  ];

  return (
    <section className="features">
        <div className="features__container">
          {features.map((feature, index) => (
            <div className="features__item" key={index}>
              <div className="feature__icon">{feature.icon}</div>
              <h4 className="features__title">{feature.title}</h4>
              <p className="features__description">{feature.description}</p>
            </div>
          ))}
        </div>
    </section>
  )
}

export default Features

