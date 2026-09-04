import React from 'react'
import projects from '../data/projects'
import ProjectCard from './ProjectCard'


const Projects = () => {
  return (
    <section className='py-5'>
        <div className="container">
            <h2 className="text-center mb-4 fs-1">My Projects</h2>
            <div className="row g-4">
                {projects.map((project) => (
                    <div className="col-12 col-md-6 col-lg-4"
                        key={project.id}>
                        <ProjectCard
                            title={project.title}
                            description={project.description}
                            technologies={project.technologies}
                        />
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Projects