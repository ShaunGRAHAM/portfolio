import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';


import './styles/index.scss';
import './styles/components/navigation.scss';
import './styles/components/carousel.scss';
import './styles/components/project.scss';
import './styles/pages/about.scss';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
