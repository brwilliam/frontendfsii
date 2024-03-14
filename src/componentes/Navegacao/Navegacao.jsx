import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navegacao.css'

function Navegacao() {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className={`nav-item ${location.pathname === '/restaurante' ? 'active' : ''}`}>
              <Link className={`nav-link ${location.pathname === '/restaurante' ? 'font-weight-bold fs-5' : 'fs-5'}`} to="/restaurante">Restaurante</Link>
            </li>
            <li className={`nav-item ${location.pathname === '/pedido' ? 'active' : ''}`}>
              <Link className={`nav-link ${location.pathname === '/pedido' ? 'font-weight-bold fs-5' : 'fs-5'}`} to="/pedido">Pedido</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navegacao;
