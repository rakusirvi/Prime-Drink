import React from "react";
import ProductCard from "./ProductCard";
import "./Hydration.css";
import "./Energy.css";

import image from "../assets/Energy/1st.png";
import image2 from "../assets/Energy/2nd.png";
import image3 from "../assets/Energy/3rd.png";
import image4 from "../assets/Energy/4th.png";
import image5 from "../assets/Energy/5th.png";
import image6 from "../assets/Energy/Shop1.png";

import image7 from "../assets/Energy/Shop2.png";

function Energy() {
  return (
    <div className="Container">
      <div className="Hydration">
        <div className="title">ENERGY</div>
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
          <ProductCard
            image={image4}
            title="Sournova Blast"
            packSize="12PK"
            link="/snowball"
          />
          <ProductCard
            image={image5}
            title="Future Freeze"
            packSize="12PK"
            link="/snowball"
          />
        </div>
      </div>
      <div className="Shop-hydration">
        <div>
          <img className="shop-hydration-img img1" src={image6} />
        </div>
        <div className="Shop-hydration-inner">
          <img className="shop-hydration-img shop-ing-img" src={image7} />
          <a href="#" className="shop-hydration-btn">
            SHOP HYDRATION
          </a>
        </div>
      </div>
    </div>
  );
}

export default Energy;
