import React from "react";
import { useNavigate } from "react-router-dom";
import "./SolutionCard.css";

export default function SolutionCard({ id, title, description, image }) {
  const navigate = useNavigate();

  const handleKnowMore = (e) => {
    e.stopPropagation();
    navigate(`/solutions/${id}`);
  };

  return (
    <div className="solutionCard">
      <div className="solutionCard-img">
        <img src={image} alt={title} />
      </div>

      <h3 className="solutionCard-title">{title}</h3>
      <p className="solutionCard-description">{description}</p>

      <button className="solutionCard-btn" onClick={handleKnowMore}>
        Know More
      </button>
    </div>
  );
}
