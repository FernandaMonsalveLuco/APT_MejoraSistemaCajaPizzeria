import React, { useState } from 'react';

function Dashboard({ user }) {
  const [section, setSection] = useState('home'); // Sección activa

  // Función para renderizar menú según rol
  function renderMenu() {
    const items = ['home'];
    if (user.rol === 'admin') items.push('usuarios', 'productos', 'pedidos');
    if (user.rol === 'caja') items.push('pedidos');
    if (user.rol === 'mesero') items.push('pedidos');

    return React.createElement('div', { className: 'menu' },
      items.map(item => 
        React.createElement('button', {
          key: item,
          onClick: () => setSection(item),
          className: section === item ? 'active' : ''
        }, item.toUpperCase())
      )
    );
  }

  // Función para renderizar contenido según sección y rol
  function renderContent() {
    switch (section) {
      case 'home':
        return React.createElement('div', null,
          React.createElement('h2', null, `Bienvenido ${user.rol}`),
          React.createElement('p', null, `Usuario: ${user.email}`)
        );
      case 'usuarios':
        if (user.rol !== 'admin') return React.createElement('p', null, 'Acceso denegado');
        return React.createElement('div', null,
          React.createElement('h2', null, 'Gestión de Usuarios'),
          React.createElement('p', null, 'Aquí puedes crear, editar o eliminar usuarios.')
        );
      case 'productos':
        if (user.rol !== 'admin') return React.createElement('p', null, 'Acceso denegado');
        return React.createElement('div', null,
          React.createElement('h2', null, 'Gestión de Productos'),
          React.createElement('p', null, 'Aquí puedes añadir o editar productos.')
        );
      case 'pedidos':
        return React.createElement('div', null,
          React.createElement('h2', null, 'Pedidos'),
          React.createElement('p', null, 'Aquí puedes ver y gestionar pedidos.')
        );
      default:
        return React.createElement('p', null, 'Sección no encontrada');
    }
  }

  // Render completo
  return React.createElement('div', { className: 'dashboard-container' },
    renderMenu(),
    React.createElement('div', { className: 'dashboard-content' }, renderContent())
  );
}

export default Dashboard;
