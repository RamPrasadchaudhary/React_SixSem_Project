import { Link } from "react-router-dom";
import "../styles/header.css";

function Header() {
  return (
    <header className="staff-header">
      <div className="header-content">
        <h1>Staff Portal</h1>
        <nav className="staff-nav">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/complaints">Complaints</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
