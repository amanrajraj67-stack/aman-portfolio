import React, { useState, useEffect } from 'react';
import styles from '../styles/components/Achievements.module.css';
import { FaTimes, FaChevronLeft, FaChevronRight, FaTrophy, FaCode, FaCertificate, FaMedal, FaStar, FaRocket, FaExternalLinkAlt, FaBrain } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { useData } from '../context/DataContext';
import portfolioConfig from '../config/portfolioConfig';
import { getFileURL, FALLBACK_IMAGE } from '../utils/urlHelper';

const Achievements = () => {
    const { achievements } = useData();
    const [activeFilter, setActiveFilter] = useState('All');
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [currentImages, setCurrentImages] = useState([]);
    const [activeNodeId, setActiveNodeId] = useState(null);

    // Sort strictly in ASCENDING order of date (earliest -> latest)
    const sortedAchievements = [...achievements]
        .filter(item => activeFilter === 'All' ? true : item.category === activeFilter)
        .sort((a, b) => new Date(a.date) - new Date(b.date));

    // Handle keyboard navigation for lightbox
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!lightboxOpen) return;

            if (e.key === 'Escape') {
                closeLightbox();
            } else if (e.key === 'ArrowLeft') {
                navigateImage(-1);
            } else if (e.key === 'ArrowRight') {
                navigateImage(1);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [lightboxOpen, currentImageIndex, currentImages]);

    const openLightbox = (images, index) => {
        const processedImages = images.map(img => ({
            ...img,
            url: getFileURL(img.url)
        }));
        setCurrentImages(processedImages);
        setCurrentImageIndex(index);
        setCurrentImage(processedImages[index]);
        setLightboxOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
        setCurrentImage(null);
        setCurrentImages([]);
        setCurrentImageIndex(0);
        document.body.style.overflow = 'auto';
    };

    const navigateImage = (direction) => {
        const newIndex = (currentImageIndex + direction + currentImages.length) % currentImages.length;
        setCurrentImageIndex(newIndex);
        setCurrentImage(currentImages[newIndex]);
    };

    const getCategoryIcon = (category) => {
        switch (category?.toLowerCase()) {
            case 'hackathon':
                return <FaTrophy />;
            case 'leetcode':
                return <FaCode />;
            case 'certification':
                return <FaCertificate />;
            case 'award':
                return <FaMedal />;
            default:
                return <FaStar />;
        }
    };

    // Calculate winding S-curve position: Left, Center-Left, Center-Right, Right
    const getNodePositionClass = (index) => {
        const pattern = ['posLeft', 'posCenterLeft', 'posRight', 'posCenterRight'];
        return styles[pattern[index % pattern.length]];
    };

    return (
        <section className={styles.achievementsSection} id="achievements">
            <div className={styles.container}>
                {/* Clean Aesthetic Header */}
                <div className={`${styles.sectionHeader} animate-on-scroll`}>
                    <h2 className={styles.title}>Achievements & Milestones</h2>
                    <p className={styles.subtitle}>
                        Chronological journey through competitions, coding milestones, and recognitions.
                    </p>
                </div>

                {/* Filter Controls */}
                <div className={styles.filterContainer}>
                    {['All', 'Hackathon', 'LeetCode', 'Certification', 'Award'].map(filter => (
                        <button
                            key={filter}
                            className={`${styles.filterBtn} ${activeFilter === filter ? styles.active : ''}`}
                            onClick={() => setActiveFilter(filter)}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                {/* Aesthetic Level Map Road or WIP Showcase */}
                {sortedAchievements.length === 0 ? (
                    <div className={styles.wipContainer}>
                        <div className={styles.wipBanner}>
                            <div className={styles.wipBadge}>
                                <span className={styles.wipPulse}></span>
                                <span>MILESTONE ENGINE: ACTIVE GRIND</span>
                            </div>
                            <h3 className={styles.wipTitle}>Unlocking Engineering Milestones</h3>
                            <p className={styles.wipDescription}>
                                Actively solving algorithmic challenges in Java, practicing pattern recognition on LeetCode, and engineering full-stack systems. Verified credentials and contest achievements will appear here as they unlock.
                            </p>

                            <div className={styles.wipCardsGrid}>
                                {/* LeetCode Card */}
                                <div className={styles.wipCard}>
                                    <div className={styles.wipCardHeader}>
                                        <div className={styles.wipCardIconWrapper}>
                                            <SiLeetcode style={{ color: '#f59e0b' }} />
                                        </div>
                                        <span className={styles.wipCardBadge}>Daily Practice</span>
                                    </div>
                                    <h4 className={styles.wipCardTitle}>LeetCode & Problem Solving</h4>
                                    <p className={styles.wipCardText}>
                                        Approaching unfamiliar problems with a pattern-first mindset using Java: Two Pointers, Sliding Window, Dynamic Programming, Trees, and Graphs.
                                    </p>
                                    <div className={styles.wipStatsGroup}>
                                        <div className={styles.wipStatBox}>
                                            <span className={styles.wipStatLabel}>Language</span>
                                            <span className={styles.wipStatVal}>Java</span>
                                        </div>
                                        <div className={styles.wipStatBox}>
                                            <span className={styles.wipStatLabel}>Focus</span>
                                            <span className={styles.wipStatVal}>Patterns & Complexity</span>
                                        </div>
                                        <div className={styles.wipStatBox}>
                                            <span className={styles.wipStatLabel}>Profile</span>
                                            <span className={styles.wipStatVal}>aman_raj2025</span>
                                        </div>
                                    </div>
                                    <a
                                        href={portfolioConfig.socialLinks?.leetcode || 'https://leetcode.com/u/aman_raj2025/'}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.wipCardBtn}
                                    >
                                        <span>View LeetCode Activity</span>
                                        <FaExternalLinkAlt />
                                    </a>
                                </div>

                                {/* Milestones Roadmap Card */}
                                <div className={styles.wipCard}>
                                    <div className={styles.wipCardHeader}>
                                        <div className={styles.wipCardIconWrapper}>
                                            <FaTrophy style={{ color: '#f5d061' }} />
                                        </div>
                                        <span className={styles.wipCardBadge}>Milestone Roadmap</span>
                                    </div>
                                    <h4 className={styles.wipCardTitle}>Upcoming Milestones</h4>
                                    <div className={styles.roadmapList}>
                                        <div className={styles.roadmapRow}>
                                            <span className={styles.roadmapNumber}>01</span>
                                            <div className={styles.roadmapMeta}>
                                                <span className={styles.roadmapName}>DSA Pattern Mastery in Java</span>
                                                <span className={styles.roadmapSub}>Arrays, Two Pointers, Trees, Graphs, DP</span>
                                            </div>
                                            <span className={styles.statusActive}>ACTIVE 🔥</span>
                                        </div>
                                        <div className={styles.roadmapRow}>
                                            <span className={styles.roadmapNumber}>02</span>
                                            <div className={styles.roadmapMeta}>
                                                <span className={styles.roadmapName}>Full-Stack Production System</span>
                                                <span className={styles.roadmapSub}>End-to-end MERN cloud deployment</span>
                                            </div>
                                            <span className={styles.statusBuilding}>BUILDING ⚡</span>
                                        </div>
                                        <div className={styles.roadmapRow}>
                                            <span className={styles.roadmapNumber}>03</span>
                                            <div className={styles.roadmapMeta}>
                                                <span className={styles.roadmapName}>Contests & Hackathons</span>
                                                <span className={styles.roadmapSub}>Competitive ratings & hackathon entries</span>
                                            </div>
                                            <span className={styles.statusQueued}>ROADMAP 🎯</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className={styles.levelMapContainer}>
                        {/* Glowing Track Line in Background */}
                        <div className={styles.roadTrackLine} />

                        <div className={styles.roadMapNodes}>
                            {sortedAchievements.map((item, index) => {
                                const levelNumber = String(index + 1).padStart(2, '0');
                                const isLatest = index === sortedAchievements.length - 1;
                                const isSelected = activeNodeId === (item._id || index);

                                return (
                                    <div
                                        key={item._id || index}
                                        className={`${styles.mapNodeRow} ${getNodePositionClass(index)} animate-on-scroll`}
                                        onClick={() => setActiveNodeId(isSelected ? null : (item._id || index))}
                                    >
                                        {/* Level Node Token */}
                                        <div className={styles.nodeAnchor}>
                                            {/* Player Pin on Latest Level */}
                                            {isLatest && (
                                                <div className={styles.playerPin}>
                                                    <div className={styles.playerAvatar}>
                                                        <FaRocket />
                                                    </div>
                                                    <div className={styles.playerTag}>Current</div>
                                                </div>
                                            )}

                                            {/* Aesthetic Frosted Glass Level Node Token */}
                                            <div className={styles.levelCircle}>
                                                <div className={styles.nodeNumber}>'{levelNumber}</div>
                                                <div className={styles.nodeIcon}>
                                                    {getCategoryIcon(item.category)}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Floating Content Card */}
                                        <div className={`${styles.nodeCard} ${isSelected ? styles.cardOpen : ''}`}>
                                            <div className={styles.cardGlowBorder} />
                                            <div className={styles.cardHeaderRow}>
                                                <span className={styles.categoryBadge}>{item.category}</span>
                                                <span className={styles.dateBadge}>
                                                    {new Date(item.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                                                </span>
                                            </div>

                                            <h3 className={styles.itemTitle}>{item.title}</h3>
                                            <div className={styles.issuerRow}>
                                                <span className={styles.issuerName}>{item.issuer}</span>
                                            </div>

                                            <p className={styles.itemDescription}>{item.description}</p>

                                            {item.images && item.images.length > 0 && (
                                                <div className={styles.photosThumbRow}>
                                                    {item.images.slice(0, 3).map((img, imgIdx) => (
                                                        <div 
                                                            key={imgIdx} 
                                                            className={styles.thumbWrapper}
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                openLightbox(item.images, imgIdx);
                                                            }}
                                                        >
                                                            <img 
                                                                src={getFileURL(img.url)} 
                                                                alt={`${item.title} - ${imgIdx + 1}`} 
                                                                className={styles.thumbImage}
                                                                loading="lazy"
                                                                onError={(e) => {
                                                                    e.target.onerror = null;
                                                                    e.target.src = FALLBACK_IMAGE;
                                                                }}
                                                            />
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>

            {/* Lightbox Modal */}
            {lightboxOpen && (
                <div className={styles.lightbox} onClick={closeLightbox}>
                    <button className={styles.closeBtn} onClick={closeLightbox} aria-label="Close Lightbox">
                        <FaTimes />
                    </button>

                    {currentImages.length > 1 && (
                        <>
                            <button
                                className={`${styles.navBtn} ${styles.prevBtn}`}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    navigateImage(-1);
                                }}
                                aria-label="Previous image"
                            >
                                <FaChevronLeft />
                            </button>
                            <button
                                className={`${styles.navBtn} ${styles.nextBtn}`}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    navigateImage(1);
                                }}
                                aria-label="Next image"
                            >
                                <FaChevronRight />
                            </button>
                        </>
                    )}

                    <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
                        <img 
                            src={currentImage?.url} 
                            alt="Achievement Lightbox" 
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = FALLBACK_IMAGE;
                            }}
                        />
                        {currentImages.length > 1 && (
                            <div className={styles.imageCounter}>
                                {currentImageIndex + 1} / {currentImages.length}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </section>
    );
};

export default Achievements;
