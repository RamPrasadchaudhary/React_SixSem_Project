import React, { useState } from "react";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import Student from "./Student";
import ManageStaff from "./ManageStaff";
import Room from "./Room";
import "../Style/App1.css";
import ManageWardens from "./ManageWardens";
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
      case "Room":
        return <Room />;
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