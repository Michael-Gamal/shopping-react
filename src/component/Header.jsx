import {useContext, useState} from 'react'
import { Link, useLocation } from 'react-router-dom'
import './header.css'
import { ShopContext } from '../ShopContext/ShopContextInstance.jsx'
import { CiUser } from "react-icons/ci";

const Header = () => {

  const {getCartCount,currentUser,setCurrentUser} = useContext(ShopContext)
  const [displaylinks, setDisplyLinks] = useState("")
  const [displayUser, setDisplyUser] = useState("")
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser(null)
  }
  
  const handleBargurIcons = () => {
    setDisplyLinks(displaylinks === "" ? "flex" : "")
  }

  const toggleUserMenu = () => {
    setDisplyUser(displayUser === "" ? "flex" : "")
  }

  return (
    <header>
      <div className="logo">
        <Link to="/">Shopanze</Link>
      </div>
      <div className="links" style={{ display: displaylinks }}>
        <Link className={`${location.pathname === '/' ? "active" : ""}`} to="/">Home</Link>
        <Link className={`${location.pathname === '/collection' ? "active" : ""}`} to="/collection">Collection</Link>
        <Link className={`${location.pathname === '/blog' ? "active" : ""}`} to="/blog">Blog</Link>
        <Link className={`${location.pathname === '/contact' ? "active" : ""}`} to="/contact">Contact</Link>
      </div>

      <div className="button">
        <div className="cart">
          <Link to="/cart">Cart</Link>
          <span className='num-products'>
            <p>{getCartCount()}</p>
          </span>
        </div>
        <div className="login">
          {currentUser ? (
            <>
              <Link onClick={toggleUserMenu} to="">
                <CiUser className='icon' /> {`Hi ${currentUser.username}`}
              </Link>
              <div className="user-option" style={{ display: displayUser }}>
                <button onClick={handleLogout}>Log Out</button>
                <button>My favorite products</button>
              </div>
            </>
          ) : (
            <Link to='/login'>Login <CiUser className='icon' /></Link>
          )}
        </div>
        <button onClick={handleBargurIcons} className={`burger-links ${displaylinks === "flex" ? "active" : ""}`}>
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}

export default Header
