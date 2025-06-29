import React, { useState } from "react";
import "./AddProductForm.css";

const AddProductForm = ({ onProductAdded }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    if (!name || !price || !image) {
      setError("Name, price, and image are required.");
      return;
    }

    const numericPrice = parseFloat(price);
    if (isNaN(numericPrice) || numericPrice <= 0) {
      setError("Please enter a valid price.");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", numericPrice);
    formData.append("image", image);

    try {
      const response = await fetch(`${process.env.REACT_APP_API_BASE}/api/products`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to add product.");
      }

      setSuccess(true);
      setName("");
      setDescription("");
      setPrice("");
      setImage(null);
      if (onProductAdded) onProductAdded();
    } catch (err) {
      setError(err.message || "Something went wrong.");
    }
  };

  return (
    <form className="add-product-form" onSubmit={handleSubmit}>
      <h3>Add New Product</h3>

      {success && <p className="success-msg">✅ Product added successfully!</p>}
      {error && <p className="error-msg">⚠️ {error}</p>}

      <label>
        Product Name
        <input
          type="text"
          placeholder="e.g. Organic Carrot Seeds"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>

      <label>
        Description (optional)
        <textarea
          placeholder="Write a short description..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </label>

      <label>
        Price (€)
        <div className="price-input">
          <span>€</span>
          <input
            type="number"
            step="0.01"
            placeholder="e.g. 4.99"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
      </label>

      <label>
        Product Image
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          required
        />
      </label>

      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProductForm;
