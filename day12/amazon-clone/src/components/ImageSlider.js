import React, { useState, useEffect } from "react";
import "./ImageSlider.css";

const images = [
  "https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg",
  "https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg",
  "https://m.media-amazon.com/images/I/71aVYw+Xl-L._SX3000_.jpg",
  "https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg",
];

const ImageSlider = () => {
  const [index, setIndex] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="slider">
      {images.map((img, i) => (
        <div
          key={i}
          className={`slide ${i === index ? "active" : ""}`}
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      ))}
      <div className="dots">
        {images.map((_, i) => (
          <span
            key={i}
            className={i === index ? "dot active" : "dot"}
            onClick={() => setIndex(i)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
