// src/components/ui/Componentes/AdminCard.jsx

import PropTypes from 'prop-types';

export function AdminCard({
  title,
  value = "N/A",  // Valor predeterminado si no se proporciona `value`
  percentage,
  icon: Icon,
  color = "bg-gray-100",
  textColor = "text-black",
  children,
}) {
  return (
    <div className={`bg-white rounded-lg shadow-lg p-6 ${color} ${textColor}`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        {Icon && <Icon className="h-6 w-6" />}
      </div>
      <div className="text-3xl font-bold mb-2">{value}</div>
      {percentage !== undefined && (
        <div className={`text-sm ${percentage > 0 ? 'text-green-500' : 'text-red-500'}`}>
          {percentage > 0 ? `+${percentage}%` : `${percentage}%`}
        </div>
      )}
      {children}
    </div>
  );
}

AdminCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  percentage: PropTypes.number,
  icon: PropTypes.elementType,
  color: PropTypes.string,
  textColor: PropTypes.string,
  children: PropTypes.node,
};
