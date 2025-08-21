import React from "react";
import "./Estilo.css";

const Caja = () => {
  return (
    <div className="caja-container">
      
      {/* Menú de productos */}
      <div className="productos-grid">
        <button className="producto-btn">Agregar algo de texto</button>
        <button className="producto-btn">Agregar algo de texto</button>
        <button className="producto-btn">Agregar algo de texto</button>
        <button className="producto-btn">Agregar algo de texto</button>
        <button className="producto-btn">Agregar algo de texto</button>
        <button className="producto-btn">Agregar algo de texto</button>
        <button className="producto-btn">Agregar algo de texto</button>
        <button className="producto-btn">Agregar algo de texto</button>
      </div>

      {/* Orden */}
      <div className="orden-box">
        <h2>Orden</h2>
        <div className="orden-header">
          <span>ARTÍCULO</span>
          <span>PRECIO</span>
        </div>
        <div className="orden-list">
          <p>Almohada de Flamenco - 60.00€</p>
          <p>Almohada Dorada - 65.00€</p>
          <p>Manta de Puntos - 80.00€</p>
        </div>
        <p className="orden-total">Precio total $: </p>
        <p className="orden-total">Iva $: </p>
        <button>Ingresar</button>
      </div>

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
