import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp, FaExternalLinkAlt } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import portfolioConfig from '../config/portfolioConfig';
import styles from '../styles/components/Footer.module.css';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className={styles.footer}>
            <div className={styles.gradientOverlay}></div>
            <div className="container">
                {/* Main Minimal 3-Column Grid */}
                <div className={styles.footerGrid}>
                    {/* Col 1: Brand & Philosophy */}
                    <div className={styles.brandCol}>
                        <Link to="/" className={styles.logoLink} onClick={scrollToTop}>
                            <span className={styles.logoBrand}>
                                {portfolioConfig.name || 'AMAN'}
                                <span className={styles.goldDot}>.</span>
                            </span>
                        </Link>
                        
                        <p className={styles.brandTagline}>
                            Designing scalable web applications, modern full-stack architectures, and clean digital experiences.
                        </p>

                        <div className={styles.statusPill}>
                            <span className={styles.statusDot}></span>
                            <span>Available for Opportunities</span>
                        </div>
                    </div>

                    {/* Col 2: Navigation Links */}
                    <div className={styles.linksCol}>
                        <span className={styles.colHeader}>Navigation</span>
                        <div className={styles.navLinksList}>
                            <Link to="/" className={styles.navItem} onClick={scrollToTop}>Home</Link>
                            <Link to="/projects" className={styles.navItem}>Projects</Link>
                            <Link to="/achievements" className={styles.navItem}>Journey</Link>
                            <Link to="/blog" className={styles.navItem}>Insights</Link>
                            <a href="#contact" className={styles.navItem}>Contact</a>
                        </div>
                    </div>

                    {/* Col 3: Direct Connect */}
                    <div className={styles.linksCol}>
                        <span className={styles.colHeader}>Connect</span>
                        <div className={styles.navLinksList}>
                            {portfolioConfig.socialLinks?.github && (
                                <a
                                    href={portfolioConfig.socialLinks.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.connectItem}
                                >
                                    <FaGithub /> <span>GitHub</span> <FaExternalLinkAlt className={styles.linkArrow} />
                                </a>
                            )}
                            {portfolioConfig.socialLinks?.linkedin && (
                                <a
                                    href={portfolioConfig.socialLinks.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.connectItem}
                                >
                                    <FaLinkedin /> <span>LinkedIn</span> <FaExternalLinkAlt className={styles.linkArrow} />
                                </a>
                            )}
                            {portfolioConfig.socialLinks?.leetcode && (
                                <a
                                    href={portfolioConfig.socialLinks.leetcode}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.connectItem}
                                >
                                    <SiLeetcode style={{ color: '#f59e0b' }} /> <span>LeetCode</span> <FaExternalLinkAlt className={styles.linkArrow} />
                                </a>
                            )}
                            {portfolioConfig.socialLinks?.email && (
                                <a
                                    href={`mailto:${portfolioConfig.socialLinks.email}`}
                                    className={styles.connectItem}
                                >
                                    <FaEnvelope /> <span>Email</span> <FaExternalLinkAlt className={styles.linkArrow} />
                                </a>
                            )}
                        </div>
                    </div>
                </div>

                {/* Sub Footer Bar */}
                <div className={styles.subFooter}>
                    <div className={styles.subLeft}>
                        <p className={styles.copyright}>
                            &copy; {new Date().getFullYear()} {portfolioConfig.name || 'Aman'}. Crafted with precision & code.
                        </p>
                    </div>

                    <div className={styles.subRight}>
                        <button
                            type="button"
                            className={styles.backToTopBtn}
                            onClick={scrollToTop}
                            title="Back to Top"
                        >
                            <span>Back to Top</span> <FaArrowUp />
                        </button>
                        <span className={styles.divider}>•</span>
                        <Link to="/admin/login" className={styles.adminLink}>Admin</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
