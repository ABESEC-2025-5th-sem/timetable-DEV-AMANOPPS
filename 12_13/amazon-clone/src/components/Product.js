import React from "react";
import "./Product.css";

function Product({ id, title, price, image, addToCart }) {
  return (
    <div className="product">
      <img src={image} alt={title} />
      <div className="info">
        <p>{title}</p>
        <strong>₹{price}</strong>
        <button onClick={() => addToCart({ id, title, price, image })}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Product;
