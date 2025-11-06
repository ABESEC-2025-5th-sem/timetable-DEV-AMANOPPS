import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ImageSlider from "./components/ImageSlider";

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Simple React Image Slider</h1>
      <ImageSlider />
    </div>
  );
}

export default App;
