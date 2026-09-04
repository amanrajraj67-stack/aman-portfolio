import React, { useState } from 'react';
import { 
    FaGitAlt, 
    FaTerminal, 
    FaCheckCircle, 
    FaServer, 
    FaDatabase, 
    FaLaptopCode,
    FaArrowRight,
    FaCodeBranch,
    FaBolt
} from 'react-icons/fa';
import styles from '../styles/components/EngineeringTimeline.module.css';

const EngineeringTimeline = () => {
    const [hoveredCell, setHoveredCell] = useState(null);

    // Simulated 36-cell commit heatmap (2 rows of 18) with realistic activity distribution
    const heatmapData = [
        { id: 1, count: 4, date: 'Week 1, Day 1', level: 2 },
        { id: 2, count: 7, date: 'Week 1, Day 3', level: 3 },
        { id: 3, count: 2, date: 'Week 2, Day 2', level: 1 },
        { id: 4, count: 6, date: 'Week 2, Day 4', level: 3 },
        { id: 5, count: 3, date: 'Week 3, Day 1', level: 2 },
        { id: 6, count: 8, date: 'Week 3, Day 5', level: 3 },
        { id: 7, count: 1, date: 'Week 4, Day 2', level: 1 },
        { id: 8, count: 5, date: 'Week 4, Day 4', level: 2 },
        { id: 9, count: 9, date: 'Week 5, Day 1', level: 3 },
        { id: 10, count: 4, date: 'Week 5, Day 3', level: 2 },
        { id: 11, count: 2, date: 'Week 6, Day 2', level: 1 },
        { id: 12, count: 7, date: 'Week 6, Day 5', level: 3 },
        { id: 13, count: 5, date: 'Week 7, Day 1', level: 2 },
        { id: 14, count: 8, date: 'Week 7, Day 4', level: 3 },
        { id: 15, count: 3, date: 'Week 8, Day 2', level: 2 },
        { id: 16, count: 6, date: 'Week 8, Day 5', level: 3 },
        { id: 17, count: 2, date: 'Week 9, Day 3', level: 1 },
        { id: 18, count: 7, date: 'Week 9, Day 6', level: 3 },
        // Row 2
        { id: 19, count: 6, date: 'Week 10, Day 1', level: 3 },
        { id: 20, count: 3, date: 'Week 10, Day 4', level: 2 },
        { id: 21, count: 8, date: 'Week 11, Day 2', level: 3 },
        { id: 22, count: 2, date: 'Week 11, Day 5', level: 1 },
        { id: 23, count: 5, date: 'Week 12, Day 1', level: 2 },
        { id: 24, count: 9, date: 'Week 12, Day 3', level: 3 },
        { id: 25, count: 4, date: 'Week 13, Day 2', level: 2 },
        { id: 26, count: 7, date: 'Week 13, Day 5', level: 3 },
        { id: 27, count: 1, date: 'Week 14, Day 1', level: 1 },
        { id: 28, count: 6, date: 'Week 14, Day 4', level: 3 },
        { id: 29, count: 4, date: 'Week 15, Day 2', level: 2 },
        { id: 30, count: 8, date: 'Week 15, Day 5', level: 3 },
        { id: 31, count: 3, date: 'Week 16, Day 1', level: 2 },
        { id: 32, count: 7, date: 'Week 16, Day 3', level: 3 },
        { id: 33, count: 2, date: 'Week 17, Day 2', level: 1 },
        { id: 34, count: 6, date: 'Week 17, Day 4', level: 3 },
        { id: 35, count: 9, date: 'Week 18, Day 1', level: 3 },
        { id: 36, count: 5, date: 'Week 18, Day 5', level: 2 }
    ];

    const capabilities = [
        {
            category: 'Frontend & Performance',
            proficiency: 96,
            tags: ['React 19', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Redux Toolkit', 'Web Vitals / FCP']
        },
        {
            category: 'Backend & Distributed Systems',
            proficiency: 92,
            tags: ['Node.js', 'Express 5', 'REST APIs', 'GraphQL', 'WebSockets', 'JWT / OAuth']
        },
        {
            category: 'Databases & Infrastructure',
            proficiency: 88,
            tags: ['MongoDB Atlas', 'PostgreSQL', 'Redis Cache', 'Docker', 'AWS S3/EC2', 'Netlify CI']
        }
    ];

    const timelineCommits = [
        {
            hash: '9c4f2b1',
            branch: 'HEAD -> main',
            date: '2023 — Present',
            role: 'Full-Stack Software Engineer • Systems & Cloud Solutions',
            badge: 'Promoted to Core Ingest Systems Lead',
            badgeType: 'cyan',
            bullets: [
                'Architected and deployed high-throughput MERN microservices handling over 5M+ daily requests with 99.98% SLA reliability.',
                'Reduced frontend bundle latency by 42% by migrating critical views to React 19 concurrent boundaries and asset streaming.',
                'Spearheaded automated CI/CD deployment pipelines on Netlify and Docker containers with strict integration test gates.'
            ]
        },
        {
            hash: '4a81c7e',
            branch: 'v1.4.0-prod',
            date: '2022 — 2023',
            role: 'Frontend & API Developer • NextGen Digital Systems',
            badge: 'Core SPA Architect',
            badgeType: 'amber',
            bullets: [
                'Developed robust web applications with responsive fluid layouts, CSS Modules, and strict accessibility compliance (WCAG AA).',
                'Designed normalized MongoDB schemas and Redis caching layers that lowered read latency on heavy dashboard queries by 60%.',
                'Engineered end-to-end authentication protocols using JWT token rotation, HTTP-only cookie security, and role-based access control.'
            ]
        },
        {
            hash: '2e09d81',
            branch: 'v1.0.0-init',
            date: '2020 — 2024',
            role: 'Computer Science & Engineering • System Fundamentals',
            badge: 'DSA & Algorithmic Foundations',
            badgeType: 'gold',
            bullets: [
                'Solved 400+ Data Structures & Algorithms challenges across LeetCode & GeeksforGeeks in Java (Arrays, DP, Graphs, Trees, System Design).',
                'Engineered foundational full-stack web applications featuring secure RESTful endpoints, clean state management, and modern responsive UI.',
                'Mastered core computer science pillars: Operating Systems, Database Management Systems, Computer Networks, and OOP Architecture.'
            ]
        }
    ];

    return (
        <section className={styles.timelineSection} id="engineering-timeline">
            <div className={styles.container}>
                
                {/* 1. SECTION: TELEMETRY & CAPABILITIES MATRIX */}
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionTag}>// 02. TELEMETRY & CAPABILITIES MATRIX</span>
                    <h2 className={styles.sectionTitle}>Production Skills & Live Telemetry</h2>
                    <p className={styles.sectionDesc}>
                        Continuous benchmarking across core technical domains and deployment infrastructure.
                    </p>
                </div>

                <div className={styles.telemetryGrid}>
                    {/* Left Card: Engineering Pulse */}
                    <div className={styles.telemetryCard}>
                        <div className={styles.cardHeader}>
                            <div className={styles.headerLeft}>
                                <span className={styles.pulseGreenDot}></span>
                                <span className={styles.cardHeaderTitle}>ENGINEERING PULSE</span>
                            </div>
                            <span className={styles.statusPillGreen}>CI/CD ACTIVE</span>
                        </div>

                        <div className={styles.metricsGrid}>
                            <div className={styles.metricItem}>
                                <span className={styles.metricLabel}>TEST COVERAGE</span>
                                <div className={styles.metricValGreen}>98.4%</div>
                                <span className={styles.metricSub}>Jest • Cypress • PyTest</span>
                            </div>

                            <div className={styles.metricItem}>
                                <span className={styles.metricLabel}>BUILD LATENCY</span>
                                <div className={styles.metricValAmber}>1.2s avg</div>
                                <span className={styles.metricSub}>Vite ESBuild Cache</span>
                            </div>

                            <div className={styles.metricItem}>
                                <span className={styles.metricLabel}>TOTAL COMMITS</span>
                                <div className={styles.metricValWhite}>1,840+</div>
                                <span className={styles.metricSub}>Last 12 Months</span>
                            </div>

                            <div className={styles.metricItem}>
                                <span className={styles.metricLabel}>PROD INCIDENTS</span>
                                <div className={styles.metricValGreen}>0 (P0/P1)</div>
                                <span className={styles.metricSub}>Zero critical SLA slips</span>
                            </div>
                        </div>

                        {/* Activity Heatmap */}
                        <div className={styles.heatmapSection}>
                            <div className={styles.heatmapHeader}>
                                <span className={styles.heatmapTag}>// ACTIVITY_HEATMAP (SIMULATED)</span>
                                {hoveredCell && (
                                    <span className={styles.heatmapTooltip}>
                                        {hoveredCell.count} commits on {hoveredCell.date}
                                    </span>
                                )}
                            </div>
                            <div className={styles.heatmapMatrix}>
                                {heatmapData.map((cell) => (
                                    <div
                                        key={cell.id}
                                        className={`${styles.heatCell} ${styles[`level${cell.level}`]}`}
                                        onMouseEnter={() => setHoveredCell(cell)}
                                        onMouseLeave={() => setHoveredCell(null)}
                                        title={`${cell.count} commits (${cell.date})`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Card: Technical Capabilities Matrix */}
                    <div className={styles.telemetryCard}>
                        <div className={styles.cardHeader}>
                            <div className={styles.headerLeft}>
                                <span className={styles.pulseAmberDot}></span>
                                <span className={styles.cardHeaderTitle}>TECHNICAL CAPABILITIES MATRIX</span>
                            </div>
                            <span className={styles.statusPillMuted}>SYSTEM PROTOCOL</span>
                        </div>

                        <div className={styles.capabilitiesList}>
                            {capabilities.map((cap, idx) => (
                                <div key={idx} className={styles.capabilityGroup}>
                                    <div className={styles.capHeader}>
                                        <span className={styles.capCategory}>{cap.category}</span>
                                        <span className={styles.capProficiency}>{cap.proficiency}% Proficiency</span>
                                    </div>

                                    <div className={styles.progressBarTrack}>
                                        <div 
                                            className={styles.progressBarFill} 
                                            style={{ width: `${cap.proficiency}%` }}
                                        />
                                    </div>

                                    <div className={styles.tagsRow}>
                                        {cap.tags.map((tag, tIdx) => (
                                            <span key={tIdx} className={styles.techTag}>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 2. SECTION: CAREER_LOG & COMMITS */}
                <div className={styles.careerLogHeader}>
                    <span className={styles.sectionTag}>// 03. CAREER_LOG & COMMITS</span>
                    <h2 className={styles.sectionTitle}>Engineering Career Timeline</h2>
                    <p className={styles.sectionDesc}>
                        Chronological git log tracking production deliverables, architectural ownership, and promotions.
                    </p>
                </div>

                {/* Git Log Timeline */}
                <div className={styles.timelineTree}>
                    {timelineCommits.map((item, idx) => (
                        <div key={idx} className={styles.timelineEntry}>
                            {/* Branch Node & Line */}
                            <div className={styles.nodeColumn}>
                                <div className={styles.commitNode}>
                                    <span className={styles.innerNodeDot}></span>
                                </div>
                                {idx < timelineCommits.length - 1 && <div className={styles.treeBranchLine}></div>}
                            </div>

                            {/* Commit Entry Card */}
                            <div className={styles.commitCard}>
                                <div className={styles.commitMetaBar}>
                                    <div className={styles.commitHashGroup}>
                                        <span className={styles.commitKeyword}>commit</span>
                                        <span className={styles.commitHash}>{item.hash}</span>
                                        <span className={styles.branchTag}>[{item.branch}]</span>
                                    </div>
                                    <span className={styles.commitDate}>{item.date}</span>
                                </div>

                                <h3 className={styles.roleTitle}>{item.role}</h3>

                                <div className={styles.badgeWrapper}>
                                    <span className={`${styles.achievementBadge} ${styles[item.badgeType]}`}>
                                        {item.badge}
                                    </span>
                                </div>

                                <ul className={styles.bulletsList}>
                                    {item.bullets.map((bullet, bIdx) => (
                                        <li key={bIdx} className={styles.bulletItem}>
                                            <span className={styles.bulletPoint}>•</span>
                                            <span className={styles.bulletText}>{bullet}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default EngineeringTimeline;
