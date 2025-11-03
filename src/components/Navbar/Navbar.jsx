import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = !isOpen ? "hidden" : "auto"; // Prevent scroll when menu open
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <img src={logo} alt="SecureNode Logo" className="nav-logo" />
        <span className="logo-text">SecureNode</span>
      </div>

      {/* Transparent overlay when menu opens */}
      <div className={`overlay ${isOpen ? "show" : ""}`} onClick={closeMenu}></div>

      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/about" onClick={closeMenu}>About Us</Link>
        <Link to="/services" onClick={closeMenu}>Services</Link>
        <Link to="/solutions" onClick={closeMenu}>Solutions</Link>
        <Link to="/industries" onClick={closeMenu}>Industries</Link>
        <Link to="/blog" onClick={closeMenu}>Blog</Link>
        <Link to="/careers" onClick={closeMenu}>Careers</Link>
      </div>

      <div
        className={`hamburger ${isOpen ? "active" : ""}`}
        onClick={handleToggle}
      >
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </nav>
  );
}

export default Navbar;
