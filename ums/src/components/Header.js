import React from 'react';
import '../css/Header.css';
import { FaEnvelope, FaPhone } from 'react-icons/fa';


const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <a href="http://www.chowgules.ac.in/" className="logo-link">
          <img
          className='imglogo'
            src="/logo.png"
            alt="Parvatibai Chowgule College"
          />
        </a>
      </div >
      {/* <div className='coll_name'>
      <div>Parvatibai Chowgule</div>
      <div className='div_colof'>College of</div>
      <div className='div_art_sci'>Arts & Science</div>
      <div className='div_colof'>{"(Autonomus)"}</div>
      </div> */}
     
      <div className="contact">
        <div className="contact-item">
        <FaEnvelope className="icon" class="text-orange-500" />
          <span>principal@chowgules.ac.in</span>
        </div>
        <div className="contact-item">
          <FaPhone className="icon "  class="text-orange-500 "  />
          <span>0832-2722222 </span>        
        </div>
        
      </div>
      <button  className="apply-button">
        <a href="/Programs">APPLY NOW</a>
       </button>
    </header>
  );
};

export default Header;
