import {
  FileText,
  Target,
  GraduationCap,
  BarChart2,
  User,
  CircleDollarSign,
} from "lucide-react";
import PropTypes from "prop-types";
import Logo from "../../../assets/Logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Sidebar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <aside className="w-64 h-screen bg-[#F5F5F5] shadow-lg flex flex-col">
      <div className="p-4 flex items-center space-x-2">
        <img src={Logo} alt="SMARTWALLET" className="h-10" />
        <h2 className="text-lg font-bold">SMARTWALLET</h2>
      </div>
      <nav className="flex-grow">
        <ul className="space-y-2 p-4">
          <MenuItem
            icon={<FileText size={20} />}
            label="Descripción"
            to={"/user-overview"}
          />
          <MenuItem
            icon={<CircleDollarSign size={20} />}
            label="Gastos"
            to={"/expenses"}
          />
          <MenuItem
            icon={<Target size={20} />}
            label="Metas"
            to={"/goals"}
          />
          <MenuItem
            icon={<GraduationCap size={20} />}
            label="Educación"
            to={"/education"}
          />
          <MenuItem
            icon={<BarChart2 size={20} />}
            label="Reportes"
            to={"/reports"}
          />
        </ul>
      </nav>
      <div className="p-4 border-t relative">
        <div
          className="flex items-center space-x-3 cursor-pointer"
          onClick={toggleMenu} // Abre o cierra el menú desplegable
        >
          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
            <User size={20} />
          </div>
          <span className="text-sm font-medium">Usuario panel</span>
        </div>
        {isMenuOpen && (
          <div className="absolute bottom-16 left-4 bg-white shadow-lg rounded-lg p-2 w-48">
            <Link
              to="/user-configuration"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
              onClick={() => setMenuOpen(false)} // Cierra el menú al hacer clic
            >
              Configuración de cuenta
            </Link>
          </div>
        )}
      </div>
    </aside>
  );
}

function MenuItem({ icon, label, to }) {
  return (
    <li>
      <Link
        to={to}
        className="flex items-center space-x-3 text-gray-700 hover:bg-gray-100 rounded-lg p-2 transition-colors duration-200"
      >
        {icon}
        <span>{label}</span>
      </Link>
    </li>
  );
}

// Añadir validación de prop-types
MenuItem.propTypes = {
  icon: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};
