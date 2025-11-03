import React, { useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Checkout from "./components/Checkout";
import "./App.css";
import ImageSlider from "./components/ImageSlider";


function App() {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState("home");

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.title} added to cart!`);
  };

  return (
    <div>
      <Header />
      <div className="buttons">
        <button onClick={() => setPage("home")}>🏠 Home</button>
        <button onClick={() => setPage("cart")}>🛒 Cart ({cart.length})</button>
      </div>

      {page === "home" ? (
        <Home addToCart={addToCart} />
      ) : (
        <Checkout cart={cart} />
      )}
    </div>
  );
}

export default App;
