import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import ProjectCard from './components/ProjectCard'

const App = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <ProjectCard
        title="Expense Tracker"
        description="An application to manage personal expenses."
      />

      <ProjectCard
        title="PureHue"
        description="A skincare related web application."
      />

      <ProjectCard
        title="Tomato"
        description="A food delivery web application."
      />
    </div>
  )
}

export default App