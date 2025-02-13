import { useState, useEffect } from "react";
import "../index.css"; // Importando o CSS
import logo from "../assets/haze_logo.png"; // Importando a logo
import foguete from "../assets/Foguete-haze.png"; // Imagem do foguete
import axios from "axios"; // Importando o axios
import TypingEffect from "./TypingEffect";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [user, setUser] = useState<{ nome: string } | null>(null);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nome: "",
    idade: "",
    email: "",
    senha: "",
    confirmSenha: "",
  });

  useEffect(() => {
    // Verifica se o usuário já está logado
    const token = localStorage.getItem("token");
    if (token) {
      fetchUserProfile();
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isRegister && formData.senha !== formData.confirmSenha) {
      alert("As senhas não coincidem!");
      return;
    }

    console.log("Enviando requisição para:", isRegister ? "Cadastro" : "Login");
    console.log("Dados enviados:", formData);

    try {
      const url = isRegister
        ? "http://localhost:3000/auth/register"
        : "http://localhost:3000/auth/login";

      const response = await axios.post(url, {
        nome: formData.nome,
        idade: formData.idade,
        email: formData.email,
        senha: formData.senha,
      });

      if (isRegister) {
        alert("Cadastro realizado com sucesso!");
      } else {
        alert("Login realizado com sucesso!");
        localStorage.setItem("token", response.data.access_token);
        fetchUserProfile();
      }

      if (!isRegister) {
        localStorage.setItem("token", response.data.access_token);
        navigate("/GamesPage");
      }

      setIsOpen(false); 
    } catch (error: any) {
      console.error("Erro na requisição:", error);
      alert(error.response?.data?.message || "Erro ao realizar a requisição.");
    }
  };

  const fetchUserProfile = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;

      const response = await axios.get("http://localhost:3000/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUser(response.data); // Salva o nome do usuário logado
    } catch (error) {
      console.error("Erro ao buscar perfil:", error);
      localStorage.removeItem("token"); // Remove o token se der erro na requisição
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    alert("Você saiu da sua conta.");
  };

  return (
    <>
      {/* Header fixo */}
      <header className="header">
        <div className="logo-container">
          <img src={logo} alt="Logo Haze" className="logo" />
          <span className="logo-text">HAZE</span>
        </div>
      </header>

      <div className="container">
        {/* Seção com foguete e título */}
        <div className="hero-section">
          <img src={foguete} alt="Foguete" className="foguete" />
          <h1 className="title">Bem-vindo a Haze!</h1>
          <TypingEffect text="Venha jogar com a gente" />
        </div>

        {user ? (
          <div>
            <p>Bem-vindo, {user.nome}!</p>
            <button className="botao" onClick={handleLogout}>Sair</button>
          </div>
        ) : (
          <button className="botao" onClick={() => setIsOpen(true)}>
            Entrar
          </button>
        )}

        {/* Modal */}
        {isOpen && (
          <div className="modal-overlay">
            <div className={`modal-content ${isRegister ? "slide-right" : "slide-left"}`}>
              <span className="close" onClick={() => setIsOpen(false)}>
                &times;
              </span>
              <h2 className="modal-title">{isRegister ? "Cadastre-se" : "Faça Login"}</h2>

              <form onSubmit={handleSubmit}>
                {isRegister && (
                  <>
                    <input
                      type="text"
                      name="nome"
                      placeholder="Nome"
                      value={formData.nome}
                      onChange={handleChange}
                      required
                    />
                    <input
                      type="number"
                      name="idade"
                      placeholder="Idade"
                      value={formData.idade}
                      onChange={handleChange}
                      required
                    />
                  </>
                )}
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <input
                  type="password"
                  name="senha"
                  placeholder="Senha"
                  value={formData.senha}
                  onChange={handleChange}
                  required
                />
                {isRegister && (
                  <input
                    type="password"
                    name="confirmSenha"
                    placeholder="Confirmação de Senha"
                    value={formData.confirmSenha}
                    onChange={handleChange}
                    required
                  />
                )}
                <button type="submit">
                  {isRegister ? "Cadastrar" : "Entrar"}
                </button>
              </form>

              <p className="modal-bottom-text">
                {isRegister ? "Já tem uma conta?" : "Não tem uma conta?"}{" "}
                <span className="botao-login" onClick={() => setIsRegister(!isRegister)}>
                  {isRegister ? "Faça login" : "Cadastre-se"}
                </span>
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
