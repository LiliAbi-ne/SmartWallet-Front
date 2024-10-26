import { Heart, Bookmark } from 'lucide-react';

export default function CardEducation() {
  return (
    <div className="bg-white rounded-sm shadow-lg overflow-hidden max-w-3xl mx-auto transform transition duration-300 hover:shadow-xl hover:scale-105">
      {/* Imagen de la card */}
      <div className="relative">
        <img
          src="https://via.placeholder.com/800x400" // Aquí puedes poner la URL de tu imagen
          alt="Educación"
          className="w-full h-64 object-cover"
        />
        <span className="absolute top-4 right-4 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">
          TIPS
        </span>
      </div>

      {/* Contenido de la card */}
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2">Ahorra y Emprende – EDUCA</h2>
        <p className="text-gray-600 mb-4">
          Atención psicológica, atención médica general, atención dental, dispensario médico para la comunidad, escuela para padres/madres o familia, centro comunitario. Somos una institución educativa y cultural dedicada a promover entre los niños, niñas y jóvenes de escasos...
        </p>
        <div className="text-gray-500 text-sm flex justify-between items-center">
          <span>Hace 3 horas</span>
          <span>Por Lucy Hiddleston | 4 min read</span>
        </div>
      </div>

      {/* Iconos y botón "VER MÁS" */}
      <div className="flex justify-between items-center px-6 pb-4">
        <div className="flex items-center space-x-4 text-red-600">
          <Heart className="cursor-pointer" />
          <span className="text-gray-500">28</span>
          <Bookmark className="cursor-pointer" />
        </div>
      </div>
      
      <div className="flex justify-center pb-6">
        <button className="bg-red-500 text-white font-semibold py-2 px-8 rounded-full hover:bg-red-600 transition duration-300">
          VER MÁS
        </button>
      </div>
    </div>
  );
}
