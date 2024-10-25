import PropTypes from 'prop-types'; // Importar PropTypes
import { Link, useNavigate } from 'react-router-dom';
import { ChevronRight, Users, BookOpen, BarChart3, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion'; // Importar framer-motion

export default function AboutSection() {
  const navigate = useNavigate(); // Hook para redirigir

  // Variantes de animación para los efectos
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="w-full bg-white">
      {/* Flecha para regresar a la página de inicio */}
      <div className="absolute top-4 left-4">
        <button
          onClick={() => navigate("/")} // Redirige al home
          className="flex items-center space-x-2 text-teal-600 hover:text-teal-800"
        >
          <ArrowLeft className="h-6 w-6" /> {/* Flecha */}
          <span>Home</span> {/* Texto al lado de la flecha */}
        </button>
      </div>

      {/* Imagen de fondo con degradado y ajuste de posición para mostrar las caras */}
      <motion.div
        className="relative h-[400px] w-full flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7)), url(/img/AboutUs-Fonfo.jpg)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-black text-center">
          About SmartWallet
        </h1>
      </motion.div>

      <motion.div
        className="container mx-auto px-4 py-16"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Get to Know Us Better
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AboutCard
            icon={<Users className="h-8 w-8 text-teal-600" />}
            title="Our Mission"
            description="Trust, transparency, integrity, and top-quality products and services. Learn about all our objectives."
          />
          <AboutCard
            icon={<BookOpen className="h-8 w-8 text-teal-600" />}
            title="Our History"
            description="Explore our most important milestones, from SmartWallet's foundation to the present day."
          />
          <AboutCard
            icon={<BarChart3 className="h-8 w-8 text-teal-600" />}
            title="Leadership Structure"
            description="Meet the people working for you and the structure of SmartWallet's financial group."
          />
        </div>
      </motion.div>
    </section>
  );
}

function AboutCard({ icon, title, description }) {
  return (
    <motion.div
      className="flex flex-col h-full bg-white shadow-md rounded-lg p-6"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
      }}
    >
      <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link to="#" className="text-teal-600 hover:text-teal-700 inline-flex items-center">
        More information <ChevronRight className="ml-1 h-4 w-4" />
      </Link>
    </motion.div>
  );
}

// Definir los tipos de propTypes para validar las props
AboutCard.propTypes = {
  icon: PropTypes.node.isRequired, // `node` valida que el prop puede ser cualquier cosa renderizable (como un componente React o un string)
  title: PropTypes.string.isRequired, // El título debe ser un string
  description: PropTypes.string.isRequired, // La descripción debe ser un string
};
