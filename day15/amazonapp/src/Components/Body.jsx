import React, { useEffect, useState } from "react";
import Search from "./Search.jsx";
import Product from "./Product.jsx";

const Body = () => {
  const [products, setProducts] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  // Fetch products when component loads
  useEffect(() => {
    fetch("/product.json") // ✅ must be in 'public' folder
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setFilteredData(data); // ✅ initially show all products
      })
      .catch((error) => console.error("Error fetching product data:", error));
  }, []);

  // Handle search
  const searchHandler = (query) => {
    const filtered = products.filter(
      (product) => product.name.toLowerCase().includes(query.toLowerCase()) // ✅ use correct key
    );
    setFilteredData(filtered);
  };

  return (
    <div className="body">
      <Search searchHandler={searchHandler} />
      <div className="product-container">
        {filteredData.length === 0 ? (
          <p>Loading products...</p>
        ) : (
          filteredData.map((product, index) => (
            <Product key={index} {...product} />
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
