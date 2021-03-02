import logo from './logo.svg';
import './App.css';
import TagManager from 'react-gtm-module'
import ReactGa from 'react-ga'
import { useEffect } from 'react';
import {Link, BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/home'
import Products from './components/products'
import Checkout from './components/checkout'

 
const tagManagerArgs = {
    gtmId: 'GTM-NBTPBKD'
}
 
TagManager.initialize(tagManagerArgs)


function App() {
  return (
    <div className="App">
      <>
      <Router>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/checkout">Checkout</Link>

        <Switch>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      </>
    </div>
  );
}

export default App;
