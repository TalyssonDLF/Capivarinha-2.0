import { useNavigate } from "react-router-dom";
import Header from "./Header";
import "./styles/GamesPage.css";
import capivara1 from "../assets/capivara_roleta.png";
import capivara2 from "../assets/capivara_controller_transparent.png";

export default function GamesPage() {
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <div className="games-container">
        <div className="games-grid">
          <div className="game-card">
            <h2 className="game-name">Capivara Roleta</h2>
            <img src={capivara1} alt="capivara 1" />
            <button className="play-button" onClick={() => navigate("/roleta")}>
              Play
            </button>
          </div>

          <div className="game-card">
            <h2 className="game-name">Capivara Videogame</h2>
            <img src={capivara2} alt="capivara 2" />
            <button className="play-button">Play</button>
          </div>
        </div>
      </div>
    </div>
  );
}