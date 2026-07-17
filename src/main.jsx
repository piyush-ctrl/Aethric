import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import "./styles/globals.css";
import "./styles/navbar.css";
import "./styles/hero.css";
import "./styles/featured.css";

import "./styles/editorial.css";
import "./styles/about.css";
import "./styles/newsletter.css";
import "./styles/cart.css";
import "./styles/footer.css";
import "./styles/contact.css";
import "./styles/loader.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);