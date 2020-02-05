import React from 'react'
import socketLogo from './socket-io.svg'
import reduxLogo from './redux-logo.svg'
import restLogo from './rest-logo.svg'
import './Skills.css'

export default function Skills() {
    return (
        <div className='skills-container'>
            <div className='skills-list'>
                <div className='skill-container'><i class="fab fa-html5"></i><span className='skill-name'>HTML 5</span></div>
                <div className='skill-container'><i class="fab fa-css3-alt"></i><span className='skill-name'>CSS 3</span></div>
                <div className='skill-container'><i class="fab fa-js-square"></i><span className='skill-name'>Javascript</span></div>
                <div className='skill-container'><i class="fab fa-node-js"></i><span className='skill-name'>Node.js</span></div>
                <div className='skill-container'><i class="fab fa-react"></i><span className='skill-name'>React.js</span></div>
                <div className='skill-container'><i class="fab fa-git"></i><span className='skill-name'>Git</span></div>
                <div className='skill-container'><i class="fab fa-github"></i><span className='skill-name'>Github</span></div>
                <div className='skill-container'><i class="fab fa-linux"></i><span className='skill-name'>Linux</span></div>
                <div className='skill-container'><i class="fab fa-npm"></i><span className='skill-name'>NPM</span></div>
                <div className='skill-container'><i class="fab fa-aws"></i><span className='skill-name'>AWS S3</span></div>
                <div className='skill-container'><i class="fab fa-python"></i><span className='skill-name'>Python</span></div>
                {/* <div className='skill-container'><i /><span className='skill-name'></span></div> */}
                <div className='skill-container'><img className='fab' src={socketLogo} alt='Socket.io' /><span className='skill-name'>Socket.io</span></div>
                <div className='skill-container'><img className='fab' src={reduxLogo} alt='Redux' /><span className='skill-name'>Redux</span></div>
                <div className='skill-container'><img className='fab' src={restLogo} alt='Rest' /><span className='skill-name'>REST</span></div>
            </div>
            <div className='footnote'>
                <span>*Many more to come as I continue to find and add badges!</span>
            </div>
        </div>
    )
}