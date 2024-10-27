import axios from "axios";

export const loginUsuario = async (email, password_usuario) => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/usuarios/login`, {
      email,
      password_usuario,
    });
    return response.data;
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    throw error;
  }
};

export const registerUsuario = async (usuarioData) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/usuarios/register`,
      usuarioData
    );
    return response.data;
  } catch (error) {
    console.error("Error al registrar el usuario:", error);
    throw error;
  }
};


export const obtenerIngresoUsuario = async (token, usuario_id) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/ingresos/usuario/${usuario_id}`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return response.data.ingreso_mensual;
  } catch (error) {
    console.error("Error al obtener ingreso:", error);
    throw error;
  }
};

export const actualizarIngreso = async (token, usuario_id, ingresos) => {
  try {
    const response = await axios.put(
      `${import.meta.env.VITE_API_URL}/ingresos/usuario/${usuario_id}`,
      { ingresos },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return response.data;
  } catch (error) {
    console.error("Error al actualizar ingreso:", error);
    throw error;
  }
};