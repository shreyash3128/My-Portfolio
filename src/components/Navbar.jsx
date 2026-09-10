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
        setMenuOpen(!menuOpen);
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
                >
                    <span className="brand-mark">
                        SG
                    </span>

                    <span className="brand-text">
                        Shreyash<span>.dev</span>
                    </span>
                </a>


                {/* Desktop / Mobile Links */}
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


                {/* Desktop CTA */}
                <a
                    href="#contact"
                    className="navbar-talk-btn"
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
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

            </div>
        </nav>
    );
}

export default Navbar;