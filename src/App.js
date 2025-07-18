import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MenuPizzas from "./pages/MenuPizzas";
import MenuCombos from "./pages/MenuCombos";
import MenuBebidas from "./pages/MenuBebidas";
import MenuComplementos from "./pages/MenuComplementos";
import OrdenDetalle from "./pages/OrdenDetalle";
import Login from "./pages/Login";
import Administracion from "./pages/Administracion";
import PrivateRoute from "./components/PrivateRoute";
import Pago from "./pages/Pago";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MenuPizzas />} />
        <Route path="/combos" element={<MenuCombos />} />
        <Route path="/orden" element={<OrdenDetalle />} />
        <Route path="/bebidas" element={<MenuBebidas />} />
        <Route path="/complementos" element={<MenuComplementos />} />
        <Route path="/orden" element={<OrdenDetalle />} />
        <Route path="/login" element={<Login />} />
        <Route path="/administracion" element={<PrivateRoute><Administracion /></PrivateRoute>} />
        <Route path="/pago/:id" element={<Pago />} />

      </Routes>
    </Router>
  );
}

export default App;
