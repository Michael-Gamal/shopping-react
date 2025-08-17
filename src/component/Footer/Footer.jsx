import  FooterImage  from '../../assets/cards.png'
import './footer.css'
import FooterLinks from './FooterLinks'
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
          <FooterLinks />
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
