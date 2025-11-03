import React from "react";
import { useParams, Link } from "react-router-dom";
import {
  FaShieldAlt,
  FaCheckCircle,
  FaListUl,
  FaIndustry,
  FaBookReader,
  FaArrowLeft,
} from "react-icons/fa";
import "./ServiceDetails.css";

const servicesDetailsData = {
  "penetration-testing": {
    title: "Penetration Testing",
    description:
      "Identify vulnerabilities in your system before attackers do. Our penetration testing simulates real-world attacks to uncover weaknesses in your network, applications, and infrastructure.",
    benefits: [
      "Prevent cyberattacks before they happen",
      "Enhance your security posture",
      "Achieve regulatory compliance",
    ],
    features: [
      "Network and Infrastructure Testing",
      "Web and Mobile Application Testing",
      "Social Engineering Tests",
      "Comprehensive Vulnerability Reports",
    ],
    industries: ["Finance", "Healthcare", "Education", "Government"],
    caseStudy:
      "We helped Company X identify 42 vulnerabilities and implement fixes that reduced attack exposure by 85% within three months.",
  },
  "vulnerability-assessment": {
    title: "Vulnerability Assessment",
    description:
      "Proactively identify and prioritize security flaws in your system with detailed vulnerability assessments.",
    benefits: [
      "Early risk detection",
      "Improved security resilience",
      "Regulatory alignment",
    ],
    features: [
      "System scanning and reporting",
      "Risk prioritization",
      "Detailed remediation guidance",
    ],
    industries: ["Finance", "Retail", "Manufacturing"],
    caseStudy:
      "A retail client reduced system vulnerabilities by 70% after implementing our recommendations.",
  },
  "cloud-security": {
    title: "Cloud Security",
    description:
      "Protect your cloud infrastructure with multi-layer encryption and real-time threat monitoring solutions.",
    benefits: ["Secure cloud assets", "Data encryption", "Continuous monitoring"],
    features: [
      "Identity and access management",
      "Cloud configuration review",
      "Incident alerts",
    ],
    industries: ["Tech", "Healthcare", "E-commerce"],
    caseStudy:
      "Secured cloud servers for an e-commerce client, preventing data breaches and unauthorized access.",
  },
  "incident-response": {
    title: "Incident Response",
    description:
      "Act fast against cyber threats with our expert-led investigation, containment, and recovery process.",
    benefits: [
      "Minimize downtime",
      "Reduce financial losses",
      "Preserve brand reputation",
    ],
    features: [
      "Threat analysis",
      "Containment and eradication",
      "Post-incident review",
    ],
    industries: ["Finance", "Government", "Technology"],
    caseStudy:
      "Our rapid response helped a fintech firm contain ransomware within 30 minutes, preventing major losses.",
  },
  "compliance-consulting": {
    title: "Compliance Consulting",
    description:
      "Ensure your organization meets global standards such as GDPR, ISO 27001, and HIPAA with expert consulting.",
    benefits: ["Meet compliance standards", "Avoid fines", "Build client trust"],
    features: ["Gap analysis", "Policy development", "Audit preparation"],
    industries: ["Healthcare", "Finance", "Education"],
    caseStudy:
      "Enabled a healthcare company to achieve full HIPAA compliance within two months.",
  },
  "threat-monitoring": {
    title: "Threat Monitoring",
    description:
      "Round-the-clock threat monitoring to detect, analyze, and mitigate risks before they escalate.",
    benefits: ["Real-time alerts", "Continuous protection", "Expert analysis"],
    features: [
      "24/7 security monitoring",
      "SIEM integration",
      "Incident escalation",
    ],
    industries: ["Telecom", "E-commerce", "Finance"],
    caseStudy:
      "Detected and blocked multiple intrusion attempts for a global telecom client in real time.",
  },
  "cybersecurity-training": {
    title: "Cybersecurity Training",
    description:
      "Empower your employees to identify, report, and defend against phishing and cyberattacks effectively.",
    benefits: ["Enhanced employee awareness", "Reduced phishing success rate"],
    features: ["Workshops", "Simulated attacks", "Custom training modules"],
    industries: ["Education", "Corporate", "Government"],
    caseStudy:
      "Trained over 500 employees of a corporate client, reducing phishing incidents by 90%.",
  },
};

function ServiceDetails() {
  const { id } = useParams();
  const service = servicesDetailsData[id];

  if (!service) return <h2 className="service-details-not-found">Service not found</h2>;

  return (
    <div className="service-details-page">
      <div className="service-details-container">
        <h2 className="service-details-title">{service.title}</h2>
        <p className="service-details-description">{service.description}</p>

        <section className="service-details-section">
          <h3>
            <FaShieldAlt className="icon" /> Why It Matters
          </h3>
          <ul>
            {service.benefits.map((b, idx) => (
              <li key={idx}>
                <FaCheckCircle className="list-icon" /> {b}
              </li>
            ))}
          </ul>
        </section>

        <section className="service-details-section">
          <h3>
            <FaListUl className="icon" /> Key Features
          </h3>
          <ul>
            {service.features.map((f, idx) => (
              <li key={idx}>
                <FaCheckCircle className="list-icon" /> {f}
              </li>
            ))}
          </ul>
        </section>

        <section className="service-details-section">
          <h3>
            <FaIndustry className="icon" /> Industries That Need It
          </h3>
          <ul>
            {service.industries.map((i, idx) => (
              <li key={idx}>
                <FaCheckCircle className="list-icon" /> {i}
              </li>
            ))}
          </ul>
        </section>

        <section className="service-details-section">
          <h3>
            <FaBookReader className="icon" /> Case Study
          </h3>
          <p>{service.caseStudy}</p>
        </section>

        <div className="service-details-buttons">
          <Link to="/services" className="service-details-back-btn">
            <FaArrowLeft /> Back to Services
          </Link>
          <a href="/contact" className="service-details-cta-btn">
            Request This Service
          </a>
        </div>
      </div>
    </div>
  );
}

export default ServiceDetails;
