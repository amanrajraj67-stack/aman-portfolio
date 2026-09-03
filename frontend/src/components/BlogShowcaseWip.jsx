import React from 'react';
import { FaBookOpen, FaExternalLinkAlt, FaClock, FaCalendar, FaLinkedin } from 'react-icons/fa';
import portfolioConfig from '../config/portfolioConfig';
import styles from '../styles/components/BlogShowcaseWip.module.css';

const BlogShowcaseWip = ({ isHomePage = false }) => {
    const upcomingArticles = [
        {
            title: 'Mastering Two Pointers & Sliding Window in Java',
            category: 'DSA & ALGORITHMS',
            readTime: '8 min read',
            status: 'Drafting ⏳',
            excerpt: 'A pattern-first approach to tackling complex array and string interview problems without memorization.',
            tags: ['Java', 'Patterns', 'O(n) Complexity']
        },
        {
            title: 'Bulletproof JWT Authentication in Express 5',
            category: 'BACKEND & SECURITY',
            readTime: '10 min read',
            status: 'Review ⏳',
            excerpt: 'Implementing secure HTTP-only cookies, token rotation, and robust error middleware in Node.js.',
            tags: ['Express 5', 'JWT', 'Security']
        },
        {
            title: 'Why Vite 7 + React 19 Delivers Instant Performance',
            category: 'MODERN WEB',
            readTime: '6 min read',
            status: 'Final Polish ⏳',
            excerpt: 'Deep dive into modern bundling, ES modules, server actions, and building zero-bloat user interfaces.',
            tags: ['React 19', 'Vite 7', 'Optimization']
        }
    ];

    return (
        <div className={styles.wipBlogContainer}>
            <div className={styles.wipBlogCard}>
                <div className={styles.wipTopBar}>
                    <div className={styles.wipBadge}>
                        <span className={styles.pulseDot}></span>
                        <span>EDITORIAL DESK: IN ACTIVE DRAFT</span>
                    </div>
                    <span className={styles.wipNote}>Publishing Soon</span>
                </div>

                <h3 className={styles.wipTitle}>Engineering Logs & Tech Insights</h3>
                <p className={styles.wipDesc}>
                    Currently authoring technical deep dives breaking down real-world MERN architectures, Java algorithmic patterns, and high-performance web systems. Initial editions are being finalized.
                </p>

                {/* Upcoming Articles Teaser Grid */}
                <div className={styles.articlesGrid}>
                    {upcomingArticles.map((article, idx) => (
                        <div key={idx} className={styles.articleCard}>
                            <div className={styles.articleHeader}>
                                <span className={styles.categoryBadge}>{article.category}</span>
                                <span className={styles.statusBadge}>{article.status}</span>
                            </div>

                            <h4 className={styles.articleTitle}>{article.title}</h4>
                            <p className={styles.articleExcerpt}>{article.excerpt}</p>

                            <div className={styles.articleFooter}>
                                <div className={styles.tagsRow}>
                                    {article.tags.map((tag, tIdx) => (
                                        <span key={tIdx} className={styles.tagPill}>{tag}</span>
                                    ))}
                                </div>
                                <span className={styles.readTime}>
                                    <FaClock style={{ marginRight: '4px' }} /> {article.readTime}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* LinkedIn Call to Action */}
                <div className={styles.actionRow}>
                    <a
                        href={portfolioConfig.socialLinks?.linkedin || 'https://www.linkedin.com/in/aman-raj-267b8b332'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.linkedinBtn}
                    >
                        <FaLinkedin /> Connect on LinkedIn for Article Alerts <FaExternalLinkAlt style={{ fontSize: '0.75rem' }} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default BlogShowcaseWip;
