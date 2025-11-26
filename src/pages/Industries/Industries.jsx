// src/pages/Industries/Industries.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Industries.css";

import industry1 from "../../assets/industry1.png";
import industry2 from "../../assets/industry2.png";
import industry3 from "../../assets/industry3.png";
import industry4 from "../../assets/industry4.png";
import industry5 from "../../assets/industry5.png";
import industry6 from "../../assets/industry6.png";

const industriesData = [
  {
    id: "finance",
    title: "Finance & Banking",
    description: "Protecting sensitive financial transactions and data integrity.",
    image: industry1,
  },
  {
    id: "healthcare",
    title: "Healthcare",
    description: "HIPAA compliance and ransomware defense for patient data.",
    image: industry2,
  },
  {
    id: "education",
    title: "Education",
    description: "Ensuring secure access and data protection in institutions.",
    image: industry3,
  },
  {
    id: "government",
    title: "Government",
    description: "Securing national infrastructure and confidential information.",
    image: industry4,
  },
  {
    id: "ecommerce",
    title: "E-commerce",
    description: "Safeguarding transactions, user data, and online operations.",
    image: industry5,
  },
  {
    id: "it",
    title: "IT & Software",
    description: "Protecting digital assets, applications, and cloud systems.",
    image: industry6,
  },
];

export default function Industries() {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/industries/${id}`);
  };

  return (
    <section className="industries-wrapper">
      <h1 className="industries-title">
        Industries <span>We Serve</span>
      </h1>

      <p className="industries-subtitle">
        SecureNode delivers specialized cybersecurity solutions across multiple industries.
      </p>

      <div className="industries-grid">
        {industriesData.map((item) => (
          <div
            className="industry-card"
            key={item.id}
            onClick={() => handleClick(item.id)}
          >
            <div className="industry-img">
              <img src={item.image} alt={item.title} />
            </div>

            <h3>{item.title}</h3>
            <p>{item.description}</p>

            <button className="industry-btn">Know More</button>
          </div>
        ))}
      </div>
    </section>
  );
}

