import React from 'react'
import './newletter.css';
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { MdOutlineSportsBasketball } from "react-icons/md";
const NewLetter = () => {
  return (
    <section className='newsletter'>
      <div className="boxes">
        <div className="box">
          <h3>
            newsletter
          </h3>
          <p>
            Get lastest information on Events, sales and offers.
          </p>
        </div>
        <div className="box">
          <input type="email" placeholder='Email Address' />
          <input type="submit" value="SUBMIT" />
        </div>
        <div className="box">
          <div className="social-media">
            <div className="icon">
                          <FaFacebookF  />

            </div>
            <div className="icon">
                          <IoLogoInstagram />

            </div>
            <div className="icon">
                          <MdOutlineSportsBasketball />

            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default NewLetter
