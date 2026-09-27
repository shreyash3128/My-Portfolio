import SectionHeading from "./SectionHeading.jsx";
import Reveal from "./Reveal.jsx";
import { education } from "../data/portfolioData.js";

function Education() {
    return (
        <section
            id="education"
            className="section section-education"
            aria-label="Education"
        >
            <div className="container">

                <SectionHeading
                    index="03"
                    eyebrow="Education"
                    title="Academics that grounded the engineering."
                />

                <div className="education-list">

                    {education.map((item, index) => (

                        <Reveal
                            key={`${item.degree}-${item.period}`}
                            className="education-showcase"
                            variant="up"
                            delay={index * 100}
                        >

                            {/* LEFT SIDE */}
                            <div className="education-rail">

                                <div
                                    className="education-icon"
                                    aria-hidden="true"
                                >
                                    <i
                                        className={
                                            index === 0
                                                ? "bi bi-mortarboard-fill"
                                                : index === 1
                                                    ? "bi bi-book-fill"
                                                    : "bi bi-pencil-fill"
                                        }
                                    />
                                </div>

                                {index !== education.length - 1 && (
                                    <div className="education-line" />
                                )}

                            </div>


                            {/* RIGHT SIDE CARD */}
                            <article className="degree-card">

                                {/* TOP */}
                                <div className="degree-card-top">

                                    <div>
                                        <h3 className="degree-title">
                                            {item.degree}
                                        </h3>

                                        {index === 0 && (
                                            <p className="degree-specialization">
                                                Electronics and Telecommunication Engineering
                                            </p>
                                        )}
                                    </div>


                                    <span className="degree-period">

                                        <i
                                            className="bi bi-calendar3"
                                            aria-hidden="true"
                                        />

                                        {item.period}

                                    </span>

                                </div>


                                {/* INSTITUTION */}
                                <p className="degree-college">

                                    <i
                                        className="bi bi-building"
                                        aria-hidden="true"
                                    />

                                    {item.institution}

                                </p>


                                {/* BOTTOM */}
                                <div className="degree-bottom">

                                    <div className="degree-score">

                                        <strong>
                                            {item.score
                                                ?.replace("CGPA:", "")
                                                .replace("/ 10", "")
                                                .replace("%", "")
                                                .trim()}
                                        </strong>

                                        <span>
                                            {item.score?.includes("CGPA")
                                                ? "CGPA / 10"
                                                : "PERCENTAGE"}
                                        </span>

                                    </div>


                                    {item.description && (
                                        <p className="degree-note">
                                            {item.description}
                                        </p>
                                    )}

                                </div>

                            </article>

                        </Reveal>

                    ))}

                </div>

            </div>
        </section>
    );
}

export default Education;