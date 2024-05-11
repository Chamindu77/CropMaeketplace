import React, { useState, useEffect } from "react";
import NavbarRegistered from "../../../NavbarRegistered/NavbarRegistered";
import FooterNew from "../../../Footer/FooterNew";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faTruck } from "@fortawesome/free-solid-svg-icons";
import "./RegFarmerOrderPage.css";
import { Link } from "react-router-dom";

function FarmerOrderPage() {
  const [farmerOrders, setFarmerOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFarmerOrders = async () => {
      try {
        const response = await fetch("http://localhost:8070/farmerorder/");
        const data = await response.json();
        setFarmerOrders(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching seller orders:", error);
        setLoading(false);
      }
    };

    fetchFarmerOrders();
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
            farmerOrders.map((order, index) => (
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

                <Link to="/cart" className="cart-button">
                  <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart
                </Link>

                <Link to="/supply" className="supply-button">
                  <FontAwesomeIcon icon={faTruck} /> Supply
                </Link>
              </div>
            ))
          )}
        </div>
      </div>
      <FooterNew />
    </div>
  );
}

export default FarmerOrderPage;
