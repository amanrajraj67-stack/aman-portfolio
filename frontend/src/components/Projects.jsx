import React, { useEffect } from 'react';
import { FaGithub, FaExternalLinkAlt, FaRocket, FaCodeBranch, FaTerminal, FaCheckCircle } from 'react-icons/fa';
import ProjectCard from './ProjectCard';
import styles from '../styles/components/Projects.module.css';
import { useData } from '../context/DataContext';
import portfolioConfig from '../config/portfolioConfig';

const Projects = () => {
    const { projects, refreshProjects } = useData();

    useEffect(() => {
        if (refreshProjects) {
            refreshProjects();
        }
    }, [refreshProjects]);

    return (
        <section className={styles.projectsSection} id="projects">
            <div className="container">
                <div className={styles.sectionHeader}>
                    <div className="sectionBadge">✦ Engineered Systems</div>
                    <h2 className={styles.title}>Featured Projects</h2>
                    <p className={styles.subtitle}>A curated showcase of applications, systems, and creative engineering.</p>
                </div>

                {projects && projects.length > 0 ? (
                    <div className={styles.projectsGrid}>
                        {projects.map((project, index) => (
                            <div key={project._id || index} className={`animate-on-scroll animate-delay-${(index % 3) + 1}`}>
                                <ProjectCard project={project} />
                            </div>
                        ))}
                    </div>
                ) : (
                    /* Entertaining & Visual Build Pipeline Showcase */
                    <div className={styles.wipProjectsContainer}>
                        <div className={styles.wipHeroCard}>
                            <div className={styles.wipTopBar}>
                                <div className={styles.wipStatusPill}>
                                    <span className={styles.pulseDot}></span>
                                    <span>BUILD PIPELINE: COMPILING</span>
                                </div>
                                <span className={styles.wipVersionTag}>Release v1.0.0-rc</span>
                            </div>

                            <h3 className={styles.wipHeroTitle}>Architecting Next-Gen Systems</h3>
                            <p className={styles.wipHeroDesc}>
                                Currently in the lab engineering production-ready MERN web applications, scalable REST APIs, and interactive algorithms. Production deployments and live case studies will drop here shortly.
                            </p>

                            {/* Simulated Live Build Terminal */}
                            <div className={styles.buildConsole}>
                                <div className={styles.consoleHeader}>
                                    <div className={styles.consolePromptBadge}>
                                        <span className={styles.terminalIndicator}>&gt;_</span>
                                        <span className={styles.envTag}>ENV:PROD</span>
                                    </div>
                                    <span className={styles.consoleTitle}>deploy-pipeline.sh</span>
                                </div>
                                <div className={styles.consoleBody}>
                                    <p className={styles.consoleLine}><span className={styles.promptSymbol}>➜</span> <span className={styles.cmdText}>git checkout -b feature/production-release</span></p>
                                    <p className={styles.consoleLine}><span className={styles.promptSymbol}>➜</span> <span className={styles.cmdText}>npm run build:systems</span></p>
                                    <p className={styles.consoleSuccess}>[OK] Frontend SPA (React 19 + Vite 7) compiled in 5.9s</p>
                                    <p className={styles.consoleSuccess}>[OK] Express 5 Gateway verified & secured with JWT</p>
                                    <p className={styles.consoleSuccess}>[OK] MongoDB Atlas replica cluster connected</p>
                                    <p className={styles.consolePending}>⏳ Packaging project assets and live documentation...</p>
                                </div>
                            </div>

                            {/* In-Progress Project Teaser Cards */}
                            <div className={styles.pipelineGrid}>
                                <div className={styles.pipelineCard}>
                                    <div className={styles.cardHeaderRow}>
                                        <span className={styles.categoryBadge}>FULL-STACK MERN</span>
                                        <span className={styles.progressBadge}>85% Complete</span>
                                    </div>
                                    <h4 className={styles.pipelineProjectTitle}>Social & Collaboration Hub</h4>
                                    <p className={styles.pipelineProjectDesc}>
                                        Real-time messaging with WebSockets, JWT authentication, and Cloudinary media upload stream.
                                    </p>
                                    <div className={styles.techTagsRow}>
                                        <span>React 19</span>
                                        <span>Node.js</span>
                                        <span>MongoDB</span>
                                    </div>
                                </div>

                                <div className={styles.pipelineCard}>
                                    <div className={styles.cardHeaderRow}>
                                        <span className={styles.categoryBadge}>ALGORITHMS & DSA</span>
                                        <span className={styles.progressBadge}>70% Complete</span>
                                    </div>
                                    <h4 className={styles.pipelineProjectTitle}>Interactive DSA Visualizer</h4>
                                    <p className={styles.pipelineProjectDesc}>
                                        Step-by-step interactive explorer for Java algorithmic patterns: Tree traversal, Graphs, and Sorting.
                                    </p>
                                    <div className={styles.techTagsRow}>
                                        <span>Java</span>
                                        <span>Canvas API</span>
                                        <span>Patterns</span>
                                    </div>
                                </div>

                                <div className={styles.pipelineCard}>
                                    <div className={styles.cardHeaderRow}>
                                        <span className={styles.categoryBadge}>PORTFOLIO ENGINE</span>
                                        <span className={styles.liveBadge}>Deployed ✨</span>
                                    </div>
                                    <h4 className={styles.pipelineProjectTitle}>Aman Developer Portfolio</h4>
                                    <p className={styles.pipelineProjectDesc}>
                                        Zero-bloat high-performance web portfolio featuring obsidian & gold luxury styling.
                                    </p>
                                    <div className={styles.techTagsRow}>
                                        <span>React 19</span>
                                        <span>CSS3</span>
                                        <span>REST API</span>
                                    </div>
                                </div>
                            </div>

                            {/* Quick Action Buttons */}
                            <div className={styles.actionButtonsRow}>
                                <a
                                    href={portfolioConfig.socialLinks?.github || 'https://github.com/amanrajraj67-stack'}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.githubBtn}
                                >
                                    <FaGithub /> Explore Code on GitHub <FaExternalLinkAlt style={{ fontSize: '0.75rem' }} />
                                </a>
                                <a href="#contact" className={styles.collabBtn}>
                                    Suggest an Idea / Collaborate &rarr;
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;
