import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
//import RegisterPopup from "../Register/RegisterPage";
import "./HomePage.css";
import Categories from "../Catoegories/Categories";
//import CarouselCategory from "../Carousel/CarouselCategory";
import TypeWriter from "../AutoWritingText/TypeWriter";
import Video from "../ProcessLine/Video";
//import Footer from "../Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import KeyFeatures from "../KeyFeatures/KeyFeatures";
import FooterNew from "../Footer/FooterNew";
//import RegisterPage from "../Register/RegisterPage";

function HomePage() {
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <div>
      <Navbar />
      <img
        src={process.env.PUBLIC_URL + "/Navbar/walll.jpg"}
        alt=""
        className="crop"
      />
      <div className="type-writer-container">
        <TypeWriter
          text="Welcome to CropXchange Digital Marketplace"
          // "No Service Charge For Your First Order...",
          //"Makes Your Work Easy, Fast and Transparent...",

          textStyle={{
            fontFamily: "Gill Sans",
            fontSize: "20px",
          }}
        />
      </div>
      <div className="overlay-rectangle"></div>
      <div className="overlay-content">
        <p className="overlay-paragraph">Who Are You?</p>
        <a className="profile" href="/farmer">
          <img
            src={process.env.PUBLIC_URL + "/Profile/farmer.png"}
            alt=""
            className="img-user"
          />
        </a>
        <p className="profile-name">Farmer</p>
        <a className="profile" href="/seller">
          <img
            src={process.env.PUBLIC_URL + "/Profile/seller.png"}
            alt=""
            className="img-user"
          />
        </a>
        <p className="profile-name">Seller</p>
        <a className="profile" href="/deliveryman">
          <img
            src={process.env.PUBLIC_URL + "/Profile/delivery.png"}
            alt=""
            className="img-user"
          />
        </a>
        <p className="profile-name">Deliveryman</p>
      </div>

      <div className="button-container">
        <button
          onClick={() => {
            window.location.href = "http://localhost:3000/register";
          }}
          className="button-register"
        >
          Join Now
        </button>
      </div>

      <div className="welcome-text">
        <span className="welcome">Welcome to</span>{" "}
        <span className="cropxchange">CropXchange!</span>
      </div>
      <div className="main-paragraph">
        <p>
          Welcome to CropXchange, your digital marketplace for a bounty of
          fresh, locally-sourced fruits and vegetables. Our user-friendly
          platform ensures a hassle-free experience, allowing you to explore,
          connect, and purchase with confidence. From farm to table, CropXchange
          is committed to fostering community, supporting local agriculture, and
          delivering a harvest of quality right to your doorstep.
        </p>
      </div>

      <Categories />

      <div className="how-it-works">
        <span className="welcome">How It</span>{" "}
        <span className="cropxchange">Works</span>
      </div>
      <div className="how-it-works-paragraph">
        <p>
          Welcome to CropXchange, your digital marketplace for a bounty of
          fresh, locally-sourced fruits and vegetables. Our user-friendly
          platform ensures a hassle-free experience, allowing you to explore,
          connect, and purchase with confidence. From farm to table, CropXchange
          is committed to fostering community, supporting local agriculture, and
          delivering a harvest of quality right to your doorstep.
        </p>
      </div>

      <div className="video-container">
        <Video />
      </div>

      <div className="our-solution">
        <span className="welcome">Our</span>{" "}
        <span className="cropxchange">Solution</span>
      </div>
      <div className="how-it-works-paragraph">
        <p>
          CropXchange is a digital B2B market solution that brings together
          Farmers and Industrial Buyers. Agri Marketplace does not buy or sell
          crops and is not a broker. Instead, we offer you the ability to
          effortlessly market your crop via our platform.
        </p>
      </div>

      <div className="all">
        <img
          src={process.env.PUBLIC_URL + "/Homepage/all.png"}
          alt=""
          className="all-image"
        />
      </div>

      <div className="our-solution">
        <span className="welcome">Our</span>{" "}
        <span className="cropxchange">Pricing</span>
      </div>
      <div className="how-it-works-paragraph">
        <ul className="list-content">
          <li>
            <FontAwesomeIcon icon={faCheck} style={{ color: "green" }} /> All
            users who prefer to post orders, have to pay a small fee to
            CropXchange.
          </li>
          <li>
            <FontAwesomeIcon icon={faCheck} style={{ color: "green" }} /> The
            first order is free of charge for all users and charges will be done
            after the first bid.
          </li>
          <li>
            <FontAwesomeIcon icon={faCheck} style={{ color: "green" }} /> For
            Deliverymen can post their details and if they update the bid, there
            is a small charge.
          </li>
        </ul>
      </div>

      <div className="all">
        <img
          src="https://agrimp.com/assets/icons/grain_bag_en-35a97c53a2457418423528885a62a4c2d52f0427241fa798c2f80432caf10b99.png"
          alt=""
          className="price-image"
        />
      </div>

      <div className="our-solution">
        <span className="welcome">Key</span>{" "}
        <span className="cropxchange">Features</span>
      </div>
      <div className="how-it-works-paragraph">
        <p>
          Discover how CropXchange Marketplace can benefit you and all other
          food supply chain actors.
        </p>
      </div>

      <KeyFeatures />

      <div className="our-solution">
        <span className="welcome">Get</span>{" "}
        <span className="cropxchange">Started</span>
      </div>
      <div className="how-it-works-paragraph">
        <p>
          We open the door to thousands of approved buyers and sellers. Post
          your crop bid as a registered buyer, or create your crop offer as a
          platform verified seller. Through our rigorous customer compliance we
          make sure that only reliable users gain access to our digital
          marketplace. There are two ways to get started:
        </p>
      </div>
      <div className="register-container">
        <button
          onClick={() => setButtonPopup(true)}
          className="button-register"
        >
          Register Now
        </button>
      </div>

      <FooterNew />
    </div>
  );
}

export default HomePage;
