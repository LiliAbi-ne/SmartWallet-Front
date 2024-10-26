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
