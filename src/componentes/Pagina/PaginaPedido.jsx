import React from 'react';
import PedidoForm from '../Formulario/PedidoForm';
import PedidoTabela from '../Tabela/PedidoTabela';
import './Pagina.css'; // Importe o arquivo CSS

function PaginaPedido() {
  return (
    <div className="container"> {/* Aplique a classe container */}
      <h1>Cadastro de Pedido</h1>
      <PedidoForm />

      <PedidoTabela />
    </div>
  );
}

export default PaginaPedido;
