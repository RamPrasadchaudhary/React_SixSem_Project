import React from 'react';
import '../Style/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>About Us</h4>
          <ul>
            <li><a href="#">Our Story</a></li>
            <li><a href="#">Our Team</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Help & Support</h4>
          <ul>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Terms & Conditions</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <ul>
            <li><a href="#" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook" aria-hidden="true"></i> Facebook</a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter" aria-hidden="true"></i> Twitter</a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram" aria-hidden="true"></i> Instagram</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Newsletter</h4>
          <p>Stay up to date with our latest news and updates.</p>
          <form>
            <input type="email" placeholder="Enter your email address" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Company Name. All rights reserved.</p>
        <ul>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Cookies Policy</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;