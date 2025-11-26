import React from "react";
import { useNavigate } from "react-router-dom";
import "./ServiceCard.css";

export default function ServiceCard({ title, description, image, link }) {
  const navigate = useNavigate();
  const handleKnowMore = (e) => { e.stopPropagation(); navigate(link); };
  return (<div className="serviceCard">
    <div className="serviceCard-img">
      <img src={image} alt={title} />
    </div>
    <h3>{title}</h3>
    <p>{description}</p>
    <button className="serviceCard-btn" onClick={handleKnowMore}> Know More </button> </div>);
}
