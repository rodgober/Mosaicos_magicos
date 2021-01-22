import React from 'react';
import Juegayaprende from './components/Juegayaprende';
import SalaState from './context/salas/salaState'
import Mosaicosmagicos from './components/Mosaicosmagicos'
import About from './components/About'

import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Mosaicosmagicos} />
        <Route exact path="/about" component={About} />
      </Switch>
    </Router>
  );
}
export default App;
