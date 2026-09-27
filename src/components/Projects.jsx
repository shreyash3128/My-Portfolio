import SectionHeading from "./SectionHeading.jsx";
import Reveal from "./Reveal.jsx";
import { projects } from "../data/portfolioData.js";

function ProjectCard({ project, index }) {
    const projectNumber = String(index + 1).padStart(2, "0");

    return (
        <article className="project-card h-100">
            {/* IMAGE */}
            <div className="project-visual">
                <img
                    src={project.image}
                    alt={`${project.title} project preview`}
                    className="project-image"
                />

                <span className="project-number">{projectNumber}</span>

                {project.category && (
                    <span className="project-category">{project.category}</span>
                )}
            </div>

            {/* CONTENT */}
            <div className="project-content">
                <h3 className="project-title">{project.title}</h3>

                <p className="project-subtitle">{project.subtitle}</p>

                {/* TECHNOLOGIES */}
                {project.technologies?.length > 0 && (
                    <div className="project-tech">
                        {project.technologies.map((technology) => (
                            <span key={technology} className="project-tech-item">
                                {technology}
                            </span>
                        ))}
                    </div>
                )}

                {/* HIGHLIGHTS */}
                {project.highlights?.length > 0 && (
                    <ul className="project-highlights">
                        {project.highlights.map((highlight) => (
                            <li key={highlight}>
                                <span className="project-bullet" aria-hidden="true">
                                    ▸
                                </span>
                                {highlight}
                            </li>
                        ))}
                    </ul>
                )}

                {/* LINKS */}
                {(project.liveUrl || project.githubUrl) && (
                    <div className="project-links">
                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Live Project
                                <i className="bi bi-arrow-up-right" />
                            </a>
                        )}

                        {project.githubUrl && (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="bi bi-github" />
                                GitHub
                            </a>
                        )}
                    </div>
                )}
            </div>
        </article>
    );
}

function Projects() {
    return (
        <section
            id="projects"
            className="section section-projects"
            aria-label="Projects"
        >
            <div className="container">
                <SectionHeading
                    index="05"
                    eyebrow="Projects"
                    title="Things I've built."
                    description="Interactive showcases, a React delivery app, and a full-stack tracker — each with its own problem to solve."
                />

                <div className="row g-4">
                    {projects.map((project, index) => (
                        <Reveal
                            key={project.id || project.title}
                            className="col-md-6 col-xl-4"
                            variant="up"
                            delay={(index % 3) * 100}
                        >
                            <ProjectCard project={project} index={index} />
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;