import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { agregarProducto, eliminarProducto } from "../features/ordenSlice";
import "../styles.css";

export default function MenuPizzas() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const orden = useSelector((state) => state.orden.productos);

  const menuPizzas = [
    { nombre: "PEPPERONI", precio: 8500 },
    { nombre: "NAPOLITANA", precio: 7900 },
    { nombre: "MARGARITA", precio: 7200 },
    { nombre: "VEGETARIANA", precio: 7800 },
    { nombre: "3 MEAT", precio: 8800 },
    { nombre: "BBQ", precio: 8700 },
    { nombre: "HAWAIANA", precio: 8300 },
    { nombre: "CUATRO QUESOS", precio: 8200 },
  ];

  const total = orden.reduce((sum, item) => sum + item.precio, 0);
  const iva = Math.round(total * 0.19);

  return (
    <div className="container">
      <header>
        <h1>Pizzería Nostra Cocina</h1>
        <p>By: Fernanda Monsalve - Matías Gutiérrez - Catalina Marambio</p>
      </header>

      <main>
        <section className="contenido">
          {menuPizzas.map((pizza, i) => (
            <button
              key={i}
              type="button"
              onClick={() => dispatch(agregarProducto(pizza))}
            >
              PIZZA {pizza.nombre}
            </button>
          ))}
        </section>

        <section className="orden">
          <h2>Orden</h2>
          <ul>
            {orden.map((item, i) => (
              <li key={i}>
                <button
                  type="button"
                  className="btn-eliminar"
                  onClick={() => dispatch(eliminarProducto(i))}
                >
                  {item.nombre} - ${item.precio.toLocaleString()}
                  <span className="x"> × </span>
                </button>
              </li>
            ))}
          </ul>
          <p>Total a pagar: ${total.toLocaleString()}</p>
          <p>IVA: ${iva.toLocaleString()}</p>
          <button className="ordenar" type="button" onClick={() => navigate("/orden")}>
            Ingresar orden
          </button>
        </section>
      </main>

      <nav className="navbar">
        <button type="button" onClick={() => navigate("/")}>PIZZAS</button>
        <button type="button" onClick={() => navigate("/combos")}>COMBOS</button>
        <button type="button" onClick={() => navigate("/bebidas")}>BEBIDAS</button>
        <button type="button" onClick={() => navigate("/complementos")}>COMPLEMENTOS</button>
        <button type="button" onClick={() => navigate("/administracion")}>ADMINISTRACIÓN</button>
      </nav>
    </div>
  );
}
