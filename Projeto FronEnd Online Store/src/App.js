import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import Product from './pages/Product';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/shoppingCart" component={ ShoppingCart } />
          <Route exact path="/product/:id" component={ Product } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
