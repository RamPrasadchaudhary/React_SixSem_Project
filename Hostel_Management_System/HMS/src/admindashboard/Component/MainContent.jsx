import React from "react";
import "../Style/MainContent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Heading from "./Heading";
import {
  faUsers,
  faUserGraduate,
  faUserTie,
  faUserCog,
  faTools,
} from "@fortawesome/free-solid-svg-icons";

const MainContent = () => {
  return (
    <>
      <Heading
          title="Admin Record"
          subtitle="Manage all your student data in one place"
        />
     
    <div className="main-content">
     

      <div className="dashboard-overview">
        <div className="overview-card">
          <FontAwesomeIcon icon={faUsers} />
          <div className="overview-info">
            <h3>150</h3>
            <p>Total Users</p>
          </div>
        </div>
        <div className="overview-card">
          <FontAwesomeIcon icon={faUserGraduate} />
          <div className="overview-info">
            <h3>80</h3>
            <p>Students</p>
          </div>
        </div>
        <div className="overview-card">
          <FontAwesomeIcon icon={faUserTie} />
          <div className="overview-info">
            <h3>20</h3>
            <p>Staff Members</p>
          </div>
        </div>
        <div className="overview-card">
          <FontAwesomeIcon icon={faUserCog} />
          <div className="overview-info">
            <h3>5</h3>
            <p>Wardens</p>
          </div>
        </div>
        <div className="overview-card">
          <FontAwesomeIcon icon={faTools} />
          <div className="overview-info">
            <h3>5</h3>
            <p>Maintenance Requests</p>
          </div>
        </div>
        
      </div>

      <div className="section-content">
        <h2>Welcome, Admin!</h2>
        <p>Select a menu item from the left to get started.</p>
      </div>
    </div>
    </>
  );
};

export default MainContent;
