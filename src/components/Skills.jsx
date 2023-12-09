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
    <div className='skills'>
        <div className='skills-container'>
            <div className='skills-text-container'>
                <p className='skills-title'>Experience</p>
                <p className='skills-subtext'>// Technologies I have practical experience with.</p>
            </div>
            <div>
                <div>
                    <img className='skills-logo' src={HTML} alt='HTML-logo'/>
                    <p>HTML</p>
                </div>
            </div>
            <div>
                <div>
                    <img className='skills-logo' src={CSS} alt='CSS-logo'/>
                    <p>CSS</p>
                </div>
            </div>
            <div>
                <div>
                    <img className='skills-logo' src={JS} alt='JS-logo'/>
                    <p>JavaScript</p>
                </div>
            </div>
            <div>
                <div>
                    <img className='skills-logo' src={REACT} alt='React-logo'/>
                    <p>React</p>
                </div>
            </div>
            <div>
                <div>
                    <img className='skills-logo' src={NODE} alt='NODE-logo'/>
                    <p>Node.js</p>
                </div>
            </div>
            <div>
                <div>
                    <img className='skills-logo' src={MONOGO} alt='Mongo-logo'/>
                    <p>MongoDB</p>
                </div>
            </div>
            <div>
                <div>
                    <img className='skills-logo' src={TS} alt='TS-logo'/>
                    <p>TypeScript</p>
                </div>
            </div>
            <div>
                <div>
                    <img className='skills-logo' src={JAVA} alt='Java-logo'/>
                    <p>Java</p>
                </div>
            </div>
        </div>
    
    </div>
  )
}

export default Skills