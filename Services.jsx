import React from "react";
import "./Services.css";
import { Link } from "react-router-dom";
import { FaHeart, FaEye, FaStar, FaStarHalfAlt } from "react-icons/fa";

import car1 from "../assets/car1.jpg";
import car2 from "../assets/car2.avif";
import car3 from "../assets/car3.png";
import car4 from "../assets/car4.avif";
import car5 from "../assets/car5.webp";
import car6 from "../assets/car6.avif";
import car7 from "../assets/car7.webp";
import car8 from "../assets/car8.jpg";

const carOffers = [
  { id: 1, name: "Maruti Swift", price: "$29/day", rating: 4.5, image: car1 },
  { id: 2, name: "Hyundai Creta", price: "$45/day", rating: 5, image: car2 },
  { id: 3, name: "Toyota Fortuner", price: "$70/day", rating: 4, image: car3 },
  { id: 4, name: "Honda City", price: "$39/day", rating: 4, image: car4 },
  { id: 5, name: "Tata Nexon", price: "$42/day", rating: 4.5, image: car5 },
  { id: 6, name: "Kia Seltos", price: "$48/day", rating: 5, image: car6 },
  { id: 7, name: "MG Hector", price: "$55/day", rating: 4.5, image: car7 },
  { id: 8, name: "Mahindra XUV700", price: "$60/day", rating: 5, image: car8 },
];

const Services = () => {
  return (
    <section className="services-section" id="dishes">
      <h3 className="section-subtitle">Services</h3>
      <h1 className="section-title">Car Rental Offers</h1>

      <div className="car-grid">
        {carOffers.map((car) => (
          <div className="car-card" key={car.id}>
            <a href="#" className="car-icon heart"><FaHeart /></a>
            <a href="#" className="car-icon view"><FaEye /></a>
            <img src={car.image} alt={car.name} className="car-image" />
            <h3 className="car-name">{car.name}</h3>
            <div className="car-rating">
              {Array.from({ length: Math.floor(car.rating) }).map((_, i) => (
                <FaStar key={i} />
              ))}
              {car.rating % 1 !== 0 && <FaStarHalfAlt />}
            </div>
            <span className="car-price">{car.price}</span>
            <Link to={`/car/${car.id}`} className="book-btn">Book now</Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
