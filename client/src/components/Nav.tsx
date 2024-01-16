import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/userSlice'; // Adjust path as necessary
import logoImage from '../assets/images/Sli1.png';
import './Nav.css';

const Nav: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state: any) => state.user.isLoggedIn); // Adjust according to your state structure

  const handleLogout = () => {
    dispatch(logout());
    navigate('/'); // Redirect to home page after logout
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            <img src={logoImage} alt="Logo" className="logo" />
          </Link>
        </li>
        <li><Link to="/">Home</Link></li>
        {/* Conditional rendering based on login status */}
        {isLoggedIn && <li><Link to="/shop">Shop</Link></li>}
        <li><Link to="/about">About</Link></li>
        <li><Link to="/workhistory">Work History</Link></li>
        <li><Link to="/education">Education</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <div className="login-container">
          {!isLoggedIn ? (
            <li><Link to="/login">Login</Link></li>
          ) : (
            <li><button onClick={handleLogout} className="logout-button">Logout</button></li>
          )}
        </div>
      </ul>
    </nav>
  );
}

export default Nav;
