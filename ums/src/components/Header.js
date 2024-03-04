import React from 'react';
import '../css/Header.css';
// import { FaEnvelope, FaPhone } from 'react-icons/fa';


const Header = () => {
  return (
    <header className="header">
      <div>
      <a href="http://www.chowgules.ac.in/" className="logo-link">
          <img
          className='imglogo'
            src="/chowgules_new_logo.webp"
            alt="Parvatibai Chowgule College"
          />
        </a>
        </div>
    </header>
  );
};

export default Header;
