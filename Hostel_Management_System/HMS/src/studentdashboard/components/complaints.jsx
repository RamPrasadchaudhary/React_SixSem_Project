import { useState } from "react";
import "../styles/complaints.css";

const Complaints = () => {
  const [complaints, setComplaints] = useState([
    {
      type: "Maintenance",
      description: "The fan in room 516 is not working properly.",
      status: "In Progress",
    },
    // More complaints here...
  ]);

  const [formData, setFormData] = useState({
    type: "maintenance",
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setComplaints([
      ...complaints,
      {
        type: formData.type,
        description: formData.description,
        status: "Pending",
      },
    ]);
    setFormData({ type: "maintenance", description: "" });
    alert("Complaint submitted successfully!");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="complaints-container">
      <header>
        <h1>Student Dashboard</h1>
      </header>
      <nav>
        <ul className="navbar">
          <li>
            <a href="/">Dashboard</a>
          </li>
          <li>
            <a href="/payments">Payments</a>
          </li>
          <li>
            <a href="/complaints" className="active">
              Complaints
            </a>
          </li>
        </ul>
      </nav>
      <section id="complaints">
        <h2>Create a Complaint</h2>
        <form id="complaint-form" onSubmit={handleSubmit}>
          <label htmlFor="complaint-type">Type of Complaint:</label>
          <select
            id="complaint-type"
            name="type"
            value={formData.type}
            onChange={handleInputChange}
            required
          >
            <option value="Maintenance">Maintenance</option>
            <option value="Room Cleaning">Room Cleaning</option>
            <option value="Food Quality">Food Quality</option>
            <option value="Other">Other</option>
          </select>
          <label htmlFor="complaint-description">Description:</label>
          <textarea
            id="complaint-description"
            name="description"
            rows="5"
            value={formData.description}
            onChange={handleInputChange}
            required
          ></textarea>
          <button type="submit">Submit</button>
        </form>
        <div id="trackerSection">
          <h2>Complaint Tracker</h2>
          {complaints.map((complaint, index) => (
            <div className="complaint-item" key={index}>
              <h3>{complaint.type}</h3>
              <p>
                <strong>Description:</strong> {complaint.description}
              </p>
              <p>
                <strong>Status:</strong>{" "}
                <span className={`status-${complaint.status.toLowerCase()}`}>
                  {complaint.status}
                </span>
              </p>
            </div>
          ))}
        </div>
      </section>
      <footer>
        <p>&copy; 2024 Hostel Management</p>
      </footer>
    </div>
  );
};

export default Complaints;
