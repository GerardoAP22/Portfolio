import React from 'react'
import { FaHome, FaMailBulk, FaPhone, FaGithub, FaLinkedin } from 'react-icons/fa'

function Footer() {
  return (
    <div id='footer' className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <h4>
                        <FaHome size={20} style={{color:"#fff", marginRight: "2rem"}}/>
                        <div>
                            <p>1295 Spofford Ave. Apt 8A</p>
                            <p>Bronx, New York 10474</p>
                        </div>
                    </h4>
                </div>
                <div className='phone'>
                    <h4>
                        <FaPhone size={20} style={{color:"#fff", marginRight: "2rem"}}/>
                        347-302-9755
                    </h4>
                </div>
                <div className='email'>
                    <h4>
                        <FaMailBulk size={20} style={{color:"#fff", marginRight: "2rem"}}/>
                        garriazapantaleon@gmail.com
                    </h4>
                </div>
                
            </div>
            <div className='right'>
                <h4>About Me</h4>
                <p>Hello, I am Gerardo Arriaza Pantaleon. Thank you for going through my portfolio!!</p>
                <div className='socials'>
                <a href="https://github.com/GerardoAP22" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={40} style={{color:"#fff", marginRight: "2rem"}} />
                </a>
                <a href="https://www.linkedin.com/in/gerardo-arriaza-pantaleon1/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={40} style={{color:"#fff", marginRight: "2rem"}}/>
                </a>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Footer