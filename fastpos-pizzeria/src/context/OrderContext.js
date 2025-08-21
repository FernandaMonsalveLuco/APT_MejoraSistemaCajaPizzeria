import { createContext, useState } from "react";

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [order, setOrder] = useState([]);

  const addToOrder = (product) => {
    setOrder((prev) => [...prev, product]);
  };

  const removeFromOrder = (index) => {
    setOrder(order.filter((_, i) => i !== index));
  };

  const clearOrder = () => setOrder([]);

  return (
    <OrderContext.Provider value={{ order, addToOrder, removeFromOrder, clearOrder }}>
      {children}
    </OrderContext.Provider>
  );
};
