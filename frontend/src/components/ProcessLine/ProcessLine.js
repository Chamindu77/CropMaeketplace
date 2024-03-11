import React, { useState } from "react";
import "./processLine.css";

function ProcessLine() {
  const [activePopup, setActivePopup] = useState(null);

  const togglePopup = (index) => {
    setActivePopup(activePopup === index ? null : index);
  };

  return (
    <div>
      <div className="process-container">
        <div className="path"></div>
        <div
          className={`image-popup ${activePopup === 1 ? "active" : ""}`}
          onClick={() => togglePopup(1)}
        >
          <img
            src={process.env.PUBLIC_URL + "/Profile/farmer.png"}
            alt=""
            className="img"
          />
        </div>
        <div
          className={`image-popup ${activePopup === 2 ? "active" : ""}`}
          onClick={() => togglePopup(2)}
        >
          <img
            src={process.env.PUBLIC_URL + "/Profile/seller.png"}
            alt=""
            className="img"
          />
        </div>
      </div>
    </div>
  );
}

export default ProcessLine;
