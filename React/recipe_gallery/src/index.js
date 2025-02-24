import React from "react";
import ReactDOM from "react-dom";
import RecipeGallery from "./RecipeGallery"; // Make sure this path is correct
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RecipeGallery />
  </React.StrictMode>
);
