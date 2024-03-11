import React, { useState } from "react";
import "./OrderPage.css";

function AddProductPage() {
  const [formData, setFormData] = useState({
    name: "",
    item: "",
    productImage: "",
    category: "",
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
  const [products, setProducts] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    if (name === "category") {
      fetchItems(value);
    }
  };

  const fetchItems = (category) => {
    fetch(`http://localhost:8070/product`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); // Parse the response body as JSON
      })
      .then((data) => {
        console.log(data); // Log the data here
        setItems(data); // Update the items state with the parsed data
      })
      .catch((error) => console.error("Error fetching items:", error));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted:", formData);
  };

  return (
    <div className="form-container">
      <h3>Place new Order</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="productImage"
          placeholder="Product Image URL"
          value={formData.productImage}
          onChange={handleChange}
        />

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="">Select Option</option>
          <option value="Veg">Vegetable</option>
          <option value="Fruit">Fruit</option>
          <option value="grain">Grain</option>
          <option value="spice">Spices</option>
          <option value="other">Other</option>
        </select>

        <select name="item" value={formData.item} onChange={handleChange}>
          <option value="">Select Item</option>
          {items &&
            items.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
        </select>

        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={formData.quantity}
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
        />
        <input
          type="text"
          name="district"
          placeholder="District"
          value={formData.district}
          onChange={handleChange}
        />
        <input
          type="text"
          name="company"
          placeholder="Company"
          value={formData.company}
          onChange={handleChange}
        />
        <input
          type="text"
          name="mobile"
          placeholder="Mobile"
          value={formData.mobile}
          onChange={handleChange}
        />
        <input
          type="text"
          name="land"
          placeholder="Land"
          value={formData.land}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
        ></textarea>
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
