import React, { useState } from "react";
import "../Style/ManageWardens.css";
import Heading from "./Heading";
const Warden = ({ id, name, contact, phone, onEdit, onRemove }) => {
  return (
    <div className="warden-card">
      <h3>Warden {id}</h3>
      <p>
        <strong>Name:</strong> {name}
      </p>
      <p>
        <strong>Contact:</strong> {contact}
      </p>
      <p>
        <strong>Phone:</strong> {phone}
      </p>
      <div className="warden-buttons">
        <button className="edit-btn" onClick={onEdit}>
          Edit
        </button>
        <button className="remove-btn" onClick={onRemove}>
          Remove
        </button>
      </div>
    </div>
  );
};

const ManageWardens = () => {
  const [wardens, setWardens] = useState([
    { id: 1, name: "Suman Kumar", contact: "kumarsuman@example.com", phone: "+91 12345 67890" },
    { id: 2, name: "Dheeraj Kumar", contact: "kumardheeraj@example.com", phone: "+91 98765 43210" },
  ]);

  const [isModalOpen, setModalOpen] = useState(false);
  const [isEditMode, setEditMode] = useState(false);
  const [currentWarden, setCurrentWarden] = useState(null);
  const [wardenForm, setWardenForm] = useState({ name: "", contact: "", phone: "" });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setWardenForm({ ...wardenForm, [name]: value });
  };

  // Handle form submission to add or edit a warden
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!wardenForm.name || !wardenForm.contact || !wardenForm.phone) {
      alert("All fields are required!");
      return;
    }

    if (isEditMode) {
      // Update the existing warden
      setWardens(
        wardens.map((warden) =>
          warden.id === currentWarden.id ? { ...currentWarden, ...wardenForm } : warden
        )
      );
    } else {
      // Add a new warden
      setWardens([...wardens, { id: wardens.length + 1, ...wardenForm }]);
    }

    // Reset and close the modal
    setModalOpen(false);
    setWardenForm({ name: "", contact: "", phone: "" });
    setCurrentWarden(null);
    setEditMode(false);
  };

  // Open the modal for adding a new warden
  const handleAddWarden = () => {
    setEditMode(false);
    setWardenForm({ name: "", contact: "", phone: "" });
    setModalOpen(true);
  };

  // Open the modal for editing an existing warden
  const handleEditWarden = (warden) => {
    setEditMode(true);
    setCurrentWarden(warden);
    setWardenForm({ name: warden.name, contact: warden.contact, phone: warden.phone });
    setModalOpen(true);
  };

  // Remove a warden
  const handleRemove = (id) => {
    setWardens(wardens.filter((warden) => warden.id !== id));
  };

  return (
    <>
    <Heading title="Manage Warden" subtitle="Manage Warden here" />
    <div className="manage-wardens">
      
      <button className="add-warden-btn" onClick={handleAddWarden}>
         Add New Warden
      </button>
      <div className="warden-list">
        {wardens.map((warden) => (
          <Warden
            key={warden.id}
            id={warden.id}
            name={warden.name}
            contact={warden.contact}
            phone={warden.phone}
            onEdit={() => handleEditWarden(warden)}
            onRemove={() => handleRemove(warden.id)}
          />
        ))}
      </div>

      {/* Modal for adding/editing a warden */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3>{isEditMode ? "Edit Warden" : "Add New Warden"}</h3>
            <form onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label>Name:</label>
                <input
                  type="text"
                  name="name"
                  value={wardenForm.name}
                  onChange={handleInputChange}
                  placeholder="Enter name"
                  required
                />
              </div>
              <div className="form-group">
                <label>Contact Email:</label>
                <input
                  type="email"
                  name="contact"
                  value={wardenForm.contact}
                  onChange={handleInputChange}
                  placeholder="Enter email"
                  required
                />
              </div>
              <div className="form-group">
                <label>Phone:</label>
                <input
                  type="text"
                  name="phone"
                  value={wardenForm.phone}
                  onChange={handleInputChange}
                  placeholder="Enter phone number"
                  required
                />
              </div>
              <div className="modal-buttons">
                <button type="submit" className="add-btn">
                  {isEditMode ? "Update Warden" : "Add Warden"}
                </button>
                <button type="button" className="cancel-btn" onClick={() => setModalOpen(false)}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default ManageWardens;
