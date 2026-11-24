const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const users = require("../data/users.json");

async function login(email, password) {
  const user = users.find(
    (u) => u.email === email
  );

  if (!user) {
    throw new Error("Usuário ou senha inválidos");
  }

  const validPassword = await bcrypt.compare(
    password,
    user.password
  );

  if (!validPassword) {
    throw new Error("Usuário ou senha inválidos");
  }

  const token = jwt.sign(
    {
      id: user.id,
      email: user.email
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "24h"
    }
  );

  return {
    token,
    user: {
      id: user.id,
      name: user.name,
      email: user.email
    }
  };
}

module.exports = {
  login
};

