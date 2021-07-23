import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from './pages/Home.js';
import About from './pages/About.js';



const App = () => {
  return (
    <div id="main-container">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        < Redirect to="/" />
      </Switch>
    </div>

  );
}

export default App;
