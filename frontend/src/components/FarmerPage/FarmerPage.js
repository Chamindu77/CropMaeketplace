import React, { useState, useEffect } from "react";
//import { Link } from "react-router-dom";
import "./FarmerPage.css";
import Navbar from "../Navbar/Navbar";
import FooterNew from "../Footer/FooterNew";
import Categories from "../Catoegories/Categories";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faShoppingCart,
  faTruck,
  faShoppingBag,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import TypeWriter from "../AutoWritingText/TypeWriter";

function FarmerPage() {
  const [sellerOrders, setSellerOrders] = useState([]);
  const [farmerOrders, setFarmerOrders] = useState([]);
  const [deliveryPosts, setDeliveryPosts] = useState([]);

  useEffect(() => {
    const fetchSellerOrders = async () => {
      try {
        const response = await fetch("http://localhost:8070/sellerorder/");
        const data = await response.json();
        setSellerOrders(data);
      } catch (error) {
        console.error("Error fetching seller orders:", error);
      }
    };

    const fetchFarmerOrders = async () => {
      try {
        const response = await fetch("http://localhost:8070/farmerorder/");
        const data = await response.json();
        setFarmerOrders(data);
      } catch (error) {
        console.error("Error fetching seller orders:", error);
      }
    };

    const fetchDeliveryPosts = async () => {
      try {
        const response = await fetch("http://localhost:8070/deliverypost/");
        const data = await response.json();
        setDeliveryPosts(data);
      } catch (error) {
        console.error("Error fetching seller orders:", error);
      }
    };
    fetchSellerOrders();
    fetchFarmerOrders();
    fetchDeliveryPosts();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="nothing"></div>
      <div className="crop-container">
        <img
          src="https://organicbiz.ca/wp-content/uploads/2019/05/vegetables-farmers-870915532-alle12-iStock-GettyImages.jpg"
          alt=""
          className="crop-image"
        />
      </div>

      <div className="type-writer-container">
        <TypeWriter
          text="Welcome Farmers!"
          loop={false}
          className="writer"
          textStyle={{
            fontFamily: "Gill Sans",
            fontSize: "60px",
          }}
        />
      </div>
      {/* 
      <div className="topic">
        <p>Product Categories</p>
      </div>
      */}
      <div className="categories-container">
        <div className="categories-div">
          <Categories />
        </div>
      </div>
      <div className="nothing2"></div>
      <div className="topic">
        <p>Seller's Orders</p>
      </div>

      <div className="orders-wrapper">
        <div className="orders-container">
          {sellerOrders.slice(0, 4).map((order, index) => (
            <div key={index} className="order-item1">
              <img
                src={order.productImage}
                alt={order.item}
                className="order-image"
              />
              <p>{order.item}</p>
              <p>Quantity: {order.quantity}</p>
              <p>Price: Rs.{order.price}</p>
              <p>Posted Date: {order.postedDate}</p>
              <p>Expires Date: {order.expireDate}</p>
              <a href="/login" className="login-path-set">
                <button className="cart-button">
                  <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart
                </button>
              </a>
              <a href="/login" className="login-path-set">
                <button className="supply-button">
                  <FontAwesomeIcon icon={faTruck} /> Supply
                </button>
              </a>
            </div>
          ))}
        </div>
        {sellerOrders.length > 4 && (
          <a href="/sellerorder" className="view-all-button">
            <FontAwesomeIcon icon={faChevronRight} className="arrow-icon" />
          </a>
        )}
      </div>

      <div className="nothing2"></div>
      <div className="topic">
        <p>Farmer's Orders</p>
      </div>

      <div className="orders-wrapper">
        <div className="orders-container">
          {farmerOrders.slice(0, 4).map((order, index) => (
            <div key={index} className="order-item">
              <img
                src={order.productImage}
                alt={order.item}
                className="order-image"
              />
              <p>{order.item}</p>
              <p>Quantity: {order.quantity}</p>
              <p>Price: Rs.{order.price}</p>
              <p>Posted Date: {order.postedDate}</p>
              <p>Expires Date: {order.expireDate}</p>
              <a href="/login" className="login-path-set">
                <button className="cart-button">
                  <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart
                </button>
              </a>
              <a href="/login" className="login-path-set">
                <button className="supply-button">
                  <FontAwesomeIcon icon={faShoppingBag} /> Buy Now
                </button>
              </a>
            </div>
          ))}
        </div>
        {farmerOrders.length > 4 && (
          <a href="/farmerorder" className="view-all-button1">
            <FontAwesomeIcon icon={faChevronRight} className="arrow-icon" />
          </a>
        )}
      </div>

      <div className="topic">
        <p>Delivery Services</p>
      </div>

      <div className="orders-wrapper">
        <div className="orders-container">
          {deliveryPosts.slice(0, 4).map((order, index) => (
            <div key={index} className="order-item">
              <img
                src={order.vehicleImage}
                alt={order.model}
                className="order-image"
              />
              <p>{order.model}</p>
              <p>Capacity: {order.capacity} kg</p>
              <p>Price: Rs.{order.price}/km</p>
              <p>Posted Date: {order.postedDate}</p>
              <a href="/login" className="login-path-set">
                <button className="cart-button">
                  <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart
                </button>
              </a>
              <a href="/login" className="login-path-set">
                <button className="supply-button">
                  <FontAwesomeIcon icon={faInfoCircle} /> More Details
                </button>
              </a>
            </div>
          ))}
        </div>
        {deliveryPosts.length > 4 && (
          <a href="/deliverypost" className="view-all-button1">
            <FontAwesomeIcon icon={faChevronRight} className="arrow-icon" />
          </a>
        )}
      </div>

      <FooterNew />
    </div>
  );
}

export default FarmerPage;
