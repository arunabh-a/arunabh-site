import React from 'react'
import './styles/About.css'
import about from '/public/me.jpg' 

const About = () => {
    return (
        <div className="about relative h-screen">
                <h1 className='text-6xl title relative top-10   left-20 mb-20'>About Me</h1>
                    <p className=' about-para text-text'>Hey there! I'm a <strong className='text-white'>Computer Science </strong> undergrad born and raised in <strong className='text-white'>Delhi</strong>, with a love for all things <strong className='text-white'>tech</strong>. 
                    From my early years, I discovered my fascination with <strong className='text-white'>computers</strong>, sparking a lifelong passion that led me to where I am today. <br />
                    <br />

                    Over the past few years, I've been exploring the tech world, dabbling in stuff like <strong className='text-white'>React JS, Node, Firebase, Flutter, Tensorflow and more</strong>.... <br /><br />
                    During my time in LPU as a team member of <strong className='text-white'>Google Developer Student Club</strong> at LPU, I have had the chance to learn and grow alongside amazing teams while completing my Diploma <br /> <br />
                    Off-Screen, I have a keen interest in UI designs. I am an avid gamer and a car buff....
                    </p>
                <div className='about-img'>
                    <img src={about} alt="about" />
                </div>
        </div>
    );
}

export default About