import React from 'react'
import './styles/Hero.css'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'

const Hero = () => {
    return (
        <div className="hero relative">
            <motion.div 
            className="bgSquircle"
            initial={{ x: -900, y: -900, rotate: 13, opacity: 0.4 }}
            animate={{ x: -220, y: -450 }}
            transition={{ duration: 2.5 }}/>

            <div className="absolute top-20 left-20">
            
                <div className="relative top-20">
                    
                    <h1 className="text-5xl font-bold intro-title mb-1 ">
                        <TypeAnimation
                            sequence={['Hello There, I\'m']}
                            speed={40}
                            cursor={false}
                            repeat={1} />
                        <TypeAnimation 
                            sequence={[1050,' arunabh']}
                            speed={40}
                            cursorColor='white'
                            className='font-extrabold text-blue'/>
                    </h1>

                    <motion.h2 
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 0.6 }}
                    transition={{ ease: "easeOut", duration: 1 }}
                    className="text-2xl text-white opacity-75 mb-8">Software Dev | CS Major | currently sleeping...</motion.h2>

                    <motion.button 
                    onClick={() => window.location.href = 'https://arunabh.online/'}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ ease: "easeOut", duration: 2 }}
                    className=" bg-button text-black text-xl buttContact px-3.5 py-2 rounded-lg hover:scale-110 transform transition duration-3">Contact Me</motion.button>
                </div>
            </div>
        </div>
    )
}
export default Hero