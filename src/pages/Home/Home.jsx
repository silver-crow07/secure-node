// src/pages/Home/Home.jsx
import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import Testimonial from "../../components/Testimonial/Testimonial";
import { motion } from "framer-motion";
import "./Home.css";

const servicesData = [
  { title: "Penetration Testing", description: "Identify vulnerabilities...", image: "/assets/penetration.jpg", link: "/services/penetration-testing" },
  { title: "Cloud Security", description: "Protect your cloud...", image: "/assets/cloud.jpg", link: "/services/cloud-security" },
  { title: "Threat Monitoring", description: "24/7 SOC monitoring...", image: "/assets/threat.jpg", link: "/services/threat-monitoring" },
  { title: "Incident Response", description: "Rapid response to threats...", image: "/assets/incident.jpg", link: "/services/incident-response" },
];

const industryLogos = [
  "/assets/healthcare.png",
  "/assets/finance.png",
  "/assets/education.png",
  "/assets/government.png",
];

const testimonialsData = [
  { quote: "SecureNode protected our infrastructure!", client: "Company A", logo: "/assets/clientA.png" },
  { quote: "Excellent cybersecurity services.", client: "Company B", logo: "/assets/clientB.png" },
];

function Home() {
  return (
    <div className="home-page">

      <HeroSection />

      {/* Stats Section */}
      <section className="trust-stats">
        <motion.div className="stats-box" initial={{opacity: 0, y: 40}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.6}}>
          <h3>10+ Years</h3>
          <p>Experience</p>
        </motion.div>
        <motion.div className="stats-box" initial={{opacity: 0, y: 40}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.6}}>
          <h3>ISO Certified</h3>
          <p>Security Standards</p>
        </motion.div>
        <motion.div className="stats-box" initial={{opacity: 0, y: 40}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.6}}>
          <h3>500+</h3>
          <p>Projects Secured</p>
        </motion.div>
      </section>

      {/* Services */}
      <section className="services-snapshot">
        <h2>Our Services Snapshot</h2>
        <div className="services-cards">
          {servicesData.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>

      {/* Industries */}
      <section className="industries-section">
        <div className="industries-text">
          <h2>Industries We Secure</h2>
          <p>We work with organizations across highly regulated and critical sectors.</p>
        </div>
        <div className="industry-logos">
          {industryLogos.map((logo, i) => (
            <motion.img key={i} src={logo} alt="industry logo" initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.5}} />
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <h2>Client Testimonials</h2>
        <div className="testimonials-container">
          {testimonialsData.map((t, idx) => (
            <Testimonial key={idx} {...t} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <h2>Ready to secure your business?</h2>
        <a href="/contact" className="cta-button">Contact Us Now</a>
      </section>

    </div>
  );
}

export default Home;
