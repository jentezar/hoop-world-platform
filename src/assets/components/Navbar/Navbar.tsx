// Updated Navbar.tsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <NavLink to="/" className="hoopwrld-link">
          <span className="basketball-icon"></span>HoopWrld
        </NavLink>
      </div>
      <ul className="navbar-center">
      <li>
          <NavLink to="/hooperBot">
            <span className="basketball-icon"></span>HooperBot
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
      <div className="navbar-right">
        <NavLink to="/login" className="login-link">
          <span className="basketball-icon"></span>Log In
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;