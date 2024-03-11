import React, { useState } from "react";
import "./RegisterPage.css";

function Register({ onClose }) {
  const [role, setRole] = useState("");
  const [firstname, setFirstName] = useState("");
  const [company, setCompany] = useState("");
  const [mobile, setMobile] = useState("");
  const [district, setDistrict] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      role,
      firstname,
      company,
      mobile,
      district,
      address,
      email,
      password,
      confirmPassword,
    });
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>Register Form</h2>
        <div className="register-container">
          <form onSubmit={handleSubmit}>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="">Select Role</option>
              <option value="farmer">Farmer</option>
              <option value="seller">Seller</option>
              <option value="both">Both Farmer and Seller</option>
              <option value="deliveryman">Deliveryman</option>
            </select>
            <input
              type="text"
              placeholder="FirstName"
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
            <input
              type="tel"
              placeholder="Mobile Number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
            <select
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
            >
              <option value="">Select District</option>
              <option value="galle">Galle</option>
              <option value="hambantota">Hambantota</option>
              <option value="matara">Matara</option>
              <option value="colombo">Colombo</option>
            </select>
            <textarea
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button type="submit">Register</button>
          </form>
        </div>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default Register;
