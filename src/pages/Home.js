import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navigation from '../components/Navigation.js';
import Carousel from '../components/Carousel.js';
import Project from '../components/Project.js';




const Home = () => {
  return (
    <div >
      <Navigation/>
      <Carousel />
     </div>
    );
}
export default Home;
