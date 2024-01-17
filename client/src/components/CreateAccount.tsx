import React, { useState, ChangeEvent, FormEvent, FocusEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios';
import './CreateAccount.css';

interface AccountFormData {
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  company: string;
  title: string;
}

const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const validatePhone = (phone: string) => /^\d{10}$/.test(phone);

const CreateAccount: React.FC = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<AccountFormData>({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    company: '',
    title: '',
  });

  const [invalidInput, setInvalidInput] = useState({
    email: false,
    phone: false,
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === 'email' || name === 'phoneNumber') {
      setInvalidInput({
        ...invalidInput,
        [name]: false,
      });
    }
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'email' && value && !validateEmail(value)) {
      setInvalidInput({ ...invalidInput, email: true });
    } else if (name === 'phoneNumber' && value && !validatePhone(value)) {
      setInvalidInput({ ...invalidInput, phone: true });
    }
  };

  const handleCreateAccount = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (invalidInput.email || invalidInput.phone) {
      console.log("Invalid input in the form.");
      return;
    }

    try {
      const registrationData = {
        email: formData.email,
        password: formData.password,
        first_name: formData.firstName,
        last_name: formData.lastName,
        phone_number: formData.phoneNumber,
        company: formData.company,
        title: formData.title,
      };

      const response = await axios.post('/users', { user: registrationData });
      console.log('Registration Successful:', response.data);

      navigate('/login', { state: { message: 'Thank you for registering! Please log in with your new credentials.' } });
    } catch (error: any) {
      console.error('Registration Error:', error.response?.data || error.message);
    }
  };

  return (
    <div>
      <div className="title-container">
        <h2>Create Your Account</h2>
      </div>
      <div className="create-account-container">
        <form className="create-account-form" onSubmit={handleCreateAccount}>

          {/* Email Input */}
          <div className="input-container">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            <label htmlFor="email" className={formData.email ? 'hidden' : ''}>
              Email <span className="required-asterisk">*</span>
            </label>
            {invalidInput.email && (
              <div className="validation-message">Invalid email format.</div>
            )}
          </div>

          {/* Password Input */}
          <div className="input-container">
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <label htmlFor="password" className={formData.password ? 'hidden' : ''}>
              Password <span className="required-asterisk">*</span>
            </label>
          </div>

          {/* Confirm Password Input */}
          <div className="input-container">
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            <label htmlFor="confirmPassword" className={formData.confirmPassword ? 'hidden' : ''}>
              Confirm Password <span className="required-asterisk">*</span>
            </label>
          </div>

          {/* First Name Input */}
          <div className="input-container">
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <label htmlFor="firstName" className={formData.firstName ? 'hidden' : ''}>
              First Name <span className="required-asterisk">*</span>
            </label>
          </div>

          {/* Last Name Input */}
          <div className="input-container">
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
            <label htmlFor="lastName" className={formData.lastName ? 'hidden' : ''}>
              Last Name <span className="required-asterisk">*</span>
            </label>
          </div>

          {/* Company Input */}
          <div className="input-container">
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
            />
            <label htmlFor="company" className={formData.company ? 'hidden' : ''}>Company</label>
          </div>

          {/* Title Input */}
          <div className="input-container">
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
            <label htmlFor="title" className={formData.title ? 'hidden' : ''}>Title</label>
          </div>

          {/* Phone Number Input */}
          <div className="input-container">
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <label htmlFor="phoneNumber" className={formData.phoneNumber ? 'hidden' : ''}>Phone Number</label>
            {invalidInput.phone && (
              <div className="validation-message">Invalid phone format.</div>
            )}
          </div>
          <div className="buttons-container">
            <Link to="/login" className="button">Already have an account?</Link>
            <button type="submit" className="create-account-button">Create Account</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateAccount;
