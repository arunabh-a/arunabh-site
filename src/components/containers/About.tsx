import React from 'react'
import Image from 'next/image'
import pfp from "../../../public/PFPPP.jpg"
import AnimatedContent from '@/components/ui/animated-content';
import { NeonGradientCard } from '@/components/ui/neon-gradient';
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

            <div className='flex justify-between lg:flex-row flex-col-reverse  items-center lg:px-20'>
                

                <AnimatedContent
                    distance={150}
                    direction="horizontal"
                    reverse={true}
                    config={{ tension: 80, friction: 20 }}
                    initialOpacity={0.2}
                    animateOpacity
                    scale={1.1}
                    threshold={0.2}
                    className="flex flex-col gap-5 w-1/2"
                >
                    <p className='font-euclid text-white font-normal text-2xl '>
                    I'm a <strong> Software Developer </strong>  with years of experience in <strong> Frontend and Backend Development </strong> from the city of <strong>Delhi</strong>. From my early years, I discovered my fascination with <strong>computers</strong>, sparking a lifelong passion that led me to where I am today. 
                    </p>    
                    <p className='font-euclid  font-normal text-2xl '>
                    Over the past few years, I've been exploring the tech world, working with tools like <strong>React, NodeJS, Bash Shell, Flutter, Tensorflow, Google Cloud and more</strong>....
                    </p>
                    <p className='font-euclid  font-normal text-2xl '>
                    Off-Screen, I am an <strong> avid gamer </strong> and a <strong > car buff</strong>. Seeking to build innovative projects....
                    </p>
                </AnimatedContent>


                <NeonGradientCard className="w-fit h-fit">
                    <div className="w-[500px] h-[500px] flex items-center justify-center">
                        <Image 
                            src={pfp} 
                            alt="about" 
                            width={500} 
                            height={500} 
                            className='rounded-[10rem] pfp p-1 aspect-square object-cover'
                        />
                    </div>
                </NeonGradientCard>
                
            </div>
        </div>
    );
}

export default About