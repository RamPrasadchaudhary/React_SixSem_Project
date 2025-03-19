import React, { useState } from "react";
import "../styles/editprofile.css";
import Layout from "./layout";

const EditProfile = () => {
  const [profile, setProfile] = useState({
    name: "Ashish Kumar Sah",
    fatherName: "Susil Kumar Sah",
    roomAllocated: "319",
    admissionDate: "2022-09-25",
    email: "ashsah.cs.eng@gmail.com",
    phoneNumber: "+91 95258 25041",
    profileImage: null, // Add profileImage to state
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile({ ...profile, profileImage: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Profile updated successfully!");
    // You can add logic here to save the changes to the backend
  };

  return (
    <Layout>
      <div className="container">
        <section className="edit-profile">
          <h1>Edit Profile</h1>
          <form onSubmit={handleSubmit}>
            {/* Choose Image Section */}
            <div className="form-group">
              <label htmlFor="profileImage">Profile Image</label>
              <div className="profile-image-preview">
                {profile.profileImage ? (
                  <img
                    src={profile.profileImage}
                    alt="Profile Preview"
                    className="profile-pic"
                  />
                ) : (
                  <div className="profile-pic-placeholder">
                    No Image Selected
                  </div>
                )}
              </div>
              <input
                type="file"
                id="profileImage"
                name="profileImage"
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>

            {/* Name */}
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={profile.name}
                onChange={handleChange}
              />
            </div>

            {/* Father’s Name */}
            <div className="form-group">
              <label htmlFor="fatherName">Father’s Name</label>
              <input
                type="text"
                id="fatherName"
                name="fatherName"
                value={profile.fatherName}
                onChange={handleChange}
              />
            </div>

            {/* Room Allocated */}
            <div className="form-group">
              <label htmlFor="roomAllocated">Room Allocated</label>
              <input
                type="text"
                id="roomAllocated"
                name="roomAllocated"
                value={profile.roomAllocated}
                onChange={handleChange}
              />
            </div>

            {/* Admission Date */}
            <div className="form-group">
              <label htmlFor="admissionDate">Admission Date</label>
              <input
                type="text"
                id="admissionDate"
                name="admissionDate"
                value={profile.admissionDate}
                onChange={handleChange}
              />
            </div>

            {/* Email */}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={profile.email}
                onChange={handleChange}
              />
            </div>

            {/* Phone Number */}
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                value={profile.phoneNumber}
                onChange={handleChange}
              />
            </div>

            {/* Save Changes Button */}
            <button type="submit" className="save-changes-btn">
              Save Changes
            </button>
          </form>
        </section>
      </div>
    </Layout>
  );
};

export default EditProfile;
