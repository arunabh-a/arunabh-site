import React from 'react'
import './styles/Hero.css'
import { motion } from 'framer-motion'
import TypewriterEffect from '../components/ui/typewriter'

const Hero = () => {

    const words = [
        {
            text: "Hello",
        },
        {
            text: "There,",
        },
        {
            text: "I'm",
        },
        {
            text: "arunabh",
            className: "intro-title",
        },
    ];


    return (
        <div className="hero relative">
            <motion.div 
            className="bgSquircle"
            initial={{ x: -900, y: -900, rotate: 20 }}
            animate={{ x: -220, y: -520 }}
            transition={{ duration: 1.0 }}/>

            <div className="absolute top-20 left-20">
            
                <div className="relative top-20">
                    <TypewriterEffect words={words} />
                    

                    <motion.h2 
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 0.6 }}
                    transition={{ ease: "easeOut", duration: 1}}
                    className="text-2xl text-white intro-subtitle opacity-75 mb-8">Software Developer | DevOps | Computer Science Major</motion.h2>
                    {/* hover:scale-110 transform transition duration-3 */}

                    <motion.button
                    onClick={() => window.location.href = 'https://arunabh.online/'}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ ease: "easeOut", duration: 3 }}
                    className=" buttContact  ">See my Profiles</motion.button>

                </div>
            </div>
        </div>
    )
}
export default Hero