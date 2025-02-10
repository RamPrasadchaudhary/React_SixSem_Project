import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/styles.css";

const Complaintstaff = () => {
  // Sample complaint data (replace with API data)
  const [complaints] = useState([
    { id: 201, room: "Room 101", status: "Pending", date: "2024-08-26", time: "09:30 AM" },
    { id: 202, room: "Room 102", status: "Resolved", date: "2024-08-25", time: "11:00 AM" },
    { id: 203, room: "Room 103", status: "In Progress", date: "2024-08-24", time: "02:15 PM" },
  ]);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  return (
    <section id="complaints-by-date">
      {/* Date Selection Section */}
      <div className="section date-selector">
        <h2>
          <i className="fa-solid fa-calendar-day"></i>
          <span className="shiny-text">Select Date</span>
        </h2>
        <form id="date-form">
          <label htmlFor="date">Choose a date:</label>
          <input type="date" id="date" name="date" />
          <button type="button">View Complaints</button>
          <button type="button">Reset</button>
        </form>
      </div>

      {/* Search by Complaint ID Section */}
      <div className="section search-bar">
        <h2>
          <i className="fa-solid fa-search"></i>
          <span className="shiny-text">Search by ID</span>
        </h2>
        <div id="search-area">
          <label htmlFor="search-id">Complaint ID:</label>
          <input type="number" id="search-id" name="search-id" placeholder="Enter Complaint ID" min="0" />
          <button>Search</button>
          <button>Reset</button>
        </div>
      </div>

      {/* Complaints Table */}
      <div className="section complaints-list">
        <h2>
          <i className="fa-solid fa-list"></i>
          <span className="shiny-text">Complaints List</span>
        </h2>
        <table className="complaints-table">
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
            {complaints.map((complaint) => (
              <tr key={complaint.id}>
                <td>{complaint.id}</td>
                <td>{complaint.room}</td>
                <td className={`status-${complaint.status.toLowerCase().replace(" ", "-")}`}>
                  {complaint.status}
                </td>
                <td>{complaint.date}</td>
                <td>{complaint.time}</td>
                <td>
                  <Link to={`/complaints/${complaint.id}`} className="details-btn">
                    View Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="pagination">
        <button onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}>Previous</button>
        <span>
          Page <input type="number" value={currentPage} min="1" max={totalPages} readOnly /> of {totalPages}
        </span>
        <button onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}>Next</button>
      </div>
    </section>
  );
};

export default Complaintstaff;
