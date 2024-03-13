import React from 'react';
import RestauranteForm from './componentes/Formulario/RestauranteForm';
import RestauranteTabela from './componentes/Tabela/RestauranteTabela';

function PaginaRestaurante() {
  return (
    <div>
      <h1>Cadastro de Restaurante</h1>
      <RestauranteForm />
      <h2>Restaurantes Cadastrados</h2>
      <RestauranteTabela />
    </div>
  );
}

export default PaginaRestaurante;
