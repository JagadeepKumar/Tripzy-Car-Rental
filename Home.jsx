import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./Home.css";

import Services from "./Services";
import About from "./About";
import Review from "./Review";
import Contact from "./Contact";

import homeimg1 from "../assets/home-img-1.avif";
import homeimg2 from "../assets/home-img-2.jpg";
import homeimg3 from "../assets/home-img-3.avif";

const Home = () => {
  const [booking, setBooking] = useState({
    location: "",
    pickup: "",
    return: "",
  });

  const handleChange = (e) => {
    setBooking({ ...booking, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Date validation
    const pickupDate = new Date(booking.pickup);
    const returnDate = new Date(booking.return);

    if (returnDate <= pickupDate) {
      alert("❌ Return date must be after pickup date.");
      return;
    }

    // ✅ Success message
    alert(`✅ Booking Confirmed!\nLocation: ${booking.location}`);

    // ✅ Reset form
    setBooking({
      location: "",
      pickup: "",
      return: "",
    });
  };

  return (
    <section className="home" id="home">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{ delay: 34000 }}
        className="home-slider"
      >
        <SwiperSlide className="slide">
          <div className="content">
            <span>Smart Rentals. Honest Prices.</span>
            <h3>Budget Cars Without Compromise</h3>
            <p>
              Get more for less. Choose from our wide range of fuel-efficient hatchbacks and compact cars — perfect for city rides and daily commutes.
            </p>
            <a href="#" className="btn">Order now</a>
          </div>
          <div className="image">
            <img src={homeimg2} alt="Hatchback" />
          </div>
        </SwiperSlide>

        <SwiperSlide className="slide">
          <div className="content">
            <span>Your Journey Starts Here</span>
            <h3>Powerful SUVs for Every Terrain</h3>
            <p>
              Explore beyond the limits with rugged, feature-packed SUVs designed for long road trips, off-road trails, and unforgettable memories.
            </p>
            <a href="#" className="btn">Order now</a>
          </div>
          <div className="image">
            <img src={homeimg1} alt="SUV" />
          </div>
        </SwiperSlide>

        <SwiperSlide className="slide">
          <div className="content">
            <span>Drive the Future</span>
            <h3>Eco-Friendly Electric Rentals</h3>
            <p>
              Reduce your carbon footprint with our electric and hybrid cars. Quiet, clean, and futuristic — the smarter way to drive.
            </p>
            <a href="#" className="btn">Order now</a>
          </div>
          <div className="image">
            <img src={homeimg3} alt="Electric Car" />
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Booking Form Section */}
      <div className="booking-form">
        <h2>Book Your Ride</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="location"
            placeholder="Enter location"
            value={booking.location}
            onChange={handleChange}
            required
          />
          <input
            type="date"
            name="pickup"
            value={booking.pickup}
            onChange={handleChange}
            required
          />
          <input
            type="date"
            name="return"
            value={booking.return}
            onChange={handleChange}
            required
          />
          <button type="submit">Search Cars</button>
        </form>
      </div>

      <Services />
      <About />
      <Review />
      <Contact />
    </section>
  );
};

export default Home;
