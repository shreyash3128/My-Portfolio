import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import Education from './components/Education'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Navbar/>
      <main>
        <Hero />
        <About />
        <Skills/>
        <Education/>
        <Experience/>
        <Projects/>
        <Certifications/>
        <Contact/>
      </main>
      <Footer/>
    </>
  )
}

export default App