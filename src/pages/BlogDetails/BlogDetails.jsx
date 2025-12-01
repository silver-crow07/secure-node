import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./BlogDetails.css";

// IMAGES
import blog1 from "../../assets/blog1.png";
import blog2 from "../../assets/blog2.png";
import blog3 from "../../assets/blog3.png";
import blog4 from "../../assets/blog4.png";

const blogDetailsData = {
  "exploring-future-tech": {
    title: "Exploring Future Tech",
    author: "Arjun Mehta",
    date: "28 Nov, 2025",
    image: blog1,
    content: `
      The future of technology is rapidly evolving, powered by innovations in AI,
      quantum computing, biotechnology, and immersive digital ecosystems.
      Businesses must embrace curiosity and adapt to rapid transformation...
    `,
  },

  "how-security-impacts-growth": {
    title: "How Security Impacts Growth",
    author: "Neha Sharma",
    date: "25 Nov, 2025",
    image: blog2,
    content: `
      Cybersecurity is no longer optional—it's a catalyst for sustainable business growth.
      Organizations with strong security frameworks improve customer trust, reduce breach costs,
      and enable safe innovation...
    `,
  },

  "innovating-with-ai": {
    title: "Innovating with AI",
    author: "Rohit Verma",
    date: "12 Nov, 2025",
    image: blog3,
    content: `
      Artificial Intelligence is reshaping industries with automation, predictive analytics,
      and smart decision-making. Companies investing in AI-driven solutions gain unmatched
      competitive advantages...
    `,
  },

  "web-trends-2025": {
    title: "Web Trends 2025",
    author: "Saanvi Gupta",
    date: "05 Nov, 2025",
    image: blog4,
    content: `
      The digital world in 2025 will rely heavily on personalization, real-time engagement,
      and hyper-secure interfaces. Modern frameworks and AI-powered UX will transform how
      users interact with the web...
    `,
  },

  "cyber-threats-2025": {
    title: "Top 5 Cyber Threats of 2025",
    author: "Aisha Khan",
    date: "21 Nov, 2025",
    image: blog1,
    content: `
      Cyber threats are evolving faster than ever. Businesses must stay alert and 
      prepare for sophisticated attacks. Here are the top 5 emerging cyber threats of 2025:
      - AI-powered phishing attacks
      - Deepfake-generated fraud
      - Quantum decryption risks
      - Cloud misconfiguration exploits
      - Supply chain digital breaches...
    `,
  },

  "ai-in-cybersecurity": {
    title: "AI in Cybersecurity",
    author: "Rohit Sharma",
    date: "10 Nov, 2025",
    image: blog2,
    content: `
      Artificial intelligence is transforming the cybersecurity landscape.
      With machine learning and predictive analytics, AI enables real-time threat analysis,
      reduces incident response time, and strengthens digital defense systems...
    `,
  },

  "zero-trust": {
    title: "Building a Zero-Trust Environment",
    author: "Sneha Verma",
    date: "03 Nov, 2025",
    image: blog3,
    content: `
      Zero-trust architecture assumes that no user or device is trusted by default.
      This article covers core principles: verify every request, enforce least privilege,
      secure every endpoint, and adopt continuous monitoring...
    `,
  },

  "future-of-web": {
    title: "Future of Web Technologies",
    author: "Manav Singh",
    date: "01 Nov, 2025",
    image: blog4,
    content: `
      Modern web technologies are advancing with Web3, AI integration, 3D experiences,
      decentralized platforms, and cloud-native architecture. Businesses must upgrade their
      systems to stay relevant and secure in the evolving digital era...
    `,
  },
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

        <img src={blog.image} alt={blog.title} className="article-banner" />

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
