// src/components/Login.js
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db, storage } from "../firebase/firebaseConfig";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Autenticación
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Buscar rol en Firestore
      const userRef = doc(db, "Usuarios", user.uid);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        const { rol } = userSnap.data();
        onLogin({ uid: user.uid, email: user.email, rol });
      } else {
        setError("Usuario sin rol asignado");
      }
    } catch (err) {
      setError("Credenciales incorrectas o error de conexión");
      console.error(err);
    }
  };

  // Aquí construimos el JSX con React.createElement
  return React.createElement(
    "div",
    { style: { maxWidth: "400px", margin: "auto", padding: "20px" } },
    React.createElement("h2", null, "Iniciar Sesión"),
    React.createElement(
      "form",
      { onSubmit: handleLogin },
      React.createElement("input", {
        type: "email",
        placeholder: "Correo",
        value: email,
        required: true,
        onChange: (e) => setEmail(e.target.value),
        style: { display: "block", margin: "10px 0", width: "100%" }
      }),
      React.createElement("input", {
        type: "password",
        placeholder: "Contraseña",
        value: password,
        required: true,
        onChange: (e) => setPassword(e.target.value),
        style: { display: "block", margin: "10px 0", width: "100%" }
      }),
      React.createElement(
        "button",
        { type: "submit", style: { marginTop: "10px" } },
        "Ingresar"
      )
    ),
    error && React.createElement("p", { style: { color: "red" } }, error)
  );
}

export default Login;
