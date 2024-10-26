import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../../../context/AuthContext";
import PropTypes from "prop-types";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);

  // Si el usuario no está autenticado, redirigir al inicio de sesión
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  // Si está autenticado, renderizar el contenido de la ruta protegida
  return children;
};

export default ProtectedRoute;

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
