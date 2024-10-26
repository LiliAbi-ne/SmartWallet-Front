import PropTypes from "prop-types";
import { Button } from "../button"; // Asegúrate de ajustar la ruta según sea necesario
import { Trash2 } from "lucide-react";

export default function CardReport({ description, details, date, onDelete }) {
  return (
    <div className="w-full bg-white rounded-lg p-4 shadow-md flex flex-col justify-between mb-4">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{description}</h3>
          <p className="text-gray-500 text-sm">{date}</p>
        </div>
      </div>

      <div className="mt-4">
        <p className="text-gray-700 text-sm">{details}</p>
      </div>

      <div className="flex justify-end mt-4">
        <Button onClick={onDelete} variant="destructive" className="text-red-500 hover:text-red-700 transition">
          <Trash2 className="w-5 h-5" />
          Eliminar
        </Button>
      </div>
    </div>
  );
}

CardReport.propTypes = {
  description: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  onDelete: PropTypes.func, // Callback para manejar la eliminación del reporte
};
