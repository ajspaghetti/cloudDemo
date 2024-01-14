import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import './Login.css';

interface FormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = () => {
    // Dispatch an action to handle login with Rails authentication
    dispatch({ type: 'LOGIN_REQUEST', payload: formData });
  };

  return (
    <div>
      <div className="title-container">
        <h2>Log in to your account</h2>
      </div>
      <div className="login-container">
        <form className="login-form">
          <div className="input-container">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="email" className={formData.email ? 'hidden' : ''}>Email</label>
          </div>

          <div className="input-container">
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="password" className={formData.password ? 'hidden' : ''}>Password</label>
          </div>

          <button type="button" onClick={handleLogin} className="login-button">
            Login
          </button>

          <div className="buttons-container">
            <Link to="/" className="button">Create new account</Link>
            <Link to="/" className="button">Forgot credentials</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
