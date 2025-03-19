import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Style/Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo Section */}
        <div className="logo-section">
          <img src="image1.png" alt="Logo" className="logo-img" />
          <h1 className="logo-title">Munnu Hostel</h1>
        </div>

        {/* Toggle Button */}
        <button className="menu-toggle" onClick={toggleMenu}>
          <span className="toggle-bar"></span>
          <span className="toggle-bar"></span>
          <span className="toggle-bar"></span>
        </button>

        {/* Navigation Menu */}
        <nav className={`navbar ${isMenuOpen ? "open" : ""}`}>
          <ul className="nav-links">
            <li>
              <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
            </li>
           
            <li>
              <Link to="/login" className="nav-link btn-primary" onClick={() => setIsMenuOpen(false)}>
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
