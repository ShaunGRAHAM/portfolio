import React, { useState, useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Loader from './components/Loader.js';



function App () {

  const [loader, setLoader] = useState(true);
  const [count, setCount] = useState("0");

  useEffect(() => {

    let start = 0;
    const end = 100;
    const totalMilisecond = 4000;
    let incrementTime = (totalMilisecond / end);

    let counter = setInterval(() => {
      setCount(start += 1);
      //console.log(start);
      if (start === end) {

        setLoader(false);
        clearInterval(counter);

      }
    }, 15);
  }, [])

  return loader ? (
    <div className="counter">
      <p className="load">LOADING… <br/> {count}%</p>
    </div>
  ) : (
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
