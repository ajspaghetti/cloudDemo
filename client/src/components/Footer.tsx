import React from 'react';
import './Footer.css'; // Ensure you have a Footer.css file for styling

const Footer = () => {
  const year = new Date().getFullYear(); // Get current year

  return (
    <footer>
      <p>© {year} Spagno.li Consulting. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
