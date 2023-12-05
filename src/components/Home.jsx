import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import headshot from '../assets/Photo.jpeg';


function Home() {
  return (
    <div className='home-comp'>
        <div className='home-image-container'>
        <div className='home-image'>
          <div className='image'>
            <img src={headshot} alt="Headshot" />
          </div>
        </div>
      </div>

        <div className='home-container'>
            <p className='home-hello-txt'>Hello, my name is</p>
            <h1 className='home-name-txt'>Gerardo Arriaza Pantaleon</h1>
            <h2 className='home-role-txt'>I'm a Full Stack Developer.</h2>
            <p className='home-desc-txt'>I am a full-stack developer who is leaning a bit more on 
                front-end development. I'm focused on building responsive 
            full-stack web applications.</p>

            <div className='home-button-container'>
                <button className='home-button'>View Projects 
                        <HiArrowNarrowRight />
                </button>
            </div>

        </div>

    </div>
  )
}

export default Home