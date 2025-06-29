import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-icon">
          <svg
            width="64"
            height="64"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 12C13.1046 12 14 11.1046 14 10V5H10V10C10 11.1046 10.8954 12 12 12Z"
              fill="#4CAF50"
            />
            <path
              d="M19 7C17 7 14 8 14 10C14 12 17 13 19 13C21 13 22 10 22 10C22 10 21 7 19 7Z"
              fill="#81C784"
            />
            <path
              d="M5 7C3 7 2 10 2 10C2 10 3 13 5 13C7 13 10 12 10 10C10 8 7 7 5 7Z"
              fill="#81C784"
            />
            <path
              d="M12 13V21"
              stroke="#388E3C"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h1>Grow your garden</h1>
        <p>High-quality seeds. Sustainable gardening. Delivered to your door.</p>
        <button className="hero-button" onClick={() => navigate("/products")}>
          VIEW PRODUCTS
        </button>
      </div>
    </section>
  );
};

export default Home;
