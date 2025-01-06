import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {currentYear} Chidiebele Benjamin Amechi</p>
        <div className="social-links">
          <a href="https://github.com/fzSwift" target="_blank" rel="noopener noreferrer">GitHub</a>
          {/* Add other social media links here */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;