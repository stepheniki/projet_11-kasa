import React from "react";
import ReactDOM from "react-dom/client";
import Accueil from "./pages/Accueil";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import APropos from "./pages/Apropos";
import Location from "./pages/Location"
import Error404 from "./pages/Error404"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    < Router >
      <Routes>

        <Route path="/" element={<Accueil />} />
        <Route path="/APropos" element={<APropos />} />
        <Route path="/Accueil" element={<Accueil />} />
        <Route path="/Location/:id" element={<Location />} />
        <Route path="*" element={<Error404 />} />
      </Routes>

    </Router>
  </React.StrictMode>
);

