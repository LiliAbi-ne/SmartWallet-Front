import { useLocation } from "react-router-dom";
import { Search, Sun, Clock, Bell, Star, LayoutDashboard } from "lucide-react";

export default function Header() {
  const location = useLocation();

  // Mapeo de rutas a nombres que quieres mostrar en el header
  const breadcrumbNames = {
    "/": "Inicio",
    "/login": "Iniciar Sesión",
    "/register": "Registro",
    "/how-it-works": "Cómo Funciona",
    "/prices": "Precios",
    "/about-us": "Acerca de",
    "/goals": "Metas",
    "/expenses": "Gastos",
    "/reports": "Reportes",
    "/education": "Educación",
    "/user-overview": "Visión General de Usuario",
    "/user-configuration": "Configuración de Usuario",
    "/admin-overview": "Panel de Admin",
    "/user-management": "Gestión de Usuarios",
    "/admin-reports": "Reportes Admin",
    "/admin-education": "Educación Admin",
  };

  // Obtiene el nombre según la ruta actual o usa una ruta por defecto
  const currentBreadcrumb = breadcrumbNames[location.pathname] || "Inicio";

  return (
    <header className="flex items-center justify-between bg-[#F5F5F5] p-4 border-b">
      {/* Breadcrumb */}
      <div className="flex items-center space-x-3 text-gray-500">
        <LayoutDashboard size={20} className="text-black" />
        <Star size={20} className="text-black" />
        <span>Dashboards</span>
        <span>/</span>
        <span className="text-black font-semibold">{currentBreadcrumb}</span>
      </div>

      {/* Search and Icons */}
      <div className="flex items-center space-x-4">
        {/* Search */}
        <div className="flex items-center bg-gray-100 text-gray-400 rounded-lg p-2">
          <Search size={16} />
          <input
            type="text"
            placeholder="Buscar"
            className="bg-transparent placeholder-gray-400 ml-2 outline-none text-sm"
          />
          <span className="ml-2 text-gray-400">⌘/</span>
        </div>

        {/* Icons */}
        <Sun size={20} className="text-black" />
        <Clock size={20} className="text-black" />
        <Bell size={20} className="text-black" />
      </div>
    </header>
  );
}
