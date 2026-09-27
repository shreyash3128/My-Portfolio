import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import Education from './components/Education'
import Experience from './components/Experience'

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
      </main>
    </>
  )
}

export default App