
import SectionHeading from "./SectionHeading.jsx";
import { about } from "../data/portfolioData.js";

function About() {
    return (
        <section
            id="about"
            className="section section-about"
            aria-label="About me"
        >
            <div className="container">
                <SectionHeading
                    index="01"
                    eyebrow="About"
                    title="An engineer who ships clean, responsive code."
                    description="From client-facing front-ends to full-stack builds — here's the short version of my journey so far."
                />

                <div className="row g-5 about-grid">

                    {/* LEFT COLUMN */}
                    <div className="col-lg-7">
                        <div className="about-copy">
                            {about.paragraphs.map((paragraph, index) => (
                                <p
                                    key={index}
                                    className={index === 0 ? "about-lead" : ""}
                                >
                                    {paragraph}
                                </p>
                            ))}

                            <h3 className="about-sub">
                                What I bring to a project
                            </h3>

                            <ul className="about-strengths">
                                {about.strengths.map((strength) => (
                                    <li key={strength}>
                                        <i
                                            className="bi bi-check2"
                                            aria-hidden="true"
                                        />
                                        {strength}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="col-lg-5">

                        {/* Code editor card */}
                        <div className="code-card-wrap">
                            <div className="code-card">
                                <div className="code-card-bar">
                                    <span className="code-dot c1" />
                                    <span className="code-dot c2" />
                                    <span className="code-dot c3" />

                                    <span className="code-filename">
                                        {about.codeCard.fileName}
                                    </span>
                                </div>

                                <pre className="code-body">
                                    {about.codeCard.lines.map((line, index) => (
                                        <span
                                            key={index}
                                            style={{
                                                paddingLeft: `${line.indent * 1.25}rem`,
                                            }}
                                        >
                                            {line.code}
                                            {"\n"}
                                        </span>
                                    ))}
                                </pre>
                            </div>
                        </div>

                        {/* Quick facts */}
                        <div className="row g-3 mt-neg about-facts">
                            {about.quickFacts.map((fact) => (
                                <div
                                    className="col-6"
                                    key={fact.label}
                                >
                                    <div className="fact-card">
                                        <span className="fact-label">
                                            {fact.label}
                                        </span>

                                        <span className="fact-value">
                                            {fact.value}
                                        </span>

                                        <span className="fact-sub">
                                            {fact.sub}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;