import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faTrash,
  faEye,
  faEyeSlash,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import "../Style/Student.css";
import AdminHeading from "./Heading";

const StudentManagement = () => {
  // State management
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBranch, setSelectedBranch] = useState("All Branches");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentStudent, setCurrentStudent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  // Form state
  const [formData, setFormData] = useState({
    student_id: "",
    name: "",
    email: "",
    password: "",
    room_no: "",
    branch: "Computer Science (Data Science)",
    contact: "",
    admission_date: new Date().toISOString().split("T")[0],
  });
  const [showPassword, setShowPassword] = useState(false);

  // Fetch students on component mount
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const token = localStorage.getItem("adminToken");
        const response = await fetch("http://localhost:5000/api/students", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) throw new Error("Could not fetch students");

        const data = await response.json();
        setStudents(data);
        setFilteredStudents(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStudents();
  }, []);

  // Apply filters when search or branch changes
  useEffect(() => {
    let results = students;

    if (searchTerm) {
      results = results.filter(
        (student) =>
          student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          student.student_id.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedBranch !== "All Branches") {
      results = results.filter((student) => student.branch === selectedBranch);
    }

    setFilteredStudents(results);
  }, [searchTerm, selectedBranch, students]);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle student creation
  const handleCreateStudent = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const token = localStorage.getItem("adminToken");
      const response = await fetch("http://localhost:5000/api/students", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to create student");

      const newStudent = await response.json();
      setStudents((prev) => [...prev, newStudent]);
      setSuccessMessage("Student created successfully!");
      setIsModalOpen(false);

      // Reset form
      setFormData({
        student_id: "",
        name: "",
        email: "",
        password: "",
        room_no: "",
        branch: "Computer Science (Data Science)",
        contact: "",
        admission_date: new Date().toISOString().split("T")[0],
      });

      setTimeout(() => setSuccessMessage(""), 3000);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle student deletion
  const handleDeleteStudent = async (id) => {
    if (!window.confirm("Are you sure you want to delete this student?"))
      return;

    try {
      const token = localStorage.getItem("adminToken");
      const response = await fetch(`http://localhost:5000/api/students/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) throw new Error("Failed to delete student");

      setStudents((prev) =>
        prev.filter((student) => student.student_id !== id)
      );
      setSuccessMessage("Student deleted successfully!");
      setTimeout(() => setSuccessMessage(""), 3000);
    } catch (err) {
      setError(err.message);
    }
  };

  // Open edit modal
  const openEditModal = (student) => {
    setCurrentStudent(student);
    setIsModalOpen(true);
  };

  // Handle student update
  const handleUpdateStudent = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const token = localStorage.getItem("adminToken");
      const response = await fetch(
        `http://localhost:5000/api/students/${currentStudent.student_id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) throw new Error("Failed to update student");

      const updatedStudent = await response.json();
      setStudents((prev) =>
        prev.map((student) =>
          student.student_id === currentStudent.student_id
            ? updatedStudent
            : student
        )
      );
      setSuccessMessage("Student updated successfully!");
      setIsModalOpen(false);
      setTimeout(() => setSuccessMessage(""), 3000);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading && students.length === 0) {
    return (
      <div className="student-management-container">
        <AdminHeading title="Student Management" />
        <div className="loading-spinner">Loading students...</div>
      </div>
    );
  }

  return (
    <div className="student-management-container">
      <AdminHeading
        title="Student Management"
        subtitle="Add, edit, and manage student records"
      />

      {error && (
        <div className="error-message">
          {error}
          <button onClick={() => setError(null)}>×</button>
        </div>
      )}

      {successMessage && (
        <div className="success-message">
          {successMessage}
          <button onClick={() => setSuccessMessage("")}>×</button>
        </div>
      )}

      <div className="management-controls">
        <div className="search-filter-container">
          <input
            type="text"
            placeholder="Search by name or ID..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />

          <select
            value={selectedBranch}
            onChange={(e) => setSelectedBranch(e.target.value)}
            className="branch-filter"
          >
            <option value="All Branches">All Branches</option>
            <option value="Computer Science (Data Science)">
              Computer Science
            </option>
            <option value="Electrical">Electrical</option>
            <option value="Mechanical">Mechanical</option>
            <option value="Civil">Civil</option>
          </select>
        </div>

        <button
          onClick={() => {
            setCurrentStudent(null);
            setIsModalOpen(true);
          }}
          className="add-student-btn"
        >
          <FontAwesomeIcon icon={faPlus} /> Add New Student
        </button>
      </div>

      <div className="students-table-container">
        {filteredStudents.length > 0 ? (
          <table className="students-table">
            <thead>
              <tr>
                <th>Student ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Room No</th>
                <th>Branch</th>
                <th>Contact</th>
                <th>Admission Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((student) => (
                <tr key={student.student_id}>
                  <td>{student.student_id}</td>
                  <td>{student.name}</td>
                  <td>{student.email}</td>
                  <td>{student.room_no}</td>
                  <td>{student.branch}</td>
                  <td>{student.contact}</td>
                  <td>
                    {new Date(student.admission_date).toLocaleDateString()}
                  </td>
                  <td className="actions-cell">
                    <button
                      onClick={() => openEditModal(student)}
                      className="edit-btn"
                    >
                      <FontAwesomeIcon icon={faEdit} /> Edit
                    </button>
                    <button
                      onClick={() => handleDeleteStudent(student.student_id)}
                      className="delete-btn"
                    >
                      <FontAwesomeIcon icon={faTrash} /> Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="no-results">
            {students.length === 0
              ? "No students found in the system"
              : "No students match your search criteria"}
          </div>
        )}
      </div>

      {/* Student Form Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="student-form-modal">
            <h3>
              {currentStudent ? "Edit Student" : "Add New Student"}
              <button
                onClick={() => setIsModalOpen(false)}
                className="close-modal"
              >
                ×
              </button>
            </h3>

            <form
              onSubmit={
                currentStudent ? handleUpdateStudent : handleCreateStudent
              }
            >
              <div className="form-group">
                <label>Student ID*</label>
                <input
                  type="text"
                  name="student_id"
                  value={formData.student_id}
                  onChange={handleInputChange}
                  required
                  disabled={!!currentStudent}
                />
              </div>

              <div className="form-group">
                <label>Full Name*</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Email*</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  disabled={!!currentStudent}
                />
              </div>

              {!currentStudent && (
                <div className="form-group">
                  <label>Password*</label>
                  <div className="password-input">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="toggle-password"
                    >
                      <FontAwesomeIcon
                        icon={showPassword ? faEyeSlash : faEye}
                      />
                    </button>
                  </div>
                </div>
              )}

              <div className="form-row">
                <div className="form-group">
                  <label>Room Number*</label>
                  <input
                    type="text"
                    name="room_no"
                    value={formData.room_no}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Branch*</label>
                  <select
                    name="branch"
                    value={formData.branch}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="Computer Science (Data Science)">
                      Computer Science
                    </option>
                    <option value="Electrical">Electrical</option>
                    <option value="Mechanical">Mechanical</option>
                    <option value="Civil">Civil</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Contact Number*</label>
                  <input
                    type="tel"
                    name="contact"
                    value={formData.contact}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Admission Date*</label>
                  <input
                    type="date"
                    name="admission_date"
                    value={formData.admission_date}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="form-actions">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="cancel-btn"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="submit-btn"
                >
                  {isLoading
                    ? "Processing..."
                    : currentStudent
                    ? "Update"
                    : "Create"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentManagement;
