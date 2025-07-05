import React from "react";
import { useParams, useNavigate } from "react-router-dom"; // ✅ Added useNavigate
import "./CarDetails.css";

import car1 from "../assets/car1.jpg";
import car2 from "../assets/car2.avif";
import car3 from "../assets/car3.png";
import car4 from "../assets/car4.avif";
import car5 from "../assets/car5.webp";
import car6 from "../assets/car6.avif";
import car7 from "../assets/car7.webp";
import car8 from "../assets/car8.jpg";

const carOffers = [
  { id: 1, name: "Maruti Swift", price: "$29/day", rating: 4.5, image: car1, model: "2022", fuel: "Petrol", seats: 5 },
  { id: 2, name: "Hyundai Creta", price: "$45/day", rating: 5, image: car2, model: "2023", fuel: "Diesel", seats: 5 },
  { id: 3, name: "Toyota Fortuner", price: "$70/day", rating: 4, image: car3, model: "2022", fuel: "Diesel", seats: 7 },
  { id: 4, name: "Honda City", price: "$39/day", rating: 4, image: car4, model: "2021", fuel: "Petrol", seats: 5 },
  { id: 5, name: "Tata Nexon", price: "$42/day", rating: 4.5, image: car5, model: "2022", fuel: "Petrol", seats: 5 },
  { id: 6, name: "Kia Seltos", price: "$48/day", rating: 5, image: car6, model: "2023", fuel: "Diesel", seats: 5 },
  { id: 7, name: "MG Hector", price: "$55/day", rating: 4.5, image: car7, model: "2023", fuel: "Diesel", seats: 5 },
  { id: 8, name: "Mahindra XUV700", price: "$60/day", rating: 5, image: car8, model: "2023", fuel: "Petrol", seats: 7 },
];

const CarDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // ✅ for navigation

  const car = carOffers.find((c) => c.id === parseInt(id));

  if (!car) return <h2>Car not found</h2>;

  const handleBooking = () => {
    // ✅ redirect to home
    navigate("/");
  };

  return (
    <div className="car-details">
      <div className="car-image">
        <img src={car.image} alt={car.name} />
      </div>
      <div className="car-info">
        <h2>{car.name}</h2>
        <p><strong>Price:</strong> {car.price}</p>
        <p><strong>Model:</strong> {car.model}</p>
        <p><strong>Fuel Type:</strong> {car.fuel}</p>
        <p><strong>Seats:</strong> {car.seats}</p>
        <p><strong>Rating:</strong> {car.rating} ⭐⭐⭐⭐</p>
        <button className="btn" onClick={handleBooking}>Proceed to Book</button>
      </div>
    </div>
  );
};

export default CarDetails;
