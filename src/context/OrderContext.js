import { createContext, useState } from "react";

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [order, setOrder] = useState([]);

  // ✅ función corregida
  const addToOrder = (product) => {
    console.log("Producto agregado:", product);
    setOrder((prev) => [...prev, product]);
  };

  const removeFromOrder = (index) => {
    setOrder((prev) => prev.filter((_, i) => i !== index));
  };

  const clearOrder = () => setOrder([]);

  return (
    <OrderContext.Provider value={{ order, addToOrder, removeFromOrder, clearOrder }}>
      {children}
    </OrderContext.Provider>
  );
};
