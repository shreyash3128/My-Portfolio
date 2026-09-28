import logo from "../assets/images/sitelogo.png";
import { useState } from "react";

const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#education" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <nav className="site-navbar">
            <div className="container navbar-inner">

                {/* Logo */}
                <a
                    href="#home"
                    className="navbar-brand-x"
                    onClick={closeMenu}
                    aria-label="Shreyash Gurav - Home"
                >
                    <img
                        src={logo}
                        alt="Shreyash Gurav"
                        className="navbar-logo-image"
                    />
                </a>

                {/* Navigation Links */}
                <div
                    className={`navbar-links ${menuOpen ? "is-open" : ""
                        }`}
                >
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="navbar-link"
                            onClick={closeMenu}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* Let's Talk CTA - ONLY ONE */}
                <a
                    href="#contact"
                    className="navbar-talk-btn"
                    onClick={closeMenu}
                >
                    Let's Talk
                    <span aria-hidden="true">→</span>
                </a>

                {/* Mobile Hamburger */}
                <button
                    type="button"
                    className={`navbar-toggle ${menuOpen ? "is-active" : ""
                        }`}
                    onClick={toggleMenu}
                    aria-label="Toggle navigation menu"
                    aria-expanded={menuOpen}
                    aria-controls="navbar-navigation"
                >
                    <span />
                    <span />
                    <span />
                </button>

            </div>
        </nav>
    );
}

export default Navbar;