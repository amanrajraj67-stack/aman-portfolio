import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaCode } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import portfolioConfig from '../config/portfolioConfig';
import styles from '../styles/components/Footer.module.css';

const Footer = () => {
    const brandName = portfolioConfig.name ? `${portfolioConfig.name} Portfolio` : 'Portfolio';

    return (
        <footer className={styles.footer} id="contact">
            <div className={styles.gradientOverlay}></div>
            <div className="container">
                {/* Footer Content */}
                <div className={styles.footerContent}>
                    <div className={styles.footerInfo}>
                        <h3 className={styles.footerLogo}>{brandName}</h3>
                        <p className={styles.footerText}>
                            Building digital experiences with passion and precision.
                        </p>
                    </div>

                    <div className={styles.socialLinks}>
                        {portfolioConfig.socialLinks?.github && (
                            <a href={portfolioConfig.socialLinks.github} target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="GitHub">
                                <FaGithub />
                            </a>
                        )}
                        {portfolioConfig.socialLinks?.linkedin && (
                            <a href={portfolioConfig.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="LinkedIn">
                                <FaLinkedin />
                            </a>
                        )}
                        {portfolioConfig.socialLinks?.leetcode && (
                            <a href={portfolioConfig.socialLinks.leetcode} target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="LeetCode">
                                <SiLeetcode />
                            </a>
                        )}
                        {portfolioConfig.socialLinks?.instagram && (
                            <a href={portfolioConfig.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Instagram">
                                <FaInstagram />
                            </a>
                        )}
                        {portfolioConfig.socialLinks?.email && (
                            <a href={`mailto:${portfolioConfig.socialLinks.email}`} className={styles.socialIcon} aria-label="Email">
                                <FaEnvelope />
                            </a>
                        )}
                        {!portfolioConfig.socialLinks?.github && !portfolioConfig.socialLinks?.linkedin && !portfolioConfig.socialLinks?.email && (
                            <a href="#about" className={styles.socialIcon} aria-label="Portfolio">
                                <FaCode />
                            </a>
                        )}
                    </div>
                </div>

                <div className={styles.footerBottom}>
                    <div className={styles.footerBottomLinks}>
                        <p>&copy; {new Date().getFullYear()} {portfolioConfig.name || 'Portfolio'}. All rights reserved.</p>
                        <Link to="/admin/login" className={styles.adminLink}>Admin Area</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
