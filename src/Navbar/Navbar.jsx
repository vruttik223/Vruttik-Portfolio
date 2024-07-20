import React, { useState, useEffect } from 'react';
import './Navbar.css';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles

function Navbar() {
  const [respnav, setRespnav] = useState(false);

 
  return (
    <div className='nav'>
      <div className="logo">
        <h1>Vruttik</h1>
      </div>
      <div>
        <ul className={respnav ? "menuopen menu" : 'menu'}>
          <li ><a href="#about">About</a></li>
          <li ><a href="#skills">Skills</a></li>
          <li ><a href="#projects">Projects</a></li>
          <li ><a href="#education">Education</a></li>
          <li  ><a href="#contact">Contact</a></li>
          <li ><a className="github" href="https://github.com/vruttik223">Github Profile</a></li>
        </ul>
      </div>
      <div onClick={() => setRespnav(!respnav)} className="responsive">
        {respnav ? 
          <i className="bi bi-x"></i> : 
          <i className="bi bi-list"></i> 
        }
      </div>
    </div>
  );
}

export default Navbar;
