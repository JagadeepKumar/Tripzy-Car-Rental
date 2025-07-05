import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

// Make sure Boxicons CDN is added in index.html

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-section logo">
        <i className="bx bxs-car"></i>
        Tripzy
      </div>

      <div className="navbar-section nav-center">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/about">About</Link>
        <Link to="/review">Review</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div className="navbar-section login-button">
        <Link to="/login">Login</Link>
      </div>
    </header>
  );
};

export default Navbar;
