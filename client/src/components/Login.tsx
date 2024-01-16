import React, { useState, ChangeEvent, FocusEvent, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import authService from '../services/authService'; // Make sure this path is correct
import { setUser } from '../redux/userSlice'; // Make sure this path is correct
import './Login.css';

interface FormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // For redirecting after successful login
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
  });

  const [invalidInput, setInvalidInput] = useState({
    email: false,
  });

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

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

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (invalidInput.email) {
      console.log("Invalid email format.");
      return;
    }

    try {
      const user = await authService.login(formData.email, formData.password);
      dispatch(setUser(user));
      navigate('/'); // Redirect to home page after successful login
    } catch (error) {
      console.error(error);
    }
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
