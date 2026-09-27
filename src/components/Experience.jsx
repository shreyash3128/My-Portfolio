import SectionHeading from "./SectionHeading.jsx";
import Reveal from "./Reveal.jsx";
import { experiences } from "../data/portfolioData.js";

function Experience() {
    return (
        <section id="experience" className="section section-experience" aria-label="Work experience">
            <div className="container">
                <SectionHeading
                    index="04"
                    eyebrow="Experience"
                    title="Where engineering meets real-world delivery."
                    description="Hands-on experience building, maintaining and improving client-facing websites."
                />
                <div className="experience-list">
                    {experiences.map((experience, index) => (
                        <Reveal key={`${experience.company}-${experience.role}`} variant="up" delay={index * 100}>
                            <article className="experience-card">
                                <div className="experience-top">
                                    <div className="experience-company-icon">
                                        <i className="bi bi-briefcase-fill" aria-hidden="true" />
                                    </div>
                                    <div className="experience-heading">
                                        <span className="experience-company">{experience.company}</span>
                                        <h3 className="experience-role">{experience.role}</h3>
                                    </div>
                                    <span className="experience-period">
                                        <i className="bi bi-calendar3" aria-hidden="true" />
                                        {experience.period}
                                    </span>
                                </div>
                                <div className="experience-meta">
                                    <span>
                                        <i className="bi bi-geo-alt" aria-hidden="true" />
                                        {experience.location}
                                    </span>
                                    <span>
                                        <i className="bi bi-clock" aria-hidden="true" />
                                        {experience.type}
                                    </span>
                                </div>
                                <p className="experience-description">{experience.description}</p>
                                <div className="experience-content">
                                    <div>
                                        <h4 className="experience-label">What I work on</h4>
                                        <ul className="experience-points">
                                            {experience.responsibilities.map((responsibility) => (
                                                <li key={responsibility}>
                                                    <i className="bi bi-arrow-right-short" aria-hidden="true" />
                                                    <span>{responsibility}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="experience-label">Technologies</h4>
                                        <div className="experience-tech">
                                            {experience.technologies.map((technology) => (
                                                <span key={technology} className="experience-tech-item">
                                                    {technology}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Experience;