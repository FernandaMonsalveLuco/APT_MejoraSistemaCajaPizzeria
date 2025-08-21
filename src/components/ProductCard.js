import { useContext } from "react";
import { OrderContext } from "../context/OrderContext";

const ProductCard = ({ product }) => {
  const { addToOrder } = useContext(OrderContext);

  return (
    <div className="border rounded-xl p-4 shadow-md flex flex-col items-center">
      <h3 className="text-lg font-bold">{product.nombre}</h3>
      <p>${product.precio}</p>
      <button 
        onClick={() => addToOrder(product)} 
        className="bg-green-500 text-white px-4 py-2 rounded mt-2"
      >
        Agregar
      </button>
    </div>
  );
};

export default ProductCard;
