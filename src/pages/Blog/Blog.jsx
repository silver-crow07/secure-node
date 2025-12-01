import React from "react";
import "./Blog.css";
import { useNavigate } from "react-router-dom";

// BLOG IMAGES
import blog1 from "../../assets/blog1.png";
import blog2 from "../../assets/blog2.png";
import blog3 from "../../assets/blog3.png";
import blog4 from "../../assets/blog4.png";
import blog5 from "../../assets/blog5.png";
import blog6 from "../../assets/blog6.png";
import blog7 from "../../assets/blog7.png";
import blog8 from "../../assets/blog8.png";

function Blog() {
  const navigate = useNavigate();
const blogList = [
 
  {
    id: "exploring-future-tech",
    title: "Exploring Future Tech",
    desc: "Read the latest insights on exploring future tech.",
    img: blog1,
  },
  {
    id: "how-security-impacts-growth",
    title: "How Security Impacts Growth",
    desc: "Read the latest insights on how security impacts growth.",
    img: blog2,
  },
  {
    id: "innovating-with-ai",
    title: "Innovating with AI",
    desc: "Read the latest insights on innovating with AI.",
    img: blog3,
  },
  {
    id: "web-trends-2025",
    title: "Web Trends 2025",
    desc: "Read the latest insights on web trends 2025.",
    img: blog4,
  },


  {
    id: "cyber-threats-2025",
    title: "Top 5 Cyber Threats of 2025",
    desc: "Explore the latest vulnerabilities targeting businesses and how to mitigate them effectively.",
    img: blog5,
  },
  {
    id: "ai-in-cybersecurity",
    title: "AI in Cybersecurity",
    desc: "How AI is transforming digital protection and threat prediction.",
    img: blog6,
  },
  {
    id: "zero-trust",
    title: "Building a Zero-Trust Environment",
    desc: "Learn the principles & benefits of implementing zero-trust architecture.",
    img: blog7,
  },
   {
    id: "future-of-web",
    title: "Future of Web Technologies",
    desc: "Dive into upcoming trends shaping modern digital ecosystems.",
    img: blog8,
  }
];

  

  return (
    <div className="blog-container">

      {/* HERO SECTION */}
      <section className="blog-hero">
        <h1>Cyber Insights & Security Trends</h1>
        <p>Stay ahead with expert articles, analysis, and cybersecurity tips.</p>
      </section>

      {/* BLOG CARDS */}
      <section className="latest-blogs">
        <h2>Latest Articles</h2>

        <div className="blog-grid">
          {blogList.map((item) => (
            <div className="blog-card" key={item.id}>
              {/* IMAGE */}
              <div className="blog-img-box">
                <img src={item.img} alt={item.title} />
              </div>

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

