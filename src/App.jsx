import React, { useState, useEffect } from 'react'
import './App.css'
import './index.css'
import { Menu } from './components/menu/Menu'
import Hero from './containers/Hero'
import About from './containers/About'
import Contact from './containers/Contact'
import Projects from './containers/Projects'
import Footer from './containers/Footer'
import MobileWarning from './components/mobile'

const App = () => {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Function to check screen size
        const checkScreenSize = () => {
        setIsMobile(window.innerWidth < 768);
    };

        // Check on initial render
    checkScreenSize();

        // Add event listener for window resize
    window.addEventListener('resize', checkScreenSize);

        // Clean up event listener
    return () => window.removeEventListener('resize', checkScreenSize);
    }, []);


    return (
        <div className=' app-container flex flex-col'>
            {isMobile ? (
                <MobileWarning />
            ) : (
            <>
                <Menu />
                    <Hero />
                    <About />
                    <Projects />
                    <Contact />   
                <Footer />
            </>
            )}

        </div>
    )
}

export default App