import React from 'react'

const Hero = () => {
    return (
        <div className="bg-cover border-dashed flex items-center justify-center">
            <div className="absolute top-20 left-20 ">
                <h1 className="text-5xl font-bold text-red mb-1 ">
                    Hello There, I'm<span className='font-extrabold text-blue'> arunabh</span></h1>
                <h2 className="text-2xl text-white opacity-79 mb-8">Web Developer | CS Major | currently sleeping...</h2>
                <button className=" bg-button text-black text-xl font-bold py-1.5 px-3 rounded-lg hover:scale-110 transform transition duration-3">Contact Me</button>
            </div>
        </div>
    )
}
// style={{ backgroundImage: `url('/path/to/background-image.jpg')` }}
export default Hero