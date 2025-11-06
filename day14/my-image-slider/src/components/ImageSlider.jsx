import React, { useState } from "react";
import "./ImageSlider.css"; // we’ll create this file next

function ImageSlider() {
  const images = [
    "https://picsum.photos/id/1018/1000/600/",
    "https://picsum.photos/id/1015/1000/600/",
    "https://picsum.photos/id/1019/1000/600/",
  ];

  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slider">
      <img src={images[index]} alt="slider" className="slide-image" />

      <button className="prev" onClick={prevSlide}>
        ❮
      </button>
      <button className="next" onClick={nextSlide}>
        ❯
      </button>

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
}

export default ImageSlider;
