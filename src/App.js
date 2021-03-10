import logo from './logo.svg';
import './App.css';
import TagManager from 'react-gtm-module'
import ReactGa from 'react-ga'
import { useEffect } from 'react';
import {Link, BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/home'
import Flowers from './components/flowers'
import Checkout from './components/checkout'
import './css/app.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

 
const tagManagerArgs = {
    gtmId: 'GTM-NBTPBKD'
}
 
TagManager.initialize(tagManagerArgs)


function App() {
  return (
    <div className="app">
      <img src="https://i.ibb.co/LQL0tJt/logo.png" alt="logo" class="app__logo"/>
        <Router>
          <div class="app__links">
            <Link to="/" onClick={() => {window.location.href="/"}}>Home</Link>
            <Link to="/flowers" onClick={() => {window.location.href="/flowers"}}>Flowers</Link>
            <Link to="/checkout" onClick={() => {window.location.href="/checkout"}}>Checkout</Link>
          </div>

        <Switch>
          <Route path="/flowers">
            <Flowers />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      </div>
      
  );
}

export default App;
