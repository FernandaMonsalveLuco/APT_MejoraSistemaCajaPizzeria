import React, { useContext, useState } from "react";
import { OrderContext } from "../context/OrderContext";
import ProductCard from "../components/ProductCard";

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

const mesas = [
  { id: 1, nombre: "Mesa 1" },
  { id: 2, nombre: "Mesa 2" },
  { id: 3, nombre: "Mesa 3" },
  { id: 4, nombre: "Mesa 4" },
];

const Mesero = () => {
  const { order, addToOrder, removeFromOrder, clearOrder } = useContext(OrderContext);
  const [mesaSeleccionada, setMesaSeleccionada] = useState(null);

  const total = order.reduce((acc, item) => acc + item.precio, 0);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100 p-4 gap-4">
      
      {/* Selección de mesas */}
      <div className="md:w-1/5 bg-white p-4 rounded-xl shadow-md">
        <h2 className="font-bold text-xl mb-4">Mesas</h2>
        {mesas.map((mesa) => (
          <button
            key={mesa.id}
            onClick={() => setMesaSeleccionada(mesa)}
            className={`w-full mb-2 p-3 rounded transition-colors ${
              mesaSeleccionada?.id === mesa.id
                ? "bg-orange-500 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {mesa.nombre}
          </button>
        ))}
      </div>

      {/* Productos */}
      <div className="md:w-2/5 grid grid-cols-2 gap-4">
        {productos.map((prod) => (
          <ProductCard key={prod.id} product={prod} />
        ))}
      </div>

      {/* Resumen de pedido */}
      <div className="md:w-2/5 bg-white p-4 rounded-xl shadow-md flex flex-col">
        <h2 className="font-bold text-xl mb-4">
          {mesaSeleccionada ? mesaSeleccionada.nombre : "Seleccione una mesa"}
        </h2>

        {order.length === 0 ? (
          <p className="text-gray-500 mb-4">No hay productos agregados</p>
        ) : (
          <div className="flex-1 overflow-y-auto">
            {order.map((item, index) => (
              <div key={index} className="flex justify-between items-center mb-2">
                <span>{item.nombre}</span>
                <span>${item.precio.toFixed(2)}</span>
                <button
                  onClick={() => removeFromOrder(index)}
                  className="text-red-500 ml-2 hover:text-red-700 transition-colors"
                >
                  ❌
                </button>
              </div>
            ))}
          </div>
        )}

        <div className="mt-auto">
          <p className="font-bold mt-2">Total: ${total.toFixed(2)}</p>
          <p className="font-bold mt-1">IVA (19%): ${(total * 0.19).toFixed(2)}</p>
          <button
            onClick={clearOrder}
            className="bg-red-500 hover:bg-red-600 text-white w-full mt-4 py-2 rounded transition-colors"
          >
            Cancelar Pedido
          </button>
          <button
            className="bg-green-500 hover:bg-green-600 text-white w-full mt-2 py-2 rounded transition-colors"
          >
            Finalizar Pedido
          </button>
        </div>
      </div>

    </div>
  );
};

export default Mesero;
