import React, { useState } from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  const [user, setUser] = useState(null);

  if (!user) {
    // Muestra el login si no hay usuario
    return React.createElement(Login, { onLogin: setUser });
  }

  // Redirige al Dashboard según el usuario
  return React.createElement(Dashboard, { user });
}

export default App;
