"use client";
import React from 'react'
import { motion } from 'framer-motion'
import { HoverBorderGradient } from '../ui/hover-button';
import { TextAnimate } from '../ui/TextAnimate';


const Hero = () => {

    return (
        <div className="lg:h-screen mb-40">
            
            <motion.div 
                className="bgContainer absolute opacity-50 lg:w-[65rem] lg:h-[65rem] w-[52rem] h-[52rem] bg-[#3B3D65]"
                initial={{ x: -900, y: -900, rotate: 30 }}
                animate={{ x: -200, y: -580 }}
                transition={{ duration: 1.0 }}
            />
            <div className="flex flex-col lg:p-20 p-10">
                <div className="flex gap-2">
                    <TextAnimate animation="blurInUp" by="character" once>
                        Hello There, I'm 
                    </TextAnimate>
                    <TextAnimate animation="blurInUp" by="character" once className="text-[#6175F8] font-semibold" delay={0.5}>
                        arunabh
                    </TextAnimate>
                </div>
                <motion.h2 
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 0.6 }}
                    transition={{ ease: "easeOut", duration: 1 }}
                    className="lg:text-2xl text-base  text-white font-fredoka font-medium opacity-75 lg:mb-10 mb-5">
                    Software Developer | DevOps | Computer Science Major
                </motion.h2>
                
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ ease: "easeOut", duration: 3 }}>
                    <HoverBorderGradient
                        containerClassName="lg:rounded-2xl rounded-lg"
                        as="button"
                        className=" bg-[#4750a5] text-white lg:text-xl text-sm flex items-center cursor-pointer"
                        onClick={() => window.location.href = 'https://arunabh.online/'}
                        >
                        <span>Contact Me</span>
                    </HoverBorderGradient>
                </motion.div>
            </div>
            
        </div>
    )
}

export default Hero
// onClick={() => window.location.href = 'https://arunabh.online/'}