import React, { useState, useEffect } from "react";
import "./HeroCarousel.css";
import hero1 from "../../../Assets/images/hero1.jpg";
import hero2 from "../../../Assets/images/hero2.jpg";
import hero3 from "../../../Assets/images/hero3.jpg";
import hero4 from "../../../Assets/images/hero4.jpg";
import hero5 from "../../../Assets/images/hero5.jpg";
import hero6 from "../../../Assets/images/hero6.jpg";

const images = [hero4, hero2, hero3, hero1, hero5, hero6];

function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent((current + 1) % images.length);
  };

  return (
    <div className="hero-carousel">
      {images.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt={`Hero ${idx + 1}`}
          className={`carousel-image${current === idx ? " active" : ""}`}
        />
      ))}
      <button className="carousel-btn prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="carousel-btn next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
}

export default HeroCarousel;
