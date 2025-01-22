import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEdit, faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";
import "../Style/ManageStaff.css"; // Import the CSS file
import Heading from "./Heading";

const ManageStaff = () => {
  const [staff, setStaff] = useState([
    { id: "STF001", name: "Amarjeet Kumar", role: "Electrician", joiningDate: "2024-01-15" },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(""); // "add", "edit", "view"
  const [currentStaff, setCurrentStaff] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRole, setSelectedRole] = useState("All Roles");

  const handleSearchChange = (e) => setSearchQuery(e.target.value);

  const handleRoleChange = (e) => setSelectedRole(e.target.value);

  const filteredStaff = staff.filter(
    (person) =>
      person.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedRole === "All Roles" || person.role.toLowerCase() === selectedRole.toLowerCase())
  );

  const handleOpenModal = (type, staffMember = null) => {
    setModalType(type);
    setCurrentStaff(staffMember);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentStaff(null);
  };

  const handleAddStaff = (newStaff) => {
    setStaff([...staff, newStaff]);
    handleCloseModal();
  };

  const handleEditStaff = (updatedStaff) => {
    setStaff(staff.map((s) => (s.id === updatedStaff.id ? updatedStaff : s)));
    handleCloseModal();
  };

  const handleDeleteStaff = (id) => {
    if (window.confirm("Are you sure you want to delete this staff member?")) {
      setStaff(staff.filter((s) => s.id !== id));
    }
  };

  return (
    <>
      <div>
        <Heading title="Staff Record" subtitle="Manage all your Staff data in one place" />
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
            <button
              className="add-staff-button"
              onClick={() => handleOpenModal("add")}
            >
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
                        <button
                          className="action-button view"
                          onClick={() => handleOpenModal("view", person)}
                        >
                          <FontAwesomeIcon icon={faEye} /> View
                        </button>
                        <button
                          className="action-button edit"
                          onClick={() => handleOpenModal("edit", person)}
                        >
                          <FontAwesomeIcon icon={faEdit} /> Edit
                        </button>
                        <button
                          className="action-button delete"
                          onClick={() => handleDeleteStaff(person.id)}
                        >
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

      {isModalOpen && (
        <Modal
          type={modalType}
          staff={currentStaff}
          onClose={handleCloseModal}
          onAdd={handleAddStaff}
          onEdit={handleEditStaff}
        />
      )}
    </>
  );
};

const Modal = ({ type, staff, onClose, onAdd, onEdit }) => {
  const [formData, setFormData] = useState(
    staff || { id: "", name: "", role: "", joiningDate: "" }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    if (type === "add") {
      onAdd({ ...formData, id: `STF${Date.now()}` });
    } else if (type === "edit") {
      onEdit(formData);
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>{type === "add" ? "Add New Staff" : type === "edit" ? "Edit Staff" : "View Staff"}</h3>
        {type === "view" ? (
          <>
            <p><strong>ID:</strong> {staff.id}</p>
            <p><strong>Name:</strong> {staff.name}</p>
            <p><strong>Role:</strong> {staff.role}</p>
            <p><strong>Joining Date:</strong> {staff.joiningDate}</p>
            <button className="cancel-btn" onClick={onClose}>Close</button>
          </>
        ) : (
          <>
            <div className="form-group">
              <label>ID</label>
              <input
                type="text"
                name="id"
                value={formData.id}
                onChange={handleChange}
                disabled={type === "edit"}
              />
            </div>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Role</label>
              <input
                type="text"
                name="role"
                value={formData.role}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Joining Date</label>
              <input
                type="date"
                name="joiningDate"
                value={formData.joiningDate}
                onChange={handleChange}
              />
            </div>
            <div className="modal-buttons">
              <button className="add-btn" onClick={handleSubmit}>
                {type === "add" ? "Add" : "Save"}
              </button>
              <button className="cancel-btn" onClick={onClose}>
                Cancel
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ManageStaff;
