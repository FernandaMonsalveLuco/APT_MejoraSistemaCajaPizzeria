import { useContext } from "react";
import { OrderContext } from "../context/OrderContext";

const ProductCard = ({ product }) => {
  const { addToOrder } = useContext(OrderContext);

  return (
    <div className="border rounded-xl p-4 shadow-md flex flex-col items-center hover:shadow-lg transition-shadow bg-white">
      <h3 className="text-lg font-bold mb-2 text-center">{product.nombre}</h3>
      <p className="text-gray-700 font-semibold mb-4">${product.precio.toFixed(2)}</p>
      <button 
        onClick={() => addToOrder(product)} 
        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition-colors w-full"
      >
        Agregar
      </button>
    </div>
  );
};

export default ProductCard;
