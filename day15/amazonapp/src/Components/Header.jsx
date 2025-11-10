import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // 👈 Make sure you create this CSS file

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img
          src="https://s.yimg.com/fz/api/res/1.2/Jrme8Okhh4oPw.ZwSyN6cA--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpbGw7aD00MTI7cHhvZmY9NTA7cHlvZmY9MTAwO3E9ODA7c3M9MTt3PTM4OA--/https://i.pinimg.com/736x/78/fb/c7/78fbc729b773a77ae24569dee44358a7.jpg"
          alt="Logo"
        />
        <h2>Amazon</h2>
      </div>

      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/product">Products</Link>
        <Link to="/cart">Cart</Link>
      </nav>
    </header>
  );
};

export default Header;
