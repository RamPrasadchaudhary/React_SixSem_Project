import React from "react";
import "../styles/staffComplaints.css";
import { Link } from "react-router-dom";

function StaffComplaints() {
  return (
    <div className="complaints-container">
      <header className="complaints-header">
        <h1>Complaints List</h1>
      </header>
      <nav className="complaints-nav">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/complaints" className="active">Complaints</Link>
      </nav>
      <section className="date-filter">
        <h2>Select Date</h2>
        <input type="date" />
        <button>View Complaints</button>
        <button>Reset</button>
      </section>
      <section className="search-filter">
        <h2>Search by ID :</h2>
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
            <tr><td>101</td><td>Room 319</td><td className="in-progress">In Progress</td><td>2025-01-31</td><td>12:00 AM</td><td><button>View</button></td></tr>
            <tr><td>102</td><td>Room 302</td><td className="pending">Pending</td><td>2025-02-17</td><td>03:00 AM</td><td><button>View</button></td></tr>
            <tr><td>103</td><td>Room 315</td><td className="resolved">Resolved</td><td>2024-12-31</td><td>05:35 PM</td><td><button>View</button></td></tr>
            <tr><td>104</td><td>Room 320</td><td className="pending">Pending</td><td>2025-02-17</td><td>03:00 AM</td><td><button>View</button></td></tr>
            <tr><td>105</td><td>Room 311</td><td className="resolved">Resolved</td><td>2024-12-31</td><td>05:35 PM</td><td><button>View</button></td></tr>
          </tbody>
        </table>
      
      </section>
    </div>
  );
}
  
export default StaffComplaints;
