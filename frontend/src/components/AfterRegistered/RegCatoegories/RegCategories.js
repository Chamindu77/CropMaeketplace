import React from "react";
import { Link } from "react-router-dom";
import "./RegCategories.css";

function Categories() {
  return (
    <div>
      <div className="image-row">
        <Link to="/regvegetable">
          <img
            src={process.env.PUBLIC_URL + "/Categories/veg.png"}
            alt="Vegetable"
            className="image"
          />
        </Link>
        <Link to="/regfruit">
          <img
            src={process.env.PUBLIC_URL + "/Categories/fruit.png"}
            alt="Fruit"
            className="image"
          />
        </Link>
        <Link to="/reggrain">
          <img
            src={process.env.PUBLIC_URL + "/Categories/grain.png"}
            alt="Grain"
            className="image"
          />
        </Link>
        <Link to="/regspices">
          <img
            src={process.env.PUBLIC_URL + "/Categories/spices.png"}
            alt="Spices"
            className="image"
          />
        </Link>
        <Link to="/regother">
          <img
            src={process.env.PUBLIC_URL + "/Categories/other.png"}
            alt="Other"
            className="image"
          />
        </Link>
      </div>
    </div>
  );
}

export default Categories;
