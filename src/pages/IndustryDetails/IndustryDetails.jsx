// src/pages/IndustryDetails/IndustryDetails.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./IndustryDetails.css";
import {
  FaHospital,
  FaUniversity,
  FaShoppingCart,
  FaLandmark,
  FaMoneyBillWave,
  FaCode,
} from "react-icons/fa";

const industryDetailsData = {
  finance: {
    title: "Finance & Banking",
    icon: <FaMoneyBillWave className="industry-icon" />,
    overview:
      "SecureNode provides end-to-end protection for financial institutions, ensuring the integrity and confidentiality of digital transactions and customer data.",
    challenges: [
      "Online fraud and phishing attacks",
      "Data breaches targeting customer information",
      "Strict compliance with PCI DSS and RBI guidelines",
    ],
    approach: [
      "Multi-layered fraud detection systems",
      "AI-driven transaction monitoring",
      "Encryption and identity verification solutions",
    ],
    benefits: [
      "Reduced risk of fraud",
      "Continuous monitoring of digital assets",
      "Improved customer trust and compliance",
    ],
    caseStudy:
      "A leading Indian bank reduced fraud cases by 82% after implementing SecureNode’s AI-driven transaction security framework.",
  },

  healthcare: {
    title: "Healthcare",
    icon: <FaHospital className="industry-icon" />,
    overview:
      "SecureNode empowers healthcare organizations with HIPAA-compliant security frameworks, ensuring medical data protection and operational continuity.",
    challenges: [
      "Ransomware attacks on hospital networks",
      "HIPAA and data privacy compliance",
      "Unauthorized access to patient records",
    ],
    approach: [
      "Zero-trust security architecture",
      "Encrypted patient record management",
      "24/7 monitoring of IoT medical devices",
    ],
    benefits: [
      "Protected patient information",
      "Regulatory compliance assurance",
      "Reduced downtime in hospital systems",
    ],
    caseStudy:
      "A hospital chain improved data protection by 90% after adopting SecureNode’s healthcare-grade encryption and monitoring solutions.",
  },

  education: {
    title: "Education",
    icon: <FaUniversity className="industry-icon" />,
    overview:
      "SecureNode helps educational institutions defend student and faculty data from cyber threats while maintaining a seamless digital learning experience.",
    challenges: [
      "Data leaks of student records",
      "Phishing campaigns targeting students",
      "Weak endpoint security in remote learning environments",
    ],
    approach: [
      "Centralized data encryption systems",
      "Secure learning management platforms",
      "Staff and student cybersecurity awareness training",
    ],
    benefits: [
      "Safe online learning platforms",
      "Data integrity across systems",
      "Improved awareness among faculty and students",
    ],
    caseStudy:
      "A university network prevented 12 major phishing incidents through SecureNode’s awareness training and secure LMS integration.",
  },

  government: {
    title: "Government",
    icon: <FaLandmark className="industry-icon" />,
    overview:
      "SecureNode protects government data, critical infrastructure, and citizen records with advanced cybersecurity frameworks and monitoring systems.",
    challenges: [
      "Nation-state cyberattacks",
      "Data theft targeting citizen records",
      "Outdated legacy infrastructure",
    ],
    approach: [
      "Critical infrastructure protection (CIP)",
      "Endpoint detection and response (EDR)",
      "Threat intelligence and SOC integration",
    ],
    benefits: [
      "Improved national cyber resilience",
      "Real-time threat mitigation",
      "Confidentiality of government data",
    ],
    caseStudy:
      "A central government agency increased its cyber resilience by 75% using SecureNode’s continuous threat intelligence framework.",
  },

  ecommerce: {
    title: "E-Commerce",
    icon: <FaShoppingCart className="industry-icon" />,
    overview:
      "SecureNode ensures secure online transactions, customer data protection, and brand integrity for e-commerce platforms worldwide.",
    challenges: [
      "Payment frauds and fake orders",
      "Customer data leaks",
      "Bot and DDoS attacks on platforms",
    ],
    approach: [
      "End-to-end encryption for payments",
      "Bot and DDoS mitigation systems",
      "Vulnerability scanning and threat analytics",
    ],
    benefits: [
      "Fraud-free online transactions",
      "Enhanced platform uptime",
      "Trustworthy shopping experience for users",
    ],
    caseStudy:
      "A global e-commerce company prevented data theft attempts and achieved 99.9% uptime using SecureNode’s adaptive fraud defense systems.",
  },

  it: {
    title: "IT & Software Companies",
    icon: <FaCode className="industry-icon" />,
    overview:
      "SecureNode assists IT and software companies in securing their development environments, APIs, and cloud infrastructure.",
    challenges: [
      "Unsecured APIs and source code leaks",
      "Cloud misconfigurations",
      "Insider threats within dev teams",
    ],
    approach: [
      "Application security testing (DAST & SAST)",
      "Cloud posture management",
      "Identity and access management integration",
    ],
    benefits: [
      "Reduced vulnerabilities in applications",
      "Safer CI/CD pipeline operations",
      "Strengthened overall security posture",
    ],
    caseStudy:
      "A SaaS firm minimized API breaches by 94% after adopting SecureNode’s application security and cloud governance solutions.",
  },
};

function IndustryDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const industry = industryDetailsData[id];

  if (!industry)
    return (
      <div className="industry-not-found">
        <h2>Industry Not Found</h2>
        <button onClick={() => navigate("/industries")}>Back to Industries</button>
      </div>
    );

  return (
    <div className="industry-details-container">
      <div className="industry-header">
        {industry.icon}
        <h1>{industry.title}</h1>
      </div>

      <p className="industry-overview">{industry.overview}</p>

      <section className="industry-section">
        <h3>Challenges</h3>
        <ul>
          {industry.challenges.map((challenge, i) => (
            <li key={i}>{challenge}</li>
          ))}
        </ul>
      </section>

      <section className="industry-section">
        <h3>Our Approach</h3>
        <ul>
          {industry.approach.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ul>
      </section>

      <section className="industry-section">
        <h3>Benefits</h3>
        <ul>
          {industry.benefits.map((benefit, i) => (
            <li key={i}>{benefit}</li>
          ))}
        </ul>
      </section>

      <section className="industry-section">
        <h3>Case Study</h3>
        <p>{industry.caseStudy}</p>
      </section>

      <div className="industry-actions">
        <button onClick={() => navigate("/industries")} className="back-button">
          ← Back to Industries
        </button>
        <a href="/contact" className="cta-button">
          Talk to Our Experts
        </a>
      </div>
    </div>
  );
}

export default IndustryDetails;
