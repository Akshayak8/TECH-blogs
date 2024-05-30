import React from "react";
import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>Email: akshay9533384236@gmail.com</p>
            <p>Phone: +91 9533384236</p>
            <p>Address: 503123 NG-colony, Hyderabad, Telangana, India</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <a href="/">Home</a>
            <a href="/About">About</a>
            <a>Blogs</a>
            <a>Contact</a>
          </div>
          <div className="footer-section">
            <h3>Follow Us</h3>
            <div className="footer-socials">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
          <div className="footer-section">
            <h3>Subscribe to our Newsletter</h3>
            <form className="footer-newsletter">
              <input type="email" placeholder="Enter your email" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Your Website. All rights reserved.</p>
          <div className="footer-legal">
            <a href="/privacy-policy">Privacy Policy.</a>
            <a href="/terms-of-service">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
