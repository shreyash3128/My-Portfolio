import SectionHeading from "./SectionHeading.jsx";
import Reveal from "./Reveal.jsx";
import { contact } from "../data/portfolioData.js";

function ContactItem({ href, icon, label, value, isLink = true }) {
    const content = (
        <>
            <span className="contact-item-icon">
                <i className={`bi ${icon}`} aria-hidden="true" />
            </span>
            <span>
                <small>{label}</small>
                <strong>{value}</strong>
            </span>
            {isLink && (
                <i className="bi bi-arrow-up-right contact-arrow" aria-hidden="true" />
            )}
        </>
    );

    if (isLink && href) {
        return (
            <a href={href} className="contact-item">
                {content}
            </a>
        );
    }

    return <div className="contact-item">{content}</div>;
}

function Contact() {
    const {
        heading,
        description,
        email,
        phone,
        phoneHref,
        location,
        status = "Available for opportunities",
        socials,
    } = contact || {};

    return (
        <section
            id="contact"
            className="section section-contact"
            aria-label="Contact"
        >
            <div className="container">
                <SectionHeading
                    index="07"
                    eyebrow="Contact"
                    title="Let's work together."
                    description="Have an opportunity, project or idea in mind? I'd be happy to hear about it."
                />

                <Reveal variant="up">
                    <div className="contact-card">
                        {/* LEFT COLUMN: Main Heading & CTA */}
                        <div className="contact-main">
                            <span className="contact-status">
                                <span className="contact-status-dot" aria-hidden="true" />
                                {status}
                            </span>

                            <h3 className="contact-title">{heading}</h3>

                            <p className="contact-description">{description}</p>

                            {email && (
                                <a
                                    href={`mailto:${email}`}
                                    className="contact-primary-btn"
                                    aria-label="Send email"
                                >
                                    <i className="bi bi-envelope" aria-hidden="true" />
                                    <span>Let's Talk</span>
                                    <i className="bi bi-arrow-up-right" aria-hidden="true" />
                                </a>
                            )}
                        </div>

                        {/* RIGHT COLUMN: Contact Details & Social Links */}
                        <div className="contact-details">
                            {email && (
                                <ContactItem
                                    href={`mailto:${email}`}
                                    icon="bi-envelope"
                                    label="Email"
                                    value={email}
                                />
                            )}

                            {phone && (
                                <ContactItem
                                    href={phoneHref || `tel:${phone}`}
                                    icon="bi-telephone"
                                    label="Phone"
                                    value={phone}
                                />
                            )}

                            {location && (
                                <ContactItem
                                    icon="bi-geo-alt"
                                    label="Location"
                                    value={location}
                                    isLink={false}
                                />
                            )}

                            {/* SOCIAL LINKS */}
                            {socials && socials.length > 0 && (
                                <div className="contact-socials" aria-label="Social links">
                                    {socials.map((social, index) => (
                                        <a
                                            key={social.name || index}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={`Visit ${social.name} profile`}
                                        >
                                            <i
                                                className={`bi ${social.icon || "bi-link-45deg"}`}
                                                aria-hidden="true"
                                            />
                                            <span>{social.name}</span>
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}

export default Contact;