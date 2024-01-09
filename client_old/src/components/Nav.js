import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../assets/images/Sli1.png'
import './Nav.css';

function Nav() {
  return (
    <nav>
      <ul>
        <li>
            <Link to="/">
                <img
                    src={logoImage}
                    alt="Logo"
                    className="logo"
                />
            </Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;