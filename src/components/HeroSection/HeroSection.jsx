// src/components/HeroSection/HeroSection.jsx
import React from "react";
import "./HeroSection.css";
import heroImg from "../../assets/hero1.png";

function HeroSection() {
  return (
    <section className="hero-container container">
      <div className="hero-overlay"></div>

      <div className="hero-section">
        {/* LEFT SIDE TEXT */}
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="glow">Secure</span>Your Digital Future
          </h1>
          <p className="hero-subtitle">
            At SecureNode, our mission is to build digital trust through
            innovation, expertise, and proactive defense strategies.
          </p>
          {/* BUTTONS */}
          <div className="hero-buttons">
            <button className="btn-primary">Get Started</button>
            <button className="btn-secondary">Learn More</button>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="hero-image">
          <img src={heroImg} alt="Cybersecurity Visual" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
