import React from 'react'
import { Menu } from './components/menu/Menu'
import Contact from './containers/Contact'
import Hero from './containers/Hero'
import About from './containers/About'
import Projects from './containers/Projects'
import Footer from './containers/Footer'

const App = () => {
    return (
        <div>
            <Hero />
            <About />
            <Projects />
            <Contact />
            <Footer />
        </div>
    )
}

export default App