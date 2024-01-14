import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import './CreateAccount.css';

interface AccountFormData {
  email: string;
  password: string;
  confirmPassword: string;
}

const CreateAccount: React.FC = () => {
  const dispatch = useDispatch();
  console.log(dispatch);
  const [formData, setFormData] = useState<AccountFormData>({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCreateAccount = () => {
    // Dispatch action to create account - Integrate with Rails Devise auth later
    console.log('Account creation request:', formData);
    // dispatch({ type: 'CREATE_ACCOUNT_REQUEST', payload: formData });
  };

  return (
    <div>
      <div className="title-container">
        <h2>Create Your Account</h2>
      </div>
      <div className="create-account-container">
        <form className="create-account-form">
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

          <div className="input-container">
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="confirmPassword" className={formData.confirmPassword ? 'hidden' : ''}>Confirm Password</label>
          </div>

          <button type="button" onClick={handleCreateAccount} className="create-account-button">
            Create Account
          </button>

          <div className="buttons-container">
            <Link to="/login" className="button">Already have an account?</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateAccount;
