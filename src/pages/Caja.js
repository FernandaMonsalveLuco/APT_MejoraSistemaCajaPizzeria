import React, { useContext } from "react";
import { OrderContext } from "../context/OrderContext";
import "./Estilo.css";

const productos = [
  { nombre: "Almohada de Flamenco", precio: 60 },
  { nombre: "Almohada Dorada", precio: 65 },
  { nombre: "Manta de Puntos", precio: 80 },
  { nombre: "Pizza Napolitana", precio: 100 },
  { nombre: "Bebida Cola", precio: 10 },
  { nombre: "Combo Familiar", precio: 180 },
  { nombre: "Pan de Ajo", precio: 15 },
  { nombre: "Agua Mineral", precio: 5 },
];

const Caja = () => {
  const { order, addToOrder, removeFromOrder, clearOrder } = useContext(OrderContext);

  // Calcula el total
  const total = order.reduce((acc, item) => acc + Number(item.precio || 0), 0);

  return (
    <div className="caja-container">

      {/* Menú de productos */}
      <div className="productos-grid">
        {productos.map((producto, index) => (
          <button
            key={index}
            className="producto-btn"
            onClick={() =>
              addToOrder({
                nombre: producto.nombre,
                precio: producto.precio,
              })
            }
          >
            {producto.nombre} - ${producto.precio}
          </button>
        ))}
      </div>

      {/* Orden */}
      <div className="orden-box">
        <h2>Orden</h2>
        <div className="orden-header">
          <span>ARTÍCULO</span>
          <span>PRECIO</span>
          <span>ACCIONES</span>
        </div>
        <div className="orden-list">
          {order.length === 0 ? (
            <p>No hay productos en la orden</p>
          ) : (
            order.map((item, index) => (
              <div key={index} className="orden-item">
                <span>{item.nombre}</span>
                <span>${item.precio}</span>
                <button
                  onClick={() => removeFromOrder(index)}
                  className="text-red-500"
                >
                  ❌
                </button>
              </div>
            ))
          )}
        </div>
        <p className="orden-total">Precio total $: {total}</p>
        <button onClick={clearOrder}>Cancelar Pedido</button>
      </div>

      {/* Categorías (solo botones estáticos por ahora) */}
      <div className="menu-categorias">
        <button>pizzas</button>
        <button>Bebidas</button>
        <button>Acompañamiento</button>
        <button>Combos</button>
        <button>Administración</button>
      </div>
    </div>
  );
};

export default Caja;
