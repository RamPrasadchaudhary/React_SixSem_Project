import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <h1>Welcome Student!</h1>
      </header>

      <nav>
        <ul className="navbar">
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/payments">Payments</Link>
          </li>
          <li>
            <Link to="/complaints">Complaints</Link>
          </li>
        </ul>
      </nav>

      <main>{children}</main>

      <footer>
        <p>&copy; 2024 Hostel Management</p>
      </footer>
    </div>
  );
};

export default Layout;
