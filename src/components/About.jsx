import SectionHeading from "./SectionHeading.jsx";
import { about } from "../data/portfolioData.js";
import Reveal from "./Reveal.jsx";

function About() {
    return (
        <section
            id="about"
            className="section section-about"
            aria-label="About me"
        >
            <div className="container">

                {/* SECTION HEADING */}
                <Reveal variant="up">
                    <SectionHeading
                        index="01"
                        eyebrow="About"
                        title="An engineer who ships clean, responsive code."
                        description="From client-facing front-ends to full-stack builds — here's the short version of my journey so far."
                    />
                </Reveal>


                <div className="row g-5 about-grid">

                    {/* =========================
                        LEFT COLUMN
                    ========================== */}
                    <Reveal
                        className="col-lg-7"
                        variant="left"
                    >
                        <div className="about-copy">

                            {/* ABOUT PARAGRAPHS */}
                            {about.paragraphs.map((paragraph, index) => (
                                <p
                                    key={index}
                                    className={
                                        index === 0
                                            ? "about-lead"
                                            : ""
                                    }
                                >
                                    {paragraph}
                                </p>
                            ))}


                            {/* STRENGTHS TITLE */}
                            <h3 className="about-sub">
                                What I bring to a project
                            </h3>


                            {/* STRENGTHS LIST */}
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
                    </Reveal>


                    {/* =========================
                        RIGHT COLUMN
                    ========================== */}
                    <div className="col-lg-5">

                        {/* CODE EDITOR CARD */}
                        <Reveal
                            className="code-card-wrap"
                            variant="right"
                            delay={120}
                        >
                            <div
                                className="code-card"
                                aria-hidden="true"
                            >

                                {/* CODE CARD HEADER */}
                                <div className="code-card-bar">

                                    <span className="code-dot c1" />
                                    <span className="code-dot c2" />
                                    <span className="code-dot c3" />

                                    <span className="code-filename">
                                        {about.codeCard.fileName}
                                    </span>

                                </div>


                                {/* CODE */}
                                <pre className="code-body">

                                    {about.codeCard.lines.map(
                                        (line, index) => (
                                            <span
                                                key={index}
                                                style={{
                                                    paddingLeft:
                                                        `${line.indent * 1.25}rem`,
                                                }}
                                            >
                                                {line.code}
                                                {"\n"}
                                            </span>
                                        )
                                    )}

                                </pre>

                            </div>
                        </Reveal>


                        {/* =========================
                            QUICK FACTS
                        ========================== */}

                        <div className="row g-3 mt-neg about-facts">

                            {about.quickFacts.map((fact, index) => (

                                <Reveal
                                    key={fact.label}
                                    className="col-6"
                                    variant="up"
                                    delay={index * 90}
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

                                </Reveal>

                            ))}

                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}

export default About;