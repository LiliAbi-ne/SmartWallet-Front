import { FileText, GraduationCap, BarChart2, User, Users } from "lucide-react";
import PropTypes from "prop-types";
import Logo from "../../../assets/Logo.png";
import { Link } from "react-router-dom";

export default function SidebarAdmin() {
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
            to={"/"}
          />
          <MenuItem icon={<Users size={20} />} label="Usuarios" to={"/"} />
          <MenuItem
            icon={<GraduationCap size={20} />}
            label="Educación"
            to={"/"}
          />
          <MenuItem icon={<BarChart2 size={20} />} label="Reportes" to={"/"} />
        </ul>
      </nav>
      <div className="p-4 border-t">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
            <User size={20} />
          </div>
          <span className="text-sm font-medium">Admin panel</span>
        </div>
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
  icon: PropTypes.node.isRequired, // Validar que 'icon' sea un nodo de React (puede ser un componente o un elemento JSX)
  label: PropTypes.string.isRequired, // Validar que 'label' sea una cadena de texto
  to: PropTypes.string.isRequired,
};
