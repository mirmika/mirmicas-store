import { Link } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const { _id, name, price, image } = product || {};

  const formattedPrice =
    typeof price === "number" ? `€${price.toFixed(2)}` : "€--";

  const imageUrl =
    image && !image.startsWith("http")
      ? `${process.env.REACT_APP_API_BASE}/uploads/${image}`
      : image || "/placeholder.jpg";

  return (
    <Link to={`/products/${_id}`} className="product-card-link">
      <div className="product-card">
        <img
          src={imageUrl}
          alt={name || "Product image"}
          className="product-card-image"
          onError={(e) => {
            if (!e.target.dataset.fallback) {
              e.target.src = "/placeholder.jpg";
              e.target.dataset.fallback = "true"; // ✅ prevents infinite loop
            }
          }}
        />
        <div className="product-card-info">
          <h3 className="product-card-name">{name || "Unnamed Product"}</h3>
          <p className="product-card-price">{formattedPrice}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
