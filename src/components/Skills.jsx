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
            <div>
                <p className='skills-title'>Experience</p>
                <p>// Technologies I have practical experience with.</p>
            </div>
            <div>
                <div>
                    <img className='skills-logo' src={HTML} alt='HTML-logo'/>
                    <p>HTML</p>
                </div>
            </div>
        </div>
    
    </div>
  )
}

export default Skills