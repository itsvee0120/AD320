// src/NestedButtons.js

import React, { useState } from "react";

const NestedButtons = () => {
  // State to track which button was clicked
  const [message, setMessage] = useState("");

  // Outer button click handler
  const handleOuterClick = () => {
    setMessage("Outer button clicked!");
  };

  // Inner button click handler with event propagation prevention
  const handleInnerClick = (event) => {
    event.stopPropagation(); // Prevent event propagation to the outer button
    setMessage("Inner button clicked!");
  };

  return (
    <div>
      <button
        onClick={handleOuterClick}
        style={{ padding: "20px", margin: "10px", fontSize: "16px" }}
      >
        Outer Button
        <button
          onClick={handleInnerClick}
          style={{ padding: "10px", fontSize: "14px", marginLeft: "10px" }}
        >
          Inner Button
        </button>
      </button>
      <p>{message}</p> {}
    </div>
  );
};

export default NestedButtons;
