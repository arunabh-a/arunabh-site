import React from 'react'

const Hero = () => {
    return (
        <div className="bg-cover bg-center h-screen flex items-center justify-center">
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-100">
                <h1 className="text-5xl font-bold text-red">Hello, I'm Arunabh</h1>
                <button className="bg-bgDiv text-white font-bold py-2 px-6 rounded-full">Contact Me</button>
            </div>
        </div>
    )
}
// style={{ backgroundImage: `url('/path/to/background-image.jpg')` }}
export default Hero