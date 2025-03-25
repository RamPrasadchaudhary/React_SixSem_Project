import React, { useState } from "react";
import "../Style/Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie, faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [role, setRole] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [roleMessage, setRoleMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRoleChange = (e) => {
    setRole(e.target.value);
    if (e.target.value) {
      setRoleMessage("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!role) {
      setRoleMessage("Please select your role");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: username,
          password,
          role,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      // On successful login for student
      if (data.role === "student") {
        navigate("/student-dashboard"); // Redirect to student dashboard
      } else {
        // Handle other roles if needed
        navigate("/"); // Default redirect
      }
    } catch (error) {
      setError(error.message || "Failed to connect to server");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="form-wrapper">
        <h2>Hostel Dashboard Login</h2>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleSubmit} autoComplete="off">
          <div className="flex-column">
            <label htmlFor="role">Select Role</label>
            <div className="inputForm">
              <FontAwesomeIcon icon={faUserTie} id="role-icon" />
              <select value={role} onChange={handleRoleChange} required>
                <option value="" disabled>
                  Select your role
                </option>
                <option value="student">Student</option>
                <option value="staff">Staff</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            {roleMessage && <p className="role-message">{roleMessage}</p>}
          </div>
          <div className="flex-column">
            <label htmlFor="username">Username</label>
            <div className="inputForm">
              <FontAwesomeIcon icon={faUser} />
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="student@hms.com"
                required
              />
            </div>
          </div>
          <div className="flex-column">
            <label htmlFor="password">Password</label>
            <div className="inputForm">
              <FontAwesomeIcon icon={faLock} />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </div>
          </div>
          <button type="submit" className="button-submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
