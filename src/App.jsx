import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import ProjectCard from './components/ProjectCard'

const App = () => {
  const projects = [
    {
      title: "Expense Tracker",
      description: "An application to manage personal expenses.",
    },
    {
      title: "PureHue",
      description: "A skincare related web application.",
    },
    {
      title: "Tomato",
      description: "A food delivery web application.",
    },
  ];
  return (
    <div>
      <Hero/>
      <About/>
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          description={project.description}
        />
      ))}
    </div>
  )
}

export default App