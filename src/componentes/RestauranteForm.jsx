// RestauranteForm.js
import React, { useState } from 'react';

function RestauranteForm({ onRestauranteSubmit }) {
  const [nomeRestaurante, setNomeRestaurante] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onRestauranteSubmit({ nomeRestaurante });
    setNomeRestaurante('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="nomeRestaurante" className="form-label">Nome do Restaurante</label>
        <input
          type="text"
          className="form-control"
          id="nomeRestaurante"
          placeholder="Digite o nome do restaurante"
          value={nomeRestaurante}
          onChange={(e) => setNomeRestaurante(e.target.value)}
        />
      </div>
      <div className="d-flex justify-content-end">
        <button type="submit" className="btn btn-success">Cadastrar Restaurante</button>
      </div>
    </form>
  );
}

export default RestauranteForm;
