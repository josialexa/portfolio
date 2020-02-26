import React, { Component } from 'react'
import './Projects.css'

export default class Projects extends Component {
    render() {
        return (
            <div className='projects-container'>
                <div className='project' id='hero-registry'>
                    <div className='project-details'>
                        <p>The Hero Registry is a non-hosted 'No DB' project, based on the hit anime 'One Punch Man'
                            This project allows users to track hero statistics and view updated rankings based on events.
                        </p>
                        <p><span className='bold'>Technologies: </span>Node, React, Express, Axios</p>
                        <p><span className='bold'>Github: </span><a className='projects-link' rel='noopener noreferrer' target='_blank' href='https://github.com/josialexa/hero-registry'>hero-registry</a></p>
                    </div>
                </div>
                <div className='project' id='anonet'>
                    <div className='project-details'>
                        <p>
                            Anonet is a hosted project, and relies on Socket.io to provide real time chat services to users on the site.
                            Users can create and join rooms, and chat with other members of those rooms.
                        </p>
                        <p><span className='bold'>Technologies: </span>Node, React, Redux, Express, Axios, Socket.io, Bcrypt, Massive, PostGres</p>
                        <p><span className='bold'>Github: </span><a className='projects-link' rel='noopener noreferrer' target='_blank' href='https://github.com/josialexa/anonet'>anonet</a></p>
                        <p><span className='bold'>Site link: </span><a className='projects-link' rel='noopener noreferrer' target='_blank' href='https://anonet.xyz'>anonet.xyz</a></p>
                    </div>
                </div>
                <div className='project' id='digital-couch'>
                    <div className='project-details'>
                        <p>
                            Digital Couch is a hosted project that enables mental healthcare providers (or just 'providers') to connect with their clients online.
                            It provides a suite of web based tools based on commonly used therapy tools, handouts, or worksheets for a client to work with, and allows a provider to see the progress made with these tools.
                            It also gives tools to providers, like a client notes tool to act like a digital notepad, and the ability to access insurance information via a client dashboard.
                        </p>
                        <p><span className='bold'>Technologies: </span>Node, React, Redux, Express, Axios, React-Toastify, Cloudinary, Bcrypt, Massive, PostGres, Sass</p>
                        <p><span className='bold'>Github: </span><a className='projects-link' rel='noopener noreferrer' target='_blank' href='https://github.com/team-digital-couch/digital-couch.git'>digital-couch</a></p>
                        <p><span className='bold'>Site Link: </span><a className='projects-link' rel='noopener noreferrer' target='_blank' href='https://digitalcouch.xyz'>digitalcouch.xyz</a></p>
                    </div>
                </div>
            </div>
        )
    }
}
