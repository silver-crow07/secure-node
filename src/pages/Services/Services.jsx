import React from "react";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import "./Services.css";

// Import images
import service1 from "../../assets/service1.png";
import service2 from "../../assets/service2.png";
import service3 from "../../assets/service3.png";
import service4 from "../../assets/service4.png";
import service5 from "../../assets/service5.png";
import service6 from "../../assets/service6.png";
import service7 from "../../assets/service7.png";

const servicesData = [
  {
    title: "Penetration Testing",
    description:
      "Identify vulnerabilities in your systems through simulated cyber attacks and strengthen your digital defense.",
    image: service1,
    link: "/services/penetration-testing",
  },
  {
    title: "Vulnerability Assessment",
    description:
      "Discover weak points before hackers do with in-depth system analysis and risk prioritization.",
    image: service2,
    link: "/services/vulnerability-assessment",
  },
  {
    title: "Cloud Security",
    description:
      "Secure your cloud assets and applications with multi-layer encryption and real-time monitoring.",
    image: service3,
    link: "/services/cloud-security",
  },
  {
    title: "Incident Response",
    description:
      "Respond quickly to cyber threats with our expert-led investigation, containment, and recovery.",
    image: service4,
    link: "/services/incident-response",
  },
  {
    title: "Compliance Consulting",
    description:
      "Ensure compliance with global regulations like GDPR, ISO, and HIPAA with tailored guidance.",
    image: service5,
    link: "/services/compliance-consulting",
  },
  {
    title: "Threat Monitoring",
    description:
      "24/7 real-time monitoring and alerting to identify and neutralize potential risks instantly.",
    image: service6,
    link: "/services/threat-monitoring",
  },
  {
    title: "Cybersecurity Training",
    description:
      "Empower your team to detect and defend against phishing and other cyber threats.",
    image: service7,
    link: "/services/cybersecurity-training",
  },
];

function Services() {
  return (
    <section className="services-page">
      <div className="services-overlay"></div>

      <div className="services-content">
        <h2 className="services-heading">
          Our <span className="highlight">Services</span>
        </h2>

        <p className="services-subtext">
          Strengthen your organization’s cybersecurity with our range of
          cutting-edge solutions and professional expertise.
        </p>

        <div className="services-grid">
          {servicesData.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
