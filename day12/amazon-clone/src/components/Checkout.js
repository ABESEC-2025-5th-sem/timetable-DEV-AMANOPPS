import React from "react";
import "./Checkout.css";

function Checkout({ cart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="checkout">
      <h2>Your Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div key={index} className="cartItem">
              <img src={item.image} alt={item.title} />
              <div>
                <p>{item.title}</p>
                <strong>₹{item.price}</strong>
              </div>
            </div>
          ))}
          <h3>Total: ₹{total}</h3>
        </>
      )}
    </div>
  );
}

export default Checkout;
