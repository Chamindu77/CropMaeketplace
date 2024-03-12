import React, { useState, useEffect } from "react";
//import { Link } from "react-router-dom";
import "./RegFarmerPage.css";
import NavbarRegistered from "../../NavbarRegistered/NavbarRegistered";
import FooterNew from "../../Footer/FooterNew";
import RegCategories from "../../AfterRegistered/RegCatoegories/RegCategories";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faShoppingCart,
  faTruck,
  faShoppingBag,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import TypeWriter from "../../AutoWritingText/TypeWriter";

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
      <NavbarRegistered />
      <div className="nothing"></div>
      <div className="crop-container">
        <img
          src="https://www.abers-tourisme.com/assets/uploads/sites/8/2022/12/vente-legumes.jpg"
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
          <RegCategories />
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
              <button className="cart-button">
                <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart
              </button>
              <button className="supply-button">
                <FontAwesomeIcon icon={faTruck} /> Supply
              </button>
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
              <button className="cart-button">
                <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart
              </button>
              <button className="supply-button">
                <FontAwesomeIcon icon={faShoppingBag} /> Buy Now
              </button>
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
              <button className="cart-button">
                <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart
              </button>
              <button className="supply-button">
                <FontAwesomeIcon icon={faInfoCircle} /> More Details
              </button>
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
