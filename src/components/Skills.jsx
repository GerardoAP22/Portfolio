import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JS from '../assets/javascript.png';
import JAVA from '../assets/java.png';
import REACT from '../assets/react.png';
import MONOGO from '../assets/mongo.png';
import NODE from '../assets/node.png';
import TS from '../assets/typescript.png';

function Skills() {
  return (
    <div id='skills' className='skills'>
        <div className='skills-container'>
            <div className='skills-text-container'>
                <p className='skills-title'>Skills</p>
                <p className='skills-subtext'>Technologies I have experience with.</p>
            </div>
            <div className='skills-logo-containers'>
                <div className='skills-divs'>
                    <img className='skills-logo' src={HTML} alt='HTML-logo'/>
                    <p className='skills-name'>HTML</p>
                </div>

                <div className='skills-divs'>
                    <img className='skills-logo' src={CSS} alt='CSS-logo'/>
                    <p className='skills-name'>CSS</p>
                </div>

                <div className='skills-divs'>
                    <img className='skills-logo' src={JS} alt='JS-logo'/>
                    <p className='skills-name'>JavaScript</p>
                </div>

                <div className='skills-divs'>
                    <img className='skills-logo' src={REACT} alt='React-logo'/>
                    <p className='skills-name'>React</p>
                </div>

                <div className='skills-divs'>
                    <img className='skills-logo' src={NODE} alt='NODE-logo'/>
                    <p className='skills-name'>Node.js</p>
                </div>

                <div className='skills-divs'>
                    <img className='skills-logo' src={MONOGO} alt='Mongo-logo'/>
                    <p className='skills-name'>MongoDB</p>
                </div>

                <div className='skills-divs'>
                    <img className='skills-logo' src={TS} alt='TS-logo'/>
                    <p className='skills-name'>TypeScript</p>
                </div>

                <div className='skills-divs'>
                    <img className='skills-logo' src={JAVA} alt='Java-logo'/>
                    <p className='skills-name'>Java</p>
                </div>
            </div>

        </div>
    
    </div>
  )
}

export default Skills