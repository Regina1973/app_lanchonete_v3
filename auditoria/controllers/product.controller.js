const productService =
  require("../services/product.service");

exports.getAll = (req, res) => {
  const products =
    productService.getProducts();

  res.json(products);
};

exports.getById = (req, res) => {
  const product =
    productService.getProductById(
      req.params.id
    );

  if (!product) {
    return res.status(404).json({
      message: "Produto não encontrado"
    });
  }

  return res.json(product);
};

exports.create = (req, res) => {
  const { name, price, category } =
    req.body;

  const newProduct = {
    id: Date.now(),
    name,
    price,
    category
  };

  productService.createProduct(
    newProduct
  );

  return res.status(201).json(
    newProduct
  );
};

exports.update = (req, res) => {
  const product =
    productService.updateProduct(
      req.params.id,
      req.body
    );

  if (!product) {
    return res.status(404).json({
      message: "Produto não encontrado"
    });
  }

  return res.json(product);
};

exports.remove = (req, res) => {
  const deleted =
    productService.deleteProduct(
      req.params.id
    );

  if (!deleted) {
    return res.status(404).json({
      message: "Produto não encontrado"
    });
  }

  return res.json({
    success: true,
    message: "Produto removido com sucesso"
  });
};