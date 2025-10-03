"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import BlurText from "../ui/BlurText";
import { InteractiveHoverButton } from "../ui/HoverButton";
import Scroller from "../ui/Scroller";
import { NAVIGATION_LINKS } from "@/lib/constants";
import Link from "next/link";

const Hero = () => {
    
// Add global keyboard listener
    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            const num = parseInt(e.key);
            if (num >= 1 && num <= NAVIGATION_LINKS.length) {
                const targetLink = NAVIGATION_LINKS[num - 1];
                if (targetLink) {
                    window.location.href = targetLink.href;
                }
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, []);
    return (
        <div className="lg:h-screen relative">
            <motion.div
                className="bgContainer absolute hidden md:block opacity-50 lg:w-[65rem] lg:h-[65rem] w-[52rem] h-[52rem] bg-[#3B3D65]"
                initial={{ x: -900, y: -900, rotate: 30 }}
                animate={{ x: -200, y: -750 }}
                transition={{ duration: 1.0 }}
            />
            <div className="flex flex-col lg:p-20 p-10">
                <BlurText
                    text="Hello There, I'm "
                    highlightText="arunabh"
                    delay={100}
                    animateBy="words"
                    direction="top"
                    className="text-2xl"
                />
                <motion.h2
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 0.6 }}
                    transition={{ ease: "easeOut", duration: 1 }}
                    className="lg:text-2xl text-base  text-white font-fredoka font-medium opacity-75 lg:mb-10 mb-5"
                >
                    Building Cool Stuff that lives on the Internet
                </motion.h2>

                {/* <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ ease: "easeOut", duration: 3 }}
                        >
                        
                        <InteractiveHoverButton
                        onClick={() => window.location.href = 'https://arunabh.online/'}>Contact Me</InteractiveHoverButton>
                    </motion.div> */}
            </div>

        </div>
    );
};

export default Hero;
// onClick={() => window.location.href = 'https://arunabh.online/'}
