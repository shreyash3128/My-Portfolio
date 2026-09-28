import logo from "../assets/images/sitelogo.png";
function Footer() {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <footer className="site-footer" role="contentinfo">
            <div className="container">
                <div className="footer-inner">
                    {/* Brand & Subtitle */}
                    <div className="footer-brand">
                        <a
                            href="#home"
                            className="footer-logo-link"
                            aria-label="Back to home"
                        >
                            <img
                                src={logo}
                                alt="Shreyash Gurav - Full-Stack Software Engineer"
                                className="footer-logo-image"
                            />
                        </a>
                    </div>

                    {/* Copyright & Tech Stack */}
                    <div className="footer-copy">
                        <p className="copyright-text">
                            © {currentYear} Shreyash Gurav. All rights reserved.
                        </p>

                        <span className="build-tag">
                            Built with React.js
                            <i className="bi bi-code-slash" aria-hidden="true" />
                        </span>
                    </div>

                    {/* Scroll to Top CTA */}
                    <button
                        type="button"
                        className="back-to-top"
                        onClick={scrollToTop}
                        aria-label="Back to top"
                        title="Scroll back to top"
                    >
                        <i className="bi bi-arrow-up" aria-hidden="true" />
                    </button>
                </div>
            </div>
        </footer>
    );
}

export default Footer;