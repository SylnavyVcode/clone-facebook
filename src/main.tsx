import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import { BrowserRouter } from "react-router-dom";
// import "@fontsource/roboto";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>

      <App />

  </StrictMode>
);
