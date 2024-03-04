import React from "react";
import "../css/SuperNav.css";
import { FaEnvelope, FaPhone } from 'react-icons/fa';



const SuperNav = () => {
  return (
    <div className="super-nav ">
      <div className="info-col">
      <a>
        <h2>
          <a href="/email"><FaEnvelope className="icon h-5 w-5" /></a>
          

        </h2>
      </a>
      <a>
        <h2>
          <a href="/contacts"><FaPhone className="icon h-5 w-5" /></a>
          

        </h2>
      </a>
      </div>
      <div className="Addmisson">
          <a className="Addmisson" href="/Programs">APPLY NOW</a>   
      </div>     

    </div>
  );
};

export default SuperNav;
