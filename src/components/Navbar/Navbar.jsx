import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/Securenlogo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      
      {/* ===== LOGO SECTION ===== */}
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo-img" />
      </div>

      {/* ===== DESKTOP NAVIGATION ===== */}
      <ul className="navList desktopNav">
        <li><NavLink to="/" onClick={closeMenu} className="navLink">Home</NavLink></li>
        <li><NavLink to="/about" onClick={closeMenu} className="navLink">About Us</NavLink></li>
        <li><NavLink to="/services" onClick={closeMenu} className="navLink">Services</NavLink></li>
        <li><NavLink to="/solutions" onClick={closeMenu} className="navLink">Solutions</NavLink></li>
        <li><NavLink to="/industries" onClick={closeMenu} className="navLink">Industries</NavLink></li>
        <li><NavLink to="/blog" onClick={closeMenu} className="navLink">Blog</NavLink></li>
        <li><NavLink to="/careers" onClick={closeMenu} className="navLink">Careers</NavLink></li>
        <li><NavLink to="/contact" onClick={closeMenu} className="navLink">Contact</NavLink></li>
      </ul>

      {/* ===== HAMBURGER MENU ===== */}
      <div className="hamburger" onClick={toggleMenu}>☰</div>

      {/* ===== MOBILE MENU ===== */}
      <div className={`mobileMenu ${isOpen ? "open" : ""}`}>
        <button className="closeBtn" onClick={toggleMenu}>×</button>

        <ul className="mobileNavList">
          <li><NavLink to="/" onClick={closeMenu} className="navLink">Home</NavLink></li>
          <li><NavLink to="/about" onClick={closeMenu} className="navLink">About Us</NavLink></li>
          <li><NavLink to="/services" onClick={closeMenu} className="navLink">Services</NavLink></li>
          <li><NavLink to="/solutions" onClick={closeMenu} className="navLink">Solutions</NavLink></li>
          <li><NavLink to="/industries" onClick={closeMenu} className="navLink">Industries</NavLink></li>
          <li><NavLink to="/blog" onClick={closeMenu} className="navLink">Blog</NavLink></li>
          <li><NavLink to="/careers" onClick={closeMenu} className="navLink">Careers</NavLink></li>
          <li><NavLink to="/contact" onClick={closeMenu} className="navLink">Contact</NavLink></li>
        </ul>
      </div>

    </nav>
  );
}
