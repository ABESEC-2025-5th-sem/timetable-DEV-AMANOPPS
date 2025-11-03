import React, { useState } from "react";
import "./ImageSlider.css"; // optional for styling

const ImageSlider = () => {
  // your image URLs
  const images = [
    "https://images.unsplash.com/photo-1581291519195-ef11498d1cf5",
    "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
  ];

  // track which image is active
  const [currentIndex, setCurrentIndex] = useState(0);

  // go to next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // go to previous image
  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slider-container">
      <button onClick={prevImage} className="slider-btn">−</button>
      <img
        src={images[currentIndex]}
        alt="slider"
        className="slider-image"
      />
      <button onClick={nextImage} className="slider-btn">+</button>
    </div>
  );
};

export default ImageSlider;
