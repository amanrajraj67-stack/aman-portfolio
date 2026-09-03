import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from 'react-icons/fa';
import { SiLeetcode, SiCodeforces, SiExpress, SiTailwindcss, SiMongodb, SiHtml5, SiCss3, SiJavascript, SiC, SiPython, SiNodedotjs, SiReact } from 'react-icons/si';
import useTypingEffect from '../hooks/useTypingEffect';
import portfolioConfig from '../config/portfolioConfig';
import SystemArchitecture from './SystemArchitecture';
import styles from '../styles/components/Hero.module.css';

const Hero = () => {
    const titles = portfolioConfig.titles && portfolioConfig.titles.length > 0
        ? portfolioConfig.titles
        : ['Full-Stack Developer', 'Software Engineer', 'Problem Solver', 'API Architect'];

    const { text: typingText, cursor } = useTypingEffect(titles, 80, 40, 2000);

    const techIcons = [
        { Icon: SiHtml5, name: "HTML" },
        { Icon: SiCss3, name: "CSS" },
        { Icon: SiJavascript, name: "JavaScript" },
        { Icon: SiPython, name: "Python" },
        { Icon: SiC, name: "C" },
        { Icon: SiNodedotjs, name: "Node.js" },
        { Icon: SiExpress, name: "Express.js" },
        { Icon: SiReact, name: "React" },
        { Icon: SiTailwindcss, name: "Tailwind CSS" },
        { Icon: SiMongodb, name: "MongoDB" },
    ];

    const hasAnySocial = Boolean(
        portfolioConfig.socialLinks?.github ||
        portfolioConfig.socialLinks?.linkedin ||
        portfolioConfig.socialLinks?.leetcode ||
        portfolioConfig.socialLinks?.codeforces ||
        portfolioConfig.socialLinks?.instagram ||
        portfolioConfig.socialLinks?.email
    );

    return (
        <section className={styles.heroSection} id="home">
            <div className="container">
                <div className={styles.heroGrid}>
                    {/* Left Column: Hero Content */}
                    <div className={styles.heroContent}>
                        <div className={styles.statusBadge}>
                            <span className={styles.pulseDot}></span>
                            <span>{portfolioConfig.terminalProfile?.status || 'Available for opportunities'}</span>
                        </div>

                        <p className={styles.greeting}>{portfolioConfig.greeting || "Hello, I'm"}</p>
                        
                        <h1 className={styles.title}>
                            <span className={styles.goldShimmerText}>{portfolioConfig.name || 'Developer'}</span>
                            {portfolioConfig.lastName ? (
                                <span className={styles.lastNameText}> {portfolioConfig.lastName}</span>
                            ) : (
                                <span className={styles.goldDot}>.</span>
                            )}
                        </h1>

                        <h2 className={styles.subtitle}>
                            <span className={styles.typingText}>
                                {typingText}
                                <span className={styles.cursor}>{cursor}</span>
                            </span>
                        </h2>

                        <p className={styles.description}>
                            {portfolioConfig.description || portfolioConfig.tagline || 'Building modern web applications, scalable APIs, and clean digital experiences.'}
                        </p>

                        {/* Technology Capability Pills */}
                        <div className={styles.featurePills}>
                            <span className={styles.featurePill}>⚡ MERN Full-Stack</span>
                            <span className={styles.featurePill}>🚀 Scalable REST APIs</span>
                            <span className={styles.featurePill}>✨ High Performance</span>
                        </div>

                        {/* Social Links */}
                        <div className={styles.socialLinks}>
                            {portfolioConfig.socialLinks?.leetcode ? (
                                <a href={portfolioConfig.socialLinks.leetcode} target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="LeetCode" title="LeetCode">
                                    <SiLeetcode />
                                </a>
                            ) : null}
                            {portfolioConfig.socialLinks?.codeforces ? (
                                <a href={portfolioConfig.socialLinks.codeforces} target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Codeforces" title="Codeforces">
                                    <SiCodeforces />
                                </a>
                            ) : null}
                            {portfolioConfig.socialLinks?.github ? (
                                <a href={portfolioConfig.socialLinks.github} target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="GitHub" title="GitHub">
                                    <FaGithub />
                                </a>
                            ) : null}
                            {portfolioConfig.socialLinks?.linkedin ? (
                                <a href={portfolioConfig.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="LinkedIn" title="LinkedIn">
                                    <FaLinkedin />
                                </a>
                            ) : null}
                            {portfolioConfig.socialLinks?.instagram ? (
                                <a href={portfolioConfig.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Instagram" title="Instagram">
                                    <FaInstagram />
                                </a>
                            ) : null}
                            {portfolioConfig.socialLinks?.email ? (
                                <a href={`mailto:${portfolioConfig.socialLinks.email}`} className={styles.socialIcon} aria-label="Email" title="Email">
                                    <FaEnvelope />
                                </a>
                            ) : null}

                            {!hasAnySocial && (
                                <>
                                    <a href="#contact" className={styles.socialIcon} aria-label="GitHub" title="GitHub">
                                        <FaGithub />
                                    </a>
                                    <a href="#contact" className={styles.socialIcon} aria-label="LinkedIn" title="LinkedIn">
                                        <FaLinkedin />
                                    </a>
                                    <a href="#contact" className={styles.socialIcon} aria-label="Email" title="Email">
                                        <FaEnvelope />
                                    </a>
                                </>
                            )}
                        </div>

                        {/* Action Buttons */}
                        <div className={styles.ctaButtons}>
                            <Link to="/projects" className={styles.primaryBtn}>
                                Explore Projects <span className={styles.btnArrow}>&rarr;</span>
                            </Link>
                            <a href="#contact" className={styles.secondaryBtn}>
                                Get in Touch
                            </a>
                        </div>

                        {/* Tech Stack Marquee */}
                        <div className={styles.techStackSection}>
                            <span className={styles.techStackLabel}>Core Technologies</span>
                            <div className={styles.techMarquee}>
                                <div className={styles.techTrack}>
                                    {techIcons.concat(techIcons).map((tech, index) => (
                                        <div key={index} className={styles.techIconItem} title={tech.name}>
                                            <tech.Icon />
                                            <span className={styles.techIconName}>{tech.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Interactive System Architecture Visualizer */}
                    <div className={styles.terminalColumn}>
                        <SystemArchitecture />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
