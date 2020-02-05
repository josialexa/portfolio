import React from 'react'
import resume from '../../JReisWest_Resume_Dev.pdf'
import './Home.css'

export default function Home() {
    return (
        <div className='home-container'>
            <div className='home-welcome'>
                <h1 className='welcome-h1'>Hello.</h1>
                <span className='welcome-span'>It's good to see you</span>
            </div>
            <div className='home-section one'>
                <div className='home-sub-section'>
                    <p>
                        The days of the original Macintosh have long since gone by, but our need for computers as a society has only risen.
                        With the ubiquity of the modern internet, the need for coders that can create beautiful applications on the web has also dramatically risen.
                    </p>
                </div>
            </div>
            <div className='home-section two'>
                <div className='home-sub-section'>
                    <p>
                        I'm Josi Reis-West, and I'm a full stack web developer.  I have 15 years of experience, starting out as a hobbyist in 2005.
                        I taught myself the basics, and so much more about how to make a whole, functioning web site, and have since rounded out my education by graduating from DevMountain.
                    </p>
                </div>
            </div>
            <div className='home-section three'>
                <div className='home-sub-section'>
                    <p>
                        Please feel free to view the rest of my site.  In it, you'll find more details about my skills and talents.  You'll also read some about my work experience and education.
                        If you don't have time to browse the web, but you are interested, please download my resume <a className='home-resume' href={resume} download>here</a>.  I'm really looking forward to hearing from you soon!
                    </p>
                </div>
            </div>
        </div>
    )
}