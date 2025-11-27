// src/pages/IndustryDetails/IndustryDetails.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./IndustryDetails.css";

const industryDetailsData = {
  finance: {
    title: "Finance & Banking",
    icon: "💰",
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
    icon: "🏥",
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
    icon: "🎓",
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
    icon: "🏛️",
    overview:
      "SecureNode safeguards critical government infrastructure, confidential citizen data, and national digital assets with high-level cybersecurity frameworks.",
    challenges: [
      "Increasing nation-state cyber attacks",
      "Protection of confidential citizen records",
      "Legacy systems vulnerable to exploits",
      "High-value targets for data theft & espionage"
    ],
    approach: [
      "Critical Infrastructure Protection (CIP)",
      "AI-driven threat intelligence",
      "Secure network segmentation",
      "Government-grade encryption & monitoring"
    ],
    benefits: [
      "Stronger national cyber defense",
      "Real-time threat detection & response",
      "Protection of citizen-sensitive records",
      "Compliance with global security standards"
    ],
    caseStudy:
      "A central government agency improved their cybersecurity posture by 75% after implementing SecureNode’s real-time threat intelligence and SOC monitoring solutions."
  },
  ecommerce: {
    title: "E-commerce",
    icon: "🛒",
    overview:
      "SecureNode protects online businesses from payment fraud, data breaches, and malicious attacks while ensuring a seamless shopping experience.",
    challenges: [
      "Payment gateway fraud & fake orders",
      "Customer data leaks & identity theft",
      "Bot attacks & cart manipulation",
      "DDoS attacks impacting website uptime"
    ],
    approach: [
      "End-to-end payment encryption",
      "Bot & DDoS mitigation technology",
      "Secure checkout process hardening",
      "Continuous vulnerability scanning"
    ],
    benefits: [
      "Fraud-free online transactions",
      "Higher customer trust & retention",
      "99.9% platform uptime",
      "Fully secure shopping experience"
    ],
    caseStudy:
      "A global e-commerce company reduced fraudulent transactions by 88% after adopting SecureNode’s adaptive fraud protection and bot prevention systems."
  },
  it: {
    title: "IT & Software",
    icon: "💻",
    overview:
      "SecureNode helps IT and software companies safeguard their cloud infrastructure, APIs, development pipelines, and digital products.",
    challenges: [
      "API vulnerabilities & exposed endpoints",
      "Cloud misconfigurations leading to data leaks",
      "Source code theft & insider threats",
      "Weak application security controls"
    ],
    approach: [
      "Advanced Application Security (DAST & SAST)",
      "Cloud posture management (CSPM)",
      "Identity & Access Management (IAM)",
      "Secure DevOps (DevSecOps) integration"
    ],
    benefits: [
      "Secure CI/CD pipelines",
      "Reduced vulnerabilities in applications",
      "Stronger development lifecycle security",
      "Protection of intellectual property"
    ],
    caseStudy:
      "A fast-growing SaaS company prevented API abuse and reduced security vulnerabilities by 94% after integrating SecureNode's DevSecOps and cloud governance solutions."
  },

};

function IndustryDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const industry = industryDetailsData[id];

  if (!industry)
    return (
      <h2 className="industry-details-not-found">Industry Not Found</h2>
    );

  return (
    <div className="industry-details-page">
      <div className="industry-details-container">

        <h2 className="industry-details-title">
          {industry.icon} {industry.title}
        </h2>

        <p className="industry-details-description">{industry.overview}</p>

        {/* Challenges */}
        <section className="industry-details-section">
          <h3>Challenges</h3>
          <ul>
            {industry.challenges.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </section>

        {/* Approach */}
        <section className="industry-details-section">
          <h3>Our Approach</h3>
          <ul>
            {industry.approach.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ul>
        </section>

        {/* Benefits */}
        <section className="industry-details-section">
          <h3>Benefits</h3>
          <ul>
            {industry.benefits.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </section>

        {/* Case Study */}
        <section className="industry-details-section">
          <h3>Case Study</h3>
          <p>{industry.caseStudy}</p>
        </section>

        {/* Buttons */}
        <div className="industry-details-buttons">
          <button
            onClick={() => navigate("/industries")}
            className="industry-details-back-btn"
          >
            ← Back to Industries
          </button>

          <a href="/contact" className="industry-details-cta-btn">
            Talk to Our Experts
          </a>
        </div>
      </div>
    </div>
  );
}

export default IndustryDetails;
