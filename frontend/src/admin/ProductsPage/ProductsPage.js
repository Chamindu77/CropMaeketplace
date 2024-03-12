import React, { useState } from "react";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import Categories from "../AdminCatoegories/AdminCategories";
//import CarouselCategory from "../Carousel/CarouselCategory";
//import TypeWriter from "../AutoWritingText/TypeWriter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBox } from "@fortawesome/free-solid-svg-icons";
//import KeyFeatures from "../KeyFeatures/KeyFeatures";
import AdminFooter from "../AdminFooter/AdminFooter";
import "./ProductsPage.css" ;
//import RegisterPage from "../Register/RegisterPage";

function ProductsPage() {

    return(
        <div>
      <AdminNavbar />

      <h2 className="product-categories-heading">Product Categories</h2>

      <div className="categories-container">
        <Categories />
      </div>

      <div className="add-product-container">
        <button
          className="button-add-product"
        >
            <FontAwesomeIcon icon={faBox} className="add-product-icon" />
          Add New Product
        </button>
      </div>

      <AdminFooter />
    </div>

    );

}

export default ProductsPage;

/*
onClick={() => {
  window.location.href = "http://localhost:3000/addproduct";
}}*/