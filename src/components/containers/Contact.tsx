"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Globe } from "../ui/Globe";
import axios from 'axios';
import AnimatedContent from "../ui/animated-content";

const Contact = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);



    return (
        <div className='xl:mb-20 contain-div overflow-hidden flex justify-center gap-10 items-start '>
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

                <p className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>Get in touch</p>

                <h3 className='sm:text-[18px] text-[14px] text-blue uppercase tracking-wider'>Contact</h3>
                <form
                    
                    className='mt-12 flex flex-col gap-8'
                    >
                    <label className='flex flex-col'>
                        <span className='text-white font-medium mb-4'>Your Name</span>
                        <input
                            type='text'
                            name='name'
                            value={form.name}
                            placeholder="didn't catch your name yet.."
                            className='bg-primary py-4 px-6 placeholder:text-placeholder  text-white rounded-lg outline-none border-none font-medium'
                            />
                    </label>
                    <label className='flex flex-col'>
                        <span className='text-white font-medium mb-4'>Your email</span>
                        <input
                            type='email'
                            name='email'
                            value={form.email}
                            placeholder="Will need your email.."
                            className='bg-primary py-4 px-6 placeholder:text-placeholder text-white rounded-lg outline-none border-none font-medium'
                            />
                    </label>
                    <label className='flex flex-col'>
                        <span className='text-white font-medium mb-4'>Your Message</span>
                        <textarea
                            rows={7}
                            name='message'
                            value={form.message}
                            placeholder='Type up what you want to say....'
                            className='bg-primary py-4 px-6 placeholder:text-placeholder text-white rounded-lg outline-none border-none font-medium'
                            />
                    </label>
                    <button
                        type='submit'
                        className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
                        >
                        {loading ? "Sending..." : "Send"}
                    </button>
                </form>
                {/* ... form content */}
                {/* Include your form fields and buttons here */}
                </AnimatedContent>
                {/* <AnimatedContent
                    distance={150}
                    direction="horizontal"
                    reverse={true}
                    config={{ tension: 80, friction: 20 }}
                    initialOpacity={0.2}
                    animateOpacity
                    scale={1.1}
                    threshold={0.2}
                    >
                    </AnimatedContent> */}
                
        </div>
    );
};

export default Contact;