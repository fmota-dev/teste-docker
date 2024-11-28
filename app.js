const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Olá, Docker!");
});

app.get("/usuarios", (req, res) => {
  const usuarios = [
    { id: 1, nome: "João Silva", email: "joao.silva@example.com" },
    { id: 2, nome: "Maria Oliveira", email: "maria.oliveira@example.com" },
    { id: 3, nome: "Carlos Santos", email: "carlos.santos@example.com" },
  ];
  res.json(usuarios);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
