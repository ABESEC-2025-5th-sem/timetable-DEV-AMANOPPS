import React from "react";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import About from "./Components/About";
import Cart from "./Components/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="app-container">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product" element={<Body />} />
        </Routes>
      </Router>
      <Body />
      <Footer />
    </div>
  );
};

export default App;
