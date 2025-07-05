import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FaQuoteRight, FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

import "swiper/css";
import "./Review.css"; 3

import pic1 from "../assets/pic-1.webp";
import pic2 from "../assets/pic-2.jpg";
import pic3 from "../assets/pic-3.jpg";
import pic4 from "../assets/pic-4.webp";
import pic5 from "../assets/pic-5.jpg";

const reviews = [
  {
  name: "Chris Evans",
  img: pic1,
  stars: [1, 1, 1, 0, 0],
  review: "Smooth ride and clean interiors. Booking was easy too!",
},
{
  name: "Robert Downey Jr.",
  img: pic2,
  stars: [1, 1, 0.5, 0, 0],
  review: "Great value for the price. Could improve pickup process.",
},
{
  name: "Eva Green",
  img: pic3,
  stars: [1, 1, 1, 0.5, 0],
  review: "Comfortable car and fuel-efficient. Will rent again!",
},
{
  name: "Alexandra Daddario",
  img: pic4,
  stars: [1, 1, 0.5, 0, 0],
  review: "Loved the car but the return process was a bit slow.",
},
{
  name: "Tom Hardy",
  img: pic5,
  stars: [1, 1, 1, 1, 0],
  review: "Excellent service and premium cars. Highly recommend!",
}

];

const Review = () => {
  return (
    <section className="review" id="review">
     <h3 className="sub-heading">client testimonials</h3>
<h1 className="heading">what our customers say about us</h1>


      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2600 }}
        loop={true}
        spaceBetween={20}
        centeredSlides={true}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="review-slider mySwiper"
      >
        {reviews.map((rev, index) => (
          <SwiperSlide className="slide" key={index}>
            <FaQuoteRight className="quote-icon" />
            <div className="user">
              <img src={rev.img} alt={rev.name} />
              <div className="user-info">
                <h3>{rev.name}</h3>
                <div className="stars">
                  {rev.stars.map((val, i) =>
                    val === 1 ? (
                      <FaStar key={i} />
                    ) : val === 0.5 ? (
                      <FaStarHalfAlt key={i} />
                    ) : (
                      <FaRegStar key={i} />
                    )
                  )}
                </div>
              </div>
            </div>
            <p>{rev.review}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Review;
