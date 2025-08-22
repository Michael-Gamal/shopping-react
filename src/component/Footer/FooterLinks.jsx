import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const FooterLinks = () => {
  return (
    <div className="links">
      <div className="link-column">
        <h3>Customer Service</h3>
        <ul>
          <li><a href="/help-center">Help Center</a></li>
          <li><a href="/payment-methods">Payment Methods</a></li>
          <li><a href="/contact">Contact Us</a></li>
          <li><a href="/order-status">Order Status</a></li>
          <li><a href="/returns">Returns & Refunds</a></li>
        </ul>
      </div>
      
      <div className="link-column">
        <h3>About Us</h3>
        <ul>
          <li><a href="/about">Our Story</a></li>
          <li><a href="/careers">Careers</a></li>
          <li><a href="/press">Press</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/sustainability">Sustainability</a></li>
        </ul>
      </div>
      
      <div className="link-column">
        <h3>Information</h3>
        <ul>
          <li><a href="/terms">Terms of Service</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
          <li><a href="/shipping">Shipping Policy</a></li>
          <li><a href="/faq">FAQ</a></li>
          <li><a href="/sitemap">Sitemap</a></li>
        </ul>
      </div>
      
    </div>
  )
}

export default FooterLinks
