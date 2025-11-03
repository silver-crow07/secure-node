// src/components/ContactForm/ContactForm.jsx
import React, { useState } from "react";
import "./ContactForm.css";
import { FaEnvelope, FaUser, FaPhone, FaCommentDots } from "react-icons/fa";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent Successfully ✅");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section className="contact-section">
      <h2 className="contact-title"><span>Contact</span> Us</h2>
      <p className="contact-subtitle">
        Have questions or need security guidance? We're here to help.
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        
        <div className="input-group">
          <FaUser className="input-icon" />
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <FaEnvelope className="input-icon" />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <FaPhone className="input-icon" />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number (optional)"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className="input-group textarea-group">
          <FaCommentDots className="input-icon" />
          <textarea
            name="message"
            placeholder="Your Message..."
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>

        <button className="submit-btn" type="submit">
          Send Message
        </button>
      </form>
    </section>
  );
}

export default ContactForm;
