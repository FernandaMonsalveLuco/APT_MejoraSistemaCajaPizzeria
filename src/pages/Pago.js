import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../styles.css";

export default function Pago() {
  const navigate = useNavigate();
  const { id } = useParams();

  const finalizarPago = () => {
    alert("✅ Pago completado con éxito.");
    navigate("/");
  };

  return (
    <div className="container">
      <header>
        <h1>Pago de Orden</h1>
        <p>Orden N°: {id}</p>
      </header>

      <main style={{ padding: "2rem", textAlign: "center" }}>
        <h2>Selecciona un medio de pago</h2>
        <div style={{ display: "flex", justifyContent: "center", gap: "2rem", margin: "2rem 0" }}>
          <button className="ordenar" onClick={finalizarPago}></button>
          <button className="ordenar" onClick={finalizarPago}></button>
          <button className="ordenar" onClick={finalizarPago}></button>
        </div>
      </main>
    </div>
  );
}
