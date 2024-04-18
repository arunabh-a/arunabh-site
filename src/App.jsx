import React from 'react'
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
    return (
        <div className='app-container'>
            <Menu />
                <Hero />
                <About />
                <Projects />
                <Contact />
            <Footer />
            <MobileWarning />
        </div>
    )
}

export default App