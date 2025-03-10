import React from "react";
import "../styles/staffDashboard.css";
import { Link } from "react-router-dom";

function StaffDashboard() {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Staff Dashboard</h1>
        <nav className="dashboard-nav">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/complaints">Complaints</Link>
        </nav>
      </header>
      <div className="logout-container">
        <button className="logout">Logout</button>
      </div>

      <section className="profile-section">
        <div className="profile-card">
          <img className="profile-pic" src="/profile.png" alt="Profile" />
          <p>
            <strong>Name:</strong> Raju Bhai
          </p>
          <p>
            <strong>Position:</strong> Mess Manager
          </p>
          <p>
            <strong>Email:</strong> raju.bhai@rku.ac.in
          </p>
          <p>
            <strong>Phone Number:</strong> +91 98111 95251
          </p>
        </div>
      </section>

      <section className="complaint-overview">
        <h2>Complaint Overview</h2>
        <table>
          <thead>
            <tr>
              <th>Status</th>
              <th>Count</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Resolved</td>
              <td className="resolved">30</td>
            </tr>
            <tr>
              <td>In Progress</td>
              <td className="in-progress">10</td>
            </tr>
            <tr>
              <td>Pending</td>
              <td className="pending">10</td>
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
        <table>
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
              <td>Room 319</td>
              <td className="in-progress">In Progress</td>
              <td>2025-01-31</td>
              <td>12:00 AM</td>
            </tr>
            <tr>
              <td>102</td>
              <td>Room 302</td>
              <td className="pending">Pending</td>
              <td>2025-02-17</td>
              <td>03:00 AM</td>
            </tr>
            <tr>
              <td>103</td>
              <td>Room 315</td>
              <td className="resolved">Resolved</td>
              <td>2024-12-31</td>
              <td>05:35 PM</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default StaffDashboard;
