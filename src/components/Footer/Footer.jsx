// src/components/Footer/Footer.jsx
import { NavLink } from "react-router-dom";
import { FaInstagram, FaLinkedin, FaWhatsapp, FaFacebook } from "react-icons/fa";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import "./Footer.css";
import logo from "../../assets/Securenlogo.png";

export default function Footer() {
  return (
    <footer className="sn-footer">
      <div className="sn-footer-container">

        {/* BRAND SECTION */}
        <div className="sn-footer-brand">
          <img src={logo} alt="logo" className="sn-footer-logo" />
          <p className="sn-footer-desc">
            SecureNode delivers secure, scalable and modern digital solutions
            crafted with precision and trust.
          </p>

          <div className="sn-footer-socials">
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaWhatsapp /></a>
          </div>
        </div>

        {/* WHO ARE WE (replaces 'Services') */}
        <div className="sn-footer-col">
          <h4>Who are we</h4>
          <ul>
            <li><NavLink to="/about">About us</NavLink></li>
            <li><NavLink to="/privacy">Privacy Policy</NavLink></li>
            <li><NavLink to="/terms">Terms &amp; Condition</NavLink></li>
            <li><NavLink to="/pricing">Pricing and Refund Policy</NavLink></li>
          </ul>
        </div>

        {/* COMPANY LINKS */}
        <div className="sn-footer-col">
          <h4>Company</h4>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/services">Services</NavLink></li>
            <li><NavLink to="/solutions">Solutions</NavLink></li>
            <li><NavLink to="/industries">Industries</NavLink></li>
            <li><NavLink to="/careers">Careers</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="sn-footer-col">
          <h4>Contact</h4>
          <ul>
            <li>
              <a
                href="https://www.google.com/maps?q=Ghaziabad,+Uttar+Pradesh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MdLocationOn /> Ghaziabad, Uttar Pradesh
              </a>
            </li>

            <li>
              <a
                href="tel:+9193547956497"
                className="flex items-center gap-2"
              >
                <MdPhone /> +91 93547956497
              </a>
            </li>

            <li>
              <a
                href="mailto:audit@securenode.co.in"
                className="flex items-center gap-2"
              >
                <MdEmail /> audit@securenode.co.in
              </a>
            </li>
          </ul>
        </div>


      </div>

      <div className="sn-footer-bottom">
        © 2025 SecureNode — All Rights Reserved.
      </div>
    </footer>
  );
}

