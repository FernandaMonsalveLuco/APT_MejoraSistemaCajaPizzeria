import { useContext } from "react";
import { OrderContext } from "../context/OrderContext";

const OrderSummary = () => {
  const { order, removeFromOrder, clearOrder } = useContext(OrderContext);

  const total = order.reduce((acc, item) => acc + item.precio, 0);

  if (order.length === 0) {
    return (
      <div className="p-4 border rounded-xl shadow-md">
        <h2 className="font-bold text-xl mb-2">Pedido</h2>
        <p className="text-gray-500">No hay productos en el pedido.</p>
      </div>
    );
  }

  return (
    <div className="p-4 border rounded-xl shadow-md bg-white">
      <h2 className="font-bold text-xl mb-2">Pedido</h2>
      <ul>
        {order.map((item, index) => (
          <li key={index} className="flex justify-between items-center mb-1">
            <span>{item.nombre} - ${item.precio.toFixed(2)}</span>
            <button
              onClick={() => removeFromOrder(index)}
              className="text-red-500 ml-2 hover:text-red-700 transition-colors"
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
      <h3 className="mt-2 font-bold">Total: ${total.toFixed(2)}</h3>
      <button
        onClick={clearOrder}
        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded mt-2 transition-colors"
      >
        Cancelar Pedido
      </button>
    </div>
  );
};

export default OrderSummary;
