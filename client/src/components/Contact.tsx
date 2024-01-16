import React from 'react';
import './Contact.css';
import EmailSubmission from './EmailSubmission'

const Contact = () => {
  return (
    <>
      <div>
        <div className="contact-container">
          <a href="tel:+15713191994" className="contact-method">
            <img src="/path-to-your-phone-icon.svg" alt="Phone" />
            <span>+1 (571) 319-1994</span>
          </a>

          <a href="mailto:alexander@spagno.li" className="contact-method">
            <img src="/path-to-your-email-icon.svg" alt="Email" />
            <span>alexander@spagno.li</span>
          </a>

          <a href="https://www.instagram.com/ajspaghetti" className="contact-method" target="_blank" rel="noopener noreferrer">
            <img src="/path-to-your-instagram-icon.svg" alt="Instagram" />
            <span>@ajspaghetti</span>
          </a>

          <a href="https://twitter.com/ajspaghetti" className="contact-method" target="_blank" rel="noopener noreferrer">
            <img src="/path-to-your-twitter-icon.svg" alt="Twitter" />
            <span>@ajspaghetti</span>
          </a>

          {/* Assuming Discord doesn't provide a direct URL, this might be a simple text block or a prompt to copy the handle */}
          <div className="contact-method">
            <img src="/path-to-your-discord-icon.svg" alt="Discord" />
            <span>ajspaghetti</span>
          </div>

          <a href="https://www.linkedin.com/in/alexanderspagnoli" className="contact-method" target="_blank" rel="noopener noreferrer">
            <img src="/path-to-your-linkedin-icon.svg" alt="LinkedIn" />
            <span>Alexander Spagnoli</span>
          </a>

          <a href="https://www.github.com/ajspaghetti" className="contact-method" target="_blank" rel="noopener noreferrer">
            <img src="/path-to-your-github-icon.svg" alt="GitHub" />
            <span>@ajspaghetti</span>
          </a>

          <a href="https://medium.com/@alexjspagnoli_21881" className="contact-method" target="_blank" rel="noopener noreferrer">
            <img src="/path-to-your-medium-icon.svg" alt="Medium" />
            <span>@alexjspagnoli_21881</span>
          </a>
        </div>
        <div>
          <EmailSubmission />
        </div>
      </div>
    </>
  );
}

export default Contact;
