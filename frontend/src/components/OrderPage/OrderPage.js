import React, { useState, useEffect } from "react";
import "./OrderPage.css";
import { useLocation } from "react-router-dom";

function AddProductPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const [formData, setFormData] = useState({
    productImage: queryParams.get("image") || "",
    category: queryParams.get("item") || "",
    item: queryParams.get("category") || "",
    quantity: "",
    price: "",
    district: "",
    company: "",
    mobile: "",
    land: "",
    email: "",
    address: "",
    expireDate: "",
  });

  const [items, setItems] = useState([]);

  useEffect(() => {
    // Fetch items based on selected category
    fetchItems(formData.category);
  }, [formData.category]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    // Find the selected item from items
    const selectedItem = items.find((item) => item.id === value);
    if (selectedItem) {
      // Update form data with selected item details
      setFormData((prevFormData) => ({
        ...prevFormData,
        item: selectedItem.name,
        category: selectedItem.category,
        productImage: selectedItem.image, // Assuming you have an image field in your item object
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // You can handle form submission logic here, like sending data to the backend
  };

  const fetchItems = (category) => {
    // Fetch items based on category and update the items state
    fetch(`http://localhost:8070/product?category=${category}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); // Parse the response body as JSON
      })
      .then((data) => {
        setItems(data); // Update the items state with the parsed data
      })
      .catch((error) => console.error("Error fetching items:", error));
  };

  return (
    <div className="form-container">
      <h3>Place new Order</h3>
      <form onSubmit={handleSubmit}>
        {formData.productImage && (
          <div className="image-preview">
            <img src={formData.productImage} alt="Product" />
          </div>
        )}

        <div className="input-field-container">
          <p>Product Category</p>
        </div>
        <input
          type="text"
          name="category"
          placeholder="Product Category"
          value={formData.category}
          onChange={handleChange}
        />
        <div className="input-field-container">
          <p>Product Item</p>
        </div>
        <input
          type="text"
          name="item"
          placeholder="Product Item"
          value={formData.item}
          onChange={handleChange}
        />
        <div className="input-field-container">
          <p>Quantity (kg)</p>
        </div>
        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={formData.quantity}
          onChange={handleChange}
        />
        <div className="input-field-container">
          <p>Price (Rs.)</p>
        </div>
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
        />
        <div className="input-field-container">
          <p>District</p>
        </div>
        <input
          type="text"
          name="district"
          placeholder="District"
          value={formData.district}
          onChange={handleChange}
        />
        <div className="input-field-container">
          <p>Company</p>
        </div>
        <input
          type="text"
          name="company"
          placeholder="Company"
          value={formData.company}
          onChange={handleChange}
        />
        <div className="input-field-container">
          <p>Contact Number</p>
        </div>
        <input
          type="text"
          name="mobile"
          placeholder="Mobile"
          value={formData.mobile}
          onChange={handleChange}
        />
        <div className="input-field-container">
          <p>Email Address</p>
        </div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <div className="input-field-container">
          <p>Living Address</p>
        </div>
        <textarea
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
        ></textarea>
        <div className="input-field-container">
          <p>Set Order Expire Date</p>
        </div>
        <input
          type="date"
          name="expireDate"
          placeholder="Expire Date"
          value={formData.expireDate}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddProductPage;
