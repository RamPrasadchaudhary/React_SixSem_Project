import "../styles/staffComplaints.css";
import Header from "./Header";
import Footer from "./Footer";

function StaffComplaints() {
  return (
    <div className="staff-container">
      <Header />
      <div className="staff-content">
        <section className="date-filter">
          <h2>Select Date</h2>
          <input type="date" />
          <button>View Complaints</button>
          <button>Reset</button>
        </section>

        <section className="search-filter">
          <h2>Search by ID:</h2>
          <input type="text" placeholder="Enter Complaint ID" />
          <button>Search</button>
          <button>Reset</button>
        </section>

        <section className="complaints-list">
          <h2>Complaints List</h2>
          <table>
            <thead>
              <tr>
                <th>Complaint ID</th>
                <th>Room</th>
                <th>Status</th>
                <th>Date</th>
                <th>Time</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>101</td>
                <td>Room 319</td>
                <td className="in-progress">In Progress</td>
                <td>2025-01-31</td>
                <td>12:00 AM</td>
                <td>
                  <button className="view-button">View</button>
                </td>
              </tr>
              <tr>
                <td>102</td>
                <td>Room 302</td>
                <td className="pending">Pending</td>
                <td>2025-02-17</td>
                <td>03:00 AM</td>
                <td>
                  <button className="view-button">View</button>
                </td>
              </tr>
              <tr>
                <td>103</td>
                <td>Room 315</td>
                <td className="resolved">Resolved</td>
                <td>2024-12-31</td>
                <td>05:35 PM</td>
                <td>
                  <button className="view-button">View</button>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default StaffComplaints;
