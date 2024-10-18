import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink to="/">
            <span className="basketball-icon"></span>Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/community">
            <span className="basketball-icon"></span>Community
          </NavLink>
        </li>
        <li>
          <NavLink to="/drills">
            <span className="basketball-icon"></span>Drills
          </NavLink>
        </li>
        <li>
          <NavLink to="/merch">
            <span className="basketball-icon"></span>Merch
          </NavLink>
        </li>
        <li>
          <NavLink to="/cards">
            <span className="basketball-icon"></span>Cards
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
