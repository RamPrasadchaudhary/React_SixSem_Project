import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/complaintstyles.css";

const complaintsData = [
    { id: 201, room: "Room 101", status: "Pending", date: "2024-08-26", time: "09:30 AM" },
    { id: 202, room: "Room 102", status: "Resolved", date: "2024-08-25", time: "11:00 AM" },
    { id: 203, room: "Room 103", status: "In Progress", date: "2024-08-24", time: "02:15 PM" },
    { id: 204, room: "Room 104", status: "Pending", date: "2024-08-26", time: "09:40 AM" },
    { id: 205, room: "Room 105", status: "Pending", date: "2024-08-26", time: "10:30 AM" },
  ];

  
function Complaintstaff() {
  const [complaints, setComplaints] = useState(complaintsData);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    const filteredData = complaintsData.filter(
      (complaint) =>
        complaint.id.toString().includes(searchTerm) &&
        (selectedDate ? complaint.date === selectedDate : true)
    );
    setComplaints(filteredData);
  };

  const handleReset = () => {
    setSearchTerm("");
    setSelectedDate("");
    setComplaints(complaintsData);
  };

  const handleDelete = (id) => {
    const updatedComplaints = complaints.filter((complaint) => complaint.id !== id);
    setComplaints(updatedComplaints);
  };

  return (
    <div className="complaints-page">
      <h2 className="page-title">Complaints List</h2>

      <div className="filter-section">
        <div className="filter-group">
          <label className="filter-label">Select Date:</label>
          <input
            type="date"
            className="filter-input"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
          <button className="filter-btn" onClick={handleSearch}>View Complaints</button>
          <button className="filter-btn reset" onClick={handleReset}>Reset</button>
        </div>

        <div className="search-group">
          <label className="search-label">Search by ID:</label>
          <input
            type="text"
            className="search-input"
            placeholder="Enter Complaint ID"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="search-btn" onClick={handleSearch}>Search</button>
          <button className="search-btn reset" onClick={handleReset}>Reset</button>
        </div>
      </div>

      <div className="table-section">
        <table className="complaints-table">
          <thead>
            <tr>
              <th>Complaint ID</th>
              <th>Room</th>
              <th>Status</th>
              <th>Date</th>
              <th>Time</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {complaints.map((complaint) => (
              <tr key={complaint.id}>
                <td>{complaint.id}</td>
                <td>{complaint.room}</td>
                <td className={`status ${complaint.status.toLowerCase()}`}>
                  {complaint.status}
                </td>
                <td>{complaint.date}</td>
                <td>{complaint.time}</td>
                <td>
                  <button
                    className="details-btn"
                    onClick={() => navigate(`/complaints/${complaint.id}`)}
                  >
                    View Details
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(complaint.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Complaintstaff;
