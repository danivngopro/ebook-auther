import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// import "./data/i18n/i18n";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <div style={{ backgroundColor: "#f7f7f8" }}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </div>
);
