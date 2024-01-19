import React, { useState, ChangeEvent, FormEvent, FocusEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

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
      <div className="flex justify-center items-center h-1/5 pb-2.5">
        <h2>Create Your Account</h2>
      </div>
      <div className="flex justify-center items-start m-2.5 h-auto overflow-y-auto">
        <form className="w-full max-w-sm" onSubmit={handleCreateAccount}>
          {/* Email Input */}
          <div className="relative mb-5">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              className="w-full p-2.5 border-b-2 border-gray-800 bg-transparent text-lg text-gray-800"
            />
            <label htmlFor="email" className={`absolute top-0 left-0 transition-all ${formData.email && 'hidden'}`}>
              Email <span className="text-red-500">*</span>
            </label>
            {invalidInput.email && (
              <div className="absolute bg-red-200 text-red-700 p-1 rounded top-full left-1/2 transform -translate-x-1/2 whitespace-nowrap text-sm z-10">
                Invalid email format.
              </div>
            )}
          </div>

          {/* Password Input */}
          <div className="relative mb-5">
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full p-2.5 border-b-2 border-gray-800 bg-transparent text-lg text-gray-800"
            />
            <label htmlFor="password" className={`absolute top-0 left-0 transition-all ${formData.password && 'hidden'}`}>
              Password <span className="text-red-500">*</span>
            </label>
          </div>

          {/* Confirm Password Input */}
          <div className="relative mb-5">
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="w-full p-2.5 border-b-2 border-gray-800 bg-transparent text-lg text-gray-800"
            />
            <label htmlFor="confirmPassword" className={`absolute top-0 left-0 transition-all ${formData.confirmPassword && 'hidden'}`}>
              Confirm Password <span className="text-red-500">*</span>
            </label>
          </div>

          {/* First Name Input */}
          <div className="relative mb-5">
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full p-2.5 border-b-2 border-gray-800 bg-transparent text-lg text-gray-800"
            />
            <label htmlFor="firstName" className={`absolute top-0 left-0 transition-all ${formData.firstName && 'hidden'}`}>
              First Name <span className="text-red-500">*</span>
            </label>
          </div>

          {/* Last Name Input */}
          <div className="relative mb-5">
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full p-2.5 border-b-2 border-gray-800 bg-transparent text-lg text-gray-800"
            />
            <label htmlFor="lastName" className={`absolute top-0 left-0 transition-all ${formData.lastName && 'hidden'}`}>
              Last Name <span className="text-red-500">*</span>
            </label>
          </div>

          {/* Company Input */}
          <div className="relative mb-5">
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full p-2.5 border-b-2 border-gray-800 bg-transparent text-lg text-gray-800"
            />
            <label htmlFor="company" className={`absolute top-0 left-0 transition-all ${formData.company && 'hidden'}`}>
              Company
            </label>
          </div>

          {/* Title Input */}
          <div className="relative mb-5">
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full p-2.5 border-b-2 border-gray-800 bg-transparent text-lg text-gray-800"
            />
            <label htmlFor="title" className={`absolute top-0 left-0 transition-all ${formData.title && 'hidden'}`}>
              Title
            </label>
          </div>

          {/* Phone Number Input */}
          <div className="relative mb-5">
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full p-2.5 border-b-2 border-gray-800 bg-transparent text-lg text-gray-800"
            />
            <label htmlFor="phoneNumber" className={`absolute top-0 left-0 transition-all ${formData.phoneNumber && 'hidden'}`}>
              Phone Number
            </label>
            {invalidInput.phone && (
              <div className="absolute bg-red-200 text-red-700 p-1 rounded top-full left-1/2 transform -translate-x-1/2 whitespace-nowrap text-sm z-10">
                Invalid phone format.
              </div>
            )}
          </div>


          <div className="flex justify-between gap-2.5">
            <Link to="/login" className="bg-black text-white p-2.5 rounded cursor-pointer w-32 transition-all hover:bg-gray-700">Already have an account?</Link>
            <button type="submit" className="bg-olive-drab text-white p-2.5 rounded cursor-pointer w-32 transition-transform ease-in-out duration-500 hover:bg-olive-drab-light hover:scale-110">Create Account</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateAccount;
