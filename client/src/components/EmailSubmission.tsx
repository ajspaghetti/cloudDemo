import React, { useState, useEffect, ChangeEvent, FormEvent, FocusEvent } from "react";
import axios from 'axios'; // Import axios for making the POST request
import "./EmailSubmission.css";

// Define the structure of the user prop
interface UserProps {
  user: {
    first_name?: string;
    last_name?: string;
    email?: string;
    phone?: string;
    // Add other user properties if needed
  };
}

// Structure of the form data
interface FormDataType {
  firstName: string;
  lastName: string;
  company: string;
  title: string;
  email: string;
  phone: string;
  message: string;
}

// Structure for tracking invalid inputs
interface InvalidInputType {
  email: boolean;
  phone: boolean;
}

const EmailSubmission = ({ user }: UserProps) => {
  // State for form data
  const [formData, setFormData] = useState<FormDataType>({
    firstName: "",
    lastName: "",
    company: "",
    title: "",
    email: "",
    phone: "",
    message: "",
  });

  // State for invalid input tracking
  const [invalidInput, setInvalidInput] = useState<InvalidInputType>({
    email: false,
    phone: false,
  });

  // Email and phone validation functions
  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone: string) => /^\d{10}$/.test(phone);

  // Update form data when the user prop changes
  useEffect(() => {
    if (user) {
      setFormData(formData => ({
        ...formData,
        firstName: user.first_name || "",
        lastName: user.last_name || "",
        email: user.email || "",
        phone: user.phone || "",
      }));
    }
  }, [user]);

  // Handle changes in form inputs
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target as HTMLInputElement | HTMLTextAreaElement;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    if (name === "email" || name === "phone") {
      setInvalidInput((prevState) => ({
        ...prevState,
        [name]: false,
      }));
    }
  };

  // Handle focus loss on email and phone inputs
  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "email" && value && !validateEmail(value)) {
      setInvalidInput((prevState) => ({ ...prevState, email: true }));
    } else if (name === "phone" && value && !validatePhone(value)) {
      setInvalidInput((prevState) => ({ ...prevState, phone: true }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (invalidInput.email || invalidInput.phone) {
      console.log("Form has invalid inputs.");
      return;
    }
    try {
      const response = await axios.post('YOUR_API_ENDPOINT', formData);
      console.log('Form submission successful:', response.data);
      // Additional logic for handling successful submission
    } catch (error) {
      console.error('Form submission error:', error);
      // Additional logic for handling submission error
    }
  };

  // Handle form reset
  const handleReset = () => {
    setFormData({
      firstName: "",
      lastName: "",
      company: "",
      title: "",
      email: "",
      phone: "",
      message: "",
    });
    setInvalidInput({ email: false, phone: false });
  };

  // Function to determine if a label should be hidden
  const labelClass = (name: keyof FormDataType) =>
    formData[name] ? "label-hidden" : "";

  return (
    <>
      <div className="es-header">
        <h2>Contact me directly</h2>
      </div>
      <div className="textfield-container">
        <form className="textfield-form" onSubmit={handleSubmit} onReset={handleReset}>
          {/* Form inputs and labels */}

          {/* First Name Input */}
          <div className="input-container">
            <label htmlFor="firstName" className={labelClass("firstName")}>
              First Name <span className="required-asterisk">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          {/* Last Name Input */}
          <div className="input-container">
            <label htmlFor="lastName" className={labelClass("lastName")}>
              Last Name <span className="required-asterisk">*</span>
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email Address Input */}
          <div className="input-container">
            <label htmlFor="email" className={labelClass("email")}>
              Email Address <span className="required-asterisk">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            {invalidInput.email && (
              <div className="validation-message">Incorrect formatting.</div>
            )}
          </div>

          {/* Phone Number Input */}
          <div className="input-container">
            <label htmlFor="phone" className={labelClass("phone")}>
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {invalidInput.phone && (
              <div className="validation-message">Incorrect formatting.</div>
            )}
          </div>

          {/* Company Input */}
          <div className="input-container">
            <label htmlFor="company" className={labelClass("company")}>
              Company
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
            />
          </div>

          {/* Title Input */}
          <div className="input-container">
            <label htmlFor="title" className={labelClass("title")}>
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </div>



          {/* Message Text Area */}
          <div className="input-text-area">
            <label htmlFor="message" className={labelClass("message")}>
              Why are you reaching out?{" "}
              <span className="required-asterisk">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          {/* Form Buttons */}
          <div className="buttons-container">
            <button type="reset" className="reset-button">Reset</button>
            <button type="submit" className="submit-button">Submit</button>
          </div>
        </form>
      </div>
    </>

  );
};

export default EmailSubmission;
