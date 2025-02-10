import "../styles/style.css";
import { FaUser, FaBullhorn, FaLink, FaCalendarCheck, FaClipboardList, FaPencilAlt, FaClock } from "react-icons/fa";

import { Link } from "react-router-dom";

const MainDashboard = () => {
  return (
    <div>
      {/* Loader HTML */}
      {/* <div className="loader-wrapper">
        <div className="card">
          <div className="loader">
            <p>loading</p>
            <div className="words">
              <span className="word">Profile</span>
              <span className="word">Fee Receipts</span>
              <span className="word">Complaints</span>
              <span className="word">Payments</span>
            </div>
          </div>
        </div>
      </div> */}

      {/* Main Content */}
      <header>
        <h1>Student Dashboard</h1>
      </header>

      <nav>
        <ul className="navbar">
          <li>
            <Link to="/" className="active">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/payments">Payments</Link>
          </li>
          <li>
            <Link to="/complaints">Complaints</Link>
          </li>
        </ul>
      </nav>

      <section id="dashboard">
        {/* Profile Summary Section */}
        <div className="section profile-summary">
          <Link to="/edit-profile" className="edit-profile-btn">
            Edit Profile
          </Link>
          <Link to="/logout" className="logout-btn">
            Logout
          </Link>
          <h2>
            <FaUser /> <span className="shiny-text">Profile Details</span>
          </h2>
          <div className="profile-pic">
            <img src="/Images/user.jpeg" alt="Student Picture" />
          </div>
          <p>
            <strong>Name:</strong> Ashish Raj
          </p>
          <p>
            <strong>Father Name:</strong> Rajesh Kumar Verma
          </p>
          <p>
            <strong>Room Allotted:</strong> 516
          </p>
          <p>
            <strong>Admission Date:</strong> 2024-01-15
          </p>
          <p>
            <strong>Email:</strong> ashishraulin@gmail.com
          </p>
          <p>
            <strong>Phone Number:</strong> 1234567890
          </p>
        </div>

        {/* Announcements Section */}
        <div className="section announcements">
          <h2>
            <FaBullhorn /> <span className="shiny-text">Announcements</span>
          </h2>
          <ul>
            <li>Reminder: Hostel fees are due by the end of the month.</li>
            <li>Maintenance work will be carried out on September 10th.</li>
            <li>Annual hostel meet on August 30th.</li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div className="section quick-links">
          <h2>
            <FaLink /> <span className="shiny-text">Quick Links</span>
          </h2>
          <div className="quick-links-container">
            <Link to="/payments" className="quick-link">
              <FaCalendarCheck />
              <span>View Payment History</span>
            </Link>
            <Link to="/complaints" className="quick-link">
              <FaClipboardList />
              <span>Check Complaint Status</span>
            </Link>
            <Link to="/complaints" className="quick-link">
              <FaPencilAlt />
              <span>File a New Complaint</span>
            </Link>
          </div>
        </div>

        {/* Recent Activity Section */}
        <div className="section recent-activity">
          <h2>
            <FaClock /> <span className="shiny-text">Recent Activity</span>
          </h2>
          <ul>
            <li>
              Payment made for July 2024 - <span>Completed</span>
            </li>
            <li>
              Complaint filed regarding room maintenance -{" "}
              <span>In Progress</span>
            </li>
            <li>
              Payment made for June 2024 - <span>Completed</span>
            </li>
            <li>
              Updated profile information - <span>Completed</span>
            </li>
          </ul>
        </div>
      </section>

      <footer>
        <p>&copy; 2024 Hostel Management</p>
      </footer>
    </div>
  );
};

export default MainDashboard;
