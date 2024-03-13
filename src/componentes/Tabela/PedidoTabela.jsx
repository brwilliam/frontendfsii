import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PedidoTabela() {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    // Aqui faremos uma requisição GET ao backend para obter a lista de pedidos
    axios.get('URL_DO_BACKEND/lista-pedidos')
      .then(response => {
        setPedidos(response.data); // Define o estado com os dados dos pedidos obtidos do backend
      })
      .catch(error => {
        console.error('Erro ao obter a lista de pedidos:', error);
      });
  }, []);

  return (
    <div>
      <h2>Lista de Pedidos</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Data do Pedido</th>
            <th>Valor Total</th>
            <th>ID do Restaurante</th>
          </tr>
        </thead>
        <tbody>
          {pedidos.map(pedido => (
            <tr key={pedido.IDPedido}>
              <td>{pedido.IDPedido}</td>
              <td>{pedido.DataPedido}</td>
              <td>{pedido.ValorTotal}</td>
              <td>{pedido.IDRestaurante}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PedidoTabela;
