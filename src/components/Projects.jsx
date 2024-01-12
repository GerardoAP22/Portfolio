import React from 'react'
import { NavLink } from 'react-router-dom';
import proj1 from '../assets/furnitech.png';
import proj2 from '../assets/davelle.png';
import proj3 from '../assets/gamedaygold.png';
import proj4 from '../assets/aniportal-page.png';

function Projects() {
  return (
    <div id='projects' className='projects-overall-container'>

      <div className='projects-header-container'>
        <div className='header-container'>
          <p className='projects-header'>Projects</p>
        </div>
      </div>

      <div className='project-container'>
        <div className='project-card'>
          <img src={proj1} alt='image'/>
          <h2 className='project-title'>Furnitech</h2>
          <div className='project-details'>
            <p>Project Summary</p>
            <div className='project-btns'>
              <NavLink to='example.com' className='btn'>View</NavLink>
              <NavLink to='example.com' className='btn'>Source</NavLink>
            </div>
          </div>

        </div>

        <div className='project-card'>
          <img src={proj2} alt='image'/>
          <h2 className='project-title'>Davelle</h2>
          <div className='project-details'>
            <p>Project Summary</p>
            <div className='project-btns'>
              <NavLink to='example.com' className='btn'>View</NavLink>
              <NavLink to='example.com' className='btn'>Source</NavLink>
            </div>
          </div>

        </div>

        <div className='project-card'>
          <img src={proj3} alt='image'/>
          <h2 className='project-title'>Gameday Gold</h2>
          <div className='project-details'>
            <p>Project Summary</p>
            <div className='project-btns'>
              <NavLink to='example.com' className='btn'>View</NavLink>
              <NavLink to='example.com' className='btn'>Source</NavLink>
            </div>
          </div>

        </div>

        <div className='project-card'>
          <img src={proj4} alt='image'/>
          <h2 className='project-title'>AniPortal</h2>
          <div className='project-details'>
            <p>Project Summary</p>
            <div className='project-btns'>
              <NavLink to='example.com' className='btn'>View</NavLink>
              <NavLink to='example.com' className='btn'>Source</NavLink>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Projects