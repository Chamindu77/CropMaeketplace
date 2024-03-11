import React, { useState, useEffect } from "react";
import "./ProductPage.css";
import NavbarRegistered from "../NavbarRegistered/NavbarRegistered";
import FooterNew from "../Footer/FooterNew";

function ProductPage() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showProducts, setShowProducts] = useState(false); // New state to control product animation

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:8070/product");
      const data = await response.json();
      setProducts(data);
    };

    fetchData();
  }, []);

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.productCategory === selectedCategory)
    : [];

  const groupProducts = (products) => {
    const groups = [];
    for (let i = 0; i < products.length; i += 5) {
      groups.push(products.slice(i, i + 5));
    }
    return groups;
  };

  return (
    <div>
      <NavbarRegistered />
      <div className="nothing"></div>

      <div className="image-row">
        {["Veg", "Fruit", "Grain", "Spices", "Other"].map((category) => (
          <a
            key={category}
            href={`/product/${category}`} // You can update the href to your desired route
            className={`image-link ${
              selectedCategory === category ? "selected" : ""
            }`}
            onClick={(e) => {
              e.preventDefault();
              if (selectedCategory === category) {
                setShowProducts(true);
              } else {
                setSelectedCategory(category);
                setShowProducts(true);
              }
            }}
          >
            <img
              src={
                process.env.PUBLIC_URL +
                `/Categories/${category.toLowerCase()}.png`
              }
              alt={category}
              className="image"
            />
          </a>
        ))}
      </div>

      <div className={`product-container ${showProducts ? "show" : ""}`}>
        {groupProducts(filteredProducts).map((group, groupIndex) => (
          <div key={groupIndex} className="product-row">
            {group.map((product, index) => (
              <button
                key={index}
                className="product-item"
                onClick={() => {
                  // Handle the click event for the product button if needed
                  console.log(`Clicked on ${product.productName}`);
                }}
              >
                <img src={product.productImage} alt={product.productName} />
                <p>{product.productName}</p>
              </button>
            ))}
          </div>
        ))}
      </div>

      <div className="footer">
        <FooterNew />
      </div>
    </div>
  );
}

export default ProductPage;
