import React from 'react'
import TestimonialImage from '../../assets/testimonial.png' 
import { FaQuoteLeft,FaQuoteRight } from "react-icons/fa6";
const AboutusDescription = () => {
  return (
                  <div className="contant">
                <div className="caracter">
                    <div className="image">
                        <img src={TestimonialImage} alt="Testimonial-Image" />
                    </div>
                    <p className="name">Jhon Deo</p>
                    <span className="jop-title">CEO At TeckStack</span>
                </div>
                <div className="desc">
                    <p>
                        <FaQuoteLeft />
                        Lorem ipsum dolor sit amet, consectetur  elit. Possimus dolores tenetur eaque unde sequi
                        illo maxime accusantium corrupti quam debitis debitis architecto  architecto
                        <FaQuoteRight />

                    </p>
                </div>
            </div>
  )
}

export default AboutusDescription
