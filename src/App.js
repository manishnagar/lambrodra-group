import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./components/home";
import Products from "./components/products";
import Brand from "./components/brand";
import About from "./components/aboutus";
import Internship from "./components/internship";
import Contact from "./components/contactus";

function App() {
 const [showButton, setShowButton] = useState(false);

useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Router>
      {/* Header must be inside Router */}
      <Header />

      {/* Define routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/brand" element={<Brand />} />
        <Route path="/about" element={<About />} />
        <Route path="/internship" element={<Internship />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />


{showButton && (
  <button
    onClick={scrollToTop}
    className="fixed bottom-4 right-4 z-[9999] w-10 h-10 rounded-full login-btn bg-orange-500 hover:bg-orange-600 text-white shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 md:w-10 md:h-10"
    aria-label="Scroll to top"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
    </svg>
  </button>
)}



    </Router>
  );
}

export default App;
