import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/ShopPage.css";
import Header from "./Header";

export default function ShopPage() {
  const [coins, setCoins] = useState(100); 
  const navigate = useNavigate();

  const handleBuyCoins = (amount: number) => {
    setCoins((prev) => prev + amount);
    alert(`Você comprou ${amount} moedas! Saldo atual: ${coins + amount}`);
  };

  return (
    <div>
    <Header/>
    <div className="shop-container">
      <p className="saldo">Seu saldo: <strong>{coins} 💰</strong></p>

      <div className="shop-grid">
        <div className="shop-card small" onClick={() => handleBuyCoins(50)}>
          <h2>50 💰</h2>
          <p>R$10,00</p>
        </div>

        <div className="shop-card medium" onClick={() => handleBuyCoins(100)}>
          <h2>100 💰</h2>
          <p>R$20,00</p>
        </div>

        <div className="shop-card large" onClick={() => handleBuyCoins(500)}>
          <h2>500 💰</h2>
          <p>R$100,00</p>
        </div>
      </div>

      <button className="back-button" onClick={() => navigate("/GamesPage")}>Voltar</button>
    </div>
    </div>
  );
} 
