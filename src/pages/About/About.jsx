import React from "react";
import "./About.css";
import {
  FaShieldAlt,
  FaUserSecret,
  FaBrain,
  FaNetworkWired,
  FaLock,
  FaFingerprint,
  FaGlobe,
} from "react-icons/fa";
import { MdSecurity } from "react-icons/md";

function About() {
  return (
    <section className="about-wrapper">

      {/* HERO */}
      <div className="about-hero-light">
        <h1>About <span>SecureNode</span></h1>
        <p>
          SecureNode delivers intelligent, modern and scalable cybersecurity
          solutions that empower businesses to grow safely in the digital era.
        </p>
      </div>

      {/* WHO WE ARE */}
      <div className="about-section-light">
        <h2 className="section-heading">Who We Are</h2>
        <p>
          SecureNode is a modern cybersecurity and IT solutions company focused
          on building scalable, secure and future-ready digital systems. Our
          team blends automation, analytics and secure engineering to protect
          businesses from digital threats.
        </p>
      </div>

      {/* MISSION + VISION */}
      <div className="about-dual-box">
        <div className="about-card">
          <h3>Our Mission</h3>
          <p>
            To secure organizations with intelligent and automated digital
            protection that prevents threats before they begin.
          </p>
        </div>

        <div className="about-card">
          <h3>Our Vision</h3>
          <p>
            A world where innovation thrives safely with complete trust in
            cybersecurity and technology infrastructure.
          </p>
        </div>
      </div>

      {/* OUR APPROACH */}
      <div className="about-section-light">
        <h2 className="section-heading">Our Approach</h2>

        <div className="about-grid">
          <div className="icon-card"><FaBrain /> Adaptive Intelligence</div>
          <div className="icon-card"><MdSecurity /> Zero-Trust Security</div>
          <div className="icon-card"><FaNetworkWired /> Deep Threat Monitoring</div>
          <div className="icon-card"><FaFingerprint /> Identity Protection</div>
        </div>
      </div>

      {/* WHY SECURENODE */}
      <div className="about-section-light">
        <h2 className="section-heading">Why SecureNode?</h2>

        <div className="compare-grid">
          <div className="compare-box">
            <h3>We Provide</h3>
            <ul>
              <li><FaShieldAlt /> Intelligent Threat Detection</li>
              <li><FaUserSecret /> Ethical Hacking & Audits</li>
              <li><FaLock /> Secure Cloud Infrastructure</li>
              <li><FaNetworkWired /> 24/7 Monitoring & Response</li>
            </ul>
          </div>

          <div className="compare-box">
            <h3>Traditional Approach</h3>
            <ul>
              <li>Reactive Protection</li>
              <li>Basic Firewall Systems</li>
              <li>Slow Incident Response</li>
              <li>No Intelligent Data Insights</li>
            </ul>
          </div>
        </div>
      </div>

      {/* CORE VALUES */}
      <div className="about-section-light">
        <h2 className="section-heading">Core Values</h2>

        <div className="values-grid">
          <div className="value-card"><FaShieldAlt /> Integrity</div>
          <div className="value-card"><FaUserSecret /> Excellence</div>
          <div className="value-card"><FaBrain /> Innovation</div>
          <div className="value-card"><FaNetworkWired /> Collaboration</div>
          <div className="value-card"><FaGlobe /> Global Impact</div>
        </div>
      </div>


    </section>
  );
}

export default About;
