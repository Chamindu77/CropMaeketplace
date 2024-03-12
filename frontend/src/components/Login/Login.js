import "./login.css";
import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
//import { Link } from "react-router-dom";
import FooterNew from "../Footer/FooterNew";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userRole, setUserRole] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    console.log(email, password, userRole);

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
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status === "ok") {
          alert("login successful");
          window.localStorage.setItem("token", data.data);
          // window.localStorage.setItem("loggedIn", true);

          window.location.href = "./homepage-registeredusers";
        }
      });
  }
  return (
    <div>
      <Navbar />
      <div className="login-container">
        <div className="login-image">
          <img
            src="https://d2qr50rz2oof04.cloudfront.net/assets/img/2023/ip-vanish/claim-image.svg"
            //src='https://www.creativefabrica.com/wp-content/uploads/2022/08/30/Face-recognition-security-Graphics-37362539-1-1-580x387.jpg'
            alt=""
            className="img-login"
          />
        </div>
        <div className="login-inner-container">
          <form onSubmit={handleSubmit}>
            <h3>Sign In</h3>

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

            <div className="checkbox-container">
              <input type="checkbox" className="checkbox" id="customCheck1" />
              <label className="text" htmlFor="customCheck1">
                Remember me
              </label>
            </div>

            <div className="login-button-container">
              <button className="login-button">Submit</button>
            </div>

            <p className="text-register">
              Don't have an account? <a href="/register">Sign Up</a>
            </p>
          </form>
        </div>
      </div>
      <FooterNew />
    </div>
  );
}

export default Login;
