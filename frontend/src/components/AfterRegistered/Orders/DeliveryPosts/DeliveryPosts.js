import React, { useState, useEffect } from "react";
import NavbarRegistered from "../../NavbarRegistered/NavbarRegistered";
import FooterNew from "../../Footer/FooterNew";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import "./DeliveryPosts.css";

function DeliveryPostPage() {
  const [deliveryPosts, setDeliveryPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDeliveryPosts = async () => {
      try {
        const response = await fetch("http://localhost:8070/deliverypost/");
        const data = await response.json();
        setDeliveryPosts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching seller orders:", error);
        setLoading(false);
      }
    };

    fetchDeliveryPosts();
  }, []);

  return (
    <div>
      <NavbarRegistered />
      <div className="nothing-seller-order"></div>
      <div className="content-wrapper">
        <div className="orders-container">
          {loading ? (
            <p>Loading...</p>
          ) : (
            deliveryPosts.map((order, index) => (
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
            ))
          )}
        </div>
      </div>
      <FooterNew />
    </div>
  );
}

export default DeliveryPostPage;
