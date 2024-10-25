import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Pages/login-page";
import Register from "./Pages/register";
import HomePage from "./Pages/HomePage";
import HowItWorks from "./Pages/HowItWorks";
import PricingTier from "./Pages/PricingTier";
import GoalsPage from "./Pages/GoalsPage";
import ExpensesPage from "./Pages/ExpensesPage";
import ReportsPage from "./Pages/ReportsPage";
import EducationPage from "./Pages/EducationPage";
import UserOverviewPage from "./Pages/UserOverviewPage";
import AdminOverviewPage from "./Pages/AdminOverviewPage";
import ProtectedRoute from "../src/components/ui/Componentes/Protected/ProtectedRoute"; // Importa ProtectedRoute

function App() {
  return (
    <Router>
      <Routes>
        {/* Rutas públicas */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/prices" element={<PricingTier />} />

        {/* Rutas protegidas */}
        <Route
          path="/goals"
          element={
            <ProtectedRoute>
              <GoalsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/expenses"
          element={
            <ProtectedRoute>
              <ExpensesPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/reports"
          element={
            <ProtectedRoute>
              <ReportsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/education"
          element={
            <ProtectedRoute>
              <EducationPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user-overview"
          element={
            <ProtectedRoute>
              <UserOverviewPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin-overview"
          element={
            <ProtectedRoute>
              <AdminOverviewPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
