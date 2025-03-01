import React from 'react'
import Image from 'next/image'
import pfp from "../../../public/PFPPP.jpg"
import AnimatedContent from '@/components/ui/animated-content';
import { NeonGradientCard } from '@/components/ui/neon-gradient';
const About = () => {
    
    return (
        <div className="px-9  max-container md:padding-container">
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

            <div className='flex lg:justify-between justify-center items-center  lg:space-x-32 lg:flex-row flex-col-reverse lg:px-20'>
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
                    <p className=' md:w-full font-euclid text-white font-normal md:text-2xl text-xl '>
                    I'm a <strong> Software Developer </strong>  with years of experience in <strong> Frontend and Backend Development </strong> from the city of <strong>Delhi</strong>. From my early years, I discovered my fascination with <strong>computers</strong>, sparking a lifelong passion that led me to where I am today. 
                    <br />
                    Over the past few years, I've been exploring the tech world, working with tools like <strong>React, NodeJS, Bash Shell, Flutter, Tensorflow, Google Cloud and more</strong>....
                    <br />
                    Off-Screen, I am an <strong> avid gamer </strong> and a <strong > car buff</strong>. Seeking to build innovative projects....
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

                <NeonGradientCard className="w-fit h-fit m-10">
                    <div className="lg:w-[500px] lg:h-[500px] md:w-[400px] md:h-[400px] w-[300px] h-[300px] flex items-center justify-center">
                        <Image 
                            src={pfp} 
                            alt="about" 
                            width={500} 
                            height={500} 
                            className='rounded-[10rem] pfp p-1 aspect-square object-cover'
                        />
                    </div>
                </NeonGradientCard>
                </AnimatedContent>
            </div>
        </div>
    );
}

export default About