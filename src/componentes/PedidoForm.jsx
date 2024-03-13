// PedidoForm.js
import React, { useState } from 'react';

function PedidoForm({ restaurantes, onPedidoSubmit }) {
  const [dataPedido, setDataPedido] = useState('');
  const [valorTotal, setValorTotal] = useState('');
  const [idRestaurante, setIdRestaurante] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onPedidoSubmit({ dataPedido, valorTotal, idRestaurante });
    setDataPedido('');
    setValorTotal('');
    setIdRestaurante('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="dataPedido" className="form-label">Data do Pedido</label>
        <input
          type="date"
          className="form-control"
          id="dataPedido"
          value={dataPedido}
          onChange={(e) => setDataPedido(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="valorTotal" className="form-label">Valor Total</label>
        <input
          type="number"
          className="form-control"
          id="valorTotal"
          placeholder="Digite o valor total"
          value={valorTotal}
          onChange={(e) => setValorTotal(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="idRestaurante" className="form-label">Restaurante</label>
        <select
          className="form-select"
          id="idRestaurante"
          value={idRestaurante}
          onChange={(e) => setIdRestaurante(e.target.value)}
        >
          <option value="">Selecione um restaurante</option>
          {restaurantes.map(restaurante => (
            <option key={restaurante.IDRestaurante} value={restaurante.IDRestaurante}>
              {restaurante.NomeRestaurante}
            </option>
          ))}
        </select>
      </div>
      <div className="d-flex justify-content-end">
        <button type="submit" className="btn btn-success">Cadastrar Pedido</button>
      </div>
    </form>
  );
}

export default PedidoForm;
