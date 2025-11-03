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
    <section className="about-page">
      <div className="about-overlay"></div>

      <div className="about-content">
        {/* Hero Section */}
        <div className="about-hero">
          <h1>
            Empowering a <span className="highlight">Secure Digital Future</span>
          </h1>
          <p>
            At <strong>SecureNode</strong>, we protect businesses, data, and
            individuals from ever-evolving cyber threats through AI-driven
            intelligence, deep network visibility, and proactive defense
            strategies.
          </p>
        </div>

        {/* Who We Are */}
        <div className="about-section">
          <h2>Who We Are</h2>
          <p>
            SecureNode is a global cybersecurity firm focused on building
            intelligent, adaptive, and proactive defense systems. We integrate
            machine learning, real-time analytics, and ethical hacking to
            safeguard enterprises from ransomware, phishing, and insider threats.
          </p>
          <p className="highlight">
            Our goal is simple — <strong>to create digital confidence</strong> so
            businesses can innovate fearlessly in a secure environment.
          </p>
        </div>

        {/* Mission and Vision */}
        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            To empower every organization with next-generation cybersecurity
            solutions that prevent, detect, and respond to cyber attacks before
            they impact operations. We believe in resilience over reaction.
          </p>

          <h2>Our Vision</h2>
          <p>
            A world where every digital entity — from startups to global
            enterprises — operates confidently with uncompromised trust,
            innovation, and integrity.
          </p>
        </div>

        {/* Approach */}
        <div className="philosophy">
          <h2>Our Approach</h2>
          <p>
            Cybersecurity is not a product — it’s a continuous strategy. At
            SecureNode, we combine automation with human expertise to ensure
            threats are identified and neutralized before they strike.
          </p>

          <div className="philosophy-grid">
            <div>
              <FaBrain /> Adaptive Intelligence
            </div>
            <div>
              <MdSecurity /> Zero-Trust Architecture
            </div>
            <div>
              <FaNetworkWired /> Proactive Threat Hunting
            </div>
            <div>
              <FaFingerprint /> Identity Protection
            </div>
          </div>

          <p className="highlight">
            We don’t just secure systems — <strong>we build digital resilience.</strong>
          </p>
        </div>

        {/* Why Choose SecureNode */}
        <div className="difference">
          <h2>Why Choose SecureNode</h2>
          <div className="comparison-table">
            <div className="column">
              <h3>We Offer</h3>
              <ul>
                <li>
                  <FaShieldAlt /> Proactive Threat Intelligence
                </li>
                <li>
                  <FaUserSecret /> Ethical Hacking & Vulnerability Testing
                </li>
                <li>
                  <FaLock /> AI-Based Attack Prevention
                </li>
                <li>
                  <FaNetworkWired /> 24/7 Monitoring & Response
                </li>
              </ul>
            </div>

            <div className="column">
              <h3>Others Give</h3>
              <ul>
                <li>Reactive Security Posture</li>
                <li>Generic Firewalls & Tools</li>
                <li>Signature-Based Detection Only</li>
                <li>Delayed Incident Response</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="values">
          <h2>Core Values</h2>
          <div className="values-grid">
            <div>
              <FaShieldAlt /> Integrity — Transparency in protection
            </div>
            <div>
              <FaUserSecret /> Excellence — Precision in every defense
            </div>
            <div>
              <FaBrain /> Resilience — Anticipate. Adapt. Overcome.
            </div>
            <div>
              <FaNetworkWired /> Innovation — Secure solutions for the future
            </div>
            <div>
              <FaGlobe /> Collaboration — Strength through partnership
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
