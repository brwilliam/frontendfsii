import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navegacao from './componentes/Navegacao';
import PaginaRestaurante from './componentes/Pagina/PaginaRestaurante';
import PaginaPedido from './componentes/Pagina/PaginaPedido';

function App() {
  return (
    <Router>
      <div>
        <Navegacao />
        <Switch>
          <Route path="/restaurante" component={PaginaRestaurante} />
          <Route path="/pedido" component={PaginaPedido} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
