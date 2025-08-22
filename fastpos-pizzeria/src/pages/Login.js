import React from "react";
import "../styles/Estilo.css";

function Login({ onLogin }) {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <input type="text" placeholder="Usuario" />
        <input type="password" placeholder="Contraseña" />
        <button onClick={onLogin}>Entrar</button>
      </div>
    </div>
  );
}

export default Login;
