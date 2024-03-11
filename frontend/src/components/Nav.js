import React from "react";
import "../components/nav.css";

function Nav() {
  return (
    <div id="nav-menu" aria-label="navigation bar">
      <div class="container">
        <div class="nav-start">
          <a class="logo" href="/">
            <img
              src="/assets/images/logo.png"
              width="35"
              height="35"
              alt="Inc Logo"
            />
          </a>
          <nav class="menu">
            <ul class="menu-bar">
              <li>
                <button
                  class="nav-link dropdown-btn"
                  data-dropdown="dropdown1"
                  aria-haspopup="true"
                  aria-expanded="false"
                  aria-label="browse"
                >
                  Browse
                  <i class="bx bx-chevron-down" aria-hidden="true"></i>
                </button>
                <div id="dropdown1" class="dropdown">
                  <ul role="menu">
                    <li role="menuitem">
                      <a class="dropdown-link" href="#best-of-the-day">
                        <img src="./assets/icons/botd.svg" class="icon" />
                        <div>
                          <span class="dropdown-link-title">
                            Best of the day
                          </span>
                          <p>Shorts featured today by curators</p>
                        </div>
                      </a>
                    </li>
                    <li role="menuitem">
                      <a class="dropdown-link" href="#featured-streams">
                        <img src="./assets/icons/fs.svg" class="icon" />
                        <div>
                          <span class="dropdown-link-title">
                            Featured Streams
                          </span>
                          <p>Leading creatives livestreams</p>
                        </div>
                      </a>
                    </li>
                    <li role="menuitem">
                      <a class="dropdown-link" href="#subscriptions">
                        <img src="./assets/icons/sp.svg" class="icon" />
                        <div>
                          <span class="dropdown-link-title">Subscriptions</span>
                          <p>Gain exclusive access</p>
                        </div>
                      </a>
                    </li>
                    <li role="menuitem">
                      <a class="dropdown-link" href="#creative-feed">
                        <img src="./assets/icons/cf.svg" class="icon" />
                        <div>
                          <span class="dropdown-link-title">Creative Feed</span>
                          <p>See trending creations</p>
                        </div>
                      </a>
                    </li>
                  </ul>

                  <ul role="menu">
                    <li class="dropdown-title">
                      <span class="dropdown-link-title">Browse by apps</span>
                    </li>
                    <li role="menuitem">
                      <a class="dropdown-link" href="#adobe-xd">
                        <img src="./assets/icons/xd.svg" />
                        Adobe XD
                      </a>
                    </li>
                    <li role="menuitem">
                      <a class="dropdown-link" href="#after-effect">
                        <img src="./assets/icons/ae.svg" />
                        After Effect
                      </a>
                    </li>
                    <li role="menuitem">
                      <a class="dropdown-link" href="#sketch">
                        <img src="./assets/icons/sketch.svg" />
                        Sketch
                      </a>
                    </li>
                    <li role="menuitem">
                      <a class="dropdown-link" href="#indesign">
                        <img src="./assets/icons/indesign.svg" />
                        Indesign
                      </a>
                    </li>
                    <li role="menuitem">
                      <a class="dropdown-link" href="#figma">
                        <img src="./assets/icons/figma.svg" />
                        Figma
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <button
                  class="nav-link dropdown-btn"
                  data-dropdown="dropdown2"
                  aria-haspopup="true"
                  aria-expanded="false"
                  aria-label="discover"
                >
                  Discover
                  <i class="bx bx-chevron-down" aria-hidden="true"></i>
                </button>
                <div id="dropdown2" class="dropdown">
                  <ul role="menu">
                    <li>
                      <span class="dropdown-link-title">Browse Categories</span>
                    </li>
                    <li role="menuitem">
                      <a class="dropdown-link" href="#branding">
                        Branding
                      </a>
                    </li>
                    <li role="menuitem">
                      <a class="dropdown-link" href="#illustrations">
                        Illustration
                      </a>
                    </li>
                  </ul>
                  <ul role="menu">
                    <li>
                      <span class="dropdown-link-title">Download App</span>
                    </li>
                    <li role="menuitem">
                      <a class="dropdown-link" href="#mac-windows">
                        MacOS & Windows
                      </a>
                    </li>
                    <li role="menuitem">
                      <a class="dropdown-link" href="#linux">
                        Linux
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a class="nav-link" href="/">
                  Jobs
                </a>
              </li>
              <li>
                <a class="nav-link" href="/">
                  Livestream
                </a>
              </li>
              <li>
                <a class="nav-link" href="/">
                  About
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div class="nav-end">
          <div class="right-container">
            <form class="search" role="search">
              <input type="search" name="search" placeholder="Search" />
              <i class="bx bx-search" aria-hidden="true"></i>
            </form>

            <a href="#profile">
              <img
                src="/assets/images/user.jpg"
                width="30"
                height="30"
                alt=""
              />
            </a>
            <button class="btn btn-primary">Create</button>
          </div>

          <button
            id="hamburger"
            aria-label="hamburger"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i class="bx bx-menu" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

const dropdownBtn = document.querySelectorAll(".dropdown-btn");
const dropdown = document.querySelectorAll(".dropdown");
const hamburgerBtn = document.getElementById("hamburger");
const navMenu = document.querySelector(".menu");
const links = document.querySelectorAll(".dropdown a");

function setAriaExpandedFalse() {
  dropdownBtn.forEach((btn) => btn.setAttribute("aria-expanded", "false"));
}

function closeDropdownMenu() {
  dropdown.forEach((drop) => {
    drop.classList.remove("active");
    drop.addEventListener("click", (e) => e.stopPropagation());
  });
}

function toggleHamburger() {
  navMenu.classList.toggle("show");
}

dropdownBtn.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const dropdownIndex = e.currentTarget.dataset.dropdown;
    const dropdownElement = document.getElementById(dropdownIndex);

    dropdownElement.classList.toggle("active");
    dropdown.forEach((drop) => {
      if (drop.id !== btn.dataset["dropdown"]) {
        drop.classList.remove("active");
      }
    });
    e.stopPropagation();
    btn.setAttribute(
      "aria-expanded",
      btn.getAttribute("aria-expanded") === "false" ? "true" : "false"
    );
  });
});

// close dropdown menu when the dropdown links are clicked
links.forEach((link) =>
  link.addEventListener("click", () => {
    closeDropdownMenu();
    setAriaExpandedFalse();
    toggleHamburger();
  })
);

// close dropdown menu when you click on the document body
document.documentElement.addEventListener("click", () => {
  closeDropdownMenu();
  setAriaExpandedFalse();
});

// close dropdown when the escape key is pressed
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeDropdownMenu();
    setAriaExpandedFalse();
  }
});

hamburgerBtn.addEventListener("click", toggleHamburger);

export default Nav;
