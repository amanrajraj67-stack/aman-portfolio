import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FeaturedProjects from '../components/FeaturedProjects';
import RecentBlogs from '../components/RecentBlogs';
import EngineeringTimeline from '../components/EngineeringTimeline';
import About from '../components/About';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import ScrollProgress from '../components/ScrollProgress';
import ScrollToTop from '../components/ScrollToTop';
import useScrollAnimation from '../hooks/useScrollAnimation';
import styles from '../styles/pages/Home.module.css';

const Home = () => {
    useScrollAnimation({ threshold: 0.15, triggerOnce: true });

    // Interactive cursor spotlight tracking across the background grid
    useEffect(() => {
        let rafId;
        const handlePointerMove = (e) => {
            cancelAnimationFrame(rafId);
            rafId = requestAnimationFrame(() => {
                document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
                document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
            });
        };

        window.addEventListener('pointermove', handlePointerMove, { passive: true });
        return () => {
            window.removeEventListener('pointermove', handlePointerMove);
            cancelAnimationFrame(rafId);
        };
    }, []);

    return (
        <div className={styles.home}>
            <ScrollProgress />
            <Navbar />
            <main>
                <Hero />
                <FeaturedProjects />
                <RecentBlogs />
                <EngineeringTimeline />
                <About />
                <ContactForm />
            </main>
            <Footer />
            <ScrollToTop />
        </div>
    );
};

export default Home;
