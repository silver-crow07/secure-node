import React, { useEffect, useRef, useState } from "react";
import { Globe, Monitor, Briefcase, ShoppingBag, Settings, Shield, GraduationCap, HeartPulse, Landmark, ShieldCheck, Cloud, FileCog, Network } from "lucide-react";
import { Link } from "react-router-dom";
import HeroSection from "../../components/HeroSection/HeroSection";
import aboutImg from "../../assets/about.png";
import "./Home.css";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import service1 from "../../assets/service1.png";
import service2 from "../../assets/service2.png";
import service3 from "../../assets/service3.png";
import service4 from "../../assets/service4.png";

import SolutionCard from "../../components/SolutionCard/SolutionCard";
import solution1 from "../../assets/solution1.png";
import solution2 from "../../assets/solution2.png";
import solution3 from "../../assets/solution3.png";
import solution5 from "../../assets/solution5.png";


import industry1 from "../../assets/industry1.png";
import industry2 from "../../assets/industry2.png";
import industry3 from "../../assets/industry3.png";
import industry5 from "../../assets/industry5.png";


import blog1 from "../../assets/blog1.png";
import blog2 from "../../assets/blog2.png";
import blog3 from "../../assets/blog3.png";
import blog4 from "../../assets/blog4.png";
import user1 from "../../assets/user1.jpeg";
import user2 from "../../assets/user2.jpeg";
import user3 from "../../assets/user3.png";
import user4 from "../../assets/user4.jpeg";
import user5 from "../../assets/user5.jpeg";
import user6 from "../../assets/user6.jpeg";



const Home = () => {
  // update sections with ids for each card
  const sections = [
    {
      title: "Our Services",
      subtitle: "Explore what we offer to enhance your digital presence.",
      cards: [
        { id: "penetration-testing", title: "Penetration Testing", desc: "Identify vulnerabilities...", image: service1, link: "/services/penetration-testing", },

        { id: "vulnerability-assessment", title: "Vulnerability Assessment", desc: "Discover weak points...", image: service2, link: "/services/vulnerability-assessment", },

        { id: "cloud-security", title: "Cloud Security", desc: "Protect your cloud...", image: service3, link: "/services/cloud-security", },

        { id: "incident-response", title: "Incident Response", desc: "Handle cyber attacks fast...", image: service4, link: "/services/incident-response" },
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
          image: solution1,
        },
        {
          id: "network-security-solutions",
          title: "Network Security",
          desc: "Secure firewalls, intrusion prevention & zero trust.",
          image: solution2,
        },
        {
          id: "cloud-security-solutions",
          title: "Cloud Security",
          desc: "Protect your multi-cloud architecture & data.",
          image: solution3,
        },
        {
          id: "endpoint-application-security",
          title: "Endpoint & App Security",
          desc: "Secure devices & apps from malware & exploits.",
          image: solution5,
        },
      ],
    },
    {
      title: "Industries We Serve",
      subtitle: "Empowering businesses across multiple domains.",
      cards: [
        { id: "education", title: "Education", desc: "Transforming learning with innovative solutions.", image: industry3, },
        { id: "healthcare", title: "Healthcare", desc: "Delivering tech for better health and patient care.", image: industry2, },
        { id: "finance", title: "Finance", desc: "Securing transactions with modern digital infrastructure.", image: industry1, },
        { id: "ecommerce-industry", title: "E-Commerce", desc: "Safeguard payments & user data.", image: industry5, }


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
      img: user1
    },
    {
      text: "Professional, creative, and very reliable team!",
      name: "Rohit Sharma",
      role: "Founder",
      img: user2
    },
    {
      text: "Highly recommend for quality and on-time delivery.",
      name: "Sneha Verma",
      role: "Project Head",
      img: user3
    },
    {
      text: "Their team exceeded our expectations in every way!",
      name: "Vikas Patil",
      role: "Product Manager",
      img: user4
    },
    {
      text: "Amazing communication and fast delivery services!",
      name: "Ritu Shah",
      role: "Operations Head",
      img: user5
    },
    {
      text: "Quality work and very professional behavior.",
      name: "Aditya Mehta",
      role: "Entrepreneur",
      img: user6
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

  // RECOGNITION BANNER AUTO CAROUSEL — MOBILE ONLY (replace your old useEffect)
  useEffect(() => {
    let interval = null;

    const startAuto = () => {
      const track = document.querySelector(".stats-track");
      const cards = document.querySelectorAll(".stat-box");
      if (!track || cards.length === 0) return;

      let idx = 0;
      // ensure starting transform is correct
      track.style.transform = `translateX(0%)`;

      interval = setInterval(() => {
        idx = (idx + 1) % cards.length;
        track.style.transform = `translateX(-${idx * 100}%)`;
      }, 2500);
    };

    const stopAuto = () => {
      if (interval) {
        clearInterval(interval);
        interval = null;
      }
    };

    const handleResize = () => {
      // Run only on mobile (<= 768px)
      if (window.innerWidth <= 768) {
        if (!interval) startAuto();
      } else {
        stopAuto();
        // reset position on larger screens so desktop layout isn't transformed
        const track = document.querySelector(".stats-track");
        if (track) track.style.transform = "";
      }
    };

    // initial run
    handleResize();

    // watch for resizes / orientation change
    window.addEventListener("resize", handleResize);

    return () => {
      stopAuto();
      window.removeEventListener("resize", handleResize);
    };
  }, []);





  return (
    <div className="home-container">
      {/* ✅ Hero Section */}
      <HeroSection />

      {/* ✅ Recognition Banner */}
      <section className="recognition-banner">
        <h2 className="banner-subheading">Growing Fast with Secure Node</h2>
        <div className="stats-carousel">
          <div className="stats-track">
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

        const baseRoute =
          sIndex === 0 ? "/services" :
          sIndex === 1 ? "/solutions" :
          "/industries";

        return (
          <div className="scroll-card" key={card.id}>

            {/* ALWAYS SHOW IMAGE NOW */}
            <div className="scroll-card-img">
              <img src={card.image} alt={card.title} />
            </div>

            <h3>{card.title}</h3>
            <p>{card.desc}</p>

            <Link to={`${baseRoute}/${card.id}`} className="read-more-btn">
              Read More →
            </Link>
          </div>
        );
      })}
    </div>

    <div className="view-more-wrapper">
      <Link to={
        sIndex === 0 ? "/services" :
        sIndex === 1 ? "/solutions" :
        "/industries"
      }>
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
            { img: blog1, title: "Exploring Future Tech" },
            { img: blog2, title: "How Security Impacts Growth" },
            { img: blog3, title: "Innovating with AI" },
            { img: blog4, title: "Web Trends 2025" },
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
