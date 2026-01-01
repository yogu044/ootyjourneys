import React from 'react';
import { Leaf, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import "../css/footer.css"
import image from "../assets/logo.png"
import { useNavigate } from 'react-router-dom';



export default function Footer() {
  const navigate=useNavigate();
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Company Info */}
          <div className="footer-section">
            <div className="footer-brand">
              <img src={image} alt="logo" style={{ width: "90px", height: "64px" }} />
              <div>
                <h3 className="footer-title">Ooty Journeys</h3>
                <p className="footer-subtitle">Hill Station Adventures</p>
              </div>
            </div>
            <p className="footer-text">
              Discover the beauty of Ooty with our carefully curated hill station experiences. We're committed to showcasing the Queen of Hills in all its natural splendor.
            </p>
          </div>

        
          <div className="footer-section">
            <h4 className="footer-heading">Contact Us</h4>
            <div className="footer-list">
              <div className="footer-item">
                <Phone className="icon" />
                <span>+91 99441 94878</span>
              </div>
              <div className="footer-item">
                <Mail className="icon" />
                <span>ootyjourneys@gmail.com</span>
              </div>
              <div className="footer-item">
                <MapPin className="icon" />
                <span>Ooty</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <div className="footer-links">
              <a onClick={() => navigate("/activity")} style={{ cursor: "pointer" }}>Hill Station Tours</a>
              <a onClick={() => navigate("/activity")} style={{ cursor: "pointer" }}>Tea Garden Visits</a>
              <a onClick={() => navigate("/activity")} style={{ cursor: "pointer" }}>Botanical Gardens</a>
              <a onClick={() => navigate("/activity")} style={{ cursor: "pointer" }}>Lake Boating</a>
            </div>
          </div>

          {/* Social Media */}
          <div className="footer-section">
            <h4 className="footer-heading">Follow Us</h4>
            <div className="footer-socials">
              <a href="https://www.facebook.com/profile.php?id=61585734669548"><Facebook /></a>
              <a href="https://www.instagram.com/ootyjourneys/"><Instagram /></a>
              
            </div>
            <p className="footer-note">
              Join our community for eco-travel inspiration and sustainable adventure tips.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>© 2026 OotyJourneys. All rights reserved.</p>
        </div>
        <div className="footer-legal">
          <span onClick={() => navigate('/terms')} className="legal-link">
            Terms & Conditions
          </span>
          <span className="legal-separator">|</span>
          <span onClick={() => navigate('/privacy')} className="legal-link">
            Privacy Policy
          </span>
        </div>

      </div>
    </footer>
  );
}
