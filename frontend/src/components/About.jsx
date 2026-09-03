import React from 'react';
import { FaGraduationCap, FaJava, FaRocket, FaCode, FaExternalLinkAlt, FaBookOpen, FaBrain, FaLayerGroup } from 'react-icons/fa';
import { SiLeetcode, SiReact, SiNodedotjs, SiMongodb, SiExpress } from 'react-icons/si';
import portfolioConfig from '../config/portfolioConfig';
import styles from '../styles/components/About.module.css';

const About = () => {
    const aboutData = portfolioConfig.about || {};

    return (
        <section className={styles.aboutSection} id="about">
            <div className="container">
                {/* Section Header */}
                <div className={styles.sectionHeader}>
                    <div className="sectionBadge">✦ Background & Focus</div>
                    <h2 className={styles.title}>{aboutData.title || 'Engineering Journey & Focus'}</h2>
                    <p className={styles.subtitle}>
                        {aboutData.subtitle || 'CSE Student • Full-Stack Developer • Problem Solver'}
                    </p>
                </div>

                {/* Visual Bento Grid */}
                <div className={styles.bentoGrid}>
                    {/* Card 1: Who I Am */}
                    <div className={`${styles.bentoCard} ${styles.introCard}`}>
                        <div className={styles.cardHeader}>
                            <div className={styles.cardIndexWrapper}>
                                <span className={styles.cardIndex}>01</span>
                                <div className={styles.iconCircle}>
                                    <FaGraduationCap />
                                </div>
                            </div>
                            <span className={styles.statusChip}>CSE Student</span>
                        </div>

                        <div className={styles.cardBody}>
                            <h3 className={styles.cardTitle}>Who I Am</h3>
                            <p className={styles.cardText}>
                                {aboutData.intro || 'CSE student focused on becoming a strong software engineer, with a growing foundation in full-stack development and data structures & algorithms.'}
                            </p>

                            <div className={styles.pillGroup}>
                                <span className={styles.infoPill}>Computer Science & Engineering</span>
                                <span className={styles.infoPill}>Software Craftsmanship</span>
                                <span className={styles.infoPill}>Continuous Learner</span>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: What I'm Aiming For */}
                    <div className={`${styles.bentoCard} ${styles.visionCard}`}>
                        <div className={styles.cardHeader}>
                            <div className={styles.cardIndexWrapper}>
                                <span className={styles.cardIndex}>02</span>
                                <div className={styles.iconCircle}>
                                    <FaRocket />
                                </div>
                            </div>
                            <span className={styles.goalChip}>Core Goal</span>
                        </div>

                        <div className={styles.cardBody}>
                            <h3 className={styles.cardTitle}>What I'm Aiming For</h3>
                            <p className={styles.cardText}>
                                {aboutData.vision?.description || 'My long-term goal is to become a highly capable software engineer with strong problem-solving skills, solid engineering fundamentals, and the ability to build reliable real-world software.'}
                            </p>

                            <div className={styles.visionHighlights}>
                                <div className={styles.highlightItem}>
                                    <span className={styles.goldBullet}>✦</span>
                                    <span>High-Impact Engineering</span>
                                </div>
                                <div className={styles.highlightItem}>
                                    <span className={styles.goldBullet}>✦</span>
                                    <span>Clean & Maintainable Systems</span>
                                </div>
                                <div className={styles.highlightItem}>
                                    <span className={styles.goldBullet}>✦</span>
                                    <span>Deep Problem Solving</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 3: DSA & Problem Solving (Java) */}
                    <div className={`${styles.bentoCard} ${styles.dsaCard}`}>
                        <div className={styles.cardHeader}>
                            <div className={styles.cardIndexWrapper}>
                                <span className={styles.cardIndex}>03</span>
                                <div className={styles.iconCircle}>
                                    <FaBrain />
                                </div>
                            </div>
                            <div className={styles.dsaBadges}>
                                <span className={styles.javaChip}>
                                    <FaJava style={{ marginRight: '5px' }} /> Java
                                </span>
                                {aboutData.dsa?.leetcodeUrl && (
                                    <a
                                        href={aboutData.dsa.leetcodeUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.leetcodeLinkChip}
                                        title="View LeetCode Profile"
                                    >
                                        <SiLeetcode style={{ marginRight: '5px', color: '#f59e0b' }} />
                                        <span>{aboutData.dsa.leetcodeHandle || 'LeetCode'}</span>
                                        <FaExternalLinkAlt style={{ fontSize: '0.7rem', marginLeft: '4px' }} />
                                    </a>
                                )}
                            </div>
                        </div>

                        <div className={styles.cardBody}>
                            <h3 className={styles.cardTitle}>DSA & Problem Solving</h3>
                            <p className={styles.cardText}>
                                {aboutData.dsa?.description || 'I regularly practice Data Structures & Algorithms using Java, focusing not just on solving problems but on understanding patterns, optimizing solutions, and developing the ability to approach unfamiliar problems.'}
                            </p>

                            <div className={styles.patternSection}>
                                <span className={styles.patternLabel}>Algorithmic Patterns Practiced:</span>
                                <div className={styles.patternTags}>
                                    {(aboutData.dsa?.patterns || [
                                        'Arrays & Hashing',
                                        'Two Pointers',
                                        'Sliding Window',
                                        'Binary Search',
                                        'Trees & Graphs (BFS/DFS)',
                                        'Dynamic Programming',
                                        'Recursion & Backtracking'
                                    ]).map((pattern, idx) => (
                                        <span key={idx} className={styles.patternTag}>
                                            {pattern}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 4: Full-Stack Web Development */}
                    <div className={`${styles.bentoCard} ${styles.fullstackCard}`}>
                        <div className={styles.cardHeader}>
                            <div className={styles.cardIndexWrapper}>
                                <span className={styles.cardIndex}>04</span>
                                <div className={styles.iconCircle}>
                                    <FaLayerGroup />
                                </div>
                            </div>
                            <span className={styles.statusChip}>MERN Architecture</span>
                        </div>

                        <div className={styles.cardBody}>
                            <h3 className={styles.cardTitle}>Full-Stack Development</h3>
                            <p className={styles.cardText}>
                                {aboutData.fullstack?.description || 'Designing and building responsive, full-stack applications with MongoDB, Express.js, React, and Node.js. Focused on writing scalable code, clean APIs, and modern user experiences.'}
                            </p>

                            <div className={styles.stackIconsGrid}>
                                <div className={styles.stackMiniItem}>
                                    <SiReact style={{ color: '#61dafb' }} />
                                    <span>React 19</span>
                                </div>
                                <div className={styles.stackMiniItem}>
                                    <SiNodedotjs style={{ color: '#68a063' }} />
                                    <span>Node.js</span>
                                </div>
                                <div className={styles.stackMiniItem}>
                                    <SiExpress style={{ color: '#f5d061' }} />
                                    <span>Express 5</span>
                                </div>
                                <div className={styles.stackMiniItem}>
                                    <SiMongodb style={{ color: '#47a248' }} />
                                    <span>MongoDB</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 5: CS Fundamentals */}
                    <div className={`${styles.bentoCard} ${styles.fundamentalsCard}`}>
                        <div className={styles.cardHeader}>
                            <div className={styles.cardIndexWrapper}>
                                <span className={styles.cardIndex}>05</span>
                                <div className={styles.iconCircle}>
                                    <FaBookOpen />
                                </div>
                            </div>
                            <span className={styles.goalChip}>Core Foundations</span>
                        </div>

                        <div className={styles.cardBody}>
                            <h3 className={styles.cardTitle}>Computer Science Fundamentals</h3>
                            <p className={styles.cardText}>
                                Deep engineering grounding in fundamental concepts that ensure scalable, secure, and robust software development.
                            </p>

                            <div className={styles.topicsGrid}>
                                {(aboutData.fundamentals?.topics || [
                                    'Object-Oriented Programming (Java)',
                                    'Database Management Systems (DBMS)',
                                    'Operating Systems & Concurrency',
                                    'Computer Networks & Protocols'
                                ]).map((topic, i) => (
                                    <div key={i} className={styles.topicCard}>
                                        <span className={styles.topicBullet}>0{i + 1}</span>
                                        <span className={styles.topicText}>{topic}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
