
import "../styles/Header.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="header">
    <h1 className="header-title">Complaints Management</h1>
    <nav className="header-nav">
      <Link to="/" className="nav-link">Dashboard</Link>
      <Link to="/complaints" className="nav-link">Complaints</Link>
    </nav>
  </header>
  );
}

export default Header;
