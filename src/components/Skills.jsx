import SectionHeading from "./SectionHeading.jsx";
import Reveal from "./Reveal.jsx";
import { skillCategories } from "../data/portfolioData.js";

export default function Skills() {
    return (
        <section
            id="skills"
            className="section section-skills"
            aria-label="Technical skills"
        >
            <div className="container">

                <SectionHeading
                    index="02"
                    eyebrow="Skills"
                    title="A stack built for full-stack work."
                    description="Languages, frameworks and tools I use daily — exactly as they appear on my resume."
                />

                <div className="row g-4">

                    {skillCategories.map((cat, i) => (

                        <Reveal
                            key={cat.title}
                            className="col-sm-6 col-xl-4"
                            variant="up"
                            delay={(i % 3) * 110}
                        >

                            <article
                                className="skill-card h-100"
                                style={{
                                    "--cat-color": cat.color,
                                }}
                            >

                                {/* CARD HEADER */}
                                <header className="skill-card-head">

                                    <span className="skill-card-icon">
                                        <i
                                            className={`bi ${cat.icon}`}
                                            aria-hidden="true"
                                        />
                                    </span>

                                    <div>
                                        <h3 className="skill-card-title">
                                            {cat.title}
                                        </h3>

                                        <p className="skill-card-blurb">
                                            {cat.blurb}
                                        </p>
                                    </div>

                                </header>


                                {/* SKILLS INSIDE CATEGORY */}
                                <ul className="skill-list">

                                    {cat.skills.map((skill) => (

                                        <li
                                            key={skill.name}
                                            className="skill-item"
                                        >

                                            <span
                                                className="skill-tile"
                                                aria-hidden="true"
                                            >
                                                {skill.code}
                                            </span>

                                            <span className="skill-name">
                                                {skill.name}
                                            </span>

                                            <span
                                                className="skill-spark"
                                                aria-hidden="true"
                                            />

                                        </li>

                                    ))}

                                </ul>

                            </article>

                        </Reveal>

                    ))}

                </div>
            </div>
        </section>
    );
}