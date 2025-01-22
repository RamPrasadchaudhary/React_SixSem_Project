import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEdit, faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";
import "../Style/ManageStaff.css"; // Import the CSS file
import Heading from "./Heading";
const ManageStaff = () => {
  const [staff, setStaff] = useState([
    {
      id: "STF001",
      name: "Amarjeet Kumar",
      role: "Electrician",
      joiningDate: "2024-01-15",
    },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRole, setSelectedRole] = useState("All Roles");

  const handleSearchChange = (e) => setSearchQuery(e.target.value);

  const handleRoleChange = (e) => setSelectedRole(e.target.value);

  const filteredStaff = staff.filter((person) =>
    person.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (selectedRole === "All Roles" || person.role.toLowerCase() === selectedRole.toLowerCase())
  );

  return (
    <>
       <div>
      <Heading title="Staff Record" subtitle="Manage all your Staff data in one place" />
      {/* Page content goes here */}
    </div>
    <div className="manage-staff-wrapper">
      <div className="manage-staff-container">
        <h1>Manage Staff</h1>
        <div className="staff-filters">
          <input
            type="text"
            placeholder="Search staff..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button className="search-button">
            <FontAwesomeIcon icon={faEye} /> Search
          </button>
          <button className="reset-button" onClick={() => setSearchQuery("")}>
            <FontAwesomeIcon icon={faTrash} /> Reset
          </button>
          <div className="filter-role">
            <select value={selectedRole} onChange={handleRoleChange}>
              <option value="All Roles">All Roles</option>
              <option value="Electrician">Electrician</option>
              <option value="Manager">Manager</option>
              <option value="Plumber">Plumber</option>
            </select>
          </div>
          <button className="add-staff-button">
            <FontAwesomeIcon icon={faPlus} /> Add New Staff
          </button>
        </div>
        <div className="staff-list">
          {filteredStaff.length > 0 ? (
            <table className="staff-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Role</th>
                  <th>Joining Date</th>
                  <th>Actions</th>
                
                 
                </tr>
              </thead>
              <tbody>
                {filteredStaff.map((person) => (
                  <tr key={person.id}>
                    <td>{person.id}</td>
                    <td>{person.name}</td>
                    <td>{person.role}</td>
                    <td>{person.joiningDate}</td>
                    <td>
                      <button className="action-button view">
                        <FontAwesomeIcon icon={faEye} /> View
                      </button>
                      <button className="action-button edit">
                        <FontAwesomeIcon icon={faEdit} /> Edit
                      </button>
                      <button className="action-button delete">
                        <FontAwesomeIcon icon={faTrash} /> Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No staff found.</p>
          )}
        </div>
      </div>
    </div>

    </>
  );
};

export default ManageStaff;
