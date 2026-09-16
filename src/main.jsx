import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

// This is the starting point of the whole React app.
// It finds the <div id="root"> in index.html and puts our App component inside it.
// BrowserRouter wraps everything so we can use page navigation (React Router) later if needed.
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
