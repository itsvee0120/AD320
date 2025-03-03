// src/App.js

import React from "react";
import "./App.css";
import NestedButtons from "./NestedButtons";

const App = () => {
  return (
    <div className="App">
      <h1>Event Propagation Example</h1>
      <NestedButtons />
    </div>
  );
};

export default App;
