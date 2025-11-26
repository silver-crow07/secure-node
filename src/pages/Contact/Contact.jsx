// src/pages/Contact/Contact.jsx
import React from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-page">

      <div className="contact-header">
        <h2>Contact Us</h2>
        <p>We’re here to assist you with cybersecurity solutions, inquiries, or support.</p>
      </div>

      <section className="contact-card">
        <h3>Send Us a Message</h3>
        <ContactForm />
      </section>

      <section className="contact-card contact-info">
        <h3>Direct Contact</h3>
        <p><strong>Email:</strong> info@securenode.com</p>
        <p><strong>Phone:</strong> +91-1234567890</p>
        <p><strong>Address:</strong> 123 Cyber Street, India</p>
      </section>

      <section className="social-section">
        <h3>Follow Us</h3>

        <div className="social-links">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>

          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <i className="fab fa-facebook"></i> Facebook
          </a>

          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <i className="fab fa-instagram"></i> Instagram
          </a>

          <a href="https://whatsapp.com" target="_blank" rel="noreferrer">
            <i className="fab fa-whatsapp"></i> Whatsapp
          </a>
        </div>
      </section>

    </div>
  );
}

export default Contact;
