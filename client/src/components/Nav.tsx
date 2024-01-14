import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../assets/images/Sli1.png';
import './Nav.css';

const Nav: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            <img src={logoImage} alt="Logo" className="logo" />
          </Link>
        </li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/workhistory">Work History</Link></li>
        <li><Link to="/education">Education</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <div className="login-container">
          <li><Link to="/login">Login</Link></li>
        </div>
      </ul>
    </nav>
  );
}

export default Nav;
