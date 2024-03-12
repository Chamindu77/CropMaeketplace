import React, { useState, useEffect } from "react";
import "./RegVegetablePage.css";
import Navbar from "../../NavbarRegistered/NavbarRegistered";
import FooterNew from "../../Footer/FooterNew";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faSquarePlus,
  faCartPlus,
} from "@fortawesome/free-solid-svg-icons";

function VegetablePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:8070/product/Veg");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="nothing-cateogory-pages-veg"></div>
      <div className="search-container-veg">
        <input
          type="text"
          placeholder="Search vegetables..."
          className="search-input-veg"
        />
        <button className="search-button-veg">
          <FontAwesomeIcon icon={faSearch} />
        </button>
        <div>
          <button
            className="add-products-button"
            onClick={() => {
              window.location.href = "http://localhost:3000/contactadmin";
            }}
          >
            <FontAwesomeIcon icon={faSquarePlus} /> {"  "} Add New Vegetable{" "}
            {/*Add products as admin,   Chat with admin as user */}
          </button>
        </div>
        <div>
          <button
            className="make-order-button-veg"
            onClick={() => {
              window.location.href = "http://localhost:3000/order";
            }}
          >
            <FontAwesomeIcon icon={faCartPlus} /> {"  "} Make an Order
          </button>
        </div>
      </div>
      <div className="products-container-veg">
        {products.length > 0 ? (
          products.map((product) => (
            <div className="products-item-veg" key={product._id}>
              <a
                href={`/order?image=${encodeURIComponent(
                  product.productImage
                )}&item=${encodeURIComponent(
                  product.productName
                )}&category=Veg`}
                className="product-item-veg-link"
              >
                <img src={product.productImage} alt={product.productName} />
                <p>{product.productName}</p>
              </a>
            </div>
          ))
        ) : (
          <p>No vegetable products found.</p>
        )}
      </div>

      <div className="nothing-cateogory-pages-below-veg"></div>
      <FooterNew />
    </div>
  );
}

export default VegetablePage;
