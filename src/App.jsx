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
import UserOverviewPage from "./Pages/UserOverviewPage"; // Añadir import de UserOverviewPage
import AdminOverviewPage from "./Pages/AdminOverviewPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/prices" element={<PricingTier />} />
        <Route path="/goals" element={<GoalsPage />} />
        <Route path="/expenses" element={<ExpensesPage />} />
        <Route path="/reports" element={<ReportsPage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/user-overview" element={<UserOverviewPage />} /> {/* Nueva ruta para UserOverviewPage */}
        <Route path="/admin-overview" element={<AdminOverviewPage />} /> {/* Nueva ruta para UserOverviewPage */}
      </Routes>
    </Router>
  );
}

export default App;
