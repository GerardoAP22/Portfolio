import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

function Home() {
  return (
    <div className='home-comp'>

        <div className='home-container'>
            <p className='home-hello-txt'>Hello, my name is</p>
            <h1 className='home-name-txt'>Gerardo Arriaza Pantaleon</h1>
            <h2 className='home-role-txt'>I'm a Full Stack Developer.</h2>
            <p>I am a full-stack developer who is leaning a bit more on 
                front-end development. I'm focused on building responsive 
            full-stack web applications.</p>
            <div className='home-button-container'>
                <button>View Projects <HiArrowNarrowRight /></button>
            </div>

        </div>

    </div>
  )
}

export default Home