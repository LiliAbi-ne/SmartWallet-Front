import { createContext, useState } from 'react';
import { saveToken, getToken, removeToken } from '../utils/auth';
import PropTypes from 'prop-types';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!getToken());
  const [token, setToken] = useState(getToken());

  const login = (newToken) => {
    saveToken(newToken);
    setToken(newToken);
    setIsAuthenticated(true);
  };

  const logout = () => {
    removeToken();
    setToken(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
