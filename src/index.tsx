import React from "react";
import ReactDOM from "react-dom";
import { Hello } from "./components/Hello";

const App = () => (
  <h1>
    Themeforest Modsen init
    <Hello compiler="compiler" framework="framework" />
  </h1>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
