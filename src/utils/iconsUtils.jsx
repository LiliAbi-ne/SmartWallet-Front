import { ShoppingCart, Beef, Home, DollarSign, Heart, Briefcase } from "lucide-react";

export const getIconForCategory = (categoriaNombre, className = "inline-block") => {
  switch (categoriaNombre) {
    case "Compras":
      return <ShoppingCart size={18} className={`${className} mr-2`} />;
    case "Comida":
      return <Beef size={18} className={`${className} mr-2`} />;
    case "Hogar":
      return <Home size={18} className={`${className} mr-2`} />;
    case "Finanzas":
      return <DollarSign size={18} className={`${className} mr-2`} />;
    case "Salud":
      return <Heart size={18} className={`${className} mr-2`} />;
    case "Trabajo":
      return <Briefcase size={18} className={`${className} mr-2`} />;
    default:
      return <DollarSign size={18} className={`${className} mr-2`} />; // Ícono por defecto
  }
};
