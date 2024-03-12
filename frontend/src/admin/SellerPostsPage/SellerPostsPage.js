import React, { useState, useEffect } from "react";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import AdminFooter from "../AdminFooter/AdminFooter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./SellerPostsPage.css";

function SellerPostsPage() {
  const [sellerOrders, setSellerOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSellerOrders = async () => {
      try {
        const response = await fetch("http://localhost:8070/sellerorder/");
        const data = await response.json();
        setSellerOrders(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching seller orders:", error);
        setLoading(false);
      }
    };

    fetchSellerOrders();
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
            sellerOrders.map((order, index) => (
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

export default SellerPostsPage;
