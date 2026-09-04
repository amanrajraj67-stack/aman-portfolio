import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import EngineeringTimeline from '../components/EngineeringTimeline';
import Footer from '../components/Footer';
import ScrollProgress from '../components/ScrollProgress';
import ScrollToTop from '../components/ScrollToTop';
import useScrollAnimation from '../hooks/useScrollAnimation';
import styles from '../styles/pages/EngineeringTimelinePage.module.css';

const EngineeringTimelinePage = () => {
    useScrollAnimation({ threshold: 0.15, triggerOnce: true });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.timelinePage}>
            <ScrollProgress />
            <Navbar />
            <main className={styles.mainContent}>
                <div className={styles.pageHeaderBanner}>
                    <div className="container">
                        <div className={styles.headerContent}>
                            <div className={styles.statusPill}>
                                <span className={styles.pulseDot}></span>
                                <span>LIVE GIT REPOSITORY & TELEMETRY STREAM</span>
                            </div>
                            <h1 className={styles.mainTitle}>Engineering Timeline</h1>
                            <p className={styles.mainSubtitle}>
                                An immutable audit trail of production deliverables, core systems engineering, algorithmic milestones, and live capabilities telemetry.
                            </p>
                        </div>
                    </div>
                </div>

                <div className={styles.timelineContainer}>
                    <EngineeringTimeline />
                </div>
            </main>
            <Footer />
            <ScrollToTop />
        </div>
    );
};

export default EngineeringTimelinePage;
