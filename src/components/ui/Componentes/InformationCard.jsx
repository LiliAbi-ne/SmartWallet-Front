import PropTypes from 'prop-types';
import { Pencil } from 'lucide-react';

export default function InformationCard({ title, details, onEdit }) {
    return (
        <div className="bg-white rounded-lg shadow-md p-4 relative">
            <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
            <ul className="text-gray-600">
                {details.map((item, index) => (
                    <li key={index} className="flex justify-between border-b py-2 items-center">
                        <span>{item.label}:</span>
                        <span className="flex items-center">
                            {item.value}
                            <Pencil
                                size={16}
                                className="ml-2 cursor-pointer text-gray-600 hover:text-green-600"
                                onClick={() => onEdit(item.label)}
                            />
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

InformationCard.propTypes = {
    title: PropTypes.string.isRequired,
    details: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired,
        })
    ).isRequired,
    onEdit: PropTypes.func.isRequired, // Añadido para manejar la función de edición
};
