import React, { useContext } from "react";
import { OrderContext } from "../context/OrderContext";
import "../styles/Estilo.css";

const productos = [
  { id: 1, nombre: "Pizza Margarita", precio: 8.5 },
  { id: 2, nombre: "Pizza Pepperoni", precio: 9.5 },
  { id: 3, nombre: "Bebida Cola", precio: 2.5 },
  { id: 4, nombre: "Bebida Agua", precio: 1.5 },
  { id: 5, nombre: "Combo Familiar", precio: 20 },
  { id: 6, nombre: "Acompañamiento Pan", precio: 3 },
  { id: 7, nombre: "Acompañamiento Ensalada", precio: 4 },
  { id: 8, nombre: "Postre Brownie", precio: 3.5 },
];

const Caja = () => {
  const { order, addToOrder, removeFromOrder, clearOrder } = useContext(OrderContext);

  const total = order.reduce((acc, item) => acc + item.precio, 0);

  return (
    <div className="caja-container">

      {/* Menú de productos */}
      <div className="productos-grid">
        {productos.map((prod) => (
          <button
            key={prod.id}
            className="producto-btn"
            onClick={() => addToOrder(prod)}
          >
            {prod.nombre} - ${prod.precio.toFixed(2)}
          </button>
        ))}
      </div>

      {/* Orden */}
      <div className="orden-box">
        <h2>Orden</h2>
        <div className="orden-header">
          <span>ARTÍCULO</span>
          <span>PRECIO</span>
        </div>
        <div className="orden-list">
          {order.length === 0 ? (
            <p>No hay productos</p>
          ) : (
            order.map((item, index) => (
              <div key={index} className="flex justify-between mb-1">
                <span>{item.nombre}</span>
                <span>${item.precio.toFixed(2)}</span>
                <button
                  onClick={() => removeFromOrder(index)}
                  className="text-red-500 ml-2"
                >
                  ❌
                </button>
              </div>
            ))
          )}
        </div>
        <p className="orden-total">Precio total $: {total.toFixed(2)}</p>
        <p className="orden-total">IVA $: {(total * 0.19).toFixed(2)}</p>
        <button
          onClick={clearOrder}
          className="bg-green-500 text-white px-4 py-2 rounded mt-2 w-full"
        >
          Ingresar
        </button>
      </div>

      {/* Menú inferior de categorías */}
      <div className="menu-categorias">
        <button>Pizzas</button>
        <button>Bebidas</button>
        <button>Acompañamiento</button>
        <button>Combos</button>
        <button>Administración</button>
      </div>

    </div>
  );
};

export default Caja;
