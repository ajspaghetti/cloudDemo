import React, { useState, ChangeEvent, FocusEvent, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import authService from '../services/authService';
import { setUser } from '../redux/userSlice';
import './Login.css';

interface FormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
  });
  const [invalidInput, setInvalidInput] = useState({
    email: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isPasswordEmpty, setIsPasswordEmpty] = useState(true);
  const [loginError, setLoginError] = useState('');

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

    if (name === 'password') {
      setIsPasswordEmpty(value.length === 0);
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
      navigate('/');
    } catch (error) {
      setLoginError('Invalid username or password');
      console.error(error);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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
          <div className="input-container password-container">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="password" className={formData.password ? 'hidden' : ''}>Password</label>
            {!isPasswordEmpty && (
              <span className="password-toggle" onClick={togglePasswordVisibility}>
              </span>
            )}
          </div>

          {loginError && <div className="login-error">{loginError}</div>}

          <button type="submit" className="login-button">
            Login
          </button>

          <div className="buttons-container">
            <Link to="/createaccount" className="button">Create new account</Link>
            <Link to="/forgotpassword" className="button">Forgot credentials</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
