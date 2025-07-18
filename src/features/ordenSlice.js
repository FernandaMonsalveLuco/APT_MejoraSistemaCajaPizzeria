import { createSlice } from "@reduxjs/toolkit";

const ordenSlice = createSlice({
  name: "orden",
  initialState: {
    productos: [],
  },
  reducers: {
    agregarProducto: (state, action) => {
      state.productos.push(action.payload);
    },
    eliminarProducto: (state, action) => {
      state.productos.splice(action.payload, 1);
    },
    resetOrden: (state) => {
      state.productos = [];
    },
  },
});

export const { agregarProducto, eliminarProducto, resetOrden } = ordenSlice.actions;
export default ordenSlice.reducer;
