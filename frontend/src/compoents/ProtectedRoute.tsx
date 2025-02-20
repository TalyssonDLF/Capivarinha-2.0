import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ component: Component }: { component: React.ElementType }) {
  const token = localStorage.getItem("token"); // Pega o token do usuário

  return token ? <Component /> : <Navigate to="/" replace />;
}
