import React from "react";
import ProductCard from "./ProductCard";
import "./Hydration.css";
import SS from "../assets/Hidration/SS.png";
import Shop from "../assets/Hidration/Shop.png";
import image from "../assets/Hidration/2nd.png";
import image3 from "../assets/Hidration/3rd.png";
import image4 from "../assets/Hidration/4th.png";
import image5 from "../assets/Hidration/5th.png";
import image6 from "../assets/Hidration/6th.png";

const productList = [
  {
    image: SS,
    title: "SNOWBALL SLUSHY",
    packSize: "12PK",
    link: "/snowball",
  },
  {
    image: image,
    title: "KSI the Nightmare",
    packSize: "12PK",
    link: "/KSI",
  },
  {
    image: image3,
    title: "PRIMESERIES COLLECTOR",
    packSize: "12PK",
    link: "/PRIMESERIES",
  },
  {
    image: image4,
    title: "Sournova Blast",
    packSize: "12PK",
    link: "/Sournova",
  },
  {
    image: image5,
    title: "Future Freeze",
    packSize: "12PK",
    link: "/Future",
  },
  {
    image: image6,
    title: "Ice Pop Flavor",
    packSize: "12PK",
    link: "/IcePop",
  },
];

function Hydration() {
  return (
    <>
      <div className="Hydration">
        <div className="title">HYDRATION</div>
        <div className="product_cart">
          {productList.map((product, index) => {
            return (
              <ProductCard
                key={index}
                image={product.image}
                title={product.title}
                packSize={product.packSize}
                link={product.link}
              />
            );
          })}
        </div>
        <div className="Shop-Hydration">
          <div>
            <img
              src={Shop}
              alt="Shop Hydration"
              className="shop-hydration-img"
            />
          </div>
          <div>
            <a  className="shop-hydration-btn">
              SHOP <br /> HYDRATION
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hydration;
