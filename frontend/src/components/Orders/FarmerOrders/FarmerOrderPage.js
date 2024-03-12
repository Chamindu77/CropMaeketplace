import React, { useState, useEffect } from "react";
import NavbarRegistered from "../../NavbarRegistered/NavbarRegistered";
import FooterNew from "../../Footer/FooterNew";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faTruck } from "@fortawesome/free-solid-svg-icons";
import "./FarmerOrderPage.css";

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
            ))
          )}
        </div>
      </div>
      <FooterNew />
    </div>
  );
}

export default FarmerOrderPage;
