import React, { useEffect, useRef, useState } from "react";
import { Globe, Monitor, Briefcase, ShoppingBag, Settings, Shield, GraduationCap, HeartPulse, Landmark, ShieldCheck, Cloud, FileCog, Network } from "lucide-react";
import { Link } from "react-router-dom";
import HeroSection from "../../components/HeroSection/HeroSection";
import aboutImg from "../../assets/about.png";
import "./Home.css";

const Home = () => {
  // update sections with ids for each card
  const sections = [
    {
      title: "Our Services",
      subtitle: "Explore what we offer to enhance your digital presence.",
      cards: [
  { id: "penetration-testing", title: "Penetration Testing", desc: "Identify vulnerabilities...", icon: <Monitor size={32} /> },

  { id: "vulnerability-assessment", title: "Vulnerability Assessment", desc: "Discover weak points...", icon: <Globe size={32} /> },

  { id: "cloud-security", title: "Cloud Security", desc: "Protect your cloud...", icon: <Cloud size={32} /> },

  { id: "incident-response", title: "Incident Response", desc: "Handle cyber attacks fast...", icon: <Monitor size={32} /> },
],

    },
    {
  title: "Our Solutions",
  subtitle: "Providing efficient, secure, and scalable digital solutions.",
  cards: [
    { 
      id: "managed-security-services",
      title: "Managed Security Services",
      desc: "Proactive 24/7 monitoring and threat prevention.",
      icon: <ShieldCheck size={32} strokeWidth={1.5} /> 
    },
    { 
      id: "network-security-solutions",
      title: "Network Security",
      desc: "Secure firewalls, intrusion prevention & zero trust.",
      icon: <Network size={32} strokeWidth={1.5} /> 
    },
    { 
      id: "cloud-security-solutions",
      title: "Cloud Security",
      desc: "Protect your multi-cloud architecture & data.",
      icon: <Cloud size={32} strokeWidth={1.5} /> 
    },
    { 
      id: "endpoint-application-security",
      title: "Endpoint & App Security",
      desc: "Secure devices & apps from malware & exploits.",
      icon: <FileCog size={32} strokeWidth={1.5} /> 
    },
  ],
},
    {
      title: "Industries We Serve",
      subtitle: "Empowering businesses across multiple domains.",
      cards: [
        { id: "education", title: "Education", desc: "Transforming learning with innovative solutions.", icon: <GraduationCap size={32} strokeWidth={1.5} /> },
        { id: "healthcare", title: "Healthcare", desc: "Delivering tech for better health and patient care.", icon: <HeartPulse size={32} strokeWidth={1.5} /> },
        { id: "finance", title: "Finance", desc: "Securing transactions with modern digital infrastructure.", icon: <Landmark size={32} strokeWidth={1.5} /> },
        { id: "ecommerce-industry", title: "E-Commerce", desc: "Safeguard payments & user data.", icon: <ShoppingBag size={32} strokeWidth={1.5} /> }


      ],
    },
  ];




const scrollTestimonials = (direction) => {
  const track = document.getElementById("testimonialTrack");
  const cardWidth = track.children[0].offsetWidth + 20;

  track.scrollBy({
    left: direction === "right" ? cardWidth : -cardWidth,
    behavior: "smooth",
  });
};

const testimonials = [
  {
    text: "Secure Node helped us transform our online presence!",
    name: "Ayesha Khan",
    role: "CEO",
    img: "/images/user1.png",
  },
  {
    text: "Professional, creative, and very reliable team!",
    name: "Rohit Sharma",
    role: "Founder",
    img: "/images/user2.png",
  },
  {
    text: "Highly recommend for quality and on-time delivery.",
    name: "Sneha Verma",
    role: "Project Head",
    img: "/images/user3.png",
  },
  {
    text: "Their team exceeded our expectations in every way!",
    name: "Vikas Patil",
    role: "Product Manager",
    img: "/images/user4.png",
  },
  {
    text: "Amazing communication and fast delivery!",
    name: "Ritu Shah",
    role: "Operations Head",
    img: "/images/user5.png",
  },
  {
    text: "Quality work and very professional behavior.",
    name: "Aditya Mehta",
    role: "Entrepreneur",
    img: "/images/user6.png",
  },
];

// Infinite loop list (duplicate start & end)
const infiniteList = [...testimonials, ...testimonials, ...testimonials];

const [index, setIndex] = useState(testimonials.length); // start in middle
const trackRef = useRef(null);

// AUTO SLIDE
useEffect(() => {
  const interval = setInterval(() => {
    nextSlide();
  }, 3000);

  return () => clearInterval(interval);
}, []);

const nextSlide = () => {
  setIndex((prev) => prev + 1);
};

const prevSlide = () => {
  setIndex((prev) => prev - 1);
};

// Loop reset logic
useEffect(() => {
  const total = infiniteList.length;

  if (index >= total - 3) {
    setTimeout(() => setIndex(testimonials.length), 100);
  }
  if (index <= 2) {
    setTimeout(() => setIndex(total - testimonials.length - 1), 100);
  }
}, [index]);

useEffect(() => {
  const track = trackRef.current;
  if (!track) return;

  let isDown = false;
  let startX;
  let scrollLeft;

  const start = (e) => {
    isDown = true;
    startX = e.pageX || e.touches[0].pageX;
    scrollLeft = track.scrollLeft;
  };

  const move = (e) => {
    if (!isDown) return;
    const x = e.pageX || e.touches[0].pageX;
    const walk = (x - startX) * 1.2;
    track.scrollLeft = scrollLeft - walk;
  };

  const end = () => (isDown = false);

  track.addEventListener("mousedown", start);
  track.addEventListener("mousemove", move);
  track.addEventListener("mouseup", end);
  track.addEventListener("mouseleave", end);

  track.addEventListener("touchstart", start);
  track.addEventListener("touchmove", move);
  track.addEventListener("touchend", end);

  return () => {
    track.removeEventListener("mousedown", start);
    track.removeEventListener("mousemove", move);
    track.removeEventListener("mouseup", end);
    track.removeEventListener("mouseleave", end);
    track.removeEventListener("touchstart", start);
    track.removeEventListener("touchmove", move);
    track.removeEventListener("touchend", end);
  };
}, []);


return (
  <div className="home-container">
    {/* ✅ Hero Section */}
    <HeroSection />

    {/* ✅ Recognition Banner */}
    <section className="recognition-banner">
      <h2 className="banner-subheading">Growing Fast with Secure Node</h2>

      <div className="banner-stats">
        <div className="stat-box">
          <h3>10+</h3>
          <p>Project of Excellence</p>
        </div>

        <div className="stat-box">
          <h3>12+</h3>
          <p>Projects Completed</p>
        </div>

        <div className="stat-box">
          <h3>20+</h3>
          <p>Digital Experiences Crafted</p>
        </div>

        <div className="stat-box">
          <h3>25+</h3>
          <p>Ongoing Projects</p>
        </div>
      </div>
    </section>


    {/* ✅ About Us Preview */}
    <section className="about-preview">

      {/* ⭐ Center Heading */}
      <h2 className="about-heading">About Secure Node</h2>

      <div className="about-content">
        {/* ⭐ Left Text */}
        <div className="about-text">
          <p>
            Secure Node is a rapidly growing web and technology company focused on
            building secure, scalable, and visually appealing digital solutions.
            Our team creates seamless digital experiences for businesses across industries.
          </p>

          {/* ⭐ Center Button */}
          <div className="btn-wrapper">
            <Link to="/about">
              <button className="btn-about">Know More</button>
            </Link>
          </div>
        </div>

        {/* ⭐ Right Image */}
        <div className="about-image">
          <img src={aboutImg} alt="About Secure Node" />
        </div>
      </div>

    </section>



    {/* ✅ Scrollable Sections */}
    {/* inside the render: map sections -> cards */}
    {sections.map((section, sIndex) => (
      <section className="scroll-section" key={sIndex}>
        <h2 className="section-heading">{section.title}</h2>
        <p className="section-subheading">{section.subtitle}</p>

        <div className="scroll-cards">
          {section.cards.map((card) => {
            // compute route base per section
            const baseRoute = sIndex === 0 ? "/services" : sIndex === 1 ? "/solutions" : "/industries";
            return (
              <div className="scroll-card" key={card.id}>
                <div className="icon-box">{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>

                {/* dynamic read-more to the specific card detail */}
                <Link to={`${baseRoute}/${card.id}`} className="read-more-btn">
                  Read More →
                </Link>
              </div>
            );
          })}
        </div>

        <div className="view-more-wrapper">
          <Link to={sIndex === 0 ? "/services" : sIndex === 1 ? "/solutions" : "/industries"}>
            <button className="view-more-btn">View More</button>
          </Link>
        </div>
      </section>
    ))}



    {/* ✅ Modern Blog Section */}
    <section className="modern-blog-section">
      <h2 className="modern-blog-heading">Our Blog</h2>
      <p className="modern-blog-subheading">
        Stay updated with our latest insights, stories, and innovations.
      </p>

      <div className="modern-blog-grid">
        {[
          { img: "/images/blog1.jpg", title: "Exploring Future Tech" },
          { img: "/images/blog2.jpg", title: "How Security Impacts Growth" },
          { img: "/images/blog3.jpg", title: "Innovating with AI" },
          { img: "/images/blog4.jpg", title: "Web Trends 2025" },
        ].map((item, index) => (
          <div className="modern-blog-card" key={index}>
            <div className="blog-img-wrapper">
              <img src={item.img} alt={item.title} />
            </div>
            <h3>{item.title}</h3>
            <p>Read the latest insights on {item.title.toLowerCase()}.</p>
            <Link to="/blog" className="blog-readmore">Read More →</Link>
          </div>
        ))}
      </div>

      <div className="blog-btn-wrapper">
        <Link to="/blog">
          <button className="blog-btn">Visit Our Blog</button>
        </Link>
      </div>
    </section>

    {/* ⭐ PERFECT TESTIMONIAL CAROUSEL */}
    <section className="infinite-testimonial-section">
      <h2 className="modern-testimonial-heading">What Our Clients Say</h2>

      <div className="testimonial-carousel">

        {/* LEFT BUTTON */}
        <button className="carousel-btn left" onClick={prevSlide}>‹</button>

        {/* TRACK */}
        <div
          className="testimonial-track"
          ref={trackRef}
          style={{
            transform: window.innerWidth > 768 ? `translateX(-${index * 33.33}%)` : "none"
          }}
        >
          {infiniteList.map((item, i) => (
            <div className="testimonial-card" key={i}>
              <img src={item.img} alt={item.name} className="t-avatar" />
              <p className="t-text">"{item.text}"</p>
              <h4 className="t-name">{item.name}</h4>
              <span className="t-role">{item.role}</span>
            </div>
          ))}
        </div>

        {/* RIGHT BUTTON */}
        <button className="carousel-btn right" onClick={nextSlide}>›</button>
      </div>
    </section>

  </div>
);
}

export default Home; 
