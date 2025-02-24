import React from "react";
import { products } from "./products.js";
import "./ProductList.css";

const ProductList = () => {
  return (
    <div className="product-container">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
};
export default ProductList;
