import React from 'react';
import headshot from '../assets/Photo.jpeg';

function About() {
  return (
    <div className='about-container'>
      <div className='about-image-container'>
        <div className='about-image'>
          <div className='image'>
            <img src={headshot} alt="Headshot" />
          </div>
        </div>
      </div>
      <div className='about-text-container'>
        <p>Hello, my name is Gerardo Arriaza Pantaleon. Nice to meet you.</p>
        <p>I am a Software Engineer located in the Bronx, New York. I am passionate about building excellent software that improves the lives and experiences of users. I am expanding my skills and look forward to using my abilities in helping achieve excellence by building a product that benefits users.</p>
      </div>
    </div>
  );
}

export default About;
