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
import UserManagementPage from "./Pages/UserManagementPage";
import AdminReportsPage from "./Pages/AdminReportsPage";
import ProtectedRoute from "../src/components/ui/Componentes/Protected/ProtectedRoute";
import AboutSection from "./Pages/AboutSection";
import EducationAdminPage from "./Pages/EducationAdminPage";
import UserConfigurations from "./Pages/UserConfigurations";
import ExpenseCategories from "./Pages/ExpenseCategories";
import GoalsManagement from "./Pages/GoalsManagement";

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
        <Route path="/about-us" element={<AboutSection />} />

        {/* Rutas protegidas para administradores */}
        <Route
          path="/expense-categories"
          element={
            <ProtectedRoute requiredRole="admin">
              <ExpenseCategories />
            </ProtectedRoute>
          }
        />
        <Route
          path="/goals-management"
          element={
            <ProtectedRoute requiredRole="admin">
              <GoalsManagement />
            </ProtectedRoute>
          }
        />
        
        {/* Rutas protegidas para usuarios regulares */}
        <Route
          path="/goals"
          element={
            <ProtectedRoute requiredRole="usuario">
              <GoalsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/expenses"
          element={
            <ProtectedRoute requiredRole="usuario">
              <ExpensesPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/reports"
          element={
            <ProtectedRoute requiredRole="usuario">
              <ReportsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/education"
          element={
            <ProtectedRoute requiredRole="usuario">
              <EducationPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user-overview"
          element={
            <ProtectedRoute requiredRole="usuario">
              <UserOverviewPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user-configuration"
          element={
            <ProtectedRoute requiredRole="usuario">
              <UserConfigurations />
            </ProtectedRoute>
          }
        />

        {/* Rutas protegidas para administradores adicionales */}
        <Route
          path="/admin-overview"
          element={
            <ProtectedRoute requiredRole="admin">
              <AdminOverviewPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user-management"
          element={
            <ProtectedRoute requiredRole="admin">
              <UserManagementPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin-reports"
          element={
            <ProtectedRoute requiredRole="admin">
              <AdminReportsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin-education"
          element={
            <ProtectedRoute requiredRole="admin">
              <EducationAdminPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
