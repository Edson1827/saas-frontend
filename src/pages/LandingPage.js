import React from "react";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold mb-4">Bem-vindo ao RifaPro</h1>
      <p className="mb-6">Crie rifas, venda números e receba por Pix em minutos.</p>
      <button onClick={() => navigate("/login")} className="bg-blue-600 text-white px-6 py-2 rounded">Entrar</button>
    </div>
  );
}
