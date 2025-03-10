import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import EarthCanvas from "../ui/EarthCanvas";

const Contact = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);



    return (
        <div className='xl:mb-20 contain-div overflow-hidden flex justify-center gap-10 items-start '>
            <motion.div
                className='bg-[#3B3D65]/40 p-20 rounded-2xl w-[600px] flex-none '
                initial={{ opacity: 0.0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, type:"spring", ease: "linear" }}
                viewport={{ once: true }}>
                <p className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>Get in touch</p>

                <h3 className='sm:text-[18px] text-[14px] text-blue uppercase tracking-wider'>Contact</h3>
                <form
                    // onSubmit={handleSubmit}
                    className='mt-12 flex flex-col gap-8'
                >
                    <label className='flex flex-col'>
                        <span className='text-white font-medium mb-4'>Your Name</span>
                        <input
                            type='text'
                            name='name'
                            placeholder="didn't catch your name yet.."
                            className='bg-primary py-4 px-6 placeholder:text-placeholder  text-white rounded-lg outline-none border-none font-medium'
                        />
                    </label>
                    <label className='flex flex-col'>
                        <span className='text-white font-medium mb-4'>Your email</span>
                        <input
                            type='email'
                            name='email'
                            // onChange={handleChange}
                            placeholder="Will need your email.."
                            className='bg-primary py-4 px-6 placeholder:text-placeholder text-white rounded-lg outline-none border-none font-medium'
                        />
                    </label>
                    <label className='flex flex-col'>
                        <span className='text-white font-medium mb-4'>Your Message</span>
                        <textarea
                            rows={7}
                            name='message'
                            placeholder='Type up what you want to say....'
                            className='bg-primary py-4 px-6 placeholder:text-placeholder text-white rounded-lg outline-none border-none font-medium'
                        />
                    </label>
                    <button
                        type='submit'
                        className='bg-[#4750a5] py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
                    >
                        {loading ? "Sending..." : "Send"}
                    </button>
                </form>
                {/* ... form content */}
                {/* Include your form fields and buttons here */}
            </motion.div>
            <motion.div
                initial={{ opacity: 0.0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, type:"spring", ease: "linear" }}
                viewport={{ once: true }}
                className=' r-1 w-[800px] xl:flex xl:h-[900px] md:h-[550px] h-[350px]'
            >
                <EarthCanvas />
            </motion.div>
        </div>
    );
};

export default Contact;