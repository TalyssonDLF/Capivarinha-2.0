import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/auth",
});

export const registerUser = async (data: { nome: string; idade: number; email: string; senha: string }) => {
  return api.post("/register", data);
};

export const loginUser = async (data: { email: string; senha: string }) => {
  const response = await api.post("/login", data);
  localStorage.setItem("token", response.data.access_token);
  return response.data;
};

export const getProfile = async () => {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("Usuário não autenticado!");

  const response = await axios.get("http://localhost:3000/profile", {
    headers: { Authorization: `Bearer ${token}` },
  });

  return response.data;
};

export const logoutUser = () => {
  localStorage.removeItem("token");
};
