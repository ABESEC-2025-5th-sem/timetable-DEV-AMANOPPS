import React from "react";
import "./Product.css"; // optional if you have styles

const Product = ({ img, product, price }) => {
  return (
    <div className="product-card">
      <img src={img} alt={product} />
      <h2>{product}</h2>
      <h3>₹{price}</h3>
      <button className="btn">Add to Cart</button>
    </div>
  );
};

export default Product;
