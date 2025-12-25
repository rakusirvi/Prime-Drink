import "./ProductCard.css";
import { Link } from "react-router-dom";

function ProductCard({ image, title, packSize, link, btn }) {
  const isExternal =
    typeof link === "string" &&
    (link.startsWith("http") ||
      link.startsWith("//") ||
      link.startsWith("mailto:") ||
      link.startsWith("tel:"));
  const label = btn || "LEARN MORE";

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={image} alt={title} className="product-image" />
      </div>

      <div className="product-info">
        <h2 className="product-title">{title}</h2>
        <p className="product-pack">{packSize}</p>
      </div>

      {isExternal ? (
        <a
          href={link}
          className="learn-more-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          {label}
        </a>
      ) : (
        <Link to={link || "#"} className="learn-more-btn">
          {label}
        </Link>
      )}
    </div>
  );
}

export default ProductCard;
