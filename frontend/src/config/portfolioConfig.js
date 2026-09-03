/**
 * Portfolio Configuration & Profile Data
 * 
 * Customize your personal details, titles, links, and content here.
 * Any empty fields will be safely hidden or replaced with clean defaults.
 */

export const portfolioConfig = {
    // Personal Information
    name: 'Aman',
    lastName: '',
    role: 'Full-Stack Developer',
    titles: [
        'Full-Stack Developer',
        'Software Engineer',
        'Problem Solver',
        'API & Backend Specialist'
    ],
    greeting: "Hello, I'm",
    tagline: 'code — deploy — repeat',
    description: 'Building modern web applications, scalable APIs, and clean digital experiences.',
    
    // Path to your resume file (located in frontend/public/)
    resumeUrl: '/resume.pdf',

    // Social and coding platforms
    // Fill in your profile URLs below. Empty entries are safely handled.
    socialLinks: {
        github: '',      // e.g. 'https://github.com/your-username'
        linkedin: '',    // e.g. 'https://linkedin.com/in/your-username'
        leetcode: '',    // e.g. 'https://leetcode.com/u/your-username'
        codeforces: '',  // e.g. 'https://codeforces.com/profile/your-username'
        instagram: '',   // e.g. 'https://instagram.com/your-username'
        email: ''        // e.g. 'your.email@example.com'
    },

    // Direct contact channels (shown on the Contact section)
    contact: {
        phone: '',              // e.g. '9876543210'
        formattedPhone: '',     // e.g. '+91 98765 43210'
        email: '',              // e.g. 'your.email@example.com'
        location: 'Earth',
        timezone: 'UTC'
    },

    // About & Journey timeline
    about: {
        title: 'About Me',
        subtitle: 'My professional journey and background',
        // Add your milestones here
        timeline: []
    },

    // Interactive Terminal Profile (shown in Hero code editor)
    terminalProfile: {
        user: 'aman@dev',
        name: 'Aman',
        role: 'Full-Stack Developer',
        location: 'Earth',
        status: 'Available for opportunities 🚀',
        openToWork: true
    }
};

export default portfolioConfig;
