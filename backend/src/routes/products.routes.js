const express = require("express");
const router = express.Router();

const authMiddleware = require(
  "../middleware/auth.middleware"
);

const productsService = require(
  "../services/products.service"
);

router.get("/", (req, res) => {
  res.json(productsService.getProducts());
});

router.get("/:id", (req, res) => {
  const product = productsService.getProductById(
    req.params.id
  );

  if (!product) {
    return res.status(404).json({
      message: "Produto não encontrado"
    });
  }

  res.json(product);
});

router.post(
  "/",
  authMiddleware,
  (req, res) => {
    res.status(201).json({
      message: "Produto criado",
      user: req.user
    });
  }
);

module.exports = router;
