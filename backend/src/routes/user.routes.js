const express = require("express");
const router = express.Router();

const userService = require(
  "../services/user.service"
);

// Listar usuários
router.get("/", (req, res) => {
  const users = userService.listUsers();

  res.json(users);
});

// Buscar usuário por ID
router.get("/:id", (req, res) => {
  const users = userService.listUsers();

  const user = users.find(
    (u) => String(u.id) === req.params.id
  );

  if (!user) {
    return res.status(404).json({
      message: "Usuário não encontrado"
    });
  }

  res.json(user);
});

// Criar usuário
router.post("/", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        message: "Nome, email e senha são obrigatórios"
      });
    }

    const user = await userService.createUser({
      name,
      email,
      password
    });

    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({
      error: error.message
    });
  }
});

module.exports = router;