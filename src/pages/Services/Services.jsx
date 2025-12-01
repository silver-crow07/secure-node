import React from "react";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import "./Services.css"; import service1 from "../../assets/service1.png";
import service2 from "../../assets/service2.png";
import service3 from "../../assets/service3.png";
import service4 from "../../assets/service4.png";
import service5 from "../../assets/service5.png";
import service6 from "../../assets/service6.png";
import service7 from "../../assets/service7.png";
const servicesData = [
  {
    title: "Penetration Testing",
    description: "Identify vulnerabilities in your systems through simulated cyber attacks and strengthen your defense.",
    image: service1, link: "/services/penetration-testing",
  },
  
  {
    title: "Vulnerability Assessment",
    description: "Discover weak points before hackers do with deep system analysis and risk evaluation.",
    image: service2, link: "/services/vulnerability-assessment",
  },
  {
    title: "Cloud Security",
    description: "Protect your cloud apps and environments with multi-layer security and monitoring.",
    image: service3, link: "/services/cloud-security",
  },
  {
    title: "Incident Response",
    description: "Fast cyberattack response with expert-led investigation, containment, and recovery.",
    image: service4, link: "/services/incident-response",
  },
  {
    title: "Compliance Consulting",
    description: "Meet standards like GDPR, ISO, HIPAA with structured compliance guidance.",
    image: service5, link: "/services/compliance-consulting",
  },
  {
    title: "Threat Monitoring",
    description: "24/7 monitoring and alerting to detect and neutralize threats instantly.",
    image: service6, link: "/services/threat-monitoring",
  },
  {
    title: "Cybersecurity Training",
    description: "Train your staff to identify phishing and other cyberattack attempts.",
    image: service7, link: "/services/cybersecurity-training",
  },];
function Services() {
  return (<section className="services-wrapper">
    <h1 className="services-title">Our <span>Services</span></h1>
    <p className="services-subtitle"> SecureNode delivers modern cybersecurity solutions designed to protect and grow your business. </p>
    <div className="services-grid">
      {servicesData.map((service) => (<ServiceCard key={service.title} {...service} />))}
    </div>
  </section>);
}

export default Services;
