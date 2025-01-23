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
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBranch, setSelectedBranch] = useState("All Branches");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(""); // "add", "edit"
  const [currentStudent, setCurrentStudent] = useState(null);

  const handleSearchChange = (e) => setSearchQuery(e.target.value);

  const handleBranchChange = (e) => setSelectedBranch(e.target.value);

  const handleOpenModal = (type, student = null) => {
    setModalType(type);
    setCurrentStudent(student);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentStudent(null);
  };

  const handleAddStudent = (newStudent) => {
    setStudents([...students, { ...newStudent, id: `${Date.now()}` }]);
    handleCloseModal();
  };

  const handleEditStudent = (updatedStudent) => {
    setStudents(
      students.map((student) =>
        student.id === updatedStudent.id ? updatedStudent : student
      )
    );
    handleCloseModal();
  };

  const handleDeleteStudent = (id) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      setStudents(students.filter((student) => student.id !== id));
    }
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
        <Heading
          title="Student Record"
          subtitle="Manage all your student data in one place"
        />
      </div>
      <div className="container">
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
          <button
            className="add-student-button"
            onClick={() => handleOpenModal("add")}
          >
            Add Student
          </button>
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
                      <button
                        className="edit-link"
                        onClick={() => handleOpenModal("edit", student)}
                      >
                        <FontAwesomeIcon icon={faEdit} className="icon" /> Edit
                      </button>
                    </td>
                    <td>
                      <button
                        className="delete-link"
                        onClick={() => handleDeleteStudent(student.id)}
                      >
                        <FontAwesomeIcon icon={faTrash} className="icon" />{" "}
                        Delete
                      </button>
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

      {isModalOpen && (
        <Modal
          type={modalType}
          student={currentStudent}
          onClose={handleCloseModal}
          onAdd={handleAddStudent}
          onEdit={handleEditStudent}
        />
      )}
    </>
  );
};

const Modal = ({ type, student, onClose, onAdd, onEdit }) => {
  const [formData, setFormData] = useState(
    student || {
      id: "",
      name: "",
      roomNo: "",
      branch: "",
      contact: "",
      admissionDate: "",
    }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    if (type === "add") {
      onAdd(formData);
    } else if (type === "edit") {
      onEdit(formData);
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>{type === "add" ? "Add New Student" : "Edit Student"}</h3>
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
          <label>Room No</label>
          <input
            type="number"
            name="roomNo"
            value={formData.roomNo}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Branch</label>
          <input
            type="text"
            name="branch"
            value={formData.branch}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Contact</label>
          <input
            type="number"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Admission Date</label>
          <input
            type="date"
            name="admissionDate"
            value={formData.admissionDate}
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
      </div>
    </div>
  );
};

export default Student;
