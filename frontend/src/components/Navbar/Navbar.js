
import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="logo">MIRMICAS STORE (MS)</div>
      <ul className="nav-links">
        <li className={location.pathname === "/" ? "active" : ""}>
          <Link to="/">Home</Link>
        </li>
        <li className={location.pathname === "/about" ? "active" : ""}>
          <Link to="/about">About</Link>
        </li>
        <li className={location.pathname === "/products" ? "active" : ""}>
          <Link to="/products">Products</Link>
        </li>
        <li className={location.pathname === "/users" ? "active" : ""}>
          <Link to="/users">Users</Link>
        </li>
        <li className={location.pathname === "/orders" ? "active" : ""}>
          <Link to="/orders">Orders</Link>
        </li>
        <li>
          <button className="contact-btn">Contact</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
