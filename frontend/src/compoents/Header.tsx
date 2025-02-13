import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/Header.css";
import logo from "../assets/haze_logo.png";
import profileIcon from "../assets/perfil.png"; 

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <header className="header">
      <img src={logo} alt="Logo" className="logo" onClick={() => navigate("/")} />

      <div className="profile-container" onClick={() => setDropdownOpen(!dropdownOpen)}>
        <img src={profileIcon} alt="Perfil" className="profile-icon" />
       
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
