import React from 'react'
import Banner1 from '../../assets/banner1.png'
import Banner2 from '../../assets/banner2.png'
import './banner.css'   
const Banner = () => {
  return (
    <section className="banners">
        <div className="banner-right">
            <img src={Banner1} alt="" />
        </div>
        <div className="banner-left">
            <img src={Banner2} alt="" />
        </div>
    </section>
  )
}

export default Banner
