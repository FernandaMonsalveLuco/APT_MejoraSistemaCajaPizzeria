import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { agregarProducto, eliminarProducto } from "../features/ordenSlice";
import "../styles.css";

export default function MenuCombos() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const orden = useSelector((state) => state.orden.productos);

  const combos = [
    { nombre: "Combo 1: Pizza + Bebida", precio: 10500 },
    { nombre: "Combo 2: 2 Pizzas + Bebida", precio: 15500 },
    { nombre: "Combo 3: Pizza + Papas + Bebida", precio: 12900 },
    { nombre: "Combo 4: Familiar", precio: 18900 },
  ];

  const total = orden.reduce((sum, item) => sum + item.precio, 0);
  const iva = Math.round(total * 0.19);

  return (
    <div className="container">
      <header>
        <h1>Pizzería Nostra Cocina</h1>
        <p>Selección de Combos</p>
      </header>

      <main>
        <section className="contenido">
          {combos.map((combo, i) => (
            <button key={i} onClick={() => dispatch(agregarProducto(combo))}>
              {combo.nombre}
            </button>
          ))}
        </section>

        <section className="orden">
          <h2>Orden</h2>
          <ul>
            {orden.map((item, i) => (
              <li key={i}>
                <button className="btn-eliminar" onClick={() => dispatch(eliminarProducto(i))}>
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
