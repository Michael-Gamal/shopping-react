import { useState } from "react";
import "./contact.css";
import Header from "../../component/Header.jsx";
import Footer from "../../component/Footer/Footer.jsx";
const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus("Please fill in all fields.");
      return;
    }
    setStatus("Your message has been sent successfully!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <>
      <Header />
      <div className="contact-page">
      <div className="contact-container">
        <h2 className="contact-title">Contact Us</h2>
        <p className="contact-desc">
          Have a question, feedback, or need help? Fill out the form below or reach us directly.
        </p>
        <div className="contact-info" style={{marginBottom: "24px", textAlign: "center"}}>
          <p><strong>Email:</strong> support@shopanze.com</p>
          <p><strong>Phone:</strong> +20 123 456 789</p>
          <p><strong>Address:</strong> 123 Main Street, Cairo, Egypt</p>
        </div>
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={4}
              required
            />
          </div>
          <div className="form-actions">
            <button type="submit" className="contact-submit">Send Message</button>
          </div>
          {status && (
            <p className={`contact-message${status.includes("successfully") ? " contact-success" : ""}`}>
              {status}
            </p>
          )}
        </form>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Contact;