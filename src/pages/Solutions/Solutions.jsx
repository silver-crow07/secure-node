// src/pages/Solutions/Solutions.jsx
import React from "react";
import SolutionCard from "../../components/SolutionCard/SolutionCard";
import "./Solutions.css";

import solution1 from "../../assets/solution1.png";
import solution2 from "../../assets/solution2.png";
import solution3 from "../../assets/solution3.png";
import solution4 from "../../assets/solution4.png";
import solution5 from "../../assets/solution5.png";
import solution6 from "../../assets/solution6.png";
import solution7 from "../../assets/solution7.png";
import solution8 from "../../assets/solution8.png";
import solution9 from "../../assets/solution9.png";
import solution10 from "../../assets/solution10.png";

const solutionsData = [
  {
    id: "managed-security-services",
    title: "Managed Security Services",
    description: "24/7 protection through proactive threat monitoring and response.",
    image: solution1,
  },
  {
    id: "network-security-solutions",
    title: "Network Security Solutions",
    description: "Next-gen firewalls, intrusion prevention, and zero-trust frameworks.",
    image: solution2,
  },
  {
    id: "cloud-security-solutions",
    title: "Cloud Security Solutions",
    description: "Protect your multi-cloud environment with encryption and IAM.",
    image: solution3,
  },
  {
    id: "data-protection-privacy",
    title: "Data Protection & Privacy",
    description: "Keep sensitive data secure with encryption and DLP controls.",
    image: solution4,
  },
  {
    id: "endpoint-application-security",
    title: "Endpoint & Application Security",
    description: "Safeguard devices and apps against malware and ransomware.",
    image: solution5,
  },
  {
    id: "identity-access-management",
    title: "Identity & Access Management (IAM)",
    description: "Secure access control with MFA, SSO, and privileged access.",
    image: solution6,
  },
  {
    id: "threat-intelligence-analytics",
    title: "Threat Intelligence & Analytics",
    description: "AI-driven analytics to predict and neutralize cyber threats.",
    image: solution7,
  },
  {
    id: "compliance-risk-management",
    title: "Compliance & Risk Management",
    description: "Align with ISO, GDPR, and NIST frameworks for full compliance.",
    image: solution8,
  },
  {
    id: "business-continuity-incident-response",
    title: "Business Continuity & Incident Response",
    description: "Plan, respond, and recover rapidly from security incidents.",
    image: solution9,
  },
  {
    id: "security-awareness-training",
    title: "Security Awareness & Training",
    description: "Empower employees through phishing and cyber hygiene training.",
    image: solution10,
  },
];

function Solutions() {
  return (
    <section className="solutions-wrapper">
      <h1 className="solutions-title">
        Our <span>Solutions</span>
      </h1>

      <p className="solutions-subtitle">
        SecureNode provides advanced cybersecurity solutions to safeguard modern enterprises.
      </p>

      <div className="solutions-grid">
        {solutionsData.map((solution) => (
          <SolutionCard key={solution.id} {...solution} />
        ))}
      </div>
    </section>
  );
}

export default Solutions;

