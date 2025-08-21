import { useContext } from "react";
import { OrderContext } from "../context/OrderContext";

const OrderSummary = () => {
  const { order, removeFromOrder, clearOrder } = useContext(OrderContext);

  const total = order.reduce((acc, item) => acc + item.precio, 0);

  return (
    <div className="p-4 border rounded-xl shadow-md">
      <h2 className="font-bold text-xl mb-2">Pedido</h2>
      <ul>
        {order.map((item, index) => (
          <li key={index} className="flex justify-between mb-1">
            {item.nombre} - ${item.precio}
            <button onClick={() => removeFromOrder(index)} className="text-red-500 ml-2">
              ❌
            </button>
          </li>
        ))}
      </ul>
      <h3 className="mt-2 font-bold">Total: ${total}</h3>
      <button onClick={clearOrder} className="bg-red-500 text-white px-4 py-2 rounded mt-2">
        Cancelar Pedido
      </button>
    </div>
  );
};

export default OrderSummary;
