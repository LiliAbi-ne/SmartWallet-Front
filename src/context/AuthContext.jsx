import { createContext, useState } from 'react';
import { saveToken, getToken, removeToken } from '../utils/auth';
import PropTypes from 'prop-types';

export const AuthContext = createContext();

// Mueve esta función arriba para que esté disponible antes de usarla
const extractUserRole = (token) => {
  try {
    const payloadBase64 = token.split('.')[1];
    const decodedPayload = JSON.parse(atob(payloadBase64));
    return decodedPayload.rol;
  } catch (error) {
    console.error("Error al decodificar el token:", error);
    return null;
  }
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!getToken());
  const [token, setToken] = useState(getToken());
  const [userRole, setUserRole] = useState(getToken() ? extractUserRole(getToken()) : null);

  const login = (newToken) => {
    saveToken(newToken);
    setToken(newToken);
    setIsAuthenticated(true);

    // Decodifica el rol del usuario manualmente
    const role = extractUserRole(newToken);
    setUserRole(role);
  };

  const logout = () => {
    removeToken();
    setToken(null);
    setIsAuthenticated(false);
    setUserRole(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, token, userRole, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
