import React from "react";
import { useParams } from "react-router-dom";

export default function PublicRifa() {
  const { id } = useParams();
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Página da Rifa #{id}</h2>
      <p>Descrição da rifa, pacotes, botão de compra por Pix e links sociais do organizador.</p>
    </div>
  );
}
