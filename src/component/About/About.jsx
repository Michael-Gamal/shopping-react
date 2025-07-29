import React from 'react'
import './about.css'
import Title from '../Title/Title'

import TestimonialImage from '../../assets/testimonial.png' 
import { FaQuoteLeft } from "react-icons/fa6";
import { FaQuoteRight } from "react-icons/fa6";
import AboutImage from '../../assets/about.png'
import { RiSecurePaymentFill } from "react-icons/ri";

const About = () => {
  return (
    <section className="about">
        <div className="people-says">
            <div className="title">
                <Title title1 = "People" title2 = "Says" style1= {{
                    fontSize: "35px",
                    marginBottom: "20px",
                }} style2= {{
                    fontWeight: 'normal',
                    textDecoration: 'underline',
                    color : 'rgb(255 143 156)',
                }}  />

            </div>
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
        </div>
        <div className="trending">  
            <div className="image">
                <img src={AboutImage} alt="" />
                <div className="box-center">
                    <p>Top View In this <br /> Week</p>
                    <h2>Trending</h2>
                </div>

            </div>
        </div>
        <div className="about-us">
            <div className="title">
                <Title title1 = "About" title2 = "Us" style1= {{
                    fontSize: "35px",
                    marginBottom: "20px",
                }} style2= {{
                    fontWeight: 'normal',
                    textDecoration: 'underline',
                    color : 'rgb(255 143 156)',
                }}  />

            </div>    
            <div className="contant">
                <div className="box">
                    <div className="icon">
                        <RiSecurePaymentFill />

                    </div>
                    <div className="text">
                        <h3>Fast & Secure</h3>
                        <p>Optimized preformance</p>
                    </div>
                </div>
                                <div className="box">
                    <div className="icon">
                        <RiSecurePaymentFill />

                    </div>
                    <div className="text">
                        <h3>Fast & Secure</h3>
                        <p>Optimized preformance</p>
                    </div>
                </div>
                                <div className="box">
                    <div className="icon">
                        <RiSecurePaymentFill />

                    </div>
                    <div className="text">
                        <h3>Fast & Secure</h3>
                        <p>Optimized preformance</p>
                    </div>
                </div>
                                <div className="box">
                    <div className="icon">
                        <RiSecurePaymentFill />

                    </div>
                    <div className="text">
                        <h3>Fast & Secure</h3>
                        <p>Optimized preformance</p>
                    </div>
                </div>
                                <div className="box">
                    <div className="icon">
                        <RiSecurePaymentFill />

                    </div>
                    <div className="text">
                        <h3>Fast & Secure</h3>
                        <p>Optimized preformance</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
