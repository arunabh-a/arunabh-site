import React from 'react'
import './styles/About.css'
// import about from '../../../PFPPP.jpg'
import FadeInWhenVisible from '../Fade-in-visible'
import Image from 'next/image'

const About = () => {
    
    return (
        <div className="about">
            <FadeInWhenVisible>
                <h1 className='text-6xl title relative top-10 left-20 mb-20'>About Me</h1>
            </FadeInWhenVisible>

            <div className='about-content'>
                <p className=' about-para text-text'>
                
                <FadeInWhenVisible>
                I'm a <strong className='text-white'> Software Developer </strong>  with years of experience in <strong className='text-white'> Frontend and Backend Development </strong> from the city of <strong className='text-white'>Delhi</strong>. From my early years, I discovered my fascination with <strong className='text-white'>computers</strong>, sparking a lifelong passion that led me to where I am today. 
                </FadeInWhenVisible>

                <br />
                
                <FadeInWhenVisible>
                Over the past few years, I've been exploring the tech world, working with tools like <strong className='text-white'>React, NodeJS, Bash Shell, Flutter, Tensorflow, Google Cloud and more</strong>.... <br /><br />
                </FadeInWhenVisible>

                <FadeInWhenVisible>
                Off-Screen, I am an <strong className='text-white'> avid gamer </strong> and a <strong className='text-white' > car buff</strong>. Seeking to build innovative projects....
                </FadeInWhenVisible>

                </p>

                <div className='about-img'>
                    <FadeInWhenVisible>
                        {/* <img src={about} alt="about" /> */}
                        <Image src='../../../public/public/PFPPP.jpg' alt="about" width={500} height={500} />
                    </FadeInWhenVisible>
                </div>
            </div>
        </div>
    );
}

export default About