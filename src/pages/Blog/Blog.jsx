import React from "react";
import "./Blog.css";
import { useNavigate } from "react-router-dom";
import { FaPenNib, FaLightbulb, FaLock, FaChartLine } from "react-icons/fa";

function Blog() {
  const navigate = useNavigate();

  const blogList = [
    {
      id: "cyber-threats-2025",
      title: "Top 5 Cyber Threats of 2025",
      desc: "Explore the latest vulnerabilities targeting businesses and how to mitigate them effectively.",
      icon: <FaPenNib className="blog-icon" />,
    },
    {
      id: "ai-in-cybersecurity",
      title: "AI in Cybersecurity",
      desc: "How AI is transforming digital protection and threat prediction.",
      icon: <FaLightbulb className="blog-icon" />,
    },
    {
      id: "zero-trust",
      title: "Building a Zero-Trust Environment",
      desc: "Learn the principles & benefits of implementing zero-trust architecture.",
      icon: <FaLock className="blog-icon" />,
    },
  ];

  return (
    <div className="blog-container">

      <section className="blog-hero">
        <h1>Cyber Insights & Security Trends</h1>
        <p>Stay ahead with expert articles, analysis, and cybersecurity tips.</p>
      </section>

      <section className="latest-blogs">
        <h2>Latest Articles</h2>

        <div className="blog-grid">
          {blogList.map((item) => (
            <div className="blog-card" key={item.id}>
              {item.icon}
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              
              <button
                className="read-more-btn"
                onClick={() => navigate(`/blog/${item.id}`)}
              >
                Read More →
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Blog;
