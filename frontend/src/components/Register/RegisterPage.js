import React, { useState } from "react";
//import { Link } from "react-router-dom";
import "./RegisterPage.css";
import Navbar from "../Navbar/Navbar";
import FooterNew from "../Footer/FooterNew";

export default function SignUp() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [district, setDistrict] = useState("");
  const [password, setPassword] = useState("");
  const [userRole, setUserRole] = useState("");

  //const[primaryKey, setPrimaryKey] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(userRole, fname, lname, email, password, district);

    let url = "";

    switch (userRole) {
      case "Farmer":
        url = "http://localhost:8070/farmer/register";
        break;
      case "Seller":
        url = "http://localhost:8070/seller/register";
        break;
      case "Deliveryman":
        url = "http://localhost:8070/deliveryman/register";
        break;
      default:
        break;
    }

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        userRole,
        fname,
        lname,
        email,
        district,
        password,
      }),
    })
      .then((res) => {
        if (res.status === 201) {
          return res.json(); // Parse the JSON response body
        } else {
          throw new Error("Something went wrong in response"); // Throw an error for non-201 responses
        }
      })
      .then((data) => {
        console.log(data); // Log the data for debugging
        alert("Registration Successful");
        // Reset form fields
        setUserRole("");
        setFname("");
        setLname("");
        setEmail("");
        setPassword("");
        setDistrict("");
      })
      .catch((error) => {
        console.error(error);
        alert(error.message);
      });
  };

  return (
    <div className="signup">
      <Navbar />
      <div className="signup-container">
        <div className="signup-inner-container">
          <form onSubmit={handleSubmit}>
            <h3>Sign Up</h3>
            <div className="select-role">
              <label>Role</label>
              <select
                name="userRole"
                value={userRole}
                onChange={(e) => setUserRole(e.target.value)}
                required
              >
                <option value="">Select Role</option>
                <option value="Farmer">Farmer</option>
                <option value="Seller">Seller</option>
                <option value="Deliveryman">Deliveryman</option>
              </select>
            </div>

            <div className="first-name">
              <label>First name</label>
              <input
                className="first-name-input"
                type="text"
                placeholder="First name"
                onChange={(e) => setFname(e.target.value)}
                value={fname}
              />
            </div>

            <div className="last-name">
              <label>Last name</label>
              <input
                className="last-name-input"
                type="text"
                placeholder="Last name"
                onChange={(e) => setLname(e.target.value)}
                value={lname}
              />
            </div>

            <div className="email">
              <label>Email address</label>
              <input
                className="email-input"
                type="email"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>

            <div className="password">
              <label>Password</label>
              <input
                className="password-input"
                type="password"
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
            <div className="district">
              <label>District</label>
              <select
                name="district"
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                required
              >
                <option value="">Select District</option>
                <option value="galle">Galle</option>
                <option value="hambantota">Hambantota</option>
                <option value="matara">Matara</option>
                <option value="colombo">Colombo</option>
              </select>
            </div>

            <div className="sign-up">
              <button className="signup-button">Sign Up</button>
            </div>
            <p className="forgot-password text-right">
              Already registered <a href="/login">sign in?</a>
            </p>
          </form>
        </div>
        
      </div>
      <FooterNew />
    </div>
  );
}

/*<div className="signup-image">
          <img
            src="https://assets-global.website-files.com/5d2fb52b76aabef62647ed9a/6195c8e178a99295d45307cb_allgreen1000-550.jpg"
            alt=""
            className="img-signup"
          />
        </div>*/