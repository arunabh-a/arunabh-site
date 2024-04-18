import React from 'react'
import './styles/Hero.css'
import { motion } from 'framer-motion'
import { Element } from 'react-scroll'
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
            className: "font-extrabold intro-title",
        },
    ];


    return (
        <Element name = "home">
        <div className="hero relative">
            <motion.div 
            className="bgSquircle"
            initial={{ x: -900, y: -900, rotate: 13, opacity: 0.4 }}
            animate={{ x: -220, y: -450 }}
            transition={{ duration: 2.5 }}/>

            <div className="absolute top-20 left-20">
            
                <div className="relative top-20">
                    <TypewriterEffect words={words} />
                    

                    <motion.h2 
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 0.6 }}
                    transition={{ ease: "easeOut", duration: 1 }}
                    className="text-2xl text-white intro-subtitle opacity-75 mb-8">Software Dev | CS Major | currently sleeping...</motion.h2>
                    {/* hover:scale-110 transform transition duration-3 */}
                    <motion.button
                    onClick={() => window.location.href = 'https://arunabh.online/'}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ ease: "easeOut", duration: 3 }}
                    className=" text-black text-l buttContact mt-0 rounded-lg ">See my Profiles</motion.button>

                </div>
            </div>
        </div>
        </Element>
    )
}
export default Hero