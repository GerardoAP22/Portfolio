import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faT, faTimes } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [navState, setNavState] = useState(false);

  function handleHamburgerClick() {
    setNavState(!navState);
  }

  return (
    <div className="navbar">
      <div>
        <div className="navbar-logo-text">Gerardo Arriaza Pantaleon</div>
      </div>

      <div className="navbar-options">
        <div>Home</div>
        <div>About</div>
        <div>Skills</div>
        <div>Projects</div>
        <div>Contact</div>
      </div>

      <div className={!navState ? 'hidden' : 'mobile-menu'}>
        <div className="mobile-item">Home</div>
        <div className="mobile-item">About</div>
        <div className="mobile-item">Skills</div>
        <div className="mobile-item">Projects</div>
        <div className="mobile-item">Contact</div>
      </div>

      <div onClick={handleHamburgerClick} className="hamburger-container">
        {!navState ? (<FontAwesomeIcon icon={faBars} size="2x" />) : (<FontAwesomeIcon icon={faTimes} size="2x" />)}
      </div>
    </div>
  );
}

export default Navbar;
