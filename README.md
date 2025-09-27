# FastPOS - Sistema de Gestión para Pizzerías

**Autores:** Fernanda Monsalve Luco & Matías Gutierrez
**Curso:** CAPSTONE 002D

[Demo en Firebase Hosting](https://fastpos-pizzeria.web.app)

---

## Descripción del Proyecto

FastPOS es un sistema de punto de venta (POS) desarrollado para pizzerías, con el objetivo de optimizar la gestión de pedidos, el cálculo automático de precios e impuestos, los procesos de pago y la administración de inventario. La aplicación está diseñada para mejorar la eficiencia operativa y la experiencia del cliente, integrando tecnologías modernas de frontend y backend.

---

## Alcance del Proyecto

**Incluye:**

* Módulo de autenticación con roles diferenciados: **Mesero**, **Caja**, **Administrador**.
* Gestión de pedidos desde la toma en mesa hasta el pago en caja.
* Administración de inventario, productos y precios.
* Generación de reportes básicos de ventas.

**Fuera de alcance:**

* Integración con plataformas de delivery externas.
* Procesamiento de pagos electrónicos reales (se usa simulación).
* Implementación de inteligencia de negocio avanzada.

---

## Tecnologías Utilizadas

* **Frontend:** React
* **Backend:** Node.js
* **Base de datos:** Firestore / SQL Developer (modelo relacional)
* **Prototipado:** Figma
* **Metodología de desarrollo:** Scrum
* **Hosting:** Firebase Hosting

---

## Características Principales

1. **Autenticación y roles:** Login seguro con permisos diferenciados para mesero, caja y administrador.
2. **Módulo de caja:** Registro de pedidos, cálculo automático de totales e impuestos, gestión de pagos.
3. **Módulo de mesero:** Toma de pedidos en mesa de forma rápida e intuitiva.
4. **Módulo de administración:** Gestión de inventario, productos y precios; generación de reportes de ventas.
5. **Pruebas funcionales:** Validación de cálculos, integración de inventario y flujo de pedidos.

---

## Estructura del Proyecto

```
FastPOS/
│
├─ frontend/       # Aplicación React
│   ├─ components/
│   ├─ pages/
│   └─ App.js
│
├─ backend/        # Servidor Node.js
│   ├─ controllers/
│   ├─ routes/
│   └─ index.js
│
├─ database/       # Modelo y scripts de base de datos
├─ prototipos/     # Diseños en Figma
└─ README.md
```

---

## Instalación

1. Clonar el repositorio:

```bash
git clone https://github.com/tuusuario/fastpos.git
cd fastpos
```

2. Instalar dependencias del frontend:

```bash
cd frontend
npm install
```

3. Instalar dependencias del backend:

```bash
cd ../backend
npm install
```

4. Configurar variables de entorno (`.env`) con credenciales de Firebase:

```
FIREBASE_API_KEY=...
FIREBASE_AUTH_DOMAIN=...
FIREBASE_PROJECT_ID=...
FIREBASE_STORAGE_BUCKET=...
FIREBASE_MESSAGING_SENDER_ID=...
FIREBASE_APP_ID=...
FIREBASE_MEASUREMENT_ID=...
```

5. Ejecutar la aplicación:

```bash
# Backend
cd backend
npm start

# Frontend
cd ../frontend
npm start
```

---

## Uso

* Iniciar sesión con los usuarios predeterminados:

  * **Administrador:** [admin@fastpos.com](mailto:admin@fastpos.com)
  * **Caja:** [caja@fastpos.com](mailto:caja@fastpos.com)
  * **Mesero:** [mesero@fastpos.com](mailto:mesero@fastpos.com)
* Explorar los módulos según el rol:

  * **Administrador:** Gestionar inventario y productos.
  * **Caja:** Registrar pedidos y procesar pagos.
  * **Mesero:** Tomar pedidos en mesa.

---

## Metodología

Se aplicó **Scrum**, con sprints semanales que incluyen planificación, reuniones diarias, revisión y retrospectiva. Esto permitió entregas incrementales y ajustes continuos al desarrollo.

---

## Contribución

Si deseas contribuir:

1. Fork del repositorio.
2. Crear tu branch: `git checkout -b feature/nueva-funcionalidad`
3. Hacer commit: `git commit -m "Agrega nueva funcionalidad"`
4. Push al branch: `git push origin feature/nueva-funcionalidad`
5. Crear Pull Request.

---

## Licencia

Este proyecto está bajo la licencia MIT.

