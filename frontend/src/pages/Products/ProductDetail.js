import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`${process.env.REACT_APP_API_BASE}/api/products/${id}`);
        if (!res.ok) throw new Error("Product not found");
        const data = await res.json();
        setProduct(data);
        setError(null);
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <p>Loading product details...</p>;
  if (error) return <p className="error-msg">❌ {error}</p>;

  const { name, price, description, image } = product;

  const imageUrl =
    image && !image.startsWith("http")
      ? `${process.env.REACT_APP_API_BASE}/${image}`
      : image || "/placeholder.jpg";

  return (
    <div className="product-detail">
      <img
        src={imageUrl}
        alt={name || "Product"}
        className="detail-image"
        onError={(e) => (e.target.src = "/placeholder.jpg")}
      />
      <div className="detail-info">
        <h2>{name || "Unnamed Product"}</h2>
        <p className="price">
          {typeof price === "number" ? `€${price.toFixed(2)}` : "€--"}
        </p>
        <p className="description">
          {description || "No description provided."}
        </p>
      </div>
    </div>
  );
};

export default ProductDetail;
