import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie, faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import "../Style/Login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    role: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error when user types
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Validate role selection
    if (!formData.role) {
      setError("Please select your role");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
          role: formData.role,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Login failed. Please check your credentials."
        );
      }

      // Handle successful login
      localStorage.setItem(`${formData.role}Token`, data.token);
      localStorage.setItem("userData", JSON.stringify(data.user));

      // Redirect based on role
      switch (formData.role) {
        case "admin":
          navigate("/admin/dashboard");
          break;
        case "staff":
          navigate("/staff/dashboard");
          break;
        case "student":
          navigate("/student/dashboard");
          break;
        default:
          navigate("/");
      }
    } catch (err) {
      setError(err.message || "An error occurred during login");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
<<<<<<< HEAD
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
                <option value="admin">Admin</option>
              </select>
            </div>
            {roleMessage && (
              <p id="role-message" className="role-message">
                {roleMessage}
              </p>
            )}
=======
      <div className="login-card">
        <div className="login-header">
          <h2>Hostel Management System</h2>
          <p>Sign in to your account</p>
        </div>

        {error && <div className="login-error">{error}</div>}

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="role">
              <FontAwesomeIcon icon={faUserTie} className="input-icon" />
              Select Role
            </label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
              className="form-input"
            >
              <option value="" disabled>
                Select your role
              </option>
              <option value="admin">Admin</option>
              <option value="staff">Staff</option>
              <option value="student">Student</option>
            </select>
>>>>>>> 2500e1099f1394493bd97b6b5015646f05dbf857
          </div>

          <div className="form-group">
            <label htmlFor="email">
              <FontAwesomeIcon icon={faUser} className="input-icon" />
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">
              <FontAwesomeIcon icon={faLock} className="input-icon" />
              Password
            </label>
            <div className="password-input-container">
              <input
                type={passwordVisible ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
                className="form-input"
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setPasswordVisible(!passwordVisible)}
              >
                <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
              </button>
            </div>
          </div>

          <button type="submit" className="login-button" disabled={loading}>
            {loading ? (
              <>
                <span className="spinner"></span>
                Signing in...
              </>
            ) : (
              "Sign In"
            )}
          </button>
        </form>

        <div className="login-footer">
          <p>
            Having trouble signing in?{" "}
            <a href="/forgot-password">Reset your password</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
