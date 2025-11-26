// src/pages/Careers/Careers.jsx
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Careers.css";

const positions = [
  { id: "cybersecurity-analyst", title: "Cybersecurity Analyst" },
  { id: "soc-engineer", title: "SOC Engineer" },
  { id: "security-research-intern", title: "Security Research Intern" },
];

function Careers() {
  const location = useLocation();
  const navigate = useNavigate();

  // Smooth scroll to Apply Form if URL contains #apply
  useEffect(() => {
    if (location.hash === "#apply") {
      setTimeout(() => {
        const form = document.getElementById("apply-form");
        if (form) {
          form.scrollIntoView({ behavior: "smooth" });
        }
      }, 200);
    }
  }, [location]);

  return (
    <div className="careers-page">

      <h2 className="careers-title">Why Work With Us</h2>
      <p className="careers-subtitle">
        Learn, grow, and get certified while securing global businesses.
      </p>

      <h3 className="positions-title">Open Positions</h3>

      <ul className="positions-list">
        {positions.map((p) => (
          <li
            key={p.id}
            className="position-item"
            onClick={() => navigate(`/careers/${p.id}`)}
          >
            {p.title}
          </li>
        ))}
      </ul>

      {/* Apply Form */}
      <section className="application-form" id="apply-form">
        <h3>Apply Now</h3>
        <form>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <input type="file" required />
          <textarea placeholder="Cover Letter"></textarea>
          <button type="submit">Submit Application</button>
        </form>
      </section>
    </div>
  );
}

export default Careers;
