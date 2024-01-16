import React, { useState, ChangeEvent, FormEvent, FocusEvent } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './CreateAccount.css';

// Updated form data interface to include new fields
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

// Utility functions for validation
const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const validatePhone = (phone: string) => /^\d{10}$/.test(phone);

const CreateAccount: React.FC = () => {
  const dispatch = useDispatch();
  console.log(dispatch)

  // Updated state to include new fields
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

    // Resetting validation flags
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

    // Check for form validation before dispatching
    if (invalidInput.email || invalidInput.phone) {
      console.log("Invalid input in the form.");
      return;
    }

    try {
      // Construct the user registration data
      const registrationData = {
        email: formData.email,
        password: formData.password,
        first_name: formData.firstName,
        last_name: formData.lastName,
        phone_number: formData.phoneNumber,
        company: formData.company,
        title: formData.title,
      };

      // Send POST request to your Rails backend registration endpoint
      const response = await axios.post('/users', { user: registrationData });

      // Handle the response, show success message, or redirect
      console.log('Registration Successful:', response.data);

      // Redirect to the login page or another relevant page
      // You can use React Router's history or Navigate component for this.
      // For example, you can use history.push('/login') if using React Router.
    } catch (error: any) { // Specify the type of 'error' as 'any'
      // Handle registration error
      console.error('Registration Error:', error.response?.data || error.message);
      // Display an error message to the user
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
