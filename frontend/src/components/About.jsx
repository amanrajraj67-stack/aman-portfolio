import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import portfolioConfig from '../config/portfolioConfig';
import styles from '../styles/components/About.module.css';

const About = () => {
    useScrollAnimation({ threshold: 0.1 });

    const timelineData = portfolioConfig.about?.timeline || [];

    return (
        <section className={styles.aboutSection} id="about">
            <div className={styles.container}>
                <div className={`${styles.sectionHeader} animate-on-scroll`}>
                    <h2 className={styles.title}>{portfolioConfig.about?.title || 'About Me'}</h2>
                    <p className={styles.subtitle}>
                        {portfolioConfig.about?.subtitle || 'My professional journey and background'}
                    </p>
                </div>

                <div className={styles.timeline}>
                    {timelineData.length > 0 ? (
                        timelineData.map((item, index) => (
                            <div
                                key={index}
                                className={`${styles.timelineItem} animate-on-scroll`}
                                style={{ transitionDelay: `${index * 200}ms` }}
                            >
                                <div className={styles.timelineDot}></div>
                                <div className={styles.timelineContent}>
                                    <span className={styles.date}>{item.year}</span>
                                    <h3 className={styles.itemTitle}>{item.title}</h3>
                                    {item.institution && <div className={styles.institution}>{item.institution}</div>}
                                    <p className={styles.description}>{item.description}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className={`${styles.timelineItem} animate-on-scroll`}>
                            <div className={styles.timelineDot}></div>
                            <div className={styles.timelineContent}>
                                <span className={styles.date}>Present</span>
                                <h3 className={styles.itemTitle}>Full-Stack Development</h3>
                                <div className={styles.institution}>MERN Stack & Modern Web</div>
                                <p className={styles.description}>
                                    Designing and building responsive, full-stack applications with MongoDB, Express.js, React, and Node.js. Focused on writing scalable code, clean APIs, and modern user experiences.
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default About;
