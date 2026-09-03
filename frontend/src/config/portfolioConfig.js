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
    

    // Social and coding platforms
    // Fill in your profile URLs below. Empty entries are safely handled.
    socialLinks: {
        github: 'https://github.com/amanrajraj67-stack',
        linkedin: 'https://www.linkedin.com/in/aman-raj-267b8b332',
        leetcode: 'https://leetcode.com/u/aman_raj2025/',
        codeforces: '',
        instagram: '',
        email: 'amanrajraj67@gmail.com'
    },

    // Direct contact channels (shown on the Contact section)
    contact: {
        phone: '+917979785914',
        formattedPhone: '+91 79797 85914',
        email: 'amanrajraj67@gmail.com',
        location: 'Available Remotely',
        timezone: 'IST (UTC+5:30)'
    },

    // About & Journey Information
    about: {
        title: 'Engineering Journey & Focus',
        subtitle: 'CSE Student • Full-Stack Developer • Problem Solver',
        intro: 'CSE student focused on becoming a strong software engineer, with a growing foundation in full-stack development and data structures & algorithms.',
        dsa: {
            title: 'DSA / Problem Solving',
            description: 'I regularly practice Data Structures & Algorithms using Java, focusing not just on solving problems but on understanding patterns, optimizing solutions, and developing the ability to approach unfamiliar problems.',
            language: 'Java',
            patterns: ['Arrays & Hashing', 'Two Pointers & Sliding Window', 'Binary Search', 'Trees & Graphs (BFS/DFS)', 'Dynamic Programming', 'Recursion & Backtracking'],
            leetcodeUrl: 'https://leetcode.com/u/aman_raj2025/',
            leetcodeHandle: 'aman_raj2025'
        },
        fullstack: {
            title: 'Full-Stack Web Development',
            subtitle: 'MERN Stack & Modern Web Architecture',
            description: 'Designing and building responsive, full-stack applications with MongoDB, Express.js, React, and Node.js. Focused on writing scalable code, clean APIs, and modern user experiences.',
            stack: ['React 19', 'Node.js', 'Express 5', 'MongoDB Atlas', 'REST APIs', 'JWT Auth', 'Tailwind CSS', 'Cloudinary CDN']
        },
        fundamentals: {
            title: 'Core CS Fundamentals',
            topics: [
                'Object-Oriented Programming (Java)',
                'Database Management Systems (DBMS)',
                'Operating Systems & Concurrency',
                'Computer Networks & Protocols'
            ]
        },
        vision: {
            title: "What I'm Aiming For",
            description: 'My long-term goal is to become a highly capable software engineer with strong problem-solving skills, solid engineering fundamentals, and the ability to build reliable real-world software.'
        }
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
