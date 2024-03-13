// App.js
import React, { useState, useEffect } from 'react';
import RestauranteForm from './componentes/RestauranteForm';
import PedidoForm from './componentes/PedidoForm';
import './App.css';

function App() {
  const [restaurantes, setRestaurantes] = useState([]);

  useEffect(() => {
    // Aqui você faria uma chamada para o backend para obter a lista de restaurantes
    // Exemplo fictício de como poderia ser:
    setRestaurantes([
      { IDRestaurante: 1, NomeRestaurante: 'Restaurante A' },
      { IDRestaurante: 2, NomeRestaurante: 'Restaurante B' }
    ]);
  }, []);

  const handleRestauranteSubmit = (restauranteData) => {
    // Aqui você enviaria os dados do restaurante para o backend
    console.log('Dados do restaurante:', restauranteData);
  };

  const handlePedidoSubmit = (pedidoData) => {
    // Aqui você enviaria os dados do pedido para o backend
    console.log('Dados do pedido:', pedidoData);
  };

  return (
    <div className="container">
      <div className="form-container">
        <h1>Cadastro de Restaurantes e Pedidos</h1>
        <RestauranteForm onRestauranteSubmit={handleRestauranteSubmit} />
        <PedidoForm restaurantes={restaurantes} onPedidoSubmit={handlePedidoSubmit} />
      </div>
    </div>
  );
}

export default App;
