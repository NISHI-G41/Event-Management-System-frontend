import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
// import './Footer.css'; // We will create this file next

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main">
          {/* --- Brand Section --- */}
          <div className="footer-section footer-brand">
            <h2 className="footer-logo">🎉 EventHub</h2>
            <p>
              Your one-stop destination for discovering and booking amazing
              events. Join our community and never miss out.
            </p>
          </div>

          {/* --- Quick Links Section --- */}
          <div className="footer-section footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/events">All Events</Link></li>
              <li><Link to="/my-registrations">My Registrations</Link></li>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/register">Register</Link></li>
            </ul>
          </div>

          {/* --- Follow Us Section --- */}
          <div className="footer-section footer-social">
            <h4>Follow Us</h4>
            <p>Stay updated on our latest events and news.</p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* --- Bottom Bar --- */}
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} EventHub. All rights reserved.
              <img src="https://example.com/footer-logo.png" alt="EventHub Logo" className="footer-bottom-logo"/>
          </p>
          <div>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-of-service">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;