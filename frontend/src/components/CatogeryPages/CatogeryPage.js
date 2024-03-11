import React, { useState, useEffect } from "react";
import "./CatogeryPage.css";
import Navbar from "../../components/NavbarRegistered/NavbarRegistered";
import FooterNew from "../../components/Footer/FooterNew";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function CatogeryPage() {
  const [products, setProducts] = useState([]);
  const [catogery, setCatogery] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let url = "";

        switch (catogery) {
          case "Veg":
            url = "http://localhost:8070/product/Vegetable";
            break;
          case "Fruit":
            url = "http://localhost:8070/product/fruit";
            break;
          case "Grain":
            url = "http://localhost:8070/product/Grain";
            break;
          case "Spices":
            url = "http://localhost:8070/product/spices";
            break;
          case "Other":
            url = "http://localhost:8070/product/other";
            break;
          default:
            break;
        }

        console.log(catogery);
        const response = await fetch(url);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
      /*

      try {
        const response_add = await fetch("http://localhost:8070/product/add");
        const data = await response_add.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
      */
    };

    fetchProducts();
  }, [catogery]);

  return (
    <div>
      <Navbar />
      <div className="nothing-cateogory-section"></div>
      <div className="search-item-container">
        <input
          type="text"
          placeholder="Search item..."
          className="search-item-input"
        />
        <button className="search-item-button">
          <FontAwesomeIcon icon={faSearch} />
        </button>
        <button className="add-new-item">Add Item</button>
      </div>
      <div className="all-products-container">
        {products.length > 0 ? (
          products.map((product) => (
            <div className="all-products-item" key={product._id}>
              <img src={product.productImage} alt={product.productName} />
              <p>{product.productName}</p>
            </div>
          ))
        ) : (
          <p>No item found.</p>
        )}
      </div>
      <div className="nothing-cateogory-pages-below-section"></div>
      <FooterNew />
    </div>
  );
}

export default CatogeryPage;
