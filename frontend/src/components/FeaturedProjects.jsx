import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { useData } from '../context/DataContext';
import ProjectCard from './ProjectCard';
import styles from '../styles/components/FeaturedProjects.module.css';

const FeaturedProjects = () => {
    const { projects, loadingProjects } = useData() || {};

    if (loadingProjects) {
        return null;
    }

    const featured = projects && projects.length > 0 ? projects.slice(0, 3) : [];

    if (featured.length === 0) {
        return null;
    }

    return (
        <section className={styles.featuredSection} id="projects">
            <div className="container">
                <div className={styles.sectionHeader}>
                    <div className="sectionBadge">✦ Selected Works</div>
                    <h2 className={styles.title}>Featured Projects</h2>
                    <p className={styles.subtitle}>Production-ready web applications, APIs, and digital systems</p>
                </div>

                <div className={styles.projectsGrid}>
                    {featured.map((project) => (
                        <ProjectCard key={project._id} project={project} />
                    ))}
                </div>

                <div className={styles.viewAllContainer}>
                    <Link to="/projects" className={styles.viewAllBtn}>
                        <span>Explore All Projects</span>
                        <FaArrowRight className={styles.arrowIcon} />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProjects;
