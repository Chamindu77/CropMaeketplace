import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./RegisterPage.css";
import Navbar from "../Navbar/Navbar";

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);

    let url = "";

    switch (data.userRole) {
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

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Registration Successful");
      } else {
        const errorData = await response.json();
        alert(errorData.error || "Registration failed");
      }
    } catch (error) {
      console.error(error);
      alert("Registration failed");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="signup-container">
        <div className="signup-inner-container">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h3>Sign Up</h3>
            <div className="select-role">
              <label>Role</label>
              <select {...register("userRole", { required: true })} required>
                <option value="">Select Role</option>
                <option value="Farmer">Farmer</option>
                <option value="Seller">Seller</option>
                <option value="Deliveryman">Deliveryman</option>
              </select>
              {errors.userRole && (
                <span className="error">Role is required</span>
              )}
            </div>

            <div className="first-name">
              <label>First name</label>
              <input
                type="text"
                placeholder="First name"
                {...register("fname", { required: true })}
              />
              {errors.fname && (
                <span className="error">First name is required</span>
              )}
            </div>

            <div className="last-name">
              <label>Last name</label>
              <input
                type="text"
                placeholder="Last name"
                {...register("lname", { required: true })}
              />
              {errors.lname && (
                <span className="error">Last name is required</span>
              )}
            </div>

            <div className="email">
              <label>Email address</label>
              <input
                type="email"
                placeholder="Enter email"
                {...register("email", { required: true })}
              />
              {errors.email && <span className="error">Email is required</span>}
            </div>

            <div className="password">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter password"
                {...register("password", { required: true, minLength: 6 })}
              />
              {errors.password && (
                <span className="error">
                  Password is required and must be at least 6 characters long
                </span>
              )}
            </div>
            <div className="district">
              <label>District</label>
              <select {...register("district", { required: true })}>
                <option value="">Select District</option>
                <option value="galle">Galle</option>
                <option value="hambantota">Hambantota</option>
                <option value="matara">Matara</option>
                <option value="colombo">Colombo</option>
              </select>
              {errors.district && (
                <span className="error">District is required</span>
              )}
            </div>

            <div className="sign-up">
              <button type="submit" className="sign-up-button">
                Sign Up
              </button>
            </div>
            <p className="forgot-password text-right">
              Already registered <Link to="/login">sign in?</Link>
            </p>
          </form>
        </div>
        <div className="signup-image">
          <img
            src="https://assets-global.website-files.com/5d2fb52b76aabef62647ed9a/6195c8e178a99295d45307cb_allgreen1000-550.jpg"
            alt=""
            className="img-signup"
          />
        </div>
      </div>
    </div>
  );
}
