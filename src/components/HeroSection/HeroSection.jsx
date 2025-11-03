// src/components/HeroSection/HeroSection.jsx
import React from "react";
import "./HeroSection.css";

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>

      <div className="hero-container">
        {/* LEFT SIDE TEXT */}
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="glow">Secure</span>Your Digital Future
          </h1>
          <p className="hero-subtitle">
            Advanced Cybersecurity Solutions to Protect Businesses from Modern Digital Threats.
          </p>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="hero-image">
          <img
            src="/src/assets/hero1.png"
            alt="Cybersecurity Visual"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
