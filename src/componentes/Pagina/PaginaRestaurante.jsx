import React from 'react';
import RestauranteForm from '../Formulario/RestauranteForm';
import RestauranteTabela from '../Tabela/RestauranteTabela';
import './Pagina.css'; // Importe o arquivo CSS

function PaginaRestaurante() {
  return (
    <div className="container">
      <h1>Cadastro de Restaurante</h1>
      <RestauranteForm />
      <h2>Restaurantes Cadastrados</h2>
      <RestauranteTabela />
    </div>
  );
}

export default PaginaRestaurante;
