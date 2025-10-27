import React from "react";
import ReactDOM from "react-dom/client";
import "./tailwind.css";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";

// Suppress common video autoplay errors that are expected behavior
const suppressVideoErrors = () => {
  const originalError = console.error;
  console.error = (...args) => {
    // Suppress video-related autoplay errors
    const errorMessage = args[0]?.message || args[0]?.toString() || "";

    if (
      errorMessage.includes("play() request was interrupted") ||
      errorMessage.includes("NotAllowedError") ||
      errorMessage.includes("video-only background media") ||
      errorMessage.includes("power")
    ) {
      // Silently ignore these expected errors
      return;
    }

    // Pass through other errors
    originalError.apply(console, args);
  };
};

// Apply error suppression
suppressVideoErrors();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
