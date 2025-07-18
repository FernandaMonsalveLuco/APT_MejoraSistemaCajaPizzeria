// src/pages/OrdenDetalle.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetOrden } from "../features/ordenSlice";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import "../styles.css";

export default function OrdenDetalle() {
  const orden = useSelector((state) => state.orden.productos);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const total = orden.reduce((sum, item) => sum + item.precio, 0);
  const iva = Math.round(total * 0.19);

  const confirmar = async () => {
    if (orden.length === 0) {
      alert("❌ No hay productos en la orden.");
      return;
    }

    const nuevaOrden = {
      productos: orden,
      total,
      fecha: Timestamp.now(),
    };
    console.log("DB:", db);

    try {
      const docRef = await addDoc(collection(db, "ordenes"), nuevaOrden);
      dispatch(resetOrden());
      navigate(`/pago/${docRef.id}`);
    } catch (error) {
      console.error("❌ Error al guardar orden:", error);
      alert("❌ Error al guardar la orden. Revisa la consola.");
    }
  };

  return (
    <div className="container">
      <header>
        <h1>Detalle de la Orden</h1>
        <p>Revisa tu pedido antes de confirmarlo</p>
      </header>

      <main style={{ padding: "2rem" }}>
        <section className="orden" style={{ width: "100%", maxWidth: "600px", margin: "0 auto" }}>
          <h2>Productos Seleccionados</h2>
          <ul>
            {orden.map((item, i) => (
              <li key={i}>
                {item.nombre} - ${item.precio}
              </li>
            ))}
          </ul>
          <p style={{ marginTop: "1rem" }}>
            <strong>Total:</strong> ${total}
            <br />
            <strong>IVA:</strong> ${iva}
          </p>

          <button className="ordenar" onClick={confirmar}>
            Confirmar y finalizar orden
          </button>
        </section>
      </main>
    </div>
  );
}
