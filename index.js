require("dotenv").config();

console.log("JWT_SECRET =", process.env.JWT_SECRET);

const app = require("./backend/src/App");

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
