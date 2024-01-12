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
            <p>FurniTech is an application designed to facilitate the exploration and purchase of a wide array of furniture products. Users have the capability to establish an account, peruse an extensive inventory of furniture items, and conveniently add their selections to the shopping cart for either immediate or deferred acquisition. Inspiration from RH furniture's eccomerce website.</p>
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
            <p>Using a design from a UX/UI designer to develop a frontpage mobile view of the bakery Davelle. It displays menu items with a clean look. When a user adds an item to their cart, the cart logo updates. It contains a light and dark mode.</p>
            <div className='project-btns'>
              <NavLink to='https://brunch-page-6lhb42ifw-zubinsood.vercel.app/' className='btn'>View</NavLink>
              <NavLink to='https://github.com/GerardoAP22/brunch-page' className='btn'>Source</NavLink>
            </div>
          </div>

        </div>

        <div className='project-card'>
          <img src={proj3} alt='image'/>
          <h2 className='project-title'>Gameday Gold</h2>
          <div className='project-details'>
            <p>Game Day Gold is a sports betting app designed for both beginners and enthusiasts. Powered by The Odds API, it offers users a realistic experience of sports betting without any actual financial risk. The app's primary goal is to educate users about the intricacies of sports betting, making it an ideal platform for those looking to learn the ropes.</p>
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
            <p>AniPortal is a user-friendly platform featuring 50 anime shows. Logged-in users can easily add, edit, and delete reviews with text and a 1-10 rating. The site includes a page with the list of anime titles, each with a details button displaying title, synopsis, airing season, year, current status, and user reviews. Additionally, users can manage their watchlist by adding or removing shows with a simple click.</p>
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