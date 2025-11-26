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
