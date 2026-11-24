const fs = require("fs");
const path = require("path");

const filePath = path.join(
  __dirname,
  "../data/products.json"
);

function getProducts() {
  const data = fs.readFileSync(filePath, "utf8");
  return JSON.parse(data);
}

function getProductById(id) {
  const products = getProducts();

  return products.find(
    (product) => String(product.id) === String(id)
  );
}

function createProduct(product) {
  const products = getProducts();

  const newProduct = {
    id: Date.now(),
    ...product
  };

  products.push(newProduct);

  fs.writeFileSync(
    filePath,
    JSON.stringify(products, null, 2)
  );

  return newProduct;
}

function updateProduct(id, updatedData) {
  const products = getProducts();

  const index = products.findIndex(
    (product) => String(product.id) === String(id)
  );

  if (index === -1) {
    return null;
  }

  products[index] = {
    ...products[index],
    ...updatedData
  };

  fs.writeFileSync(
    filePath,
    JSON.stringify(products, null, 2)
  );

  return products[index];
}

function deleteProduct(id) {
  const products = getProducts();

  const filteredProducts = products.filter(
    (product) => String(product.id) !== String(id)
  );

  if (filteredProducts.length === products.length) {
    return false;
  }

  fs.writeFileSync(
    filePath,
    JSON.stringify(filteredProducts, null, 2)
  );

  return true;
}

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
};