// src/components/Testimonial/Testimonial.jsx
import React from "react";
import { FiShield } from "react-icons/fi";
import "./Testimonial.css";

const testimonials = [
  {
    quote:
      "SecureNode’s Zero Trust rollout tightened access controls across our hybrid environment. Identity-based policies made lateral movement nearly impossible.",
    author: "Sameer Iyer",
    role: "Director — Infrastructure, BankCore",
  },
  {
    quote:
      "Their SOC team detected a stealthy intrusion at 02:00 AM and contained it before any data exfiltration — outstanding monitoring & response.",
    author: "Lata Joshi",
    role: "Head — IT Operations, HealthPoint",
  },
  {
    quote:
      "The SecureNode Shield Suite integrated smoothly with our SIEM and cut false positives by half, improving analyst efficiency.",
    author: "Ravi Menon",
    role: "Security Architect, SoftServe Labs",
  },
];

function Testimonial() {
  return (
    <section className="testimonial-section">
      <h2 className="testimonial-heading">Trusted by Industry Leaders</h2>

      <div className="testimonial-wrapper">
        {testimonials.map((item, index) => (
          <div key={index} className="testimonial-card">
            <FiShield className="testimonial-icon" />
            <p className="testimonial-quote">“{item.quote}”</p>
            <h4 className="testimonial-author">{item.author}</h4>
            <p className="testimonial-role">{item.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonial;
