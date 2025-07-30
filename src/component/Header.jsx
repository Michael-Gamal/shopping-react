import React,{useContext, useState} from 'react'
import { Link } from 'react-router-dom'
import './header.css'
import { ShopContext } from '../ShopContext/ShopContext'
import { CiUser } from "react-icons/ci";

const Header = () => {

  // const [activeLink, setActiveLink] = useState('')
  const {getCartCount} = useContext(ShopContext)
  const [displaylinks, setDisplyLinks] = useState("")
  
  return (
    <header>
      <div className="logo">
        <Link   to="/">Shopanze</Link>
      </div>
      <div className="links" style={{
        display: displaylinks
      }}>
        <Link  className={`${location.pathname === '/' ? "active " : "" } `}  to="/ ">Home</Link>
        <Link  className={`${location.pathname === '/collection' ? "active " : "" } `}  to="/collection">Collection</Link>
        <Link  className={`${location.pathname === '/blog' ? "active " : "" } `} to="/blog">Blog</Link>
        <Link  className={`${location.pathname === '/contact' ? "active " : "" } `} to="/contact">Contact</Link>
      </div>

      <div className="button">
        <div className="cart">
          <Link to="/cart">Cart</Link>
          <span className='num-products'>
            <p>{getCartCount()}</p>
          </span>
        </div>
        <div className="login">

        <Link to="/login">Login <CiUser className='icon' /></Link>
        

        </div>
      <div onClick={() => {displaylinks === "" ? setDisplyLinks("flex") : setDisplyLinks("")}} className="burger-links" >
        <span></span>
        <span></span>
        <span></span>
      </div>
      </div>
    </header>
  )
}

export default Header
