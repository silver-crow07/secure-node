import React from "react";
import { useNavigate } from "react-router-dom";
import "./IndustryBlock.css";

import {
  FaHospital,
  FaUniversity,
  FaShoppingCart,
  FaLandmark,
  FaCode,
  FaMoneyBillWave,
} from "react-icons/fa";

const industries = [
  {
    id: "healthcare",
    icon: <FaHospital />,
    title: "Healthcare",
    description:
      "Protect patient medical records and hospital networks with HIPAA-compliant cybersecurity solutions.",
  },
  {
    id: "finance-banking",
    icon: <FaMoneyBillWave />,
    title: "Finance & Banking",
    description:
      "Secure financial transactions, prevent fraud, and ensure strong regulatory compliance.",
  },
  {
    id: "education",
    icon: <FaUniversity />,
    title: "Education",
    description:
      "Defend student information and learning platforms from evolving cybersecurity threats.",
  },
  {
    id: "ecommerce",
    icon: <FaShoppingCart />,
    title: "E-Commerce",
    description:
      "Safeguard payment gateways, order data, and accounts against fraud and cyberattacks.",
  },
  {
    id: "government",
    icon: <FaLandmark />,
    title: "Government & Public Sector",
    description:
      "Strengthen national data security with high-level protection systems and monitoring.",
  },
  {
    id: "it-software",
    icon: <FaCode />,
    title: "IT & Software Companies",
    description:
      "Secure application infrastructure, cloud platforms, and development environments from attacks.",
  },
];

function IndustryBlock() {
  const navigate = useNavigate();

  const handleKnowMore = (id) => {
    navigate(`/industries/${id}`);
  };

  return (
    <section className="industries-wrapper">
      <h1 className="industries-title">
        Industries <span>We Secure</span>
      </h1>

      <p className="industries-subtitle">
        SecureNode provides tailored cybersecurity solutions across various sectors.
      </p>

      <div className="industries-grid">
        {industries.map((industry) => (
          <div className="industryCard" key={industry.id}>
            <div className="industryCard-icon">
              {industry.icon}
            </div>

            <h3>{industry.title}</h3>
            <p>{industry.description}</p>

            <button
              className="industryCard-btn"
              onClick={() => handleKnowMore(industry.id)}
            >
              Know More
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default IndustryBlock;

