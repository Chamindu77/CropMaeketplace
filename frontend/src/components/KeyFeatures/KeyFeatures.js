import React from "react";
import "./keyFeatures.css";

function KeyFeatures() {
  return (
    <div>
      <div className="container">
        <div className="row text-center features-row">
          <div className="col-md-3 col_adv">
            <div className="container--img">
              <img
                className="img--base"
                src="https://agrimp.com/assets/flowcharts/oval-34100b9a6862e2b2bc37d7f9fd45c66f87e172b249eafc56dd83f822fa282d6d.png"
                alt="Oval"
              />
              <img
                className="img--top"
                src="https://agrimp.com/assets/flowcharts/transparency-22c9e5d80505d72e6f7d60580801572f3c431ac6018d4b4099a42212da8c36c0.png"
                alt="Tranparency"
              />
            </div>
            <p className="container-feature_subtitle">Transparency</p>
            <p className="container-feature_text">
              Direct transaction between user and website
            </p>
          </div>

          <div className="col-md-3 col_adv">
            <div className="container--img">
              <img
                className="img--base"
                src="https://agrimp.com/assets/flowcharts/oval-34100b9a6862e2b2bc37d7f9fd45c66f87e172b249eafc56dd83f822fa282d6d.png"
                alt="Oval"
              />
              <img
                className="img--top"
                src="https://agrimp.com/assets/flowcharts/fairtrade-6f557826462666cbfa5b8d3c411224993cdc7a506cd31ed6d243eb05bbc8bb96.png"
                alt="Fairtrade"
              />
            </div>
            <p className="container-feature_subtitle">Fairtrade</p>
            <p className="container-feature_text">
              Redistribution of value in the food supply chain
            </p>
          </div>

          <div className="col-md-3 col_adv">
            <div className="container--img">
              <img
                className="img--base"
                src="https://agrimp.com/assets/flowcharts/oval-34100b9a6862e2b2bc37d7f9fd45c66f87e172b249eafc56dd83f822fa282d6d.png"
                alt="Oval"
              />
              <img
                className="img--top"
                src="https://agrimp.com/assets/flowcharts/userfriendly-62cf507c1c2ba82b4435688baca08b1fbc89796f803b09aefcbeb88a0b042773.png"
                alt="UserFriendly"
              />
            </div>
            <p className="container-feature_subtitle">User Friendly</p>
            <p className="container-feature_text">
              Reduce the cost of third parties
            </p>
          </div>

          <div className="col-md-3 col_adv">
            <div className="container--img">
              <img
                className="img--base"
                src="https://agrimp.com/assets/flowcharts/oval-34100b9a6862e2b2bc37d7f9fd45c66f87e172b249eafc56dd83f822fa282d6d.png"
                alt="Oval"
              />
              <img
                className="img--top"
                src="https://agrimp.com/assets/flowcharts/food_traceability-93d797d1b2749edf1b55836c3ae17f807503aa5ebe44a34b21cb0b4a17aa0e64.png"
                alt="FoodTracability"
              />
            </div>
            <p className="container-feature_subtitle">Food Traceability</p>
            <p className="container-feature_text">
              Crop reliability through supply chain traceability
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KeyFeatures;
