import {useContext, useState} from 'react'
import { Link } from 'react-router-dom'
import './header.css'
import { ShopContext } from '../ShopContext/ShopContext'
import { CiUser } from "react-icons/ci";

const Header = () => {

  // const [activeLink, setActiveLink] = useState('')
  const {getCartCount,currentUser,setCurrentUser} = useContext(ShopContext)
  const [displaylinks, setDisplyLinks] = useState("")
  const [displayUser, setDisplyUser] = useState("")
  

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser(null)
    console.log("User logged out successfully");
    
  }
  const handleBargurIcons = () => {
    displaylinks === "" ? setDisplyLinks("flex") : setDisplyLinks("")
    console.log("burger icon clicked");
    
  }

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

          {
          currentUser
            ? <Link onClick={() => {displayUser === "" ? setDisplyUser("flex") : setDisplyUser("")}} to=""><CiUser className='icon' /> {`Hi ${currentUser.username}`} </Link>
            : <Link to='/login'  >Login <CiUser className='icon' /></Link>
          }
          
          {
            currentUser ? (
              <div  className="user-option" style={{
                display: displayUser
              }}>
                <button onClick={() => handleLogout()}>Log Out</button>
                <button>My favorut product</button>
              </div>

            ) : (
              ''
            )
          }

        </div>
      <button  onClick={() => handleBargurIcons()} className="burger-links" >
        <span />
        <span />
        <span />
      </button>
      </div>
    </header>
  )
}

export default Header
