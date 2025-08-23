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
  const { order, addToOrder, removeFromOrder, clearOrder, setOrder } = useContext(OrderContext);

  // 🔹 Función modificada para acumular cantidad
  const handleAddProduct = (prod) => {
    const existing = order.find((item) => item.id === prod.id);
    if (existing) {
      const newOrder = order.map((item) =>
        item.id === prod.id ? { ...item, cantidad: item.cantidad + 1 } : item
      );
      setOrder(newOrder);
    } else {
      setOrder([...order, { ...prod, cantidad: 1 }]);
    }
  };

  // 🔹 Remueve 1 unidad o el producto si cantidad = 1
  const handleRemoveProduct = (id) => {
    const existing = order.find((item) => item.id === id);
    if (existing.cantidad > 1) {
      const newOrder = order.map((item) =>
        item.id === id ? { ...item, cantidad: item.cantidad - 1 } : item
      );
      setOrder(newOrder);
    } else {
      setOrder(order.filter((item) => item.id !== id));
    }
  };

  const total = order.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

  return (
    <div className="caja-container">
      {/* Menú de productos */}
      <div className="productos-grid">
        {productos.map((prod) => (
          <div key={prod.id} className="producto-card" onClick={() => handleAddProduct(prod)}>
            <h3>{prod.nombre}</h3>
            <p>${prod.precio.toFixed(2)}</p>
          </div>
        ))}
      </div>

      {/* Orden */}
      <div className="orden-box">
        <h2>🧾 Orden</h2>
        <div className="orden-header">
          <span>ARTÍCULO</span>
          <span>PRECIO</span>
        </div>
        <div className="orden-list">
          {order.length === 0 ? (
            <p className="orden-vacia">No hay productos</p>
          ) : (
            order.map((item) => (
              <div key={item.id} className="orden-item">
                <span>{item.cantidad} x {item.nombre}</span>
                <span>${(item.precio * item.cantidad).toFixed(2)}</span>
                <button
                  onClick={() => handleRemoveProduct(item.id)}
                  className="btn-remove"
                >
                  ➖
                </button>
              </div>
            ))
          )}
        </div>
        <div className="orden-totales">
          <p>Total: <strong>${total.toFixed(2)}</strong></p>
          <p>IVA (19%): <strong>${(total * 0.19).toFixed(2)}</strong></p>
        </div>
        <button onClick={clearOrder} className="btn-confirmar">
          Confirmar Orden
        </button>
      </div>
      <div className="menu-categorias">
        <button><i className="fas fa-pizza-slice"></i><span>Pizzas</span></button>
        <button><i className="fas fa-glass-martini-alt"></i><span>Bebidas</span></button>
        <button><i className="fas fa-bread-slice"></i><span>Acompañamiento</span></button>
        <button><i className="fas fa-box"></i><span>Combos</span></button>
        <button><i className="fas fa-cogs"></i><span>Admin</span></button>
      </div>
    </div>
  );
};

export default Caja;
