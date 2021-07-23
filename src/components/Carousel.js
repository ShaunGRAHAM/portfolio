import React, {useState, setState, useEffect, Component } from 'react';
import { projectsData } from '../data/projectsData.js';

import Flickity from 'react-flickity-component';
import Project from './Project.js';




class Carousel extends Component {
  constructor(props) {
    super(props);
    // N’appelez pas `this.setState()` ici !
    this.state = {
      project:{projectsData},
      totalPages: null,
      selectedPage: null,
      autoPlay: true,
      btnPause: "pause",
    };
  }

//--------NEXT-------//
myCustomNext = () => {
  this.flkty.next();
    console.log(this.flkty.selectedIndex);
    console.log(this.flkty.slides.length);
  }

//--------PREV-------//
myCustomPrevious = () => {
  this.flkty.previous();
  }

//--------AUTOPLAY_BTN-------//
autoPlayBtn = () => {
  if (this.state.autoPlay) {
    this.flkty.pausePlayer();
    this.setState({
      autoPlay: !this.state.autoPlay,
      btnPause: "resume",
    });
  } else {
    this.flkty.unpausePlayer();
    this.setState({
      autoPlay: !this.state.autoPlay,
      btnPause: "pause",
    });
  }
}
autoPlayPause =() => {
  this.flkty.pausePlayer();
  this.setState({
    btnPause: "resume",
  });
}

//--------PAGE_COUNTER-------//
componentDidMount = () => {
  this.timerID = setInterval(() => this.updatePages())
}

componentWillUnmount = () => {
  clearInterval(this.timerID);
}

updatePages = () => {
  this.setState({
    totalPages: this.flkty.slides.length,
    selectedPage: this.flkty.selectedIndex,
  })

  }


  render (){
    const flickityOptions = {
      initialIndex:2,
      wrapAround: true,
      pageDots: false,
      autoPlay: 3500,
      pauseAutoPlayOnHover: false,
    }

    return (
      <div>
      <Flickity flickityRef={ref => (this.flkty = ref)} options={flickityOptions} >
      {this.state.project.projectsData.map((element) => {
        return element.project.img.map((item) => {
          return <Project path={item}
          title={element.project.title}
          category={element.project.category}
          year={element.project.year}
          info={element.project.info}
          description={element.project.description} />;
        });
      })
    }

    </Flickity>
    <button className="left previous flickity-button flickity-prev-next-button"
    type="button"
    aria-label="Previous"
    onClick={this.myCustomPrevious}
    onMouseEnter={this.autoPlayBtn}
    onMouseLeave={this.autoPlayBtn}> &lsaquo; </button>
    <button className="right next flickity-button flickity-prev-next-button"
    type="button"
    aria-label="Next"
    onClick={this.myCustomNext}
    onMouseEnter={this.autoPlayPause}
    onMouseLeave={this.autoPlayPause}> &rsaquo; </button>
    <div>
    <p className="pagination">[{this.state.selectedPage}/{this.state.totalPages}]</p>
    </div>
    <div>
    <p className="btn-autoPlay" onClick={this.autoPlayBtn}>[{this.state.btnPause}]</p>
    </div>
    </div>
    )
  }
};


export default Carousel;
