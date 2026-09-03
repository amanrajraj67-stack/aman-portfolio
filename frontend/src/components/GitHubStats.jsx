import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import { FaGithub } from 'react-icons/fa';
import portfolioConfig from '../config/portfolioConfig';
import styles from '../styles/components/GitHubStats.module.css';

const GitHubStats = ({ username }) => {
    const activeUsername = username || (portfolioConfig.socialLinks?.github ? portfolioConfig.socialLinks.github.split('/').filter(Boolean).pop() : '');

    if (!activeUsername) {
        return null;
    }

    return (
        <section className={styles.githubSection}>
            <div className="container">
                <div className={styles.sectionHeader}>
                    <h2 className={styles.title}>
                        <FaGithub /> GitHub Activity
                    </h2>
                    <p className={styles.subtitle}>My coding journey visualized</p>
                </div>

                <div className={styles.statsContainer}>
                    {/* GitHub Stats Cards */}
                    <div className={styles.statsGrid}>
                        <div className={styles.statCard}>
                            <img
                                src={`https://github-readme-stats.vercel.app/api?username=${activeUsername}&show_icons=true&theme=radical&hide_border=true&bg_color=0D1117&title_color=60A5FA&icon_color=60A5FA&text_color=F5F5F5`}
                                alt="GitHub Stats"
                                className={styles.statImage}
                            />
                        </div>

                        <div className={styles.statCard}>
                            <img
                                src={`https://github-readme-streak-stats.herokuapp.com/?user=${activeUsername}&theme=radical&hide_border=true&background=0D1117&ring=60A5FA&fire=60A5FA&currStreakLabel=F5F5F5`}
                                alt="GitHub Streak"
                                className={styles.statImage}
                            />
                        </div>
                    </div>

                    {/* Top Languages */}
                    <div className={styles.languagesCard}>
                        <img
                            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${activeUsername}&layout=compact&theme=radical&hide_border=true&bg_color=0D1117&title_color=60A5FA&text_color=F5F5F5`}
                            alt="Top Languages"
                            className={styles.statImage}
                        />
                    </div>

                    {/* Contribution Calendar */}
                    <div className={styles.calendarCard}>
                        <h3 className={styles.calendarTitle}>Contribution Graph</h3>
                        <div className={styles.calendarWrapper}>
                            <GitHubCalendar
                                username={activeUsername}
                                blockSize={12}
                                blockMargin={4}
                                fontSize={14}
                                colorScheme="dark"
                                theme={{
                                    dark: ['#0D1117', '#0e4429', '#006d32', '#26a641', '#39d353']
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GitHubStats;
