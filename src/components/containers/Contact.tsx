// import React, { useState } from "react";
// import { motion } from "motion";
// import EarthCanvas from "../canvas/Earth";
// import { useInView } from "react-intersection-observer";
// import { slideIn } from "../../../../../src/utils/motion";
// import axios from 'axios';

// const Contact = () => {
//     const [form, setForm] = useState({
//         name: "",
//         email: "",
//         message: "",
//     });
//     const [loading, setLoading] = useState(false);

//     // Intersection observer hooks for form and model div
//     const [formRef, formInView] = useInView({
//         triggerOnce: true,
//         threshold: 0.5 // Adjust threshold as needed
//     });
//     const [modelRef, modelInView] = useInView({
//         triggerOnce: true,
//         threshold: 0.5 // Adjust threshold as needed
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setForm({
//             ...form,
//             [name]: value,
//         });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setLoading(true);
//         try {
//             await axios.post('/api/send-email', {
//                 from_name: form.name,
//                 to_name: "Arunabh Bhattacharya",
//                 from_email: form.email,
//                 to_email: "arunabh.nd@gmail.com",
//                 message: form.message,
//             });
//             setLoading(false);
//             alert("Thank you. I will get back to you as soon as possible.");
//             setForm({
//                 name: "",
//                 email: "",
//                 message: "",
//             });
//         } catch (error) {
//             setLoading(false);
//             console.error(error);
//             alert("Ahh, something went wrong. Please try again.");
//         }
//     };

//     const formVariants = {
//         hidden: { x: -100, opacity: 0 },
//         show: { x: 0, opacity: 1, transition: { duration: 0.5 } }
//     };

//     const modelVariants = {
//         hidden: { x: 100, opacity: 0 },
//         show: { x: 0, opacity: 1, transition: { duration: 0.5 } }
//     };

//     return (
//         <div className='xl:mb-20 contain-div overflow-hidden flex justify-center gap-10 items-start '>
//             <motion.div
//                 key="form"
//                 ref={formRef}
//                 initial='hidden'
//                 animate={formInView ? 'show' : 'hidden'}
//                 variants={formVariants}
//                 className='bg-form p-20 rounded-2xl flex-none'
//                 style={{ width: '600px', margin: '0 20px' }}
//             >
//                 <p className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>Get in touch</p>

//                 <h3 className='sm:text-[18px] text-[14px] text-blue uppercase tracking-wider'>Contact</h3>
//                 <form
//                     onSubmit={handleSubmit}
//                     className='mt-12 flex flex-col gap-8'
//                 >
//                     <label className='flex flex-col'>
//                         <span className='text-white font-medium mb-4'>Your Name</span>
//                         <input
//                             type='text'
//                             name='name'
//                             value={form.name}
//                             onChange={handleChange}
//                             placeholder="didn't catch your name yet.."
//                             className='bg-primary py-4 px-6 placeholder:text-placeholder  text-white rounded-lg outline-none border-none font-medium'
//                         />
//                     </label>
//                     <label className='flex flex-col'>
//                         <span className='text-white font-medium mb-4'>Your email</span>
//                         <input
//                             type='email'
//                             name='email'
//                             value={form.email}
//                             onChange={handleChange}
//                             placeholder="Will need your email.."
//                             className='bg-primary py-4 px-6 placeholder:text-placeholder text-white rounded-lg outline-none border-none font-medium'
//                         />
//                     </label>
//                     <label className='flex flex-col'>
//                         <span className='text-white font-medium mb-4'>Your Message</span>
//                         <textarea
//                             rows={7}
//                             name='message'
//                             value={form.message}
//                             onChange={handleChange}
//                             placeholder='Type up what you want to say....'
//                             className='bg-primary py-4 px-6 placeholder:text-placeholder text-white rounded-lg outline-none border-none font-medium'
//                         />
//                     </label>
//                     <button
//                         type='submit'
//                         className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
//                     >
//                         {loading ? "Sending..." : "Send"}
//                     </button>
//                 </form>
//                 {/* ... form content */}
//                 {/* Include your form fields and buttons here */}
//             </motion.div>
//             <motion.div
//                 key="model"
//                 ref={modelRef}
//                 initial='hidden'
//                 animate={modelInView ? 'show' : 'hidden'}
//                 variants={modelVariants}
//                 className=' r-1 w-[800px] xl:flex xl:h-[900px] md:h-[550px] h-[350px]'
//             >
//                 <EarthCanvas />
//             </motion.div>
//         </div>
//     );
// };

// export default Contact;