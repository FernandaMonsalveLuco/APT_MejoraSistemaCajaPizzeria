import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { agregarProducto, eliminarProducto } from "../features/ordenSlice";
import "../styles.css";

export default function MenuComplementos() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const orden = useSelector((state) => state.orden.productos);

  // Aquí defines los complementos con sus nombres y precios:
  const complementos = [
    { nombre: "Papas fritas", precio: 2000 },
    { nombre: "Salsa BBQ", precio: 500 },
    { nombre: "Pan de ajo", precio: 1500 },
    { nombre: "Ensalada César", precio: 2500 },
    { nombre: "Aros de cebolla", precio: 1800 },
  ];

  const total = orden.reduce((sum, item) => sum + item.precio, 0);
  const iva = Math.round(total * 0.19);

  return (
    <div className="container">
      <header>
        <h1>Pizzería Nostra Cocina</h1>
        <p>Selección de Complementos</p>
      </header>

      <main>
        <section className="contenido">
          {complementos.map((comp, i) => (
            <button key={i} onClick={() => dispatch(agregarProducto(comp))}>
              {comp.nombre}
            </button>
          ))}
        </section>

        <section className="orden">
          <h2>Orden</h2>
          <ul>
            {orden.map((item, i) => (
              <li key={i}>
                <button
                  className="btn-eliminar"
                  onClick={() => dispatch(eliminarProducto(i))}
                >
                  {item.nombre} - ${item.precio}
                  <span className="x"> × </span>
                </button>
              </li>
            ))}
          </ul>
          <p>Total a pagar: ${total}</p>
          <p>IVA: ${iva}</p>
          <button className="ordenar" onClick={() => navigate("/orden")}>
            Ingresar orden
          </button>
        </section>
      </main>

      <nav className="navbar">
        <button onClick={() => navigate("/")}>PIZZAS</button>
        <button onClick={() => navigate("/combos")}>COMBOS</button>
        <button onClick={() => navigate("/bebidas")}>BEBIDAS</button>
        <button onClick={() => navigate("/complementos")}>COMPLEMENTOS</button>
        <button onClick={() => navigate("/administracion")}>ADMINISTRACIÓN</button>
      </nav>
    </div>
  );
}
