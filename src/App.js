import logo from './logo.svg';
import './App.css';
import TagManager from 'react-gtm-module'
import ReactGa from 'react-ga'
import { useEffect } from 'react';
import {Link, BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/home'
import Services from './components/services'
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
        <Link to="/services">Services</Link>
        <Link to="/checkout">Checkout</Link>

        <Switch>
          <Route path="/services">
            <Services />
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
