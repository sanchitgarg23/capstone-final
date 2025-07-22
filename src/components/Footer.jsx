import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Twitter, Linkedin, Instagram, Github } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <CheckCircle className="footer-icon" />
            </div>
            <span className="footer-title">TaskFlow</span>
            <p className="footer-description">
              Empowering teams worldwide to achieve their goals through better organization and collaboration.
            </p>
            <div className="footer-socials">
              <a href="#"><Twitter className="footer-social-icon" /></a>
              <a href="#"><Linkedin className="footer-social-icon" /></a>
              <a href="#"><Instagram className="footer-social-icon" /></a>
              <a href="#"><Github className="footer-social-icon" /></a>
            </div>
          </div>

          <div className="footer-section">
            <h3>Product</h3>
            <ul>
              <li><Link to="/features">Features</Link></li>
              <li><Link to="/pricing">Pricing</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Company</h3>
            <ul>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 TaskFlow. All rights reserved.</p>
          <div className="footer-links">
            <a >Privacy Policy</a>
            <a >Terms of Service</a>
            <a>Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
