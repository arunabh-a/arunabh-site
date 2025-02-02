import React from 'react'
// import FadeInWhenVisible from '../Fade-in-visible'
import Image from 'next/image'
import pfp from "../../../public/PFPPP.jpg"

const About = () => {
    
    return (
        <div className="h-screen padding-container max-container">
            <h1 className='text-6xl w-full mb-20 font-fredoka font-medium'>About Me</h1>

            <div className='flex gap-10 flex-row justify-between items-center px-2'>
                <p className='font-euclid w-1/2 font-normal text-2xl '>
                
                {/* <FadeInWhenVisible> */}
                I'm a <strong className='text-white'> Software Developer </strong>  with years of experience in <strong className='text-white'> Frontend and Backend Development </strong> from the city of <strong className='text-white'>Delhi</strong>. From my early years, I discovered my fascination with <strong className='text-white'>computers</strong>, sparking a lifelong passion that led me to where I am today. 
                {/* </FadeInWhenVisible> */}

                <br />
                
                {/* <FadeInWhenVisible> */}
                Over the past few years, I've been exploring the tech world, working with tools like <strong className='text-white'>React, NodeJS, Bash Shell, Flutter, Tensorflow, Google Cloud and more</strong>.... <br /><br />
                {/* </FadeInWhenVisible> */}

                {/* <FadeInWhenVisible> */}
                Off-Screen, I am an <strong className='text-white'> avid gamer </strong> and a <strong className='text-white' > car buff</strong>. Seeking to build innovative projects....
                {/* </FadeInWhenVisible> */}

                </p>

                <div className=''>
                    <Image src={pfp} alt="about" width={500} height={500} className='pfp p-12 aspect-square'/>
                </div>
            </div>
        </div>
    );
}

export default About