import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
      <div className="nav">
        <ul>
          <li> <NavLink exact to="/" activeClassName="is-active">Home</NavLink></li>
          <li> <NavLink to="/about" activeClassName="is-active">About</NavLink></li>
          <li> <NavLink to="/photos" activeClassName="is-active">Photos</NavLink></li>
          <li><NavLink to="/live" activeClassName="is-active">Live</NavLink></li>
          <li> <NavLink to="/contact" activeClassName="is-active">Contact</NavLink></li>
        </ul>
        </div>
    )
}

export default Navbar;
