import React from "react";
import "../components/NavbarNotRegistered.css";

function Navbar() {
  return (
    <div class="wrapper">
      <div class="multi_color_border"></div>
      <div class="top_nav">
        <div class="left">
          <div class="logo">
            <img
              src={process.env.PUBLIC_URL + "/Navbar/icon.png"}
              alt=""
              className="navbar-icon"
            />
          </div>
        </div>
        <div class="right">
          <ul>
            <li>
              <a href="/cart">
                <img
                  src={process.env.PUBLIC_URL + "/Navbar/cart.png"}
                  alt=""
                  className="cart"
                />
              </a>
            </li>
            <li>
              <a href="/login" className="login">
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="bottom_nav">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="/"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Menu
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <a className="dropdown-item" href="/">
                  Farmer
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  Seller
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  Deliveryman
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  Both
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/register">Register</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
