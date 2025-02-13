import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/Header.css"; // Importando o CSS
import logo from "../assets/haze_logo.png"; // Logo do site
import profileIcon from "../assets/perfil.png"; // Ícone do perfil

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [coins] = useState(100); // Saldo inicial de moedas
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <header className="header">
      {/* Logo */}
      <img src={logo} alt="Logo" className="logo" onClick={() => navigate("/")} />

      {/* Saldo de Moedas */}
      <div className="coin-container">
        <span className="coin-text">{coins} 💰</span>
        <button className="buy-coins" onClick={() =>  navigate("/ShopPage")}>+</button>
      </div>

      {/* Perfil com Dropdown */}
      <div className="profile-container" onClick={() => setDropdownOpen(!dropdownOpen)}>
        <img src={profileIcon} alt="Perfil" className="profile-icon" />
        
        {/* Dropdown */}
        {dropdownOpen && (
          <div className="dropdown-menu">
            <button onClick={() => navigate("/profile")}>Perfil</button>
            <button onClick={handleLogout}>Sair</button>
          </div>
        )}
      </div>
    </header>
  );
}