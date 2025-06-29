import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-page">
      <div className="about-header">
        <h2>🌿 About Mirmicas Store</h2>
        <p className="tagline">
          Helping gardens grow — one seed at a time.
        </p>
      </div>

      <div className="about-content">
        <p>
          At <strong>Mirmicas Store</strong>, we believe that gardening is more than a hobby — it's a journey toward sustainability, joy, and connection with nature.
        </p>
        <p>
          Whether you're a first-time gardener or a seasoned grower, our mission is to support your passion by offering carefully curated seeds, high-quality tools, and practical resources that bring your garden to life.
        </p>
        <p>
          We’re committed to eco-conscious practices, excellent customer service, and building a community where every plant — and every person — has the opportunity to thrive.
        </p>
      </div>

      <div className="about-values">
        <h3>🌱 What We Stand For</h3>
        <ul>
          <li>✅ Premium, non-GMO seeds</li>
          <li>✅ Reliable tools and accessories</li>
          <li>✅ Guidance and education for all levels</li>
          <li>✅ Sustainable, earth-friendly values</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
