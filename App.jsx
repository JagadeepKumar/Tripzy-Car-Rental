import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import './App.css';

import Home from "./pages/Home"
import Services from "./pages/Services";
import CarDetails from "./pages/CarDetails";
import About from "./pages/About";
import Review from "./pages/Review";
import Contact from "./pages/Contact";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

// Layout component to conditionally show Footer
const Layout = () => {
  const location = useLocation();
  const hideFooterOnRoutes = ["/login"];

  const shouldShowFooter = !hideFooterOnRoutes.includes(location.pathname);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/car/:id" element={<CarDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/review" element={<Review />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {shouldShowFooter && <Footer />}
    </>
  );
};

export default App;
