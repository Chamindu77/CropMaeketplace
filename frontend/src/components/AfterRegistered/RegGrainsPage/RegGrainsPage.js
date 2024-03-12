import "./RegGrainsPage.css";
import React, { useState, useEffect } from "react";

import Navbar from "../../NavbarRegistered/NavbarRegistered";
import FooterNew from "../../Footer/FooterNew";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function GrainsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:8070/product/Grain");
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
      <div className="nothing-cateogory-pages"></div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search grains..."
          className="search-input"
        />
        <button className="search-button">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
      <div className="products-container">
        {products.length > 0 ? (
          products.map((product) => (
            <div className="products-item" key={product._id}>
              <img src={product.productImage} alt={product.productName} />
              <p>{product.productName}</p>
            </div>
          ))
        ) : (
          <p>No vegetable products found.</p>
        )}
      </div>
      <div className="nothing-cateogory-pages-below"></div>
      <FooterNew />
    </div>
  );
}

export default GrainsPage;
