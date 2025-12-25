import React from "react";
import "./Hydration.css";
import ProductCard from "./ProductCard";
import image1 from "../assets/PrimeICe/1st.png";
import image2 from "../assets/PrimeICe/2nd.png";
import image3 from "../assets/PrimeICe/3rd.png";
import image4 from "../assets/PrimeICe/image.png";

const productList = [
  {
    image: image1,
    title: "ICE POP",
    packSize: "12PK",
    link: "/a",
  },
  {
    image: image2,
    title: "Red Chill",
    packSize: "12PK",
    link: "/b",
  },
  {
    image: image3,
    title: "Orange",
    packSize: "12PK",
    link: "/cd",
  },
];

function PrimeIce() {
  return (
    <>
      <div className="Hydration">
        <div className="title">PRIME ICE</div>
        <div className="product_cart">
          {productList.map((item, index) => (
            <ProductCard
              key={index}
              image={item.image}
              title={item.title}
              packSize={item.packSize}
              link={item.link}
            />
          ))}
        </div>
        <div className="Shop-Hydration">
          <div>
            <img
              src={image4}
              alt="Shop  Hydration"
              className="shop-hydration-img"
            />
          </div>
          <div>
            <a href="#" className="shop-hydration-btn">
              SHOP ICE <br /> HYDRATION
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default PrimeIce;
