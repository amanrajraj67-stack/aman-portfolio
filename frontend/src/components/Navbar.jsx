import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import portfolioConfig from '../config/portfolioConfig';
import styles from '../styles/components/Navbar.module.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setMenuOpen(false);
    }, [location.pathname]);

    const isActive = (path) => {
        return location.pathname === path;
    };

    return (
        <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ''}`}>
            <div className={styles.navContainer}>
                {/* Brand Logo */}
                <Link to="/" className={styles.logo}>
                    <span className={styles.logoText}>
                        {portfolioConfig.name || 'AMAN'}
                        <span className={styles.goldDot}>.</span>
                    </span>
                </Link>

                {/* Desktop Nav Links */}
                <nav className={`${styles.navLinks} ${menuOpen ? styles.navLinksOpen : ''}`}>
                    <Link
                        to="/"
                        className={`${styles.navLink} ${isActive('/') ? styles.activeLink : ''}`}
                    >
                        Home
                    </Link>
                    <Link
                        to="/projects"
                        className={`${styles.navLink} ${isActive('/projects') ? styles.activeLink : ''}`}
                    >
                        Projects
                    </Link>
                    <Link
                        to="/achievements"
                        className={`${styles.navLink} ${isActive('/achievements') ? styles.activeLink : ''}`}
                    >
                        Journey
                    </Link>
                    <Link
                        to="/blog"
                        className={`${styles.navLink} ${isActive('/blog') ? styles.activeLink : ''}`}
                    >
                        Insights
                    </Link>

                    {/* Mobile Only CTA */}
                    <div className={styles.mobileCtaWrapper}>
                        <Link to="/contact" className={styles.mobileCtaBtn}>
                            Let's Connect
                        </Link>
                    </div>
                </nav>

                {/* Right Action CTA & Mobile Toggle */}
                <div className={styles.navActions}>
                    <Link to="/contact" className={styles.headerCta}>
                        <span>Let's Talk</span>
                        <span className={styles.ctaArrow}>&rarr;</span>
                    </Link>

                    <button
                        className={`${styles.hamburger} ${menuOpen ? styles.hamburgerActive : ''}`}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle Navigation Menu"
                        aria-expanded={menuOpen}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
