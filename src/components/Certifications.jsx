import SectionHeading from "./SectionHeading.jsx";
import Reveal from "./Reveal.jsx";
import { certifications } from "../data/portfolioData.js";

function CertCard({ cert }) {
    const { certificateUrl, title, icon, issuer } = cert;

    return (
        <a
            href={certificateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="cert-link"
            aria-label={`View ${title} certificate`}
        >
            <article className="cert-card h-100">
                <span className="cert-icon">
                    <i
                        className={`bi ${icon || "bi-patch-check"}`}
                        aria-hidden="true"
                    />
                </span>

                <div className="cert-content">
                    <h3 className="cert-title">{title}</h3>

                    <p className="cert-issuer">
                        <i className="bi bi-patch-fill" aria-hidden="true" />
                        {issuer}
                    </p>
                </div>

                <span className="cert-open" aria-hidden="true">
                    <i className="bi bi-arrow-up-right" />
                </span>
            </article>
        </a>
    );
}

function Certifications() {
    return (
        <section
            id="certifications"
            className="section section-certs"
            aria-label="Certifications"
        >
            <div className="container">
                <SectionHeading
                    index="06"
                    eyebrow="Certifications"
                    title="Verified beyond the degree."
                />

                <div className="row g-4">
                    {certifications?.map((cert, index) => (
                        <Reveal
                            key={cert.id || cert.title || index}
                            className="col-12 col-sm-6"
                            variant="up"
                            delay={(index % 2) * 120}
                        >
                            <CertCard cert={cert} />
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Certifications;