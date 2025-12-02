import React from "react";
import "./SimplePage.css";

export default function Privacy() {
  return (
    <div className="simple-page">
      <div className="simple-container">
        <h1>Privacy Policy</h1>

        <p>
          At <strong>SecureNode</strong>, we are committed to protecting your privacy and ensuring the security of your personal data.
          This Privacy Policy outlines how we collect, use, store, and safeguard your information when you interact with our
          website or use our services.
        </p>

        <h3>1. Information We Collect</h3>
        <p>We may collect the following types of data:</p>
        <ul>
          <li><strong>Personal Information:</strong> Name, email address, phone number, company name, etc.</li>
          <li><strong>Technical Information:</strong> IP address, browser type, device details, and activity logs.</li>
          <li><strong>Usage Data:</strong> Pages visited, click patterns, time spent on website.</li>
          <li><strong>Form Submissions:</strong> Messages or details you provide through contact or inquiry forms.</li>
        </ul>

        <h3>2. How We Use Your Information</h3>
        <p>Your information may be used for the following purposes:</p>
        <ul>
          <li>To provide, operate, and improve our services.</li>
          <li>To respond to inquiries and customer support requests.</li>
          <li>To personalize user experience and enhance website functionality.</li>
          <li>To send security updates, product announcements, and service-related communication.</li>
          <li>To analyze website usage and performance for optimization.</li>
        </ul>

        <h3>3. Legal Basis for Processing</h3>
        <p>We process your data under the following legal bases:</p>
        <ul>
          <li>Performance of a contract</li>
          <li>Legitimate business interests</li>
          <li>Compliance with legal obligations</li>
          <li>User consent where applicable</li>
        </ul>

        <h3>4. Cookies & Tracking Technologies</h3>
        <p>
          Our website uses cookies and tracking technologies to improve user experience,
          monitor website analytics, and personalize content. You can modify cookie preferences in your browser settings.
        </p>

        <h3>5. Data Sharing & Third Parties</h3>
        <p>
          SecureNode does <strong>not sell</strong> your personal information to third parties.  
          We may share your data only with:
        </p>
        <ul>
          <li>Trusted service providers (hosting, analytics, cloud storage)</li>
          <li>Law enforcement when legally required</li>
          <li>Business partners assisting in delivering our services</li>
        </ul>

        <h3>6. Data Security</h3>
        <p>
          We use industry-level security measures including encryption, access control,
          firewalls, and continuous monitoring to protect your personal data from unauthorized access or misuse.
        </p>

        <h3>7. Data Retention</h3>
        <p>
          We retain your information only for as long as necessary to fulfill the purposes outlined in this policy
          or comply with legal obligations. When no longer needed, your data is securely deleted.
        </p>

        <h3>8. Your Rights</h3>
        <p>You may exercise the following rights at any time:</p>
        <ul>
          <li>Right to access your data</li>
          <li>Right to update or correct information</li>
          <li>Right to delete your data</li>
          <li>Right to withdraw consent</li>
          <li>Right to restrict or object to processing</li>
        </ul>

        <h3>9. External Links</h3>
        <p>
          Our website may contain links to third-party websites.  
          We are not responsible for their privacy practices. We encourage you to review their policies.
        </p>

        <h3>10. Updates to This Policy</h3>
        <p>
          We may occasionally update this Privacy Policy to reflect changes in technology, regulations, or business operations.
          Updates will be posted on this page with a revised “Last Updated” date.
        </p>

        <h3>11. Contact Us</h3>
        <p>
          For privacy-related questions, concerns, or requests, contact us at: <br />
          <strong>Email:</strong> info@securenode.com <br />
          <strong>Location:</strong> Ghaziabad, Uttar Pradesh, India
        </p>

        <p style={{ marginTop: "20px", color: "var(--text-muted)" }}>
          <em>Last Updated: December 2025</em>
        </p>
      </div>
    </div>
  );
}
