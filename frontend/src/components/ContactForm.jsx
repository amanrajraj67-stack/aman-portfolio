import React, { useState } from 'react';
import { 
    FaPhoneAlt, 
    FaEnvelope, 
    FaWhatsapp, 
    FaCopy, 
    FaCheck, 
    FaPaperPlane, 
    FaMapMarkerAlt, 
    FaClock, 
    FaGithub, 
    FaLinkedin, 
    FaExternalLinkAlt, 
    FaBolt 
} from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import portfolioConfig from '../config/portfolioConfig';
import styles from '../styles/components/ContactForm.module.css';

const ContactForm = () => {
    const [selectedTopic, setSelectedTopic] = useState('Full-Time Role');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('Hi Aman, I came across your portfolio and would like to discuss an opportunity with you.');
    const [copiedField, setCopiedField] = useState('');

    const phone = portfolioConfig.contact?.phone || '+917979785914';
    const formattedPhone = portfolioConfig.contact?.formattedPhone || '+91 79797 85914';
    const contactEmail = portfolioConfig.contact?.email || portfolioConfig.socialLinks?.email || 'amanrajraj67@gmail.com';
    const location = portfolioConfig.contact?.location || 'Remote / Worldwide';
    const timezone = portfolioConfig.contact?.timezone || 'IST (UTC+5:30)';

    const topics = [
        { label: '💼 Full-Time Role', preset: 'Hi Aman, we have an exciting software engineering opening and would love to connect with you.' },
        { label: '⚡ Project Collab', preset: 'Hey Aman, I have a project idea and would love to collaborate with you on building it.' },
        { label: '🛠️ Freelance / Contract', preset: 'Hi Aman, I am looking for a full-stack developer to help build our web application.' },
        { label: '☕ Say Hello / Network', preset: 'Hey Aman, really impressed by your portfolio and DSA journey! Just wanted to connect and say hello.' }
    ];

    const handleTopicClick = (topic) => {
        setSelectedTopic(topic.label);
        setMessage(topic.preset);
    };

    const handleCopy = (text, fieldName) => {
        if (!text) return;
        navigator.clipboard.writeText(text);
        setCopiedField(fieldName);
        setTimeout(() => setCopiedField(''), 2000);
    };

    // Open pre-filled email client
    const handleEmailDispatch = (e) => {
        e.preventDefault();
        const subject = encodeURIComponent(`[Portfolio Connect] ${selectedTopic} - from ${name || 'Visitor'}`);
        const body = encodeURIComponent(`Name: ${name || 'N/A'}\nEmail: ${email || 'N/A'}\nTopic: ${selectedTopic}\n\nMessage:\n${message}`);
        window.open(`mailto:${contactEmail}?subject=${subject}&body=${body}`, '_blank');
    };

    // Open WhatsApp with prefilled message
    const handleWhatsAppDispatch = () => {
        const cleanPhone = phone.replace(/[^0-9]/g, '');
        const waText = encodeURIComponent(`*Portfolio Reachout*\n*Name:* ${name || 'Visitor'}\n*Topic:* ${selectedTopic}\n*Message:* ${message}`);
        window.open(`https://wa.me/${cleanPhone}?text=${waText}`, '_blank');
    };

    return (
        <section className={styles.contactSection} id="contact">
            <div className="container">
                {/* Header */}
                <div className={styles.sectionHeader}>
                    <div className="sectionBadge">✦ Initiate Contact</div>
                    <h2 className={styles.title}>Let's Build Something Exceptional</h2>
                    <p className={styles.subtitle}>
                        Have an opportunity, collaboration idea, or question? Send a dispatch or connect across any direct channel.
                    </p>
                </div>

                {/* Main Command Center Grid */}
                <div className={styles.commandCenterGrid}>
                    {/* Left Wing: Interactive Dispatch Console */}
                    <div className={styles.dispatchConsole}>
                        <div className={styles.consoleHeader}>
                            <div className={styles.consoleStatus}>
                                <span className={styles.pulseBeacon}></span>
                                <span className={styles.consoleStatusText}>DISPATCH CONSOLE</span>
                            </div>
                            <span className={styles.responseTime}>⚡ Response: &lt; 24h</span>
                        </div>

                        <div className={styles.consoleBody}>
                            <label className={styles.fieldLabel}>What would you like to discuss?</label>
                            <div className={styles.topicChips}>
                                {topics.map((t, idx) => (
                                    <button
                                        key={idx}
                                        type="button"
                                        className={`${styles.topicChip} ${selectedTopic === t.label ? styles.topicChipActive : ''}`}
                                        onClick={() => handleTopicClick(t)}
                                    >
                                        {t.label}
                                    </button>
                                ))}
                            </div>

                            <form onSubmit={handleEmailDispatch} className={styles.formFields}>
                                <div className={styles.formRow}>
                                    <div className={styles.fieldGroup}>
                                        <label className={styles.inputLabel}>Your Name</label>
                                        <input
                                            type="text"
                                            className={styles.textInput}
                                            placeholder="John Doe"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </div>
                                    <div className={styles.fieldGroup}>
                                        <label className={styles.inputLabel}>Your Email</label>
                                        <input
                                            type="email"
                                            className={styles.textInput}
                                            placeholder="john@example.com"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className={styles.fieldGroup}>
                                    <label className={styles.inputLabel}>Message</label>
                                    <textarea
                                        className={styles.textArea}
                                        rows="4"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        placeholder="Write your message here..."
                                    />
                                </div>

                                <div className={styles.dispatchActions}>
                                    <button type="submit" className={styles.primaryDispatchBtn}>
                                        <FaPaperPlane /> <span>Dispatch Email</span>
                                    </button>
                                    <button
                                        type="button"
                                        className={styles.whatsappDispatchBtn}
                                        onClick={handleWhatsAppDispatch}
                                    >
                                        <FaWhatsapp /> <span>Send via WhatsApp</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Right Wing: Live Direct Channels & Coordinates */}
                    <div className={styles.channelsColumn}>
                        {/* WhatsApp Direct Card */}
                        <div className={styles.channelTile}>
                            <div className={styles.tileHeader}>
                                <div className={styles.tileIconWhatsapp}>
                                    <FaWhatsapp />
                                </div>
                                <div className={styles.tileMeta}>
                                    <span className={styles.tileCategory}>WHATSAPP & PHONE</span>
                                    <a href={`tel:${phone}`} className={styles.tileValue}>
                                        {formattedPhone}
                                    </a>
                                </div>
                                <span className={styles.liveIndicator}>Active</span>
                            </div>

                            <div className={styles.tileActions}>
                                <a
                                    href={`https://wa.me/${phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hi Aman, saw your portfolio and would like to connect!')}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.whatsappBtn}
                                >
                                    <FaWhatsapp /> <span>Chat on WhatsApp</span>
                                </a>
                                <a href={`tel:${phone}`} className={styles.callBtn}>
                                    <FaPhoneAlt /> <span>Call</span>
                                </a>
                                <button
                                    type="button"
                                    className={`${styles.copyBtn} ${copiedField === 'phone' ? styles.copied : ''}`}
                                    onClick={() => handleCopy(phone, 'phone')}
                                    title="Copy Phone"
                                >
                                    {copiedField === 'phone' ? <FaCheck /> : <FaCopy />}
                                </button>
                            </div>
                        </div>

                        {/* Direct Email Card */}
                        <div className={styles.channelTile}>
                            <div className={styles.tileHeader}>
                                <div className={styles.tileIconEmail}>
                                    <FaEnvelope />
                                </div>
                                <div className={styles.tileMeta}>
                                    <span className={styles.tileCategory}>DIRECT INBOX</span>
                                    <a href={`mailto:${contactEmail}`} className={styles.tileValue}>
                                        {contactEmail}
                                    </a>
                                </div>
                            </div>

                            <div className={styles.tileActions}>
                                <a href={`mailto:${contactEmail}`} className={styles.emailBtn}>
                                    <FaEnvelope /> <span>Open Mail Client</span>
                                </a>
                                <button
                                    type="button"
                                    className={`${styles.copyBtn} ${copiedField === 'email' ? styles.copied : ''}`}
                                    onClick={() => handleCopy(contactEmail, 'email')}
                                    title="Copy Email"
                                >
                                    {copiedField === 'email' ? <FaCheck /> : <FaCopy />}
                                </button>
                            </div>
                        </div>

                        {/* Location & Digital Footprint Coordinates */}
                        <div className={styles.coordinatesCard}>
                            <div className={styles.coordinateRow}>
                                <div className={styles.coordItem}>
                                    <FaMapMarkerAlt className={styles.coordIcon} />
                                    <span>{location}</span>
                                </div>
                                <div className={styles.coordItem}>
                                    <FaClock className={styles.coordIcon} />
                                    <span>{timezone}</span>
                                </div>
                            </div>

                            {/* Mini Social Coordinates Bar */}
                            <div className={styles.socialBadgesRow}>
                                {portfolioConfig.socialLinks?.github && (
                                    <a
                                        href={portfolioConfig.socialLinks.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.socialBadge}
                                    >
                                        <FaGithub /> <span>GitHub</span>
                                    </a>
                                )}
                                {portfolioConfig.socialLinks?.linkedin && (
                                    <a
                                        href={portfolioConfig.socialLinks.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.socialBadge}
                                    >
                                        <FaLinkedin /> <span>LinkedIn</span>
                                    </a>
                                )}
                                {portfolioConfig.socialLinks?.leetcode && (
                                    <a
                                        href={portfolioConfig.socialLinks.leetcode}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.socialBadge}
                                    >
                                        <SiLeetcode style={{ color: '#f59e0b' }} /> <span>LeetCode</span>
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
