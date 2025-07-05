import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const socialLinks = [
    { url: "#", icon: "ri-facebook-line" },
    { url: "#", icon: "ri-instagram-line" },
    { url: "#", icon: "ri-linkedin-line" },
    { url: "#", icon: "ri-twitter-line" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been sent successfully!");
    console.log(formData);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section className="contact">
      <div className="contact-box">
        <h2>Contact Us</h2>
        <p className="contact-desc">
          Have questions or need help? Fill out the form and our team will get back to you.
        </p>

        <div className="form-and-info">
          <form onSubmit={handleSubmit} className="contact-form">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone No"
              value={formData.phone}
              onChange={handleChange}
              required
             
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" className="contact__btn">Send Message</button>
          </form>

          <div className="contact-info">
            <h3>Get in Touch</h3>
            <p><strong>Location:</strong> Chennai, Tamil Nadu, India</p>
            <p><strong>Phone:</strong> +91 98765 43210</p>
            <p><strong>Email:</strong> tripzy@gmail.com</p>
            <p><strong>Working Hours:</strong> 9:00 AM - 9:00 PM</p>
            <h4>Follow Us</h4>
            <div className="social-links">
              {socialLinks.map((item, index) => (
                <Link key={index} to={item.url} className="social__link-icon">
                  <i className={item.icon}></i>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
