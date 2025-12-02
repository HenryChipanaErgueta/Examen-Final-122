import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Principal from "./Principal.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/Examen-Final-122">
    <Principal />
  </BrowserRouter>
);
