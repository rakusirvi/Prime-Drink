import React from "react";
import ProductCard from "./ProductCardForRapidHydration";
import "./Hydration.css";

import image from "../assets/RapidHydration/1st.png";
import image2 from "../assets/RapidHydration/2nd.png";
import image3 from "../assets/RapidHydration/3rd.png";
import image6 from "../assets/RapidHydration/Shop1.png";
import image7 from "../assets/RapidHydration/Shop2.png";

const productList = [
  {
    image: image,
    title: "BERRY CITRUS",
    packSize: "12PK",
    link: "/berry-citrus",
  },
  {
    image: image2,
    title: "GLACIER ORANGE",
    packSize: "12PK",
    link: "/glacier-orange",
  },
  {
    image: image3,
    title: "OCEAN CHERRY",
    packSize: "12PK",
    link: "./ocean-cherry",
  },
];

function RapidHydration() {
  return (
    <div className="Container">
      <div className="Hydration">
        <div className="title">
          RAPID <br />
          REHYDRATION
        </div>
        <div className="product_cart">
          {productList.map((product, index) => {
            return (
              <ProductCard
                image={product.image}
                title={product.title}
                packSize={product.packSize}
                link={product.link}
              />
            );
          })}
        </div>
      </div>
      <div className="Shop-hydration">
        <div>
          <img className="img1" src={image6} />
        </div>
        <div className="Shop-hydration-inner">
          <img
            className="shop-hydration-img shop-ing-img shop-ing-img2"
            src={image7}
          />
          <a href="#" className="shop-hydration-btn">
            REHYDRATE NOW
          </a>
        </div>
      </div>
    </div>
  );
}

export default RapidHydration;
