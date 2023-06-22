import React from "react";
import Accueil from "./pages/Accueil";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import APropos from "./pages/Apropos";
import Location from "./pages/Location"
import Error404 from "./pages/Error404"


/*    REACT ROUTER - ROUTES    */
const AppRoutes = () => {
  return (
    <Router // encapsuler l’ensemble des routes de l'application
    >
      <Routes // les différentes routes de l'application
      >
         {/* path= l’URI de la route --- element= spécifie le composant à afficher pour cette route      */}
        <Route path="/" element={<Accueil />} />
        <Route path="/APropos" element={<APropos />} />
        <Route path="/Location/:id" element={<Location />} />

         {/*     * = route générique qui capture toutes les URL qui ne correspondent à aucune des routes précédentes    */}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
