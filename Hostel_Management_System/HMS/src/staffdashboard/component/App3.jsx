import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import StaffDashboard from "./staffdashboard";
import StaffComplaints from "./staffcomplaint";
import "../styles/navbar.css";

function App3() {
  return (
    <Router>
      {/* <div className="navbar">
        <Link to="/dashboard" className="nav-link">Dashboard</Link>
        <Link to="/complaints" className="nav-link">Complaints</Link>
      </div> */}
      <Routes>
        <Route path="/dashboard" element={<StaffDashboard />} />
        <Route path="/complaints" element={<StaffComplaints />} />
        <Route path="/" element={<StaffDashboard />} />
      </Routes>
    </Router>
  );
}

export default App3;
