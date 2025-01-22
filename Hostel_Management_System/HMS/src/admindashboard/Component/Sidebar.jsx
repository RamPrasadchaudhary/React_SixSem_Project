import React from "react";
import "../Style/Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserShield,
  faTachometerAlt,
  faUserGraduate,
  faUserTie,
  faUserCog,
  faBed,
  faExclamationTriangle,
  faCreditCard,
  faFileAlt,
  faCogs,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = ({ className, onSelect }) => {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <FontAwesomeIcon icon={faUserShield} /> Hostel Admin
      </div>
      <ul className={`"sidebar-menu"${className}`}>
        <li className="sidebar-item" onClick={() => onSelect("MainContent")}>
          <button className="sidebar-link">
            <FontAwesomeIcon icon={faTachometerAlt} /> Dashboard
          </button>
        </li>
        <li className="sidebar-item" onClick={() => onSelect("Student")}>
          <button className="sidebar-link">
            <FontAwesomeIcon icon={faUserGraduate} /> Manage Students
          </button>
        </li>
        <li className="sidebar-item" onClick={() => onSelect("ManageStaff")}>
          <button className="sidebar-link">
            <FontAwesomeIcon icon={faUserTie} /> Manage Staff
          </button>
        </li>
        <li className="sidebar-item" onClick={() => onSelect("ManageWardens")}>
          <button className="sidebar-link">
            <FontAwesomeIcon icon={faUserCog} /> Manage Wardens
          </button>
        </li>
        <li className="sidebar-item" onClick={() => onSelect("AdminDashBoard")}>
          <button className="sidebar-link">
            <FontAwesomeIcon icon={faBed} /> Manage Rooms
          </button>
        </li>
        <li className="sidebar-item" onClick={() => onSelect("Complaints")}>
          <button className="sidebar-link">
            <FontAwesomeIcon icon={faExclamationTriangle} /> Complaints
          </button>
        </li>
        <li className="sidebar-item" onClick={() => onSelect("Payments")}>
          <button className="sidebar-link">
            <FontAwesomeIcon icon={faCreditCard} /> Payments
          </button>
        </li>
        <li className="sidebar-item" onClick={() => onSelect("Reports")}>
          <button className="sidebar-link">
            <FontAwesomeIcon icon={faFileAlt} /> Reports
          </button>
        </li>
        <li className="sidebar-item" onClick={() => onSelect("Settings")}>
          <button className="sidebar-link">
            <FontAwesomeIcon icon={faCogs} /> Settings
          </button>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
