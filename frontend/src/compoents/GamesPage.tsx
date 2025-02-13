import Header from "./Header";
import "./styles/GamesPage.css";

export default function GamesPage() {
  return (
    <div>
      <Header/>
      <div className="games-container">
        <h1>Escolha seu jogo</h1>
        
        <div className="games-grid">
          <div className="game-card">
            <h2 className="game-name" >Jogo 1</h2>
            <button className="play-button">Play</button>
          </div>

          <div className="game-card">
            <h2 className="game-name">Jogo 2</h2>
            <button className="play-button">Play</button>
          </div>
        </div>
      </div>
    </div>
  );
}
