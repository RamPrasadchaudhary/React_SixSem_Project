import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import "../Style/Student.css"; // Import the CSS file
import Heading from "./Heading";
const Student = () => {
  const [students, setStudents] = useState([
    {
      id: "001",
      name: "Ashish Raj",
      roomNo: 515,
      branch: "Computer Science (Data Science)",
      contact: 1234567890,
      admissionDate: "2024-09-01",
    },
    {
      id: "002",
      name: "Rishu Kumar",
      roomNo: 516,
      branch: "Electrical",
      contact: 987654321,
      admissionDate: "2024-09-01",
    },

    {
      id: "003",
      name: "Rishu Kumar",
      roomNo: 516,
      branch: "Computer",
      contact: 987654321,
      admissionDate: "2024-09-01",
    },

    {
      id: "004",
      name: "Rishu Kumar",
      roomNo: 516,
      branch: "Science",
      contact: 987654321,
      admissionDate: "2024-09-01",
    },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBranch, setSelectedBranch] = useState("All Branches");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleBranchChange = (e) => {
    setSelectedBranch(e.target.value);
  };

  const filteredStudents = students.filter((student) => {
    return (
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedBranch === "All Branches" ||
        student.branch.toLowerCase().includes(selectedBranch.toLowerCase()))
    );
  });

  return (
    <>
    <div>
      <Heading title="Student Record" subtitle="Manage all your student data in one place" />
      {/* Page content goes here */}
    </div>
      <div className="container">
        {/* <h1>Manage Students</h1> */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search by name or ID"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button className="search-button">Search</button>
          <button className="reset-button" onClick={() => setSearchQuery("")}>
            Reset
          </button>
        </div>
        <div className="filter-branch">
          <label htmlFor="branch-select">Filter by Branch:</label>
          <select
            id="branch-select"
            value={selectedBranch}
            onChange={handleBranchChange}
          >
            <option value="All Branches">All Branches</option>
            <option value="Computer Science (Data Science)">
              Computer Science (Data Science)
            </option>
            <option value="Electrical">Electrical</option>
          </select>
        </div>
        <div className="add-student-link">
          <a href="/add-student" className="add-student-button">
            Add Student
          </a>
        </div>
        <div className="student-list">
          {filteredStudents.length > 0 ? (
            <table className="student-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Room No</th>
                  <th>Branch</th>
                  <th>Contact</th>
                  <th>Admission Date</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {filteredStudents.map((student) => (
                  <tr key={student.id}>
                    <td>{student.id}</td>
                    <td>{student.name}</td>
                    <td>{student.roomNo}</td>
                    <td>{student.branch}</td>
                    <td>{student.contact}</td>
                    <td>{student.admissionDate}</td>
                    <td>
                      <a href="#" className="edit-link">
                        <FontAwesomeIcon icon={faEdit} className="icon" /> Edit
                      </a>
                    </td>
                    <td>
                      <a href="#" className="delete-link">
                        <FontAwesomeIcon icon={faTrash} className="icon" />{" "}
                        Delete
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No students found.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Student;
