import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  FaShieldAlt,
  FaNetworkWired,
  FaCloud,
  FaLock,
  FaDesktop,
  FaUserShield,
  FaBrain,
  FaBalanceScale,
  FaSyncAlt,
  FaChalkboardTeacher,
  FaCheckCircle,
  FaArrowLeft,
} from "react-icons/fa";

import "./SolutionDetails.css";

/* =============================================
   🔵 SOLUTION DETAILS DATA (MUST BE AT TOP)
============================================= */
const solutionDetailsData = {
  "managed-security-services": {
    title: "Managed Security Services",
    icon: <FaShieldAlt className="icon" />,
    description:
      "Our Managed Security Services provide 24/7 monitoring, incident response and SOC support.",
    challenges: [
      "Continuous cyber threats",
      "Weak security visibility",
      "Slow incident response",
    ],
    features: [
      "24/7 Monitoring",
      "SIEM Integration",
      "Incident Handling",
    ],
    benefits: [
      "Reduced breaches",
      "Expert SOC team",
      "Proactive response",
    ],
    caseStudy:
      "A finance company reduced threats by 87% after using our MSS platform.",
  },

  "network-security-solutions": {
    title: "Network Security Solutions",
    icon: <FaNetworkWired className="icon" />,
    description:
      "Next-gen firewalls, IDS/IPS, and zero-trust architecture for complete protection.",
    challenges: ["Unauthorized access", "Weak perimeter", "Lateral movement"],
    features: ["Zero Trust Model", "Firewall Protection", "Threat Blocking"],
    benefits: ["Strong defense", "Better visibility", "Zero trust control"],
    caseStudy:
      "An enterprise achieved 99.99% uptime with our layered security.",
  },

  "cloud-security-solutions": {
    title: "Cloud Security Solutions",
    icon: <FaCloud className="icon" />,
    description:
      "Secure AWS, Azure, and GCP with IAM, encryption and automated auditing.",
    challenges: ["Misconfiguration", "Access misuse", "Cloud breaches"],
    features: ["IAM Control", "Cloud Audits", "Data Encryption"],
    benefits: ["Fewer breaches", "Better cloud control", "Compliance ready"],
    caseStudy:
      "A SaaS startup reduced cloud leakage by 90%.",
  },

  "data-protection-privacy": {
    title: "Data Protection & Privacy",
    icon: <FaLock className="icon" />,
    description:
      "Ensure GDPR/ISO compliance with strong encryption and DLP monitoring.",
    challenges: ["Data theft", "Compliance issues"],
    features: ["DLP Monitoring", "Encryption", "Access Control"],
    benefits: ["Trust", "Compliance", "Zero leakage"],
    caseStudy:
      "A healthcare company achieved 100% HIPAA compliance.",
  },

  "endpoint-application-security": {
    title: "Endpoint & Application Security",
    icon: <FaDesktop className="icon" />,
    description:
      "Protect devices and apps from malware, ransomware and exploits.",
    challenges: ["Malware", "Ransomware", "Unpatched systems"],
    features: ["EDR", "App Shield", "Patch Automation"],
    benefits: ["Zero ransomware", "Protected devices"],
    caseStudy:
      "A logistics firm blocked 25,000 malware attempts.",
  },

  "identity-access-management": {
    title: "Identity & Access Management (IAM)",
    icon: <FaUserShield className="icon" />,
    description:
      "MFA, SSO, PAM and complete identity governance for secure access.",
    challenges: ["Password attacks", "Unauthorized access"],
    features: ["MFA", "SSO", "Access Policies"],
    benefits: ["98% fewer access breaches"],
    caseStudy:
      "A financial client reduced unauthorized logins by 98%.",
  },

  "threat-intelligence-analytics": {
    title: "Threat Intelligence & Analytics",
    icon: <FaBrain className="icon" />,
    description:
      "AI-powered analytics for early detection and real-time threat intelligence.",
    challenges: ["Advanced threats", "Slow detection"],
    features: ["Threat Hunting", "AI Analytics"],
    benefits: ["93% better detection"],
    caseStudy:
      "E-commerce client improved detection accuracy significantly.",
  },

  "compliance-risk-management": {
    title: "Compliance & Risk Management",
    icon: <FaBalanceScale className="icon" />,
    description:
      "Automated GRC, risk scoring, and audit-ready reporting.",
    challenges: ["Complex regulations"],
    features: ["Audit Automation", "Risk Dashboard"],
    benefits: ["60% faster audits"],
    caseStudy:
      "Fintech client reduced audit time by 60%.",
  },

  "business-continuity-incident-response": {
    title: "Business Continuity & Incident Response",
    icon: <FaSyncAlt className="icon" />,
    description:
      "Prepare, respond and recover with DR playbooks and recovery systems.",
    challenges: ["Downtime", "No IR plan"],
    features: ["Playbooks", "DR Testing"],
    benefits: ["4-hour recovery"],
    caseStudy:
      "A manufacturer restored operations within hours.",
  },

  "security-awareness-training": {
    title: "Security Awareness & Training",
    icon: <FaChalkboardTeacher className="icon" />,
    description:
      "Train employees to identify phishing and social engineering.",
    challenges: ["Human errors"],
    features: ["Simulations", "Quizzes"],
    benefits: ["85% fewer clicks"],
    caseStudy:
      "Corporate employees reduced phishing success by 85%.",
  },
};

/* =============================================
   🔵 COMPONENT STARTS HERE
============================================= */

function SolutionDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const solution = solutionDetailsData[id];

  if (!solution)
    return (
      <div className="solution-details-not-found">
        <h2>Solution Not Found</h2>
        <button onClick={() => navigate("/solutions")}>Go Back</button>
      </div>
    );

  return (
    <div className="solution-details-page">
      <div className="solution-details-container">
        {/* HEADER */}
        <h2 className="solution-details-title">{solution.title}</h2>
        <p className="solution-details-description">
          {solution.description}
        </p>

        {/* SECTIONS */}
        <section className="solution-details-section">
          <h3>Challenges</h3>
          <ul>
            {solution.challenges.map((item, i) => (
              <li key={i}>
                <FaCheckCircle className="list-icon" /> {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="solution-details-section">
          <h3>Key Features</h3>
          <ul>
            {solution.features.map((item, i) => (
              <li key={i}>
                <FaCheckCircle className="list-icon" /> {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="solution-details-section">
          <h3>Benefits</h3>
          <ul>
            {solution.benefits.map((item, i) => (
              <li key={i}>
                <FaCheckCircle className="list-icon" /> {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="solution-details-section">
          <h3>Case Study</h3>
          <p>{solution.caseStudy}</p>
        </section>

        {/* BUTTONS */}
        <div className="solution-details-buttons">
          <Link to="/solutions" className="solution-details-back-btn">
            <FaArrowLeft /> Back to Solutions
          </Link>

          <a href="/contact" className="solution-details-cta-btn">
            Talk to Our Experts
          </a>
        </div>
      </div>
    </div>
  );
}

export default SolutionDetails;

