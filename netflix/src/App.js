import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import Browse from './pages/Browse';

function App() {
  return (
    <Router>
      <div className="App">

        <Route
          exact
          path="/"
          component ={Home}
        />

        <Route
          exact
          path = "/browse"
          component ={Browse}
        />
      </div>
    </Router>
  );
}

export default App;
