import React from "react";
import "./Blog.css";
import { FaPenNib, FaLightbulb, FaLock, FaChartLine } from "react-icons/fa";

function Blog() {
  return (
    <div className="blog-container">
      
      {/* Hero Section */}
      <section className="blog-hero">
        <h1>Cyber Insights & Security Trends</h1>
        <p>Stay ahead with expert articles, analysis, and tips on cybersecurity and digital defense.</p>
      </section>

      {/* Latest Articles Section */}
      <section className="latest-blogs">
        <h2>Latest Articles</h2>
        <div className="blog-grid">
          <div className="blog-card">
            <FaPenNib className="blog-icon" />
            <h3>Top 5 Cyber Threats of 2025</h3>
            <p>Explore the latest vulnerabilities targeting businesses and how to mitigate them effectively.</p>
            <a href="#">Read More →</a>
          </div>

          <div className="blog-card">
            <FaLightbulb className="blog-icon" />
            <h3>AI in Cybersecurity</h3>
            <p>How artificial intelligence is transforming digital protection and threat prediction.</p>
            <a href="#">Read More →</a>
          </div>

          <div className="blog-card">
            <FaLock className="blog-icon" />
            <h3>Building a Zero-Trust Environment</h3>
            <p>Learn the principles and benefits of implementing zero-trust architecture in your organization.</p>
            <a href="#">Read More →</a>
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section className="insights">
        <h2>Security Insights</h2>
        <p>
          Cybersecurity is not a one-time solution — it’s a continuous process of evolution. 
          Through our blog, we aim to share actionable insights that empower organizations 
          to protect data, maintain privacy, and operate with confidence in a digital world.
        </p>

        <div className="insight-points">
          <div><FaChartLine /> Regular Industry Updates</div>
          <div><FaLightbulb /> Expert Opinions & Analysis</div>
          <div><FaPenNib /> Practical Security Tips</div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Want to Contribute or Learn More?</h2>
        <p>Join our growing cybersecurity community — share your insights or explore more expert articles.</p>
        <a href="/contact" className="cta-button">Get in Touch</a>
      </section>

    </div>
  );
}

export default Blog;
