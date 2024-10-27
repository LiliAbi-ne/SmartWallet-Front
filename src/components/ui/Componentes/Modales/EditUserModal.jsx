import PropTypes from 'prop-types';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function EditModal({ isOpen, onClose, section }) {
    const [value, setValue] = useState("");

    const handleSave = () => {
        // Aquí puedes agregar la lógica para guardar los cambios
        onClose();
    };

    if (!isOpen) return null;

    return (
        <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <motion.div
                className="bg-white rounded-lg shadow-lg max-w-md w-full p-6"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
            >
                <h2 className="text-2xl font-bold mb-4">Editar {section}</h2>
                <div>
                    <label className="block text-gray-600 mb-2">Nuevo valor para {section}</label>
                    <input
                        type="text"
                        className="w-full border border-gray-300 p-2 rounded-md focus:border-green-500"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    />
                </div>
                <div className="mt-4 flex justify-end space-x-2">
                    <button
                        onClick={onClose}
                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-md transition-colors duration-300"
                    >
                        Cancelar
                    </button>
                    <button
                        onClick={handleSave}
                        className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-300"
                    >
                        Guardar
                    </button>
                </div>
            </motion.div>
        </motion.div>
    );
}

EditModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    section: PropTypes.string.isRequired,
};
