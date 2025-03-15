import "../styles/style.css";
import {
  FaUser,
  FaBullhorn,
  FaLink,
  FaCalendarCheck,
  FaClipboardList,
  FaPencilAlt,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import Layout from "./layout";

const MainDashboard = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogout = () => {
    // Add any logout logic here (e.g., clearing session, tokens, etc.)
    console.log("User logged out");

    // Navigate to the Home page
    navigate("/home");
  };

  return (
    <Layout>
      <div className="container">
        <section id="dashboard">
          {/* Buttons Container */}
          <div className="button-container">
            <Link to="/edit-profile" className="edit-profile-btn">
              Edit Profile
            </Link>
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </div>

          {/* Profile Summary Section */}
          <div className="section profile-summary">
            <h2>
              <FaUser /> <span className="shiny-text">Profile Details</span>
            </h2>
            <div className="profile-pic">
              <img src="/Images/user.jpeg" alt="Student Picture" />
            </div>
            <p>
              <strong>Name:</strong> Ashish Kumar Sah
            </p>
            <p>
              <strong>Father's Name:</strong> Susil Kumar Sah
            </p>
            <p>
              <strong>Room Allotted:</strong> 319
            </p>
            <p>
              <strong>Admission Date:</strong> 2022-09-25
            </p>
            <p>
              <strong>Email:</strong> ashsah.cs.eng@gmail.com
            </p>
            <p>
              <strong>Phone Number:</strong> +91 95258 25041
            </p>
          </div>

          {/* Announcements Section */}
          <div className="section announcements">
            <h2>
              <FaBullhorn /> <span className="shiny-text">Announcements</span>
            </h2>
            <ul>
              <li>Reminder: Hostel fees are due by the end of the month.</li>
              <li>Maintenance work will be carried out on December 10th.</li>
              <li>Annual hostel meet on February 30th.</li>
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
        </section>
      </div>
    </Layout>
  );
};

export default MainDashboard;
