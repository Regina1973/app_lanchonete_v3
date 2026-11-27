const express = require("express");

const router = express.Router();

// Listar usuários
router.get("/", (req, res) => {
  res.json([
    {
      id: 1,
      nome: "Aline",
      email: "aline@email.com",
    },
  ]);
});

// Buscar usuário por ID
router.get("/:id", (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({
      message: "ID é obrigatório",
    });
  }

  res.json({
    id,
    nome: "Aline",
    email: "aline@email.com",
  });
});

// Criar usuário
router.post("/", (req, res) => {
  const { nome, email } = req.body;

  if (!nome || nome.trim() === "") {
    return res.status(400).json({
      message: "Nome é obrigatório",
    });
  }

  if (!email || email.trim() === "") {
    return res.status(400).json({
      message: "Email é obrigatório",
    });
  }

  if (!email.includes("@")) {
    return res.status(400).json({
      message: "Email inválido",
    });
  }

  res.status(201).json({
    message: "Usuário criado com sucesso",
    usuario: {
      nome,
      email,
    },
  });
});

module.exports = router;