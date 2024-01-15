import React, { useState, ChangeEvent, FocusEvent, FormEvent } from 'react';
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

  const [invalidInput, setInvalidInput] = useState({
    email: false,
  });

  // Email validation function
  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Reset email validation error
    if (name === 'email') {
      setInvalidInput({ ...invalidInput, email: false });
    }
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'email' && value && !validateEmail(value)) {
      setInvalidInput({ ...invalidInput, email: true });
    }
  };

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (invalidInput.email) {
      console.log("Invalid email format.");
      return;
    }
    // Dispatch action to handle login
    dispatch({ type: 'LOGIN_REQUEST', payload: formData });
  };

  return (
    <div>
      <div className="title-container">
        <h2>Log in to your account</h2>
      </div>
      <div className="login-container">
        <form className="login-form" onSubmit={handleLogin}>
          <div className="input-container">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              onBlur={handleBlur}
              required
            />
            <label htmlFor="email" className={formData.email ? 'hidden' : ''}>Email</label>
            {invalidInput.email && (
              <div className="validation-message">Invalid email format.</div>
            )}
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

          <button type="submit" className="login-button">
            Login
          </button>

          <div className="buttons-container">
            <Link to="/create-account" className="button">Create new account</Link>
            <Link to="/forgot-password" className="button">Forgot credentials</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
