import React, { useState, useEffect } from "react";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import AdminFooter from "../AdminFooter/AdminFooter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import "./DeliveryPostsPage.css";

function DeliveryPostsPage() {
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
      <AdminNavbar />
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
                <div className="delete-button-container">
                    <button className="delete-button">
                    <FontAwesomeIcon icon={faTrash} /> Remove
                    </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <AdminFooter />
    </div>
  );
}

export default DeliveryPostsPage;
