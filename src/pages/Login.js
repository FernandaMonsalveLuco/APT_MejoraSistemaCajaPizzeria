import React, { useState } from "react";
import "./Estilo.css";

const Login = () => {
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // evita que la página se recargue
    // Aquí podrías llamar a tu API o contexto de autenticación
    console.log("Usuario:", usuario);
    console.log("Contraseña:", contrasena);
    alert(`Usuario: ${usuario}\nContraseña: ${contrasena}`);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Inicio de sesión</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Usuario"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
          />
          <button type="submit">Ingresar</button>
        </form>
        <p>
          ¿Olvidaste tu contraseña? <a href="#">Recuperar</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
