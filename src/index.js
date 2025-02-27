import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import AOS from "aos";
import "aos/dist/aos.css";

const RootComponent = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Ensures animations run only once
      easing: "ease-in-out", // Easing function
    });
  }, []);

  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RootComponent />);

// Performance monitoring
reportWebVitals();
