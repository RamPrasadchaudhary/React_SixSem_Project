import React, { useState } from "react";
import "../Style/Login.css"; // Assuming styles.css is in the same directory
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserTie,
  faUser,
  faLock,
} from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const [role, setRole] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [roleMessage, setRoleMessage] = useState("");

  const handleRoleChange = (e) => {
    setRole(e.target.value);
    if (e.target.value) {
      setRoleMessage("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!role) {
      setRoleMessage("Please select your role");
      return;
    }
    // Handle login logic here
    console.log("Logging in with:", { role, username, password });
  };

  return (
    <div className="login-container">
      <div className="form-wrapper">
        <h2>Hostel Dashboard Login</h2>
        <form
          id="login-form"
          className="form"
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <div className="flex-column">
            <label htmlFor="role">Select Role</label>
            <div className="inputForm">
              <FontAwesomeIcon icon={faUserTie} id="role-icon" />
              <select
                name="user_role"
                id="role"
                className="input"
                value={role}
                onChange={handleRoleChange}
                required
                autoComplete="off"
              >
                <option value="" disabled>
                  Select your role
                </option>
                <option value="student">Student</option>
                <option value="staff">Staff</option>
                <option value="warden">Warden</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            {roleMessage && (
              <p id="role-message" className="role-message">
                {roleMessage}
              </p>
            )}
          </div>
          <div className="flex-column">
            <label htmlFor="username">Username</label>
            <div className="inputForm">
              <FontAwesomeIcon icon={faUser} />
              <input
                type="text"
                name="login_username"
                id="username"
                className="input"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                autoComplete="off"
              />
            </div>
          </div>
          <div className="flex-column">
            <label htmlFor="password">Password</label>
            <div className="inputForm">
              <FontAwesomeIcon icon={faLock} />
              <input
                type="password"
                name="login_password"
                id="password"
                className="input"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="new-password"
              />
            </div>
          </div>
          <button type="submit" id="login-btn" className="button-submit">
            Login
          </button>
          <p id="forgot-password" className="forgot-password">
            Forgot Password?
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
