<<<<<<< HEAD
import React, { useState } from "react";
import "../Style/ComplaintPage.css";
=======
import { useState } from "react";
import "../Style/ComplaintPage.css"; // Import the CSS file
>>>>>>> 5892cce2e1bcddae8fb517318292614160947c2f
import Heading from "./Heading";
const complaintsData = [
  {
    id: "electrician-box",
    category: "Electrician Complaints",
    complaints: [
      {
        name: "John Doe",
        date: "12th September 2024, Time: 10:00 AM",
        studentId: "12345",
        room: "101",
        description:
          "The room's light is flickering intermittently, and the switch seems to be malfunctioning.",
        status: "Pending",
      },
    ],
  },
  {
    id: "mess-box",
    category: "Mess Complaints",
    complaints: [
      {
        name: "Mark Smith",
        date: "10th September 2024, Time: 9:30 AM",
        studentId: "44556",
        room: "404",
        description: "The food served today was cold and undercooked.",
        status: "In Progress",
      },
    ],
  },
  {
    id: "wifi-box",
    category: "WiFi Complaints",
    complaints: [
      {
        name: "Sarah Lee",
        date: "15th September 2024, Time: 11:45 AM",
        studentId: "98765",
        room: "202",
        description: "The WiFi connection is unstable and keeps dropping.",
        status: "Pending",
      },
    ],
  },
  {
    id: "water-box",
    category: "Water Complaints",
    complaints: [],
  },
  {
    id: "sanitary-box",
    category: "Sanitary Complaints",
    complaints: [],
  },
  {
    id: "plumber-box",
    category: "Plumber Complaints",
    complaints: [],
  },
];

const ComplaintPage = () => {
  const [expandedBox, setExpandedBox] = useState(null);

  const toggleComplaints = (boxId) => {
    setExpandedBox((prev) => (prev === boxId ? null : boxId));
  };

  return (
    <>
      {" "}
      <div>
        <Heading
          title="Complaints Record"
          subtitle="Manage all your Complaints data in one place"
        />
      </div>
      <div className="main-content">
        <div className="complaints-dashboard">
          {complaintsData.map((category) => (
            <div className="complaint-box" key={category.id} id={category.id}>
              <div
                className="complaint-heading"
                onClick={() => toggleComplaints(category.id)}
              >
                <h2>{category.category}</h2>
                <button
                  className="toggle-button"
                  style={{ marginLeft: "auto" }}
                >
                  {expandedBox === category.id ? "\u25B2" : "\u25BC"}
                </button>
              </div>
              {expandedBox === category.id && (
                <div className="complaint-details">
                  {category.complaints.length > 0 ? (
                    category.complaints.map((complaint, index) => (
                      <div className="complaint" key={index}>
                        <p>
                          <strong>Complaint by:</strong>{" "}
                          <span>{complaint.name}</span>
                        </p>
                        <p>
                          <strong>Date:</strong> <span>{complaint.date}</span>
                        </p>
                        <p>
                          <strong>Student ID:</strong>{" "}
                          <span>{complaint.studentId}</span>
                        </p>
                        <p>
                          <strong>Room Number:</strong>{" "}
                          <span>{complaint.room}</span>
                        </p>
                        <p>
                          <strong>Description:</strong>{" "}
                          <span>{complaint.description}</span>
                        </p>
                        <p>
                          <strong>Status:</strong>{" "}
                          <span
                            className={`status ${complaint.status
                              .toLowerCase()
                              .replace(" ", "-")}`}
                          >
                            {complaint.status}
                          </span>
                        </p>
                        <button className="view-details-btn">
                          View Details
                        </button>
                      </div>
                    ))
                  ) : (
                    <p className="no-complaints">No complaints available.</p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ComplaintPage;
