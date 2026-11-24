const express = require("express");

const authRoutes = require("./routes/auth.routes");
const userRoutes = require("./routes/user.routes");
const productsRoutes = require("./routes/products.routes");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "API funcionando"
  });
});

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/products", productsRoutes);

module.exports = app;