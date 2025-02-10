import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/styles.css"; // Import your CSS

const Header = ({ title }) => {
  const location = useLocation(); // Get current route

  return (
    <div>
      {/* Loader Section */}
      {/* <div className="loader-wrapper">
        <div className="card">
          <div className="loader">
            <p>Loading</p>
            <div className="words">
              <span className="word">Dashboard</span>
              <span className="word">Complaints</span>
            </div>
          </div>
        </div>
      </div> */}

      {/* Header */}
      <header>
        <h1>{title}</h1>
      </header>

      {/* Navigation Bar */}
      <nav>
        <ul className="navbar">
          <li>
            <Link to="/dashboard" className={location.pathname === "/dashboard" ? "active" : ""}>
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/complaints" className={location.pathname === "/complaints" ? "active" : ""}>
              Complaints
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
