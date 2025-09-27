import { useState } from "react";
import { getFirestore, doc, setDoc, getDoc, updateDoc } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db, storage } from '../firebase/firebaseConfig'; 

export default function AdminCreateUser() {
  const [rol, setRol] = useState("caja");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Función para obtener el siguiente UID
  const getNextUid = async () => {
    const counterRef = doc(db, "Contadores", "Usuarios");
    const counterSnap = await getDoc(counterRef);

    let ultimoId = 0;
    if (counterSnap.exists()) {
      ultimoId = counterSnap.data().ultimoId || 0;
    }

    const newId = ultimoId + 1;
    await setDoc(counterRef, { ultimoId: newId }, { merge: true });

    return `USER${String(newId).padStart(3, "0")}`;
  };

  const handleCreateUser = async () => {
    setLoading(true);
    setMessage("");

    try {
      const uid = await getNextUid();
      const email = `${rol}@fastpos.com`;
      const password = "123456";

      // Crear usuario en Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      // Guardar en Firestore
      await setDoc(doc(db, "Usuarios", uid), { email, rol });

      setMessage(`✅ Usuario creado: ${email} con UID ${uid}`);
    } catch (err) {
      console.error(err);
      setMessage(`❌ Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 bg-white rounded shadow-md max-w-md mx-auto mt-10">
      <h2 className="text-xl font-bold mb-4">Crear nuevo usuario</h2>

      <label className="block mb-2 font-semibold">Rol:</label>
      <select
        value={rol}
        onChange={(e) => setRol(e.target.value)}
        className="w-full border p-2 mb-4 rounded"
      >
        <option value="admin">Admin</option>
        <option value="caja">Caja</option>
        <option value="mesero">Mesero</option>
      </select>

      <button
        onClick={handleCreateUser}
        disabled={loading}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        {loading ? "Creando..." : "Crear Usuario"}
      </button>

      {message && <p className="mt-4">{message}</p>}
    </div>
  );
}
