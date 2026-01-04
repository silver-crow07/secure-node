// src/pages/Contact/Contact.jsx
import React from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import "./Contact.css";

function Contact() {
  return (
    <main className="contact-wrapper" >
      {/* HEADER */}
      <div className="contact-heading">
        <h1>Contact <span>SecureNode</span></h1>
        <p>We are always available to assist you with cybersecurity solutions.</p>
      </div>

      {/* CONTACT FORM */}
      <div className="contact-card">
        <h2>Send Us a Message</h2>
        <ContactForm />
      </div>

      {/* CONTACT INFO */}
      <div className="contact-card">
        <h2>Direct Contact</h2>
        <p><strong>Email:</strong> audit@securenode.co.in</p>
        <p><strong>Phone:</strong> +91 93547956497</p>
        <p><strong>Address:</strong> Ghaziabad, Uttar Pradesh</p>
      </div>

      {/* SOCIAL LINKS */}
      <div className="contact-social">
        <h2>Follow Us</h2>

        <div className="social-links">
          <a href="https://linkedin.com" target="_blank"><i className="fab fa-linkedin"></i> LinkedIn</a>
          <a href="https://instagram.com" target="_blank"><i className="fab fa-instagram"></i> Instagram</a>
          <a href="https://facebook.com" target="_blank"><i className="fab fa-facebook"></i> Facebook</a>
          <a href="https://whatsapp.com" target="_blank"><i className="fab fa-whatsapp"></i> WhatsApp</a>
        </div>
      </div>
    </main>
  );
}

export default Contact;
