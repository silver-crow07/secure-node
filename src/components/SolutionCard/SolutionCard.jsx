import React from "react";
import "./SolutionCard.css";
import { FiShield, FiLock, FiCloud, FiDatabase, FiCpu, FiUsers } from "react-icons/fi";

function SolutionCard({ title, description, image }) {
  // Randomly pick an icon for a visually dynamic grid
  const icons = [<FiShield />, <FiLock />, <FiCloud />, <FiDatabase />, <FiCpu />, <FiUsers />];
  const randomIcon = icons[Math.floor(Math.random() * icons.length)];

  return (
    <div className="solution-card">
      <div className="solution-img-container">
        <img src={image} alt={title} className="solution-img" />
      </div>
      <div className="solution-content">
        <div className="solution-icon">{randomIcon}</div>
        <h3 className="solution-title">{title}</h3>
        <p className="solution-description">{description}</p>
      </div>
    </div>
  );
}

export default SolutionCard;
