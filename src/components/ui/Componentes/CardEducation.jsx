import PropTypes from "prop-types";
import { Heart, BookmarkIcon } from "lucide-react";
import { Button } from "../button"; // Ajusta la ruta si es necesario

export default function CardEducation({ title, description, image, timeAgo, author, likes }) {
  return (
    <div className="w-full bg-white rounded-lg shadow-md overflow-hidden">
      {/* Imagen */}
      <div className="h-48 w-full">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Contenido */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-4">{description}</p>
        
        {/* Detalles del artículo */}
        <div className="flex justify-between items-center text-sm text-gray-500">
          <span>{timeAgo}</span>
          <span>Por {author}</span>
        </div>
      </div>

      {/* Footer con botones */}
      <div className="flex justify-between items-center p-4 border-t">
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm">
            <Heart className="h-4 w-4 mr-1" />
            <span>{likes}</span>
          </Button>
          <Button variant="ghost" size="sm">
            <BookmarkIcon className="h-4 w-4" />
          </Button>
        </div>
        <Button variant="outline" size="sm" className="text-green-600 border-green-600">
          VER MÁS
        </Button>
      </div>
    </div>
  );
}

CardEducation.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  timeAgo: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
};
