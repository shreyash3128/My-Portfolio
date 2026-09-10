import { profile } from "../data/portfolioData";
import profileImg from "../assets/images/profile.png";

const floatingBadges = [
    { label: "React.js", icon: "bi-cpu", position: "top" },
    { label: "Django", icon: "bi-hdd-stack", position: "left" },
    { label: "MySQL", icon: "bi-database", position: "right" },
    { label: "WordPress", icon: "bi-file-earmark-richtext", position: "bottom" },
    { label: "Git", icon: "bi-git", position: "bottom-left" },
];

function Hero() {
    return (
        <section id="home" className="hero" aria-label="Introduction">
            <div className="container hero-inner">
                <div className="row align-items-center justify-content-evenly g-5">

                    {/* Left Portrait */}
                    <div className="col-lg-5 hero-visual-col">
                        <div className="hero-visual">
                            <div className="hero-frame-wrap">
                                <div className="hero-glow" aria-hidden="true" />
                                <div className="hero-frame">
                                    <img
                                        src={profileImg}
                                        alt={`Portrait of ${profile.name}`}
                                        className="hero-portrait"
                                    />
                                </div>

                                <svg
                                    className="hero-ring"
                                    viewBox="0 0 200 200"
                                    aria-hidden="true"
                                >
                                    <circle
                                        cx="100"
                                        cy="100"
                                        r="96"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1"
                                        strokeDasharray="4 10"
                                    />
                                </svg>
                            </div>

                            {floatingBadges.map((badge) => (
                                <span
                                    key={badge.label}
                                    className={`float-badge float-${badge.position}`}
                                >
                                    <i className={`bi ${badge.icon}`} aria-hidden="true" />
                                    {badge.label}
                                </span>
                            ))}

                            <span className="hero-coords" aria-hidden="true">
                                {profile.locationMeta} — KOLHAPUR
                            </span>
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="col-lg-6 hero-copy">
                        <span className="hero-chip">
                            <span className="pulse-dot" aria-hidden="true" />
                            {profile.currentRole} · {profile.currentCompany}
                        </span>

                        <h1 className="hero-title">
                            {profile.name}
                        </h1>

                        <p className="hero-role">
                            <span className="hero-role-dash" aria-hidden="true" />
                            {profile.role}
                            <span className="hero-role-stack">
                                {profile.roleLine}
                            </span>
                        </p>

                        <p className="hero-intro">
                            {profile.heroIntro}
                        </p>

                        <div className="hero-cta">
                            <a href="#projects" className="btn-x btn-primary-x">
                                View My Projects
                                <i className="bi bi-arrow-down" aria-hidden="true" />
                            </a>

                            <a href="#contact" className="btn-x btn-ghost-x">
                                Contact Me
                            </a>

                            <button type="button" className="btn-x btn-resume">
                                <i className="bi bi-download" aria-hidden="true" />
                                Resume
                            </button>
                        </div>

                        <ul className="hero-meta">
                            <li>
                                <a href={`mailto:${profile.email}`}>
                                    <i className="bi bi-envelope" aria-hidden="true" />
                                    {profile.email}
                                </a>
                            </li>
                            <li>
                                <a href={profile.phoneHref}>
                                    <i className="bi bi-telephone" aria-hidden="true" />
                                    {profile.phone}
                                </a>
                            </li>
                            <li>
                                <i className="bi bi-geo-alt" aria-hidden="true" />
                                {profile.location}
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

            <a href="#about" className="hero-scroll" aria-label="Scroll to About section">
                <span className="hero-scroll-mouse" aria-hidden="true">
                    <span />
                </span>
                <span className="hero-scroll-label">Scroll</span>
            </a>
        </section>
    );
}

export default Hero;