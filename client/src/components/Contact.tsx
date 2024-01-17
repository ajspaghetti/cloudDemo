import React, { useState } from 'react';
import './Contact.css';
import EmailSubmission from './EmailSubmission';
import { useSelector } from 'react-redux';
import * as icons from '../assets/icons'

const Contact = () => {
  const [showEmailForm, setShowEmailForm] = useState(false);
  const user = useSelector((state: any) => state.user.user);
  const toggleForm = () => setShowEmailForm(!showEmailForm);

  return (
    <>
      <div>
        {!showEmailForm ? (
          <div>
            <div className="contact-container">
              <a href="tel:+15713191994" className="contact-method">
                <img src={icons.phoneIcon} alt="Phone" />
                <span>+1 (571) 319-1994</span>
              </a>

              <a href="mailto:alexander@spagno.li" className="contact-method">
                <img src={icons.emailIcon} alt="Email" />
                <span>alexander@spagno.li</span>
              </a>

              <a href="https://www.instagram.com/ajspaghetti" className="contact-method" target="_blank" rel="noopener noreferrer">
                <img src={icons.instagramIcon} alt="Instagram" />
                <span>@ajspaghetti</span>
              </a>

              <a href="https://twitter.com/ajspaghetti" className="contact-method" target="_blank" rel="noopener noreferrer">
                <img src={icons.xIcon} alt="Twitter" />
                <span>@ajspaghetti</span>
              </a>

              <div className="contact-method">
                <img src={icons.discordIcon} alt="Discord" />
                <span>ajspaghetti</span>
              </div>

              <a href="https://www.linkedin.com/in/alexanderspagnoli" className="contact-method" target="_blank" rel="noopener noreferrer">
                <img src={icons.linkedinIcon} alt="LinkedIn" />
                <span>Alexander Spagnoli</span>
              </a>

              <a href="https://www.github.com/ajspaghetti" className="contact-method" target="_blank" rel="noopener noreferrer">
                <img src={icons.githubIcon} alt="GitHub" />
                <span>@ajspaghetti</span>
              </a>

              <a href="https://medium.com/@alexjspagnoli_21881" className="contact-method" target="_blank" rel="noopener noreferrer">
                <img src={icons.mediumIcon} alt="Medium" />
                <span>@alexjspagnoli_21881</span>
              </a>
            </div>
            <div><button onClick={toggleForm} className="contact-button">Reach out directly</button></div>
          </div>
        ) : (
          <div>
            <div>
              <EmailSubmission user={user} />
            </div>
            <div><button onClick={toggleForm} className="back-button">Back to socials</button></div>
          </div>
        )}
      </div>
    </>
  );
}

export default Contact;
