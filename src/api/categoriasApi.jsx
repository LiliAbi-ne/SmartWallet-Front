// api/categoriasApi.js
import axios from "axios";

// Función para obtener categorías de gasto desde la API
export const obtenerCategoriasGasto = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/categoriasGastos`
    );
    return response.data; // Suponiendo que la API devuelve un array de categorías
  } catch (error) {
    console.error("Error al obtener las categorías de gasto:", error);
    throw error;
  }
};

export const obtenerCategoriasMeta = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/categoriasMetas`
    );
    return response.data;
  } catch (error) {
    console.error("Error al obtener categorías de metas:", error);
    throw error;
  }
};

export const crearCategoriaGasto = async (nombre_categoria) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/categoriasGastos/create`,
      { nombre_categoria }
    );
    return response.data;
  } catch (error) {
    console.error("Error al crear categoría:", error);
    throw error;
  }
};

export const actualizarCategoriaGasto = async (
  categoria_gasto_id,
  nombre_categoria
) => {
  try {
    const response = await axios.put(
      `${import.meta.env.VITE_API_URL}/categoriasGastos/update/${categoria_gasto_id}`,
      { nombre_categoria }
    );
    return response.data;
  } catch (error) {
    console.error("Error al actualizar categoría:", error);
    throw error;
  }
};

export const eliminarCategoriaGasto = async (categoria_gasto_id) => {
  try {
    const response = await axios.delete(
      `${import.meta.env.VITE_API_URL}/categoriasGastos/delete/${categoria_gasto_id}`
    );
    return response.data;
  } catch (error) {
    console.error("Error al eliminar categoría:", error);
    throw error;
  }
};
