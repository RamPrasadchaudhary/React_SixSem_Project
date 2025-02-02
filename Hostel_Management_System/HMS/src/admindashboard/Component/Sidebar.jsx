import React from "react";
import { NavLink } from "react-router-dom";
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

const Sidebar = ({ className, toggleSidebar }) => {
  return (
    <aside className={`sidebar ${className}`}>
      <div className="sidebar-brand">
        <FontAwesomeIcon icon={faUserShield} /> Hostel Admin
      </div>
      <ul className="sidebar-menu">
        <li className="sidebar-item">
          <NavLink to="/" exact className="sidebar-link" activeClassName="active">
            <FontAwesomeIcon icon={faTachometerAlt} /> Dashboard
          </NavLink>
        </li>
        <li className="sidebar-item">
          <NavLink to="/student" className="sidebar-link" activeClassName="active">
            <FontAwesomeIcon icon={faUserGraduate} /> Manage Students
          </NavLink>
        </li>
        <li className="sidebar-item">
          <NavLink to="/manage-staff" className="sidebar-link" activeClassName="active">
            <FontAwesomeIcon icon={faUserTie} /> Manage Staff
          </NavLink>
        </li>
        <li className="sidebar-item">
          <NavLink to="/manage-wardens" className="sidebar-link" activeClassName="active">
            <FontAwesomeIcon icon={faUserCog} /> Manage Wardens
          </NavLink>
        </li>
        <li className="sidebar-item">
          <NavLink to="/room-management" className="sidebar-link" activeClassName="active">
            <FontAwesomeIcon icon={faBed} /> Manage Rooms
          </NavLink>
        </li>
        <li className="sidebar-item">
          <NavLink to="/complaints" className="sidebar-link" activeClassName="active">
            <FontAwesomeIcon icon={faExclamationTriangle} /> Complaints
          </NavLink>
        </li>
        <li className="sidebar-item">
          <NavLink to="/payment" className="sidebar-link" activeClassName="active">
            <FontAwesomeIcon icon={faCreditCard} /> Payments
          </NavLink>
        </li>
        <li className="sidebar-item">
          <NavLink to="/report" className="sidebar-link" activeClassName="active">
            <FontAwesomeIcon icon={faFileAlt} /> Reports
          </NavLink>
        </li>
        <li className="sidebar-item">
          <NavLink to="/setting" className="sidebar-link" activeClassName="active">
            <FontAwesomeIcon icon={faCogs} /> Settings
          </NavLink>
        </li>
      </ul>

      {/* Toggle button for mobile view */}
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        ☰
      </button>
    </aside>
  );
};

export default Sidebar;
