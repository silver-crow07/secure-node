import React from "react";
import "./ServiceCard.css";

function ServiceCard({ title, description, image, link }) {
  return (
    <a href={link} className="service-card">
      <div className="service-image">
        <img src={image} alt={title} />
      </div>
      <h3 className="service-title">{title}</h3>
      <p className="service-description">{description}</p>
      <div className="service-glow"></div>
    </a>
  );
}

export default ServiceCard;
