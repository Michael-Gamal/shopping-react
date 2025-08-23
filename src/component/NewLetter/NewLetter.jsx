import { useState } from 'react';
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { MdOutlineSportsBasketball } from "react-icons/md";
import './newletter.css';

const NewLetter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }
    setSubmitted(true);
    setError('');
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className='newsletter' aria-label="Newsletter Subscription">
      <div className="boxes">
        <div className="box">
          <h3> Newsletter </h3>
          <p> Get the latest updates on events, sales, and special offers. </p>
        </div>

        <div className="box">
          <form onSubmit={handleSubmit} className="newsletter-form">
            <div className="input-group">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Email Address'
                aria-label="Email address"
                required
              />
              <button type="submit" className="submit-btn">
                {submitted ? 'THANK YOU!' : 'SUBSCRIBE'}
              </button>
            </div>
            {error && <p className="error-message">{error}</p>}
            {submitted && <p className="success-message">You've been subscribed!</p>}
          </form>
        </div>
        
        <div className="box">
          <div className="social-media">
            <a href="https://facebook.com" className="icon" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" className="icon" aria-label="Instagram">
              <IoLogoInstagram />
            </a>
            <a href="https://example.com" className="icon" aria-label="Website">
              <MdOutlineSportsBasketball />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewLetter
