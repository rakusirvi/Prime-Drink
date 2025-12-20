import React from "react";
import "./ProductCardForRapidHydraion.css";

function ProductCard({ image, title, packSize, link, btn }) {
  return (
    <div className="product-cardRA">
      <div className="product-image-containerRA">
        <img src={image} alt={title} className="product-imageRA" />
      </div>

      <div className="product-infoRA">
        <h2 className="product-title">{title}</h2>
        <p className="product-pack">{packSize}</p>
      </div>

      <a href={link} className="learn-more-btn">
        {btn ? btn : "LEARN MORE"}
      </a>
    </div>
  );
}

export default ProductCard;
