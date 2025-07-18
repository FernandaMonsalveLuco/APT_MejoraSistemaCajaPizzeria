import React from "react";
import { Routes, Route } from "react-router-dom";
import MenuPizzas from "./pages/MenuPizzas";
import MenuCombos from "./pages/MenuCombos";
import OrdenDetalle from "./pages/OrdenDetalle";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MenuPizzas />} />
      <Route path="/combos" element={<MenuCombos />} />
      <Route path="/orden" element={<OrdenDetalle />} />
    </Routes>
  );
}
