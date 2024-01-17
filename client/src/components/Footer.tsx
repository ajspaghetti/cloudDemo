import React from 'react';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear(); // Get current year

  return (
    <footer>
      <p>© {year} Spagno.li. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
