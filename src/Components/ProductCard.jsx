import "./ProductCard.css";

function ProductCard({ image, title, packSize, link, btn }) {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={image} alt={title} className="product-image" />
      </div>

      <div className="product-info">
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
