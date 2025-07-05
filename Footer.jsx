import React from "react";
import "./Footer.css"; 

const Footer = () => {
  return (
    <section className="footer" id="footer">
      <div className="box-container">
        <div className="box">
          <h3>location</h3>
          <a href="#">Chennai</a>
          <a href="#">Coimbatore</a>
          <a href="#">Madurai</a>
          <a href="#">Bengaluru</a>
        </div>

        <div className="box">
          <h3>quick link</h3>
          <a href="#home">home</a>
          <a href="#services">services</a>
          <a href="#about">about</a>
          <a href="#review">review</a>
        </div>

        <div className="box">
          <h3>contact info</h3>
          <a href="#">+123-456-789</a>
          <a href="#">+9876-54321</a>
          <a href="#">Tripzy@gmail.com</a>
          <a href="#">Chennai, India - 600042</a>
        </div>

        <div className="box">
          <h3>follow us</h3>
          <a href="#">facebook</a>
          <a href="#">twitter</a>
          <a href="#">instagram</a>
        </div>
      </div>

      <div className="credit">
        copyright © 2025 by
        <span className="jk-highlight">JK ✨</span>
      </div>
    </section>
  );
};

export default Footer;
