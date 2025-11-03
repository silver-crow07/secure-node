// src/pages/SolutionDetails/SolutionDetails.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./SolutionDetails.css";
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
} from "react-icons/fa";

const solutionDetailsData = {
  "managed-security-services": {
    title: "Managed Security Services",
    icon: <FaShieldAlt className="solution-icon" />,
    fullDescription: `Our Managed Security Services provide 24/7 threat detection, prevention, and rapid incident response. With our Security Operations Center (SOC), your organization remains continuously monitored by certified cybersecurity experts.`,
    challenges: [
      "Continuous cyber threats",
      "Limited internal security teams",
      "Delayed incident response",
    ],
    features: [
      "24/7 Threat Monitoring",
      "Automated Incident Response",
      "SIEM & Log Management",
    ],
    benefits: [
      "Reduced downtime",
      "Expert monitoring without overhead",
      "Enhanced organizational resilience",
    ],
    caseStudy:
      "A financial services firm reduced cyber breach attempts by 87% within 3 months of implementing our MSS platform.",
  },

  "network-security-solutions": {
    title: "Network Security Solutions",
    icon: <FaNetworkWired className="solution-icon" />,
    fullDescription:
      "Our network security architecture protects organizations from internal and external threats using next-gen firewalls, intrusion detection, and zero-trust access models.",
    challenges: [
      "Unauthorized access",
      "Weak perimeter defense",
      "Increasing network complexity",
    ],
    features: ["Next-Gen Firewall", "Zero Trust Access", "VPN & Encryption"],
    benefits: [
      "Improved network visibility",
      "Zero trust enforcement",
      "Strong perimeter defense",
    ],
    caseStudy:
      "We helped an IT enterprise achieve 99.99% uptime after deploying a multi-layered network security framework.",
  },

  "cloud-security-solutions": {
    title: "Cloud Security Solutions",
    icon: <FaCloud className="solution-icon" />,
    fullDescription:
      "Protect your multi-cloud environment through robust encryption, IAM policies, and compliance automation to ensure secure digital transformation.",
    challenges: ["Cloud misconfiguration", "Unauthorized access", "Data breaches"],
    features: ["Cloud Encryption", "IAM Integration", "Continuous Compliance"],
    benefits: [
      "Improved data protection",
      "Reduced cloud misconfiguration risks",
      "Regulatory compliance assurance",
    ],
    caseStudy:
      "A SaaS company cut data leak incidents by 90% using our cloud security suite.",
  },

  "data-protection-privacy": {
    title: "Data Protection & Privacy",
    icon: <FaLock className="solution-icon" />,
    fullDescription:
      "Safeguard sensitive business data with encryption, DLP (Data Loss Prevention), and privacy compliance frameworks.",
    challenges: ["Data breaches", "Regulatory non-compliance", "Insider threats"],
    features: ["Data Encryption", "DLP Policies", "GDPR/ISO Compliance"],
    benefits: [
      "Ensures customer trust",
      "Prevents unauthorized data exposure",
      "Complies with major privacy laws",
    ],
    caseStudy:
      "A healthcare firm achieved 100% compliance with GDPR and HIPAA after implementing our DLP framework.",
  },

  "endpoint-application-security": {
    title: "Endpoint & Application Security",
    icon: <FaDesktop className="solution-icon" />,
    fullDescription:
      "Protect end-user devices and business-critical applications from malware, ransomware, and zero-day exploits.",
    challenges: ["Malware infections", "Unpatched vulnerabilities", "Phishing attacks"],
    features: ["Antivirus & EDR", "Patch Management", "Runtime Application Protection"],
    benefits: [
      "Strengthened device-level defense",
      "Reduced risk of data theft",
      "Improved operational continuity",
    ],
    caseStudy:
      "A logistics firm blocked over 25,000 ransomware attempts using our EDR-based endpoint protection.",
  },

  "identity-access-management": {
    title: "Identity & Access Management (IAM)",
    icon: <FaUserShield className="solution-icon" />,
    fullDescription:
      "Ensure secure, role-based access across your organization with multi-factor authentication and centralized identity management.",
    challenges: [
      "Unauthorized access",
      "Weak password policies",
      "Lack of centralized control",
    ],
    features: ["MFA & SSO Integration", "Privileged Access Control", "User Lifecycle Management"],
    benefits: [
      "Eliminates credential-based risks",
      "Simplifies user onboarding",
      "Improves identity governance",
    ],
    caseStudy:
      "A financial client cut unauthorized access events by 98% after deploying our IAM framework.",
  },

  "threat-intelligence-analytics": {
    title: "Threat Intelligence & Analytics",
    icon: <FaBrain className="solution-icon" />,
    fullDescription:
      "Leverage AI-driven analytics to detect, predict, and neutralize cyber threats in real-time using actionable threat intelligence.",
    challenges: ["Evolving threat landscape", "Delayed response", "Limited threat visibility"],
    features: ["AI-Powered Threat Detection", "Behavioral Analytics", "Threat Hunting"],
    benefits: [
      "Faster incident response",
      "Proactive threat mitigation",
      "Smarter SOC operations",
    ],
    caseStudy:
      "An e-commerce firm improved detection accuracy by 93% using our AI-driven threat intelligence module.",
  },

  "compliance-risk-management": {
    title: "Compliance & Risk Management",
    icon: <FaBalanceScale className="solution-icon" />,
    fullDescription:
      "Simplify governance with automated compliance tracking and enterprise-level risk assessments aligned with ISO, GDPR, and NIST.",
    challenges: ["Regulatory complexity", "Manual compliance audits", "High-risk exposure"],
    features: ["Automated Audit Tools", "Policy Mapping", "Real-time Risk Scoring"],
    benefits: [
      "Faster audits",
      "Lower compliance costs",
      "Reduced risk exposure",
    ],
    caseStudy:
      "A fintech client reduced compliance audit time by 60% using our automated compliance management suite.",
  },

  "business-continuity-incident-response": {
    title: "Business Continuity & Incident Response",
    icon: <FaSyncAlt className="solution-icon" />,
    fullDescription:
      "Prepare, respond, and recover effectively from any cyber incident to ensure uninterrupted business operations.",
    challenges: ["Disaster recovery delays", "Unclear response plans", "System downtime"],
    features: ["Incident Playbooks", "Disaster Recovery Testing", "Post-Incident Analysis"],
    benefits: [
      "Minimized downtime",
      "Faster recovery",
      "Stronger operational resilience",
    ],
    caseStudy:
      "A manufacturing company restored full operations within 4 hours after a ransomware attack using our continuity plan.",
  },

  "security-awareness-training": {
    title: "Security Awareness & Training",
    icon: <FaChalkboardTeacher className="solution-icon" />,
    fullDescription:
      "Empower employees with the knowledge to identify, report, and prevent cyber threats through engaging security training.",
    challenges: ["Human error", "Phishing susceptibility", "Low security culture"],
    features: ["Phishing Simulations", "Interactive Training Modules", "Employee Assessments"],
    benefits: [
      "Reduced phishing incidents",
      "Enhanced cyber hygiene",
      "Improved organizational awareness",
    ],
    caseStudy:
      "An IT company reduced employee phishing click rates by 85% after implementing our training program.",
  },
};

function SolutionDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const solution = solutionDetailsData[id];

  if (!solution)
    return (
      <div className="solution-not-found">
        <h2>Solution Not Found</h2>
        <button onClick={() => navigate("/solutions")}>Back to Solutions</button>
      </div>
    );

  return (
    <div className="solution-details-container">
      <div className="solution-header">
        {solution.icon}
        <h1>{solution.title}</h1>
      </div>

      <p className="solution-description">{solution.fullDescription}</p>

      <section className="solution-section">
        <h3>Challenges</h3>
        <ul>
          {solution.challenges.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="solution-section">
        <h3>Key Features</h3>
        <ul>
          {solution.features.map((feature, i) => (
            <li key={i}>{feature}</li>
          ))}
        </ul>
      </section>

      <section className="solution-section">
        <h3>Benefits</h3>
        <ul>
          {solution.benefits.map((benefit, i) => (
            <li key={i}>{benefit}</li>
          ))}
        </ul>
      </section>

      <section className="solution-section">
        <h3>Case Study</h3>
        <p>{solution.caseStudy}</p>
      </section>

      <div className="solution-actions">
        <button onClick={() => navigate("/solutions")} className="back-button">
          ← Back to Solutions
        </button>
        <a href="/contact" className="cta-button">
          Talk to Our Experts
        </a>
      </div>
    </div>
  );
}

export default SolutionDetails;
