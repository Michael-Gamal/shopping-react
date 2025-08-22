import { useState } from 'react'
import './placeorder.css'
import CartTotal from '../../component/CartTotal/CartTotal'
import Title from '../../component/Title/Title'
import Header from '../../component/Header'
import Footer from '../../component/Footer/Footer'
import { FaCreditCard, FaMoneyBillWave, FaSpinner } from 'react-icons/fa'

const PlaceOrder = () => {
  const [method, setMethod] = useState('cod')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    country: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      alert('Order placed successfully!')
    }, 1500)
  }

  return (
    <div className='place-order-page'>
      <Header />
      <div className="content-page">
        {/* Left side - Form */}
        <div className="left-side">
          <form onSubmit={handleSubmit}>
            <div className="title">
              <Title title1="Delivery" title2="Information" />
            </div>
            <div className="inputs-container">
              <div className="input-row">
                <div className="input-group">
                  <label>First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="First Name"
                    required
                  />
                </div>
                <div className="input-group">
                  <label>Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Last Name"
                    required
                  />
                </div>
              </div>
              
              <div className="input-row">
                <div className="input-group">
                  <label>Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email Address"
                    required
                  />
                </div>
              </div>
              
              <div className="input-row">
                <div className="input-group">
                  <label>Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone Number"
                    required
                  />
                </div>
              </div>
              
              <div className="input-row">
                <div className="input-group">
                  <label>Street *</label>
                  <input
                    type="text"
                    name="street"
                    value={formData.street}
                    onChange={handleInputChange}
                    placeholder="Street"
                    required
                  />
                </div>
              </div>
              
              <div className="input-row">
                <div className="input-group">
                  <label>City *</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="City"
                    required
                  />
                </div>
                <div className="input-group">
                  <label>State *</label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    placeholder="State"
                    required
                  />
                </div>
              </div>
              
              <div className="input-row">
                <div className="input-group">
                  <label>Zip Code *</label>
                  <input
                    type="text"
                    name="zip"
                    value={formData.zip}
                    onChange={handleInputChange}
                    placeholder="Zip Code"
                    required
                  />
                </div>
                <div className="input-group">
                  <label>Country *</label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    placeholder="Country"
                    required
                  />
                </div>
              </div>
            </div>
            
            <div className="form-actions">
              <button
                type="submit"
                className={`submit ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <FaSpinner className="spinner" /> Processing...
                  </>
                ) : 'Place Order'}
              </button>
            </div>
          </form>
        </div>
        
        {/* Right side - Order Summary */}
        <div className="right-side">
          <div className="order-summary">
            <h2 className="summary-title">Order Summary</h2>
            <CartTotal />
            
            <div className="payment-method">
              <h3>Payment Method</h3>
              <div className="method-options">
                <button
                  onClick={() => setMethod("stripe")}
                  className={`method-option ${method === "stripe" ? "active" : ""}`}
                >
                  <FaCreditCard className="method-icon" />
                  <span>Credit Card</span>
                </button>
                <button
                  onClick={() => setMethod("cod")}
                  className={`method-option ${method === "cod" ? "active" : ""}`}
                >
                  <FaMoneyBillWave className="method-icon" />
                  <span>Cash on Delivery</span>
                </button>
              </div>
              
              {method === "stripe" && (
                <div className="stripe-form">
                  <div className="input-group">
                    <label>Card Number *</label>
                    <input
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      required
                    />
                  </div>
                  <div className="input-row">
                    <div className="input-group">
                      <label>Expiry Date *</label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        required
                      />
                    </div>
                    <div className="input-group">
                      <label>CVV *</label>
                      <input
                        type="text"
                        placeholder="123"
                        required
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default PlaceOrder
