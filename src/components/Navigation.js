import React from 'react';
import { NavLink } from 'react-router-dom';



const Navigation = () => {
  return (
    <div className="navigation px-6 py-1 items-center justify-center">
        <NavLink to="/" exact className="navlink-work px-4" activeClassName="nav-active" style={{ textDecoration: 'none' }}>
          <div className="menu menu-work">WORK</div>
        </NavLink>
        <NavLink to="/about" exact className="navlink-about" activeClassName="nav-active" style={{ textDecoration: 'none' }}>
          <div className="menu menu-about">ABOUT</div>
        </NavLink>
      </div>
    );
};

export default Navigation;
