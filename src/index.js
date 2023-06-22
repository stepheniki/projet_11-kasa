import React from "react";
import ReactDOM from "react-dom/client";
import AppRoutes from "./Routes";

// FICHIER INDEX.JS

// création d'un conteneur racine pour l'application et y rendre un élément JSX
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
);