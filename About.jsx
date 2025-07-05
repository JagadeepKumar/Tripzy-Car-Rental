import React from "react";
import "./About.css";
import aboutimg1 from "../assets/about-img-2.jpg"; 
import { FaShippingFast, FaDollarSign, FaHeadset } from "react-icons/fa";
import { FaCar, FaCalendarCheck, FaShieldAlt } from "react-icons/fa";


const About = () => {
  return (
    <section className="about" id="about">
      <h3 className="sub-heading">about us</h3>
      <h1 className="heading">why choose us ?</h1>

      <div className="row">
        <div className="image">
          <img src={aboutimg1} alt="About us" height="200px" />
        </div>

        <div className="content">
         <h3>Drive the Experience You Deserve</h3>
<p>
  Whether it's a weekend getaway or a business trip, we offer more than just a ride —
    we deliver comfort, style, and reliability. Every car in our fleet is well-maintained,
    sanitized, and road-trip ready. Book today and travel with peace of mind.
</p>

         <div className="icons-container">
  <div className="icons">
    <FaCar />
    <span>Wide Range of Cars</span>
  </div>
  <div className="icons">
    <FaCalendarCheck />
    <span>Instant Booking</span>
  </div>
  <div className="icons">
    <FaShieldAlt />
    <span>Fully Insured</span>
  </div>
</div>

          <a href="#" className="btn">learn more</a>
        </div>
      </div>
    </section>
  );
};

export default About;
