import React, { useEffect, useState } from "react";
import ProductCard from "../../components/common/ProductCard";
import AddProductForm from "./AddProductForm";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    try {
      const res = await fetch(`${process.env.REACT_APP_API_BASE}/api/products`);
      if (!res.ok) throw new Error("Failed to fetch products.");
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="products-page">
      <div className="products-top">
        <AddProductForm onProductAdded={fetchProducts} />
      </div>

      <div className="products-bottom">
        {loading ? (
          <p>Loading products...</p>
        ) : error ? (
          <p className="error-text">Error: {error}</p>
        ) : products.length === 0 ? (
          <p>No products available.</p>
        ) : (
          <div className="products-grid">
            {products.map((product) => (
              <ProductCard key={product._id || product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
