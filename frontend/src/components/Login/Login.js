import "./login.css";
import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import FooterNew from "../Footer/FooterNew";
import video from "../../Assests/LoginAndRegister/loginn.mp4";
import logo from "../../Assests/LoginAndRegister/logo.png";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faUserShield } from "@fortawesome/free-solid-svg-icons";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userRole, setUserRole] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    // Check if email or userRole is empty
    if (!email || !password || !userRole) {
      alert("Please fill in all fields.");
      return;
    }

    let url = "";

    switch (userRole) {
      case "Farmer":
        url = "http://localhost:8070/farmer/login";
        break;
      case "Seller":
        url = "http://localhost:8070/seller/login";
        break;
      case "Deliveryman":
        url = "http://localhost:8070/deliveryman/login";
        console.log(email, password, userRole);
        break;
      default:
        break;
    }

    fetch(url, {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
        userRole,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status === "ok") {
          alert("Login successful");
          window.localStorage.setItem("token", data.data);
          window.location.href = "/homepage-registeredusers"; // Redirect to homepage based on user role
        } else {
          alert("Login failed. Please check your credentials.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Login failed. Please try again later.");
      });
  }

  return (
    <div>
      <Navbar />
      <div className="login-container">
        <div className="login-video">
          <video src={video} autoPlay muted loop />
        </div>
        <div className="text-login">
          <h2>
            Buy, Sell and Deliver <br />
            Extraordinary Products
          </h2>
        </div>
        <div className="text-register">
          <p>
            Still you don't have an account...? <a href="/register">Sign Up</a>
          </p>
        </div>

        <div className="login-inner-container">
          <form onSubmit={handleSubmit}>
            <div className="salutaion">
              <img src={logo} alt="" className="img-logo" />
              <h3 className="sign-in-text">Welcome Back!</h3>
            </div>

            <div className="email">
              <label>Email address</label>

              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="password">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="role">
              <label>Role</label>
              <select
                className="form-control"
                onChange={(e) => setUserRole(e.target.value)}
              >
                <option value="">Select Role</option>
                <option value="Farmer">Farmer</option>
                <option value="Seller">Seller</option>
                <option value="Deliveryman">Deliveryman</option>
              </select>
            </div>

            <div className="checkbox-container">
              <input type="checkbox" className="checkbox" id="customCheck1" />
              <label className="text" htmlFor="customCheck1">
                Remember me
              </label>
            </div>

            <div className="login-button-container">
              <button type="submit" className="login-button">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <FooterNew />
    </div>
  );
}

export default Login;
