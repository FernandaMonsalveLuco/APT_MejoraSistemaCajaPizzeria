import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, addDoc, getDocs, Timestamp } from "firebase/firestore";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import "../styles.css";

export default function Administracion() {
  const [ordenes, setOrdenes] = useState([]);
  const [inventario, setInventario] = useState([]);
  const [error, setError] = useState("");

  const columnasEsperadas = [
    "Producto",
    "Día de apertura",
    "Fecha de vencimiento",
    "Peso/Cantidad",
  ];

  useEffect(() => {
  async function cargarOrdenes() {
    try {
      const snapshot = await getDocs(collection(db, "ordenes"));
      const hoy = new Date().toDateString();

      const lista = snapshot.docs
        .map((doc) => ({ id: doc.id, ...doc.data() }))
        .filter((orden) => {
          const fecha = orden.fecha?.seconds ? new Date(orden.fecha.seconds * 1000) : null;
          return fecha && fecha.toDateString() === hoy;
        });

      setOrdenes(lista);
    } catch (error) {
      console.error("Error cargando órdenes:", error);
    }
  }

  cargarOrdenes();
}, []);


  function generarPDF() {
    if (!Array.isArray(ordenes) || ordenes.length === 0) {
      alert("No hay órdenes para exportar");
      return;
    }

    const doc = new jsPDF();

    const columnas = ["ID", "Productos", "Total", "Fecha"];
    const filas = ordenes.map((o) => [
      o.id,
      o.productos?.map((p) => p.nombre).join(", ") || "",
      `$${o.total || 0}`,
      o.fecha ? o.fecha.toLocaleString() : "-",
    ]);

    autoTable(doc, {
      head: [columnas],
      body: filas,
    });

    doc.save("resumen_ordenes.pdf");
  }

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async (evt) => {
      const data = evt.target.result;
      const workbook = XLSX.read(data, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(sheet);

      const columnasArchivo = Object.keys(jsonData[0]);
      const columnasValidas = columnasEsperadas.every((col) =>
        columnasArchivo.includes(col)
      );

      if (!columnasValidas) {
        setError("❌ El archivo no tiene las columnas esperadas.");
        setInventario([]);
      } else {
        setError("");
        setInventario(jsonData);

        try {
          const inventarioRef = collection(db, "inventario");
          for (const item of jsonData) {
            await addDoc(inventarioRef, {
              producto: item["Producto"],
              apertura: item["Día de apertura"],
              vencimiento: item["Fecha de vencimiento"],
              cantidad: item["Peso/Cantidad"],
              timestamp: Timestamp.now(),
            });
          }
          alert("✅ Inventario subido con éxito a Firebase.");
        } catch (error) {
          console.error("Error al subir inventario: ", error);
          alert("❌ Hubo un problema al subir el inventario.");
        }
      }
    };
    reader.readAsBinaryString(file);
  };

  const totalIngresos = ordenes.reduce(
    (acc, orden) => acc + (orden.total || 0),
    0
  );

  return (
    <div className="container">
      <header>
        <h1>Administración</h1>
        <p>Gestión de ventas e inventario del día</p>
      </header>

      <main style={{ padding: "2rem" }}>
        {/* SECCIÓN 1: Resumen de ventas */}
        <section className="orden" style={{ marginBottom: "3rem" }}>
          <h2>Resumen de ventas</h2>
          {ordenes.length === 0 ? (
            <p>No hay ventas registradas.</p>
          ) : (
            <ul>
              {ordenes.map((orden) => (
                <li key={orden.id}>
                  {orden.productos?.map((p) => p.nombre).join(", ")} - Total: ${orden.total}
                </li>
              ))}
            </ul>
          )}
          <p>
            <strong>Total ingresos:</strong> ${totalIngresos}
          </p>
          <button
            className="ordenar"
            onClick={generarPDF}
            style={{ marginTop: "1rem" }}
          >
            📄 Descargar resumen en PDF
          </button>
        </section>

        {/* SECCIÓN 2: Subida de inventario */}
        <section>
          <h2>Inventario del día</h2>
          <input
            type="file"
            accept=".xlsx,.xls,.csv"
            onChange={handleFileUpload}
          />
          {error && <p style={{ color: "red" }}>{error}</p>}

          {inventario.length > 0 && (
            <table
              style={{
                width: "100%",
                marginTop: "1rem",
                borderCollapse: "collapse",
              }}
            >
              <thead>
                <tr>
                  {columnasEsperadas.map((col, i) => (
                    <th
                      key={i}
                      style={{
                        border: "1px solid #ccc",
                        padding: "0.5rem",
                        background: "#eee",
                      }}
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {inventario.map((fila, idx) => (
                  <tr key={idx}>
                    {columnasEsperadas.map((col, i) => (
                      <td
                        key={i}
                        style={{ border: "1px solid #ccc", padding: "0.5rem" }}
                      >
                        {fila[col]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </section>
      </main>
    </div>
  );
}
