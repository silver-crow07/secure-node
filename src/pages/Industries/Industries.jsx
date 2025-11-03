import React from "react";
import { useNavigate } from "react-router-dom";
import "./Industries.css";

// ✅ Correct image imports (two levels up)
import industry1 from "../../assets/industry1.png";
import industry2 from "../../assets/industry2.png";
import industry3 from "../../assets/industry3.png";
import industry4 from "../../assets/industry4.png";
import industry5 from "../../assets/industry5.png";
import industry6 from "../../assets/industry6.png";

const industriesData = [
  {
    id: "finance", // ✅ fixed
    name: "Finance & Banking",
    description: "Protecting sensitive financial transactions and data integrity.",
    image: industry1,
  },
  {
    id: "healthcare",
    name: "Healthcare",
    description: "HIPAA compliance and ransomware defense for patient data.",
    image: industry2,
  },
  {
    id: "education",
    name: "Education",
    description: "Ensuring secure access and data protection in institutions.",
    image: industry3,
  },
  {
    id: "government",
    name: "Government",
    description: "Securing national infrastructure and confidential information.",
    image: industry4,
  },
  {
    id: "ecommerce",
    name: "E-commerce",
    description: "Safeguarding transactions, user data, and online operations.",
    image: industry5,
  },
  {
    id: "it", // ✅ fixed (was "it-software")
    name: "IT & Software",
    description: "Protecting digital assets, applications, and cloud systems.",
    image: industry6,
  },
];

function Industries() {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/industries/${id}`);
  };

  return (
    <div className="industries-page">
      <h2 className="industries-heading">Industries We Secure</h2>
      <p className="industries-subtitle">
        SecureNode provides cybersecurity solutions tailored for diverse industries.
      </p>

      <div className="industries-grid">
        {industriesData.map((industry) => (
          <div
            key={industry.id}
            className="industry-card"
            onClick={() => handleCardClick(industry.id)}
          >
            <div className="industry-image-wrapper">
              <img
                src={industry.image}
                alt={industry.name}
                className="industry-image"
              />
            </div>
            <div className="industry-content">
              <h3>{industry.name}</h3>
              <p>{industry.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Industries;
