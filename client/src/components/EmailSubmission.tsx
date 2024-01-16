





import React, { useState, ChangeEvent, FormEvent, FocusEvent } from "react";
import "./EmailSubmission.css";

interface FormDataType {
  firstName: string;
  lastName: string;
  company: string;
  title: string;
  email: string;
  phone: string;
  message: string;
}

interface InvalidInputType {
  email: boolean;
  phone: boolean;
}

const EmailSubmission = () => {
  const [formData, setFormData] = useState<FormDataType>({
    firstName: "",
    lastName: "",
    company: "",
    title: "",
    email: "",
    phone: "",
    message: "",
  });

  const [invalidInput, setInvalidInput] = useState<InvalidInputType>({
    email: false,
    phone: false,
  });

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone: string) => /^\d{10}$/.test(phone);

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

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "email" && value && !validateEmail(value)) {
      setInvalidInput((prevState) => ({ ...prevState, email: true }));
    } else if (name === "phone" && value && !validatePhone(value)) {
      setInvalidInput((prevState) => ({ ...prevState, phone: true }));
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (invalidInput.email || invalidInput.phone) {
      console.log("Form has invalid inputs.");
      return;
    }
    console.log(formData);
    // SAVE SUBMISSION LOGIC HERE
  };

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

  const labelClass = (name: keyof FormDataType) =>
    formData[name] ? "label-hidden" : "";

  return (
    <>
      <div className="es-header">
        <h2>Contact me directly</h2>
      </div>
      <div className="textfield-container">
        <form
          className="textfield-form"
          onSubmit={handleSubmit}
          onReset={handleReset}
        >
          <div className="input-container">
            <label htmlFor="firstName" className={labelClass("firstName")}>
              First Name <span className="required-asterisk">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="lastName" className={labelClass("lastName")}>
              Last Name <span className="required-asterisk">*</span>
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="company" className={labelClass("company")}>
              Company
            </label>
            <input
              type="text"
              id="company"
              name="company"
              onChange={handleChange}
            />
          </div>
          <div className="input-container">
            <label htmlFor="title" className={labelClass("title")}>
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              onChange={handleChange}
            />
          </div>
          <div className="input-container">
            <label htmlFor="email" className={labelClass("email")}>
              Email Address <span className="required-asterisk">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            {invalidInput.email && (
              <div className="validation-message">Incorrect formatting.</div>
            )}
          </div>
          <div className="input-container">
            <label htmlFor="phone" className={labelClass("phone")}>
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {invalidInput.phone && (
              <div className="validation-message">Incorrect formatting.</div>
            )}
          </div>
          <div className="input-text-area">
            <label htmlFor="message" className={labelClass("message")}>
              Why are you reaching out?{" "}
              <span className="required-asterisk">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              onChange={handleChange}
              required
            />
          </div>
          <div className="buttons-container">
            <button type="reset" className="reset-button">
              Reset
            </button>
            <button type="submit" className="submit-button">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EmailSubmission;
