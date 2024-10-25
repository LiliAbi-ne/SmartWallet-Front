import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom"; // Importar Link y useNavigate

export default function HomePage() {
  const navigate = useNavigate(); // Hook para redirigir

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7)), url(/img/fonfo.jpg)`, // Ruta al fondo
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <header className="flex items-center justify-between px-6 py-4 bg-white bg-opacity-70 shadow-sm">
        <div className="flex items-center">
          <img src="/img/Logo.jpg" alt="SmartWallet Logo" width={32} height={32} className="mr-2" />
          <span className="text-xl font-bold text-teal-600">SmartWallet</span>
        </div>
        <nav className="hidden md:flex space-x-6">
          {/* Rutas actualizadas para "Como Funciona" */}
          <Link to="/how-it-works" className="text-gray-600 hover:text-teal-600">Cómo Funciona</Link>
          <Link to="#" className="text-gray-600 hover:text-teal-600">Quiénes somos</Link>
          <Link to="#" className="text-gray-600 hover:text-teal-600">Planes que te ofrecemos</Link>
        </nav>
        <div className="flex items-center space-x-4">
          {/* Redirección al registro y login */}
          <Button variant="outline" size="sm" onClick={() => navigate('/register')}>Sign up</Button>
          <Button variant="default" size="sm" onClick={() => navigate('/login')}>Sign in</Button>
        </div>
      </header>
      <main className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Experience a <br />fresh way to <br /><span className="text-teal-600">manage money</span>
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Reach your goals with personalized insights, custom budgets, spend tracking, and subscription monitoring—all for free.
          </p>
          <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white" onClick={() => navigate('/register')}>
            Sign up for SmartWallet
          </Button>
          <div className="mt-6 flex space-x-4">
            <Link to="#" className="flex items-center justify-center w-36 h-12 bg-black text-white rounded-md">
              App Store
            </Link>
            <Link to="#" className="flex items-center justify-center w-36 h-12 bg-black text-white rounded-md">
              Google Play
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
