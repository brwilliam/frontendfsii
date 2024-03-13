import React, { useState, useEffect } from 'react';
import axios from 'axios';

function RestauranteTabela() {
  const [restaurantes, setRestaurantes] = useState([]);

  useEffect(() => {
    // Aqui faremos uma requisição GET ao backend para obter a lista de restaurantes
    axios.get('URL_DO_BACKEND/lista-restaurantes')
      .then(response => {
        setRestaurantes(response.data); // Define o estado com os dados dos restaurantes obtidos do backend
      })
      .catch(error => {
        console.error('Erro ao obter a lista de restaurantes:', error);
      });
  }, []);

  return (
    <div>
      <h2>Lista de Restaurantes</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
          </tr>
        </thead>
        <tbody>
          {restaurantes.map(restaurante => (
            <tr key={restaurante.IDRestaurante}>
              <td>{restaurante.IDRestaurante}</td>
              <td>{restaurante.NomeRestaurante}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RestauranteTabela;
