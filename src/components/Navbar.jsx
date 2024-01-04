import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
        <Link to="/" className="navbar-option">Home</Link>
        <Link to="/about" className="navbar-option">About</Link>
        <Link to="/skills" className="navbar-option">Skills</Link>
        <Link to="/projects" className="navbar-option">Projects</Link>
        <Link to="/contact" className="navbar-option">Contact</Link>
      </div>

      {/* Hamburger */}
      <div className={!navState ? 'hidden' : 'mobile-menu'}>
        <Link to="/" className="mobile-item">Home</Link>
        <Link to="/about" className="mobile-item">About</Link>
        <Link to="/skills" className="mobile-item">Skills</Link>
        <Link to="/projects" className="mobile-item">Projects</Link>
        <Link to="/contact" className="mobile-item">Contact</Link>
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
