import React from 'react';
import { Link } from 'react-router-dom';

function Navegacao() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/restaurante">Restaurante</Link>
        </li>
        <li>
          <Link to="/pedido">Pedido</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navegacao;
