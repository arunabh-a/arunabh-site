import React from 'react'
import Image from 'next/image'
import pfp from "../../../public/PFPPP.jpg"
import AnimatedContent from '../ui/animated-content';
const About = () => {
    
    return (
        <div className="h-screen padding-container max-container">
            <AnimatedContent
                    distance={150}
                    direction="vertical"
                    reverse={false}
                    config={{ tension: 80, friction: 20 }}
                    initialOpacity={0.2}
                    animateOpacity
                    scale={1.1}
                    threshold={0.2}
                >
            <h1 className='heading-text'>About Me</h1>
                </AnimatedContent>

            <div className='flex gap-10 lg:flex-row flex-col-reverse justify-between items-center lg:px-20'>
                
                <div className="flex flex-col gap-5 w-1/2">

                <AnimatedContent
                    distance={150}
                    direction="horizontal"
                    reverse={true}
                    config={{ tension: 80, friction: 20 }}
                    initialOpacity={0.2}
                    animateOpacity
                    scale={1.1}
                    threshold={0.2}
                >
                    <p className='font-euclid font-normal text-2xl '>
                    I'm a <strong className='text-white'> Software Developer </strong>  with years of experience in <strong className='text-white'> Frontend and Backend Development </strong> from the city of <strong className='text-white'>Delhi</strong>. From my early years, I discovered my fascination with <strong className='text-white'>computers</strong>, sparking a lifelong passion that led me to where I am today. 
                    </p>
                </AnimatedContent>
                
                <AnimatedContent
                    distance={150}
                    direction="horizontal"
                    reverse={true}
                    config={{ tension: 80, friction: 20 }}
                    initialOpacity={0.2}
                    animateOpacity
                    scale={1.1}
                    threshold={0.2}
                >       
                    <p className='font-euclid  font-normal text-2xl '>
                    Over the past few years, I've been exploring the tech world, working with tools like <strong className='text-white'>React, NodeJS, Bash Shell, Flutter, Tensorflow, Google Cloud and more</strong>....
                    </p>
                </AnimatedContent>

                <AnimatedContent
                    distance={150}
                    direction="horizontal"
                    reverse={true}
                    config={{ tension: 80, friction: 20 }}
                    initialOpacity={0.2}
                    animateOpacity
                    scale={1.1}
                    threshold={0.2}
                >
                    <p className='font-euclid  font-normal text-2xl '>
                    Off-Screen, I am an <strong className='text-white'> avid gamer </strong> and a <strong className='text-white' > car buff</strong>. Seeking to build innovative projects....
                    </p>
                </AnimatedContent>
                </div>


                <AnimatedContent
                    distance={150}
                    direction="vertical"
                    reverse={false}
                    config={{ tension: 80, friction: 20 }}
                    initialOpacity={0.2}
                    animateOpacity
                    scale={1.1}
                    threshold={0.2}
                >
                    <div>
                        <Image src={pfp} alt="about" width={500} height={500} className='pfp rounded-[10rem] p-12 aspect-square'/>
                    </div>
                </AnimatedContent>
            </div>
        </div>
    );
}

export default About