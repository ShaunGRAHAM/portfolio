import React from 'react';
import Navigation from '../components/Navigation.js';

const About = () => {

  return (
    <div >
    <Navigation></Navigation>
    <div className="about-main px-6 py-1">
      <div className="top py-2 mb-2">
          <a className="contact pr-1 py-1" href="mailto:shaun.o.graham@gmail.com">Mail,</a>
          <a className="contact pr-1 py-1" href="https://instagram.com/shn_grhm">Instagram,</a>
          <a className="contact pr-1 py-1" href="https://twitter.com/GRAHAMSHAUN3">Twitter,</a>
          <a className="contact pr-1 py-1" href="https://www.behance.net/Shaun_Graham">Behance</a>
      </div>
      <div className="about">
        <div className="about-left ">
          <div className="left-top">
            <p className="text-top-left">French Graphic Designer, Graduated from a master's degree in digital design at Saint-Etienne's Higher Education School in Art and Design. </p>
            <p className="text-top-left"> Working as a freelancer and spliting my time between clients, collaborations and self initiated projects.</p>
            <p className="text-top-left"> My main focus has been on digital creations, 3D CGI and creative coding.</p>
          </div>
          <div className="bottom py-6" >
            <p className="adress">3 RUE GRENETTE</p>
            <p className="adress"> 69002 LYON, FRANCE</p>
            <a className="adress location" href="https://www.google.com/maps/place/3+Rue+Grenette,+69002+Lyon/@45.7634089,4.8306392,17z/data=!3m1!4b1!4m5!3m4!1s0x47f4ea558ff9f759:0xed86578eb4212fce!8m2!3d45.7634089!4d4.8328279"> 4°49'50,3011" E 45°45'48,2720" N</a>
          </div>
        </div>
        <div className="about-right px-6">
          <div className="right-top">
            <div className="exhibitions">
              <p>Exhibition</p>
              <p className="pl-5 py-1">Off Online Project, 10 th International Design Biennale, Saint-Etienne, 2017</p>
              <p className="pl-5 py-1">Lire Aujourd'hui, Book Fair, Saint-Etienne, 2015</p>
              <p className="pl-5 py-1">Smartfaust On Air, 9 th International Design Biennale, Saint-Etienne, 2015 </p>
            </div>
            <div className="">
            </div>
        </div>
        <div className="bottom">
        </div>
      </div>
      </div>
    </div>
    </div>
    );
}
export default About;
