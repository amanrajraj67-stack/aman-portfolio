import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaCopy, FaCheck } from 'react-icons/fa';
import portfolioConfig from '../config/portfolioConfig';
import styles from '../styles/components/ContactForm.module.css';

const ContactForm = () => {
    const [copiedField, setCopiedField] = useState('');

    const phone = portfolioConfig.contact?.phone || '';
    const formattedPhone = portfolioConfig.contact?.formattedPhone || (phone ? `+${phone}` : 'Available on request');
    const email = portfolioConfig.contact?.email || portfolioConfig.socialLinks?.email || 'contact@example.com';
    const location = portfolioConfig.contact?.location || 'Available remotely';
    const timezone = portfolioConfig.contact?.timezone || 'UTC';

    const handleCopy = (text, fieldName) => {
        if (!text) return;
        navigator.clipboard.writeText(text);
        setCopiedField(fieldName);
        setTimeout(() => setCopiedField(''), 2000);
    };

    return (
        <section className={styles.contactSection} id="contact">
            <div className={styles.container}>
                {/* Section Header */}
                <div className={`${styles.sectionHeader} animate-on-scroll`}>
                    <div className={styles.badge}>
                        <span className={styles.liveDot}></span> DIRECT REACH
                    </div>
                    <h2 className={styles.title}>Let's Connect</h2>
                    <p className={styles.subtitle}>
                        Have an opportunity, collaboration idea, or question? Reach out directly.
                    </p>
                </div>

                {/* macOS Style Contact Window */}
                <div className={`${styles.macWindow} animate-on-scroll`}>
                    {/* macOS Titlebar */}
                    <div className={styles.macTitlebar}>
                        <div className={styles.trafficLights}>
                            <span className={`${styles.dot} ${styles.dotRed}`}></span>
                            <span className={`${styles.dot} ${styles.dotYellow}`}></span>
                            <span className={`${styles.dot} ${styles.dotGreen}`}></span>
                        </div>
                        <div className={styles.windowTitle}>
                            <span>contact.json</span>
                        </div>
                        <div className={styles.statusBadge}>
                            <span className={styles.pulseDot}></span>
                            <span>Open for Opportunities</span>
                        </div>
                    </div>

                    {/* Window Sub-Bar (Location) */}
                    <div className={styles.macSubBar}>
                        <div className={styles.locationTag}>
                            <FaMapMarkerAlt className={styles.mapIcon} />
                            <span>{location}</span>
                        </div>
                        <div className={styles.timezoneTag}>
                            <span>{timezone}</span>
                        </div>
                    </div>

                    {/* Window Body Channels */}
                    <div className={styles.windowBody}>
                        <div className={styles.channelsGrid}>
                            {/* Phone & WhatsApp Card */}
                            <div className={styles.channelCard}>
                                <div className={styles.channelHeader}>
                                    <div className={`${styles.channelIconBox} ${styles.phoneIconBox}`}>
                                        <FaPhoneAlt />
                                    </div>
                                    <div className={styles.channelMeta}>
                                        <span className={styles.channelLabel}>PHONE & WHATSAPP</span>
                                        {phone ? (
                                            <a href={`tel:${phone}`} className={styles.channelValue}>
                                                {formattedPhone}
                                            </a>
                                        ) : (
                                            <span className={styles.channelValue}>{formattedPhone}</span>
                                        )}
                                    </div>
                                </div>

                                <div className={styles.channelActions}>
                                    {phone ? (
                                        <>
                                            <a href={`tel:${phone}`} className={styles.actionBtnPrimary}>
                                                <FaPhoneAlt /> Call
                                            </a>
                                            <a
                                                href={`https://wa.me/${phone.replace(/[^0-9]/g, '')}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={styles.actionBtnWhatsapp}
                                            >
                                                <FaWhatsapp /> WhatsApp
                                            </a>
                                            <button
                                                className={`${styles.actionBtnCopy} ${copiedField === 'phone' ? styles.copied : ''}`}
                                                onClick={() => handleCopy(phone, 'phone')}
                                                title="Copy Number"
                                            >
                                                {copiedField === 'phone' ? (
                                                    <>
                                                        <FaCheck className={styles.checkIcon} /> <span>Copied</span>
                                                    </>
                                                ) : (
                                                    <>
                                                        <FaCopy /> <span>Copy</span>
                                                    </>
                                                )}
                                            </button>
                                        </>
                                    ) : (
                                        <span className={styles.actionBtnPrimary} style={{ opacity: 0.7, cursor: 'default' }}>
                                            Connect via Email
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* Email Channel Card */}
                            <div className={styles.channelCard}>
                                <div className={styles.channelHeader}>
                                    <div className={`${styles.channelIconBox} ${styles.emailIconBox}`}>
                                        <FaEnvelope />
                                    </div>
                                    <div className={styles.channelMeta}>
                                        <span className={styles.channelLabel}>EMAIL ADDRESS</span>
                                        <a href={`mailto:${email}`} className={styles.channelValue}>
                                            {email}
                                        </a>
                                    </div>
                                </div>

                                <div className={styles.channelActions}>
                                    <a href={`mailto:${email}`} className={styles.actionBtnPrimary}>
                                        <FaEnvelope /> Send Email
                                    </a>
                                    <button
                                        className={`${styles.actionBtnCopy} ${copiedField === 'email' ? styles.copied : ''}`}
                                        onClick={() => handleCopy(email, 'email')}
                                        title="Copy Email"
                                    >
                                        {copiedField === 'email' ? (
                                            <>
                                                <FaCheck className={styles.checkIcon} /> <span>Copied</span>
                                            </>
                                        ) : (
                                            <>
                                                <FaCopy /> <span>Copy</span>
                                            </>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
