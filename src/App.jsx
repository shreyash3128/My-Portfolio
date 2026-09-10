import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
      <Navbar/>
      <main>
        <Hero />
        <About />
        <Projects />
      </main>
    </>
  )
}

export default App