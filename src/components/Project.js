import React, { useState, Component } from 'react';
import { projectsData } from '../data/projectsData.js';
import Carousel from './Carousel.js';



class Project extends Component {
  constructor(props){
    super(props);

   this.state = {
        hover: false,
   }
  }

 onEnter = () => {
      this.setState({
        hover: !this.state.hover
      });
    }

  render (){
    return(
       <div className="project">
          <div className="img">
            <img className="lazyload" data-sizes="auto" data-src={this.props.path} src={this.props.path}/>
          </div>
          <div className="infos item-center justify-center" onMouseEnter={this.onEnter} onMouseLeave={this.onEnter}>
            <div className="text name px-5" >
                <p className="project-title">{this.props.title} </p>
                <p className={this.state.hover ? 'visible' : 'hidden'}>[{this.props.category} — {this.props.year} — {this.props.info}]</p>
            </div>

            {/*
            <div className="text category pr-20">
                <p>[CATEGORY]</p>
                <p>{this.props.category}</p>
            </div>
            <div className="text year pr-20">
                <p>[YEAR]</p>
                <p>{this.props.year}</p>
            </div>
            <div className="text info pr-20">
                <p>[INFO]</p>
                <p>{this.props.info}</p>
            </div>
             <div className="text description pr-20">
                <p>[DESCRIPTION]</p>
                <p>{this.props.description}</p>
            </div>*/}

          </div>
        </div>
    )
  }
}
export default Project;




