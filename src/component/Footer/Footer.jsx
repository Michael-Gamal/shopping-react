import  FooterImage  from '../../assets/cards.png'
import './footer.css'
const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="left">
          <div className="content">
            <div className="footer-logo">
              <h1>Shopanza</h1>
              <p>Your one-stop shop for everything!</p>
            </div>
            <div className="image"> 
              <img src={FooterImage} alt="" />
            </div>
          </div>
        </div>
        <div className="right">
          <div className="links">
            <div className="link-column">
              <h3>Customer Service</h3>
              <ul>
                <li>Help Center</li>
                <li> Payment methods</li>
                <li>Contact</li>
                <li>Shopping status</li>
                <li>Complaints</li>
              </ul>
            </div>
                        <div className="link-column">
              <h3>Customer Service</h3>
              <ul>
                <li>Help Center</li>
                <li> Payment methods</li>
                <li>Contact</li>
                <li>Shopping status</li>
                <li>Complaints</li>
              </ul>
            </div>
                        <div className="link-column">
              <h3>Customer Service</h3>
              <ul>
                <li>Help Center</li>
                <li> Payment methods</li>
                <li>Contact</li>
                <li>Shopping status</li>
                <li>Complaints</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>© 2023 Shopanza</p>
        <p> All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
