import React from "react";
import "./SimplePage.css";

export default function RefundPolicy() {
  return (
    <div className="simple-page">
      <div className="simple-container">

        <h1>Pricing & Refund Policy</h1>

        <p>
          At <strong>SecureNode</strong>, we aim to provide high-quality services with transparency.
          This Pricing & Refund Policy outlines how our billing,
          payment, and refund processes work for all projects and digital services.
        </p>

        <h3>1. Pricing Structure</h3>
        <p>
          Pricing for projects and services is based on requirements, features,
          complexity, and timelines. A formal quotation or proposal is provided
          before the start of any work.
        </p>

        <ul>
          <li>Custom development projects are billed as per agreed milestones.</li>
          <li>Security services may follow fixed or subscription-based pricing.</li>
          <li>All third-party tools or licenses (if required) are billed separately.</li>
        </ul>

        <h3>2. Advance Payment</h3>
        <p>
          Most projects require an upfront advance payment of 30–50% (depending on scope)
          to initiate the work. No service begins until the advance amount is received.
        </p>

        <h3>3. Refund Eligibility</h3>
        <p>
          Refund requests are handled carefully and fairly. However, due to the nature of
          digital services, refunds are provided only under specific conditions:
        </p>

        <ul>
          <li>Full refund if project work has not yet started.</li>
          <li>
            Partial refund if the project is in early stages and less than 30% of the work
            is completed.
          </li>
          <li>No refund for:
            <ul style={{ marginTop: "6px" }}>
              <li>Completed work or delivered modules</li>
              <li>Delays caused due to client inaction or lack of communication</li>
              <li>Change of mind after work has begun</li>
              <li>Third-party services, licenses, or software costs</li>
            </ul>
          </li>
        </ul>

        <h3>4. Cancellation Policy</h3>
        <p>
          You may request cancellation through email. Upon cancellation:
        </p>
        <ul>
          <li>All completed work till that point must be paid for in full.</li>
          <li>Source files may or may not be handed over depending on contract terms.</li>
        </ul>

        <h3>5. Delivery & Revisions</h3>
        <p>
          Minor revisions related to the initial scope are free. Major changes or new
          features after delivery are billed separately.
        </p>

        <h3>6. Payment Terms</h3>
        <ul>
          <li>All payments must be completed before final delivery.</li>
          <li>No refunds after full project delivery.</li>
          <li>Late payments may pause active work.</li>
        </ul>

        <h3>7. Contact for Refunds</h3>
        <p>
          To request refunds or raise billing concerns, contact us at: <br />
          <strong>Email:</strong> support@securenode.com
        </p>

        <p style={{ marginTop: "20px", color: "var(--text-muted)" }}>
          <em>Last Updated: December 2025</em>
        </p>

      </div>
    </div>
  );
}
