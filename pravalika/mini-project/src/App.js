import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from "./components/Home";
import Books from "./components/Books";
import Login from './components/Login';
import Register from './components/Register';
import Cart from './components/Cart';

function App() {
  return (
    <Router>
      <Route path="/Home" exact component={Home} />
      <Route path="/Books" component={Books} />
      <Route path="/Login" component={Login} />
      <Route path="/Register" component={Register} />
      <Route path="/Cart" component={Cart} />
    </Router>
  );
}

export default App;






