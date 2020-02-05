import React from 'react'
import headShot from '../../headShot.jpg'
import './About.css'

export default function About() {
    return (
        <div className='about-container'>
            {/* <div>Hey, I'm Josi Reis-West!  You might remember me from such hits as "The Landing Page," and "The Rest of this Site."</div>
            <div>All kidding aside, if you've come to this part of the site, you are hopefully interested in my work, and would like to know more.</div>
            <div>I mentioned on my home page that I have been a hobbyist for quite some time.  And it's true!  I have a passion for learning, and a passion for almost anything computer related.</div>
            <div>This includes coding at home in my spare time for fun, and even building my own computers.</div>
            <div>I'm also a veteran of the US Army, and while I was in the Army, I learned to work in teams with others to accomplish goals.</div>
            <div>I feel like this has prepared me to work on a team with coders, and others to accomplish the goal of building, maintaining, or upgrading a website.</div> */}
            <div className='about-content-container'>
                <p className='about-content'>
                    If you're here, that means you'd like to know more about who I am as a person.  Great!  Allow me to tell you a little about myself.
                    I grew up living in a myriad of different places, though I was born in Vermont.  That trend of moving around continued through adulthood, when I joined the Army at the age of 18.
                    After the Army, I settled down in Colorado, working in the satellite industry, but my passion has always been computers.  I couldn't stay away from building them, or programming on them.
                    That leads to today.  I've found a home in the DFW area of Texas, and have started pursuing my dream of being a developer for the web.
                </p>
                <p className='about-content'>
                    Personally, I've always been the nerdy person.  I love tech and computers, and have spent countless hours learning and tinkering at home in my spare time.
                    I also started out life as a Star Wars fan, but now realize that both Star Trek and Star Wars have a wonderful place in this world for fans of all types!
                    Generally speaking, I love Sci-Fi as a genre, but I'm also very entertained by Fantasy as well.  It can honestly be a hard time for me to choose one over the other, 
                    which is why I particularly love when both are incorporated together!
                </p>
                <p className='about-content'>
                    Music is another passion of mine, and you'll usually find me jamming away whether I need to concentrate, or just relax.  My tastes are rather eclectic, so the odds are, whatever of whomever your 
                    favorite artist is, I'll enjoy listening with you.
                </p>
                <p className='about-content'>
                    The odds are good if you've gotten this far that you think I'd be a good fit for your team.  Thanks!  If you'd like, you can find a link to download my resume at the bottom of the home page, or you can 
                    reach out via one of the methods on the contact page.  If you do decide to contact me, via any means, I'd love to hear from you.  Thanks for reading just a little bit about me.
                </p>
            </div>
            <div className='about-img-container'>
                <img className='about-img' src={headShot} />
            </div>
        </div>
    )
}