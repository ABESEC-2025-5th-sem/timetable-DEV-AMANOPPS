import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <h2 className="logo">Amazon Clone</h2>
      <input className="search" type="text" placeholder="Search Products..." />
      <div className="cart">🛒 Cart</div>
    </div>
  );
}

export default Header;
