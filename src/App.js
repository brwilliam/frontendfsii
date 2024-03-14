import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navegacao from './componentes/Navegacao/Navegacao';
import PaginaRestaurante from './componentes/Pagina/PaginaRestaurante';
import PaginaPedido from './componentes/Pagina/PaginaPedido';

function App() {
  return (
    <Router>
      <div>
        <Navegacao />
        <Routes>
          <Route path="/restaurante" element={<PaginaRestaurante />} />
          <Route path="/pedido" element={<PaginaPedido />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
