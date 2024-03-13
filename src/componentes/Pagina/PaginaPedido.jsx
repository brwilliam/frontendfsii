import React from 'react';
import PedidoForm from './componentes/Formulario/PedidoForm';
import PedidoTabela from './componentes/Tabela/PedidoTabela';

function PaginaPedido() {
  return (
    <div>
      <h1>Cadastro de Pedido</h1>
      <PedidoForm />
      <h2>Pedidos Registrados</h2>
      <PedidoTabela />
    </div>
  );
}

export default PaginaPedido;
