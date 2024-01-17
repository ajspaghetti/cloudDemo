import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/userSlice';
import logoImage from '../assets/images/Sli1.png';
import './Nav.css';

const Nav: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state: any) => state.user.isLoggedIn);
  const user = useSelector((state: any) => state.user.user); 

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
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
        {isLoggedIn && <li><Link to="/shop">Shop</Link></li>}
        <li><Link to="/about">About</Link></li>
        <li><Link to="/workhistory">Work History</Link></li>
        <li><Link to="/education">Education</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <div className="login-container">
          {!isLoggedIn ? (
            <li><Link to="/login" className="login-link">Login</Link></li>
          ) : (
            <>
              {user && <span className="user-email">Logged in as: {user.email}</span>}
              <li><button onClick={handleLogout} className="logout-button">Logout</button></li>
            </>
          )}
        </div>
      </ul>
    </nav>
  );
}

export default Nav;
