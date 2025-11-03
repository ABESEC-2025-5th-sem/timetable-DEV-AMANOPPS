import React from "react";
import Product from "../components/Product";
import products from "../productsData";
import "./Home.css";

function Home({ addToCart }) {
  return (
    <div className="home">
      <h2>Welcome to Amazon Clone 🛍️</h2>
      <div className="productContainer">
        {products.map((item) => (
          <Product key={item.id} {...item} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default Home;
