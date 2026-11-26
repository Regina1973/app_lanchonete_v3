import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

import "./styles.css";
import { getProducts } from "./services/products.service";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadProducts() {
      try {
        const response = await getProducts();
        setProducts(response.data);
      } catch (err) {
        console.error(err);
        setError(
          "Não foi possível carregar os produtos."
        );
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  function handleAddToCart(product) {
    setCart((currentCart) => [
      ...currentCart,
      product,
    ]);
  }

  function handleRemoveFromCart(indexToRemove) {
    setCart((currentCart) =>
      currentCart.filter(
        (_, index) => index !== indexToRemove
      )
    );
  }

  function handleViewCart() {
    if (cart.length === 0) {
      alert("Seu pedido está vazio.");
      return;
    }

    const items = cart
      .map(
        (item, index) =>
          `${index + 1}. ${item.nome} - R$ ${item.preco.toFixed(2)}`
      )
      .join("\n");

    const total = cart.reduce(
      (sum, item) => sum + item.preco,
      0
    );

    alert(
      `Itens do pedido:\n\n${items}\n\nTotal: R$ ${total.toFixed(2)}`
    );
  }

  return (
    <div className="container">
      <header className="header">
        <h1>Lanchonete Carioca 🍔</h1>

        <p>
          Hambúrgueres artesanais,
          acompanhamentos e bebidas geladas
        </p>

        <div className="cart-header">
          <h3>
            🛒 Pedido: {cart.length} item(ns)
          </h3>

          <button
            className="btn-cart"
            onClick={handleViewCart}
          >
            Ver Pedido
          </button>
        </div>
      </header>

      {cart.length > 0 && (
        <>
          <div className="cart-info">
            🛒 Você selecionou {cart.length} produto(s)
          </div>

          <div className="cart-list">
            <h3>Meu Pedido</h3>

            {cart.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="cart-item"
              >
                <span>
                  {item.nome} - R${" "}
                  {item.preco.toFixed(2)}
                </span>

                <button
                  className="btn-remove"
                  onClick={() =>
                    handleRemoveFromCart(index)
                  }
                >
                  Remover
                </button>
              </div>
            ))}

            <div className="cart-total">
              Total: R${" "}
              {cart
                .reduce(
                  (sum, item) =>
                    sum + item.preco,
                  0
                )
                .toFixed(2)}
            </div>
          </div>
        </>
      )}

      {loading && (
        <div className="loading">
          <h2>Carregando produtos...</h2>
        </div>
      )}

      {error && (
        <div className="error">
          {error}
        </div>
      )}

      {!loading && !error && (
        <div className="products-grid">
          {products.map((product) => (
            <div
              key={product.id}
              className="product-card"
            >
              <h2>{product.nome}</h2>

              <p className="product-description">
                {product.descricao}
              </p>

              <p className="product-price">
                R$ {product.preco.toFixed(2)}
              </p>

              <button
                className="btn-primary"
                onClick={() =>
                  handleAddToCart(product)
                }
              >
                Pedir Agora
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
