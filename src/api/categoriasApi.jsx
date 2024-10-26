// api/categoriasApi.js
import axios from "axios";

// Función para obtener categorías de gasto desde la API
export const obtenerCategoriasGasto = async () => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/categoriasGastos`);
    return response.data; // Suponiendo que la API devuelve un array de categorías
  } catch (error) {
    console.error("Error al obtener las categorías de gasto:", error);
    throw error;
  }
};
