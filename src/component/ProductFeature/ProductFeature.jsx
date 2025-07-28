import React from 'react'
import './productfeature.css'
import { TbArrowBackUp } from "react-icons/tb";
import { FaTruckFast } from "react-icons/fa6";
import { RiSecurePaymentLine } from "react-icons/ri";

const ProductFeature = () => {
  return (
    <section className='product-feature'>
      <div className="features">
        <div className="feat">
          <div className="icon one">
            <TbArrowBackUp />
          </div>
          <div className="text">
            <h3>Easy Return</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Porro ab sit inventore corrupti recusandae reprehenderit nemo ipsam esse aspernatur quae voluptatum ut!
            </p>
          </div>
        </div>
        <div className="feat">
          <div className="icon two">
            <FaTruckFast />
          </div>
          <div className="text">
            <h3>Fast Delivery</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Porro ab sit inventore corrupti recusandae reprehenderit nemo ipsam esse aspernatur quae voluptatum ut!
            </p>
          </div>
        </div>
        <div className="feat">
          <div className="icon three">
            <RiSecurePaymentLine />

          </div>
          <div className="text">
            <h3>Secure Payment</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Porro ab sit inventore corrupti recusandae reprehenderit nemo ipsam esse aspernatur quae voluptatum ut!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductFeature
