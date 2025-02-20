import React, { useState } from "react";
import "./styles/Roleta.css"; // Certifique-se de importar o CSS corretamente

const sections = ["Amarelo", "Vermelho", "Verde", "Azul", "Amarelo", "Vermelho", "Verde", "Azul"];

const CapivaraRoleta: React.FC = () => {
  const [rotation, setRotation] = useState(0);
  const [result, setResult] = useState<string | null>(null);
  const [isSpinning, setIsSpinning] = useState(false);

  const spinWheel = () => {
    if (isSpinning) return;
  
    setIsSpinning(true);
  
    // Resetamos a rotação para evitar giros lentos acumulados
    setRotation(0);
  
    const randomRotation = Math.floor(3600 + Math.random() * 360); // Sempre começa com alta velocidade
    setTimeout(() => setRotation(randomRotation), 100); // Pequeno atraso para resetar antes de girar
  
    setTimeout(() => {
        const finalPosition = randomRotation % 360; // Pegamos apenas a rotação final
        const adjustedPosition = (finalPosition + 67.5) % 360; // Ajustamos o deslocamento da seta
        const sectorIndex = Math.floor(adjustedPosition / 45);
        setResult(`A roleta parou em: ${sections[sectorIndex]}`);
        setIsSpinning(false);
      }, 3000);
  };

  return (
    <div className="roulette-container">
      <h1>Jogo da Roleta</h1>
      <div className="roulette-wrapper">
        <div className="arrow"></div> {/* Seta fixa no topo */}
        <div className="roulette" style={{ transform: `rotate(${rotation}deg)` }} />
      </div>
      <button onClick={spinWheel} disabled={isSpinning}>
        {isSpinning ? "Girando..." : "Girar Roleta"}
      </button>
      {result && <p>{result}</p>}
    </div>
  );
};

export default CapivaraRoleta;