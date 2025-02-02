
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { useState } from "react";

import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import Student from "./Student";
import ManageStaff from "./ManageStaff";
import RoomManagement from "./RoomManagement";
import ComplaintPage from "./ComplaintPage";
import ManageWardens from "./ManageWardens";
import Setting from "./Setting";
import Report from "./Report";
import Payment from "./Payment";
import "../Style/App1.css";

const App1 = () => {
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <Router>
      <div className="app-container">
        <Sidebar
          className={`sidebar ${sidebarVisible ? "show" : "hide"}`}
          toggleSidebar={toggleSidebar}
        />
        <div className={`main-content ${sidebarVisible ? "shifted" : ""}`}>
          <Routes>
            {/* Define routes for different components */}
            <Route path="/" element={<MainContent />} />
            <Route path="/student" element={<Student />} />
            <Route path="/manage-staff" element={<ManageStaff />} />
            <Route path="/manage-wardens" element={<ManageWardens />} />
            <Route path="/room-management" element={<RoomManagement />} />
            <Route path="/complaints" element={<ComplaintPage />} />
            <Route path="/setting" element={<Setting />} />
            <Route path="/report" element={<Report />} />
            <Route path="/payment" element={<Payment />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App1;
