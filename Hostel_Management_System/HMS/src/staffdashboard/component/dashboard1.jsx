
import "../styles/styles.css"; // External CSS file

const Dashboard = () => {
  return (
    <div className="dashboard-wrapper">
      {/* <header className="header">
        <h1>Staff Dashboard</h1>
        <a href="../../index.html" className="logout-btn">Logout</a>
      </header>

      <nav className="navbar">
        <ul>
          <li><a href="index.html" className="active">Dashboard</a></li>
          <li><a href="Complaints-by-Date.html">Complaint Details</a></li>
        </ul>
      </nav> */}

      <main className="dashboard-content">
        <section className="staff-profile">
          <h2>Staff Profile</h2>
          <div className="profile-pic">
            <img src="./Components/Images/user.jpeg" alt="Electrician" />
          </div>
          <p><strong>Name:</strong> Amarjeet Kumar</p>
          <p><strong>Position:</strong> Electrician</p>
          <p><strong>Email:</strong> Amarjeet@hostel.com</p>
          <p><strong>Phone Number:</strong> 9876543210</p>
        </section>

        <section className="complaint-overview">
          <h2>Complaint Overview</h2>
          <table className="overview-table">
            <thead>
              <tr>
                <th>Status</th>
                <th>Count</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Resolved</td>
                <td>30</td>
              </tr>
              <tr>
                <td>In Progress</td>
                <td>10</td>
              </tr>
              <tr>
                <td>Pending</td>
                <td>10</td>
              </tr>
              <tr>
                <td>Total Complaints</td>
                <td>50</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="recent-complaints">
          <h2>Recent Complaints</h2>
          <table className="complaints-table">
            <thead>
              <tr>
                <th>Complaint ID</th>
                <th>Room</th>
                <th>Status</th>
                <th>Date</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>101</td>
                <td>Room 304</td>
                <td>In Progress</td>
                <td>2024-08-25</td>
                <td>10:30 AM</td>
              </tr>
              <tr>
                <td>102</td>
                <td>Room 516</td>
                <td>Pending</td>
                <td>2024-08-24</td>
                <td>12:45 PM</td>
              </tr>
              <tr>
                <td>103</td>
                <td>Room 210</td>
                <td>Resolved</td>
                <td>2024-08-23</td>
                <td>02:00 PM</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2024 Hostel Management</p>
      </footer>
    </div>
  );
};

export default Dashboard;
