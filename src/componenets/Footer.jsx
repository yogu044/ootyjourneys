import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';
import "../css/footer.css";
import image from "../assets/logo.png";
import { Link } from 'react-router-dom';

export default function Footer() {
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
              Discover the beauty of Ooty with our carefully curated hill station experiences.
            </p>
          </div>

          {/* Contact */}
          <div className="footer-section">
            <h4 className="footer-heading">Contact Us</h4>
            <div className="footer-list">
              <div className="footer-item"><Phone className="icon" /> +91 98945 99399</div>
              <div className="footer-item"><Mail className="icon" /> ootyjourneys@gmail.com</div>
              <div className="footer-item"><MapPin className="icon" /> Ooty</div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <div className="footer-links">
              <Link to="/activity">Hill Station Tours</Link>
              <Link to="/activity">Tea Garden Visits</Link>
              <Link to="/activity">Botanical Gardens</Link>
              <Link to="/activity">Lake Boating</Link>
            </div>
          </div>

          {/* Social */}
          <div className="footer-section">
            <h4 className="footer-heading">Follow Us</h4>
            <div className="footer-socials">
              <a href="https://www.facebook.com/profile.php?id=61585734669548" target="_blank" rel="noreferrer">
                <Facebook />
              </a>
              <a href="https://www.instagram.com/ootyjourneys/" target="_blank" rel="noreferrer">
                <Instagram />
              </a>
            </div>
            <p className="footer-note">
              Join our community for eco-travel inspiration.
            </p>
          </div>

        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <p>© 2026 OotyJourneys. All rights reserved.</p>
        </div>

        <div className="footer-legal">
          <Link to="/terms" className="legal-link">Terms & Conditions</Link>
          <span className="legal-separator">|</span>
          <Link to="/privacy" className="legal-link">Privacy Policy</Link>
        </div>

      </div>
    </footer>
  );
}
