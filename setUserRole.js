// setUserRole.js
const admin = require("firebase-admin");

// Inicializa con tu servicio de cuenta
admin.initializeApp({
  credential: admin.credential.cert(require("./serviceAccountKey.json"))
});

// Función para asignar rol
async function setUserRole(uid, role) {
  try {
    await admin.auth().setCustomUserClaims(uid, { role });
    console.log(`✅ Rol "${role}" asignado al usuario con UID: ${uid}`);
  } catch (error) {
    console.error("❌ Error al asignar rol:", error);
  }
}

// Ejemplo: asignar rol a un usuario
const uid = "UID_DEL_USUARIO"; 
setUserRole(uid, "mesero"); // roles: "admin" | "caja" | "mesero"
