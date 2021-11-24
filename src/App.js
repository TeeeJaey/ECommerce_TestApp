import logo from './logo.svg';
import './App.css';
import ProductList from './components/ProductList';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Product from './components/Product';
import { useState } from 'react';
import store from './store';
import Cart from './components/Cart';
import { Provider } from 'react-redux';

function App() {
  
  return (
    <div className="App">
    <Provider store={store} >
        <BrowserRouter>
            <Switch>
              <Route exact path="/cart" component={Cart} />
              <Route exact path="/:id" component={Product} />
              <Route exact path="/" component={ProductList} />
            </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
