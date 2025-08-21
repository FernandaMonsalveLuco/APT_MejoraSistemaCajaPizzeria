import React from "react";
import "./Estilo.css";


const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Inicio de sesión</h2>
        <form>
          <input type="text" placeholder="Usuario" />
          <input type="password" placeholder="Contraseña" />
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
