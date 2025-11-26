// src/pages/CareerDetails/CareerDetails.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./CareerDetails.css";

const careerDetails = {
  "cybersecurity-analyst": {
    title: "Cybersecurity Analyst",
    description:
      "Monitor, detect, and analyze cybersecurity incidents across enterprise systems.",
    responsibilities: [
      "Monitor SIEM alerts",
      "Investigate suspicious activity",
      "Prepare incident reports",
      "Work with SOC teams",
    ],
    requirements: [
      "Knowledge of SIEM tools",
      "Basic networking concepts",
      "Malware analysis fundamentals",
    ],
  },

  "soc-engineer": {
    title: "SOC Engineer",
    description:
      "Manage and enhance Security Operations Center activities and threat response.",
    responsibilities: [
      "Configure SOC tools",
      "Perform real-time threat monitoring",
      "Conduct forensic investigations",
    ],
    requirements: [
      "Understanding of SOC workflows",
      "Experience with IDS/IPS",
      "Log analysis & packet inspection",
    ],
  },

  "security-research-intern": {
    title: "Security Research Intern",
    description:
      "Assist in vulnerability research, penetration testing, and malware analysis.",
    responsibilities: [
      "Analyze vulnerabilities",
      "Support security assessments",
      "Create research documentation",
    ],
    requirements: [
      "Basic programming skills",
      "Interest in cybersecurity",
      "Ability to learn quickly",
    ],
  },
};

function CareerDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const career = careerDetails[id];

  if (!career) {
    return (
      <div className="career-notfound">
        <h2>Job Not Found</h2>
        <button onClick={() => navigate("/careers")}>Back to Careers</button>
      </div>
    );
  }

  return (
    <div className="career-details-page">
      <div className="career-box">

        <h1 className="career-title">{career.title}</h1>
        <p className="career-description">{career.description}</p>

        <section className="career-section">
          <h3>Responsibilities</h3>
          <ul>
            {career.responsibilities.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </section>

        <section className="career-section">
          <h3>Requirements</h3>
          <ul>
            {career.requirements.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </section>

        <div className="career-buttons">
          <a href="/careers#apply" className="apply-btn">
            Apply Now
          </a>
          <button className="back-btn" onClick={() => navigate("/careers")}>
            Back to Careers
          </button>
        </div>

      </div>
    </div>
  );
}

export default CareerDetails;
