import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./BlogDetails.css";

const blogDetailsData = {
  "cyber-threats-2025": {
    title: "Top 5 Cyber Threats of 2025",
    author: "Aisha Khan",
    date: "21 Nov, 2025",
    content: `
      Cyber threats are evolving faster than ever. Businesses must stay alert and 
      prepare for sophisticated attacks. In this article, we explore the top 5 
      emerging cyber threats expected to dominate 2025...
    `
  },

  "ai-in-cybersecurity": {
    title: "AI in Cybersecurity",
    author: "Rohit Sharma",
    date: "10 Nov, 2025",
    content: `
      Artificial intelligence is transforming the cybersecurity landscape. 
      With machine learning algorithms and predictive analytics, AI helps 
      organizations identify and mitigate threats faster...
    `
  },

  "zero-trust-model": {
    title: "Building a Zero-Trust Environment",
    author: "Sneha Verma",
    date: "03 Nov, 2025",
    content: `
      Zero-trust architecture ensures that no user or device is trusted by default. 
      This article explains how organizations can implement zero-trust frameworks 
      to enhance their security posture...
    `
  }
};

function BlogDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = blogDetailsData[id];

  if (!blog)
    return <h2 style={{ textAlign: "center", padding: "50px" }}>Article Not Found</h2>;

  return (
    <div className="article-page">
      <div className="article-container">
        <h1>{blog.title}</h1>

        <div className="article-meta">
          <span>✍️ {blog.author}</span>
          <span>📅 {blog.date}</span>
        </div>

        <p className="article-content">{blog.content}</p>

        <button className="back-btn" onClick={() => navigate("/blog")}>
          ← Back to Articles
        </button>
      </div>
    </div>
  );
}

export default BlogDetails;
