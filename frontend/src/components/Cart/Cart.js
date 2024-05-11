import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faShoppingBag } from "@fortawesome/free-solid-svg-icons";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await fetch("http://localhost:8070/cart"); // Replace with your backend API endpoint
        if (!response.ok) {
          throw new Error("Failed to fetch cart items.");
        }
        const data = await response.json();
        setCartItems(data);
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };
    fetchCartItems();
  }, []);

  const handleRemoveItem = async (itemId) => {
    try {
      const response = await fetch(
        `http://localhost:8070/cart/delete/${itemId}`,
        {
          method: "DELETE",
        }
      ); // Replace with your backend API endpoint
      if (!response.ok) {
        throw new Error("Failed to remove item from cart.");
      }
      // Remove the item from the cartItems state
      setCartItems((prevItems) =>
        prevItems.filter((item) => item._id !== itemId)
      );
    } catch (error) {
      console.error("Error removing item from cart:", error);
    }
  };

  return (
    <div className="orders-wrapper">
      <h2>Your Cart</h2>
      {cartItems.length > 0 ? (
        cartItems.map((cartItem) => (
          <div key={cartItem._id} className="cart-item">
            <img
              src={cartItem.productImage}
              alt={cartItem.item}
              className="item-image"
            />
            <div className="item-details">
              <p>Item: {cartItem.item}</p>
              <p>Quantity: {cartItem.quantity}</p>
              <p>Price: Rs.{cartItem.price}</p>
              {/* Display item type */}
              <p>Owner: {cartItem.name}</p>
            </div>
            <div className="item-actions">
              <button
                className="remove-button"
                onClick={() => handleRemoveItem(cartItem._id)}
              >
                <FontAwesomeIcon icon={faTrash} /> Remove
              </button>
              <button className="buy-button">
                <FontAwesomeIcon icon={faShoppingBag} /> Buy Now
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>No item in cart.</p>
      )}
    </div>
  );
}

export default Cart;
