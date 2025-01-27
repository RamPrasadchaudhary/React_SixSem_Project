import { useState } from "react";
import "../Style/ComplaintPage.css"; // Import the CSS file
import Heading from "./Heading";
const ComplaintPage = () => {
  const [category, setCategory] = useState("");
  const [details, setDetails] = useState("");
  const [complaints, setComplaints] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newComplaint = { category, details };
    setComplaints([...complaints, newComplaint]);
    setCategory("");
    setDetails("");
  };

  return (
    <>
      <div>
        <Heading
          title="Complaint Board Details"
          subtitle="Manage all your Manage Complaint data in one place"
        />
      </div>

      <div className="complaint-container">
        <h1>Complaint Management System</h1>
        <form onSubmit={handleSubmit} className="complaint-form">
          <div className="form-group">
            <label htmlFor="category">Category:</label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="">Select a category</option>
              <option value="mess">Mess</option>
              <option value="electrician">Electrician</option>
              <option value="plumber">Plumber</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="details">Complaint Details:</label>
            <textarea
              id="details"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="submit-button">
            Submit Complaint
          </button>
        </form>

        <h2>Submitted Complaints</h2>
        <ul className="complaint-list">
          {complaints.map((complaint, index) => (
            <li key={index} className="complaint-item">
              <strong>Category:</strong> {complaint.category} <br />
              <strong>Details:</strong> {complaint.details}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ComplaintPage;
