import React from "react";
import ProductCard from "./ProductCardForRapidHydration";
import "./Hydration.css";

import image from "../assets/RapidHydration/1st.png";
import image2 from "../assets/RapidHydration/2nd.png";
import image3 from "../assets/RapidHydration/3rd.png";
import image6 from "../assets/RapidHydration/Shop1.png";
import image7 from "../assets/RapidHydration/Shop2.png";

function RapidHydration() {
  return (
    <div className="Container">
      <div className="Hydration">
        <div className="title">
          RAPID <br />
          REHYDRATION
        </div>
        <div className="product_cart">
          <ProductCard
            image={image}
            title="SNOWBALL SLUSHY"
            packSize="12PK"
            link="/snowball"
          />
          <ProductCard
            image={image2}
            title="KSI the Nightmare"
            packSize="12PK"
            link="/snowball"
          />
          <ProductCard
            image={image3}
            title="PRIMESERIES COLLECTOR "
            packSize="12PK"
            link="/snowball"
          />
        </div>
      </div>
      <div className="Shop-hydration">
        <div>
          <img className="img1" src={image6} />
        </div>
        <div className="Shop-hydration-inner">
          <img className="shop-hydration-img shop-ing-img shop-ing-img2" src={image7} />
          <a href="#" className="shop-hydration-btn">
            REHYDRATE NOW
          </a>
        </div>
      </div>
    </div>
  );
}

export default RapidHydration;
