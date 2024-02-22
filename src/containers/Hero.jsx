import React from 'react'
import { Menu } from '../components/menu/Menu'

const Hero = () => {
  return (
    <div className="bg-cover bg-center h-screen flex items-center justify-center">
    <Menu />

        <h1 className="text-5xl font-bold text-white">Hello, I'm Arunabh</h1>
    </div>
  )
}
// style={{ backgroundImage: `url('/path/to/background-image.jpg')` }}
export default Hero