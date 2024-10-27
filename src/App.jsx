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
import AdminReportsPage from "./Pages/AdminReportsPage"; // Nueva importación
import ProtectedRoute from "../src/components/ui/Componentes/Protected/ProtectedRoute";
import AboutSection from "./Pages/AboutSection";
import EducationAdminPage from "./Pages/EducationAdminPage";
import UserConfigurations from "./Pages/UserConfigurations";

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
          element={<ReportsPage />}
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
          element={<AdminOverviewPage />}
        />
        <Route
          path="/user-management"
          element={<UserManagementPage />}
        />
        <Route
          path="/admin-reports"
          element={<AdminReportsPage />}
        />
        <Route
          path="/admin-education"
          element={<EducationAdminPage />}>

        </Route>
        <Route
          path="/user-configuration"
          element={<UserConfigurations />}>

        </Route>



      </Routes>
    </Router>
  );
}

export default App;
