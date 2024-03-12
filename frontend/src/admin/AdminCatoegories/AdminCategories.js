import React from "react";
import { Link } from "react-router-dom";
import "./AdminCategories.css";

function AdminCategories() {
  return (
    <div>
      <div className="category-image-row">
        <Link to="/vegetable">
          <img
            src={process.env.PUBLIC_URL + "/Categories/veg.png"}
            alt="Vegetable"
            className="veg-category-image"
          />
        </Link>
        <Link to="/fruit">
          <img
            src={process.env.PUBLIC_URL + "/Categories/fruit.png"}
            alt="Fruit"
            className="fruit-category-image"
          />
        </Link>
        <Link to="/grain">
          <img
            src={process.env.PUBLIC_URL + "/Categories/grain.png"}
            alt="Grain"
            className="grain-category-image"
          />
        </Link>
        <Link to="/spices">
          <img
            src={process.env.PUBLIC_URL + "/Categories/spices.png"}
            alt="Spices"
            className="spice-category-image"
          />
        </Link>
        <Link to="/other">
          <img
            src={process.env.PUBLIC_URL + "/Categories/other.png"}
            alt="Other"
            className="other-category-image"
          />
        </Link>
      </div>
    </div>
  );
}

export default AdminCategories;
