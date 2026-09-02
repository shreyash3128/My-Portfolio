import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import ProjectCard from './components/ProjectCard'
import projects from './data/projects'

const App = () => {
  return (
    <div>
      <Hero/>
      <About/>
      {projects.map((project)=>(
        <ProjectCard
        key = {project.id}
        title = {project.title}
        description = {project.description}
        technologies={project.technologies}
        />
      ))}
    </div>
  )
}

export default App