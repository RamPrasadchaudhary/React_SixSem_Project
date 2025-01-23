import React, { useState } from "react";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import Student from "./Student";
import ManageStaff from "./ManageStaff";
import RoomManagement from "./RoomManagement";
import ComplaintPage from "./ComplaintPage";
import "../Style/App1.css";
import ManageWardens from "./ManageWardens";
import Setting from "./Setting";
import Report from "./Report";
import Payment from "./Payment";
const App1 = () => {
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [selectedComponent, setSelectedComponent] = useState("MainContent");

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const renderMainContent = () => {
    switch (selectedComponent) {
      case "MainContent":
        return <MainContent />;
      case "Student":
        return <Student />;
      case "ManageStaff":
        return <ManageStaff />;
      case "ManageWardens":
        return <ManageWardens />;
      case "RoomManagement":
        return <RoomManagement />;
      case "ComplaintPage":
        return <ComplaintPage />;
      case "Setting":
        return <Setting />;
      case "Report":
        return <Report />;
      case "Payment":
        return <Payment />;
      default:
        return <MainContent />;
    }
  };

  return (
    <div className="app-container">
      <Sidebar
        className={`sidebar ${sidebarVisible ? "show" : ""}`}
        onSelect={(component) => setSelectedComponent(component)}
      />
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        ☰
      </button>
      <div className={`main-content ${sidebarVisible ? "shifted" : ""}`}>
        {renderMainContent()}
      </div>
    </div>
  );
};

export default App1;
