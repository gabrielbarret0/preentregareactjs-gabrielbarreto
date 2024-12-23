import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/category/electronics">Electrónica</a></li>
            <li><a href="/category/clothing">Ropa</a></li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact component={ItemListContainer} />
          <Route path="/category/:categoryId" component={ItemListContainer} />
          <Route path="/item/:itemId" component={ItemDetailContainer} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
