import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importar BrowserRouter
import Login from './Pages/login-page'; // Página de login
import Register from './Pages/register'; // Página de registro
import HomePage from './Pages/HomePage'; // Página principal (home)
import HowItWorks from './Pages/HowItWorks'; // Página de cómo funciona
import AboutSection from './Pages/AboutSection'; // Página de Quiénes Somos

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta para la página principal */}
        <Route path="/" element={<HomePage />} />
        {/* Ruta para la página de login */}
        <Route path="/login" element={<Login />} />
        {/* Ruta para la página de registro */}
        <Route path="/register" element={<Register />} />
        {/* Ruta para la página "Cómo Funciona" */}
        <Route path="/how-it-works" element={<HowItWorks />} />
        {/* Ruta para la página "Quiénes Somos" */}
        <Route path="/about" element={<AboutSection />} /> {/* Nueva ruta para la página de Quiénes Somos */}
      </Routes>
    </Router>
  );
}

export default App;
