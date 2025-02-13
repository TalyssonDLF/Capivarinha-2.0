import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "../src/compoents/LandingPage";
import GamesPage from "../src/compoents/GamesPage";
import ShopPage from "../src/compoents/ShopPage";
import ProtectedRoute from "../src/compoents/ProtectedRoute";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/games" element={<ProtectedRoute component={GamesPage} />} />
        <Route path="/shop" element={<ProtectedRoute component={ShopPage} />} /> {/* 🔥 Nova página de loja */}
      </Routes>
    </Router>
  );
}
