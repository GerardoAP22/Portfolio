import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';


function Navbar() {
  const [navState, setNavState] = useState(false);

  function handleHamburgerClick() {
    setNavState(!navState);
  }

  return (
    <div id='navbar' className="navbar">
      {/* Logo */}
      <div>
        <Link to="home" smooth={true} duration={500} offset={-200} className="navbar-logo-text">Gerardo Arriaza Pantaleon</Link>
      </div>

      {/* Options */}
      <div className="navbar-options">
        <Link to="home" smooth={true} duration={500} offset={-200} className="navbar-option">Home</Link>
        <Link to="about" smooth={true} duration={500} className="navbar-option">About</Link>
        <Link to="skills" smooth={true} duration={500} className="navbar-option">Skills</Link>
        <Link to="projects" smooth={true} duration={500} className="navbar-option">Projects</Link>
        <Link to="contact" smooth={true} duration={500} className="navbar-option">Contact</Link>
      </div>

      {/* Hamburger */}
      <div className={!navState ? 'hidden' : 'mobile-menu'}>
        <Link to="home" smooth={true} duration={500} offset={-200} className="mobile-item" onClick={handleHamburgerClick}>Home</Link>
        <Link to="about" smooth={true} duration={500} className="mobile-item" onClick={handleHamburgerClick}>About</Link>
        <Link to="skills" smooth={true} duration={500} offset={-80}className="mobile-item" onClick={handleHamburgerClick}>Skills</Link>
        <Link to="projects" smooth={true} duration={500} offset={-80} className="mobile-item" onClick={handleHamburgerClick}>Projects</Link>
        <Link to="contact" smooth={true} duration={500} className="mobile-item" onClick={handleHamburgerClick}>Contact</Link>
      </div>

      <div onClick={handleHamburgerClick} className="hamburger-container">
        {!navState ? (<FaBars />) : (<FaTimes />)}
      </div>

      {/* Social Icons */}
      <div className='social-icons-container'>
        <ul>
          <li className='social-icons-item linkedin'>
            <a className='social-icons-link' href="https://www.linkedin.com/in/gerardo-arriaza-pantaleon1/">
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='social-icons-item github'>
            <a className='social-icons-link' href="https://github.com/GerardoAP22">
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
