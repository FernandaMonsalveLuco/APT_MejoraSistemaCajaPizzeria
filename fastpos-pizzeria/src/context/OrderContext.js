import { createContext, useState } from "react";

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [order, setOrder] = useState([]);

  // Agrega producto al pedido
  const addToOrder = (product) => {
    setOrder((prevOrder) => [...prevOrder, product]);
  };

  // Elimina un producto por índice
  const removeFromOrder = (index) => {
    setOrder((prevOrder) => prevOrder.filter((_, i) => i !== index));
  };

  // Limpia todo el pedido
  const clearOrder = () => setOrder([]);

  return (
    <OrderContext.Provider
      value={{ order, addToOrder, removeFromOrder, clearOrder }}
    >
      {children}
    </OrderContext.Provider>
  );
};
