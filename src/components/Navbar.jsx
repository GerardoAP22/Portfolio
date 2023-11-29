import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';


function Navbar() {
  const [navState, setNavState] = useState(false);

  function handleHamburgerClick() {
    setNavState(!navState);
  }

  return (
    <div className="navbar">
      {/* Logo */}
      <div>
        <div className="navbar-logo-text">Gerardo Arriaza Pantaleon</div>
      </div>

      {/* Options */}
      <div className="navbar-options">
        <div>Home</div>
        <div>About</div>
        <div>Skills</div>
        <div>Projects</div>
        <div>Contact</div>
      </div>

      {/* Hamburger */}
      <div className={!navState ? 'hidden' : 'mobile-menu'}>
        <div className="mobile-item">Home</div>
        <div className="mobile-item">About</div>
        <div className="mobile-item">Skills</div>
        <div className="mobile-item">Projects</div>
        <div className="mobile-item">Contact</div>
      </div>

      <div onClick={handleHamburgerClick} className="hamburger-container">
        {/* {!navState ? (<FontAwesomeIcon icon={faBars} size="2x" />) : (<FontAwesomeIcon icon={faTimes} size="2x" />)} */}
        {!navState ? (<FaBars />) : (<FaTimes />)}
      </div>

      {/* Social Icons */}
      <div className='social-icons-container'>
        <ul>
          <li className='social-icons-item linkedin'>
            <a className='social-icons-link' href="/">
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='social-icons-item github'>
            <a className='social-icons-link' href="/">
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='social-icons-item email'>
            <a className='social-icons-link' href="/">
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='social-icons-item resume'>
            <a className='social-icons-link' href="/">
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>

    </div>
  );
}

export default Navbar;
