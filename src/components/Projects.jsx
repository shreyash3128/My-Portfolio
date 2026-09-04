import React from 'react'
import projects from '../data/projects'
import ProjectCard from './ProjectCard'
import SectionHeading from './SectionHeading'


const Projects = () => {
  return (
    <section className='py-5'>
        <div className="container">
              <SectionHeading
                  title="My Projects"
                  subtitle="A few projects I have worked on."
              />
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