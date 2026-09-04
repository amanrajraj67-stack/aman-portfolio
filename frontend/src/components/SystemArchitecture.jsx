import React, { useState, useEffect } from 'react';
import { FaLaptopCode, FaServer, FaDatabase, FaCloud, FaBolt, FaCheckCircle, FaShieldAlt, FaSync } from 'react-icons/fa';
import styles from '../styles/components/SystemArchitecture.module.css';

const nodes = [
    {
        id: 'client',
        title: 'Client Layer',
        subtitle: 'React 19 + Vite 7',
        status: 'Active (HTTP/2 + TLS)',
        icon: FaLaptopCode,
        latency: '0.8ms',
        tag: 'Edge Delivery',
        details: 'Optimized SPA built with React 19, CSS Modules, client-side routing, and zero-bundle bloat.',
        metrics: { render: '0.4s FCP', gzip: '190kB bundle', responsive: '100% Fluid' }
    },
    {
        id: 'gateway',
        title: 'API Gateway',
        subtitle: 'Node.js + Express 5',
        status: 'Port 5000 / Healthy',
        icon: FaServer,
        latency: '12ms',
        tag: 'REST Core',
        details: 'Stateless backend architecture with rate limiting, JWT token verification, and unified error handling.',
        metrics: { throughput: '2.4k req/s', auth: 'JWT Signed', protocols: 'RESTful + JSON' }
    },
    {
        id: 'database',
        title: 'Database Cluster',
        subtitle: 'MongoDB Atlas',
        status: 'Connected / Synced',
        icon: FaDatabase,
        latency: '18ms',
        tag: 'Persistent Data',
        details: 'Mongoose 9 ODM schemas, multi-region cluster, optimized query indexing, and automated data backups.',
        metrics: { engine: 'WiredTiger', replication: '3-Node Replica', encryption: 'AES-256' }
    },
    {
        id: 'storage',
        title: 'Media Storage CDN',
        subtitle: 'Cloudinary CDN',
        status: 'Edge Cache Active',
        icon: FaCloud,
        latency: '15ms',
        tag: 'Asset Pipeline',
        details: 'Automated on-the-fly media transformations, responsive video streaming, and global edge caching.',
        metrics: { distribution: 'Multi-CDN', format: 'WebP / AVIF', optimization: 'Auto Lossless' }
    }
];

const SystemArchitecture = () => {
    const [selectedNode, setSelectedNode] = useState(nodes[0]);
    const [pingLatency, setPingLatency] = useState(12);
    const [isSimulating, setIsSimulating] = useState(false);
    const [requestCount, setRequestCount] = useState(1482);

    // Natural latency fluctuation
    useEffect(() => {
        const interval = setInterval(() => {
            const jitter = Math.floor(Math.random() * 5) - 2;
            setPingLatency(Math.max(8, Math.min(22, 12 + jitter)));
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const triggerSimulation = () => {
        setIsSimulating(true);
        setRequestCount(prev => prev + 1);
        setTimeout(() => {
            setIsSimulating(false);
        }, 1600);
    };

    return (
        <div className={styles.visualizerCard}>
            {/* Window Header */}
            <div className={styles.windowHeader}>
                <div className={styles.telemetryBadge}>
                    <div className={styles.signalWave} title="Live Telemetry Stream">
                        <span className={styles.waveBar}></span>
                        <span className={styles.waveBar}></span>
                        <span className={styles.waveBar}></span>
                        <span className={styles.waveBar}></span>
                    </div>
                    <span className={styles.clusterTag}>SYS://NODE_01</span>
                    <span className={styles.divider}>•</span>
                    <span className={styles.windowFilename}>system_topology.live</span>
                </div>

                <div className={styles.headerControls}>
                    <div className={styles.statusPill}>
                        <span className={styles.statusLiveDot}></span>
                        <span className={styles.statusText}>99.98% UPTIME</span>
                    </div>

                    <button 
                        className={`${styles.simulateBtn} ${isSimulating ? styles.simulating : ''}`}
                        onClick={triggerSimulation}
                        title="Fire simulated request packet"
                        disabled={isSimulating}
                    >
                        <FaBolt className={styles.boltIcon} />
                        <span>{isSimulating ? 'Simulating Traffic...' : 'Ping Pipeline'}</span>
                    </button>
                </div>
            </div>

            {/* Architecture Canvas */}
            <div className={styles.canvas}>
                {/* SVG Connecting Flow Lines */}
                <svg className={styles.connectionsSvg} viewBox="0 0 540 240" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Client to Gateway */}
                    <path
                        d="M 120 120 L 250 120"
                        className={`${styles.flowPath} ${isSimulating ? styles.flowPathActive : ''}`}
                    />
                    {/* Gateway to Database (Upper branch) */}
                    <path
                        d="M 290 120 C 350 120, 360 65, 420 65"
                        className={`${styles.flowPath} ${isSimulating ? styles.flowPathActive : ''}`}
                    />
                    {/* Gateway to Cloudinary (Lower branch) */}
                    <path
                        d="M 290 120 C 350 120, 360 175, 420 175"
                        className={`${styles.flowPath} ${isSimulating ? styles.flowPathActive : ''}`}
                    />

                    {/* Animated Packets */}
                    <circle cx="120" cy="120" r="3.5" className={styles.pulsingDataPacket}>
                        <animateMotion path="M 0 0 L 130 0" dur="2.4s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="290" cy="120" r="3.5" className={styles.pulsingDataPacket}>
                        <animateMotion path="M 0 0 C 60 0, 70 -55, 130 -55" dur="2.6s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="290" cy="120" r="3.5" className={styles.pulsingDataPacket}>
                        <animateMotion path="M 0 0 C 60 0, 70 55, 130 55" dur="2.8s" repeatCount="indefinite" />
                    </circle>
                </svg>

                {/* Interactive Node Grid */}
                <div className={styles.nodesContainer}>
                    {/* Node 1: Client */}
                    <div
                        className={`${styles.node} ${styles.nodeClient} ${selectedNode.id === 'client' ? styles.nodeActive : ''}`}
                        onClick={() => setSelectedNode(nodes[0])}
                    >
                        <div className={styles.nodeIconWrapper}>
                            <FaLaptopCode />
                        </div>
                        <div className={styles.nodeMeta}>
                            <span className={styles.nodeTag}>Client SPA</span>
                            <span className={styles.nodeName}>React 19</span>
                            <span className={styles.nodeLatency}>~0.8ms</span>
                        </div>
                    </div>

                    {/* Node 2: Gateway */}
                    <div
                        className={`${styles.node} ${styles.nodeGateway} ${selectedNode.id === 'gateway' ? styles.nodeActive : ''}`}
                        onClick={() => setSelectedNode(nodes[1])}
                    >
                        <div className={styles.nodeIconWrapper}>
                            <FaServer />
                        </div>
                        <div className={styles.nodeMeta}>
                            <span className={styles.nodeTag}>API Gateway</span>
                            <span className={styles.nodeName}>Express 5</span>
                            <span className={styles.nodeLatency}>{pingLatency}ms</span>
                        </div>
                    </div>

                    {/* Right Column Branches */}
                    <div className={styles.rightBranches}>
                        {/* Node 3: Database */}
                        <div
                            className={`${styles.node} ${styles.nodeBranch} ${selectedNode.id === 'database' ? styles.nodeActive : ''}`}
                            onClick={() => setSelectedNode(nodes[2])}
                        >
                            <div className={styles.nodeIconWrapper}>
                                <FaDatabase />
                            </div>
                            <div className={styles.nodeMeta}>
                                <span className={styles.nodeTag}>Database</span>
                                <span className={styles.nodeName}>MongoDB</span>
                                <span className={styles.nodeLatency}>~18ms</span>
                            </div>
                        </div>

                        {/* Node 4: Media CDN */}
                        <div
                            className={`${styles.node} ${styles.nodeBranch} ${selectedNode.id === 'storage' ? styles.nodeActive : ''}`}
                            onClick={() => setSelectedNode(nodes[3])}
                        >
                            <div className={styles.nodeIconWrapper}>
                                <FaCloud />
                            </div>
                            <div className={styles.nodeMeta}>
                                <span className={styles.nodeTag}>Media CDN</span>
                                <span className={styles.nodeName}>Cloudinary</span>
                                <span className={styles.nodeLatency}>~15ms</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Interactive Inspector Panel */}
            <div className={styles.inspectorPanel}>
                <div className={styles.inspectorHeader}>
                    <div className={styles.inspectorTitleGroup}>
                        <selectedNode.icon className={styles.inspectorIcon} />
                        <div>
                            <span className={styles.inspectorTitle}>{selectedNode.title}</span>
                            <span className={styles.inspectorSubtitle}>{selectedNode.subtitle}</span>
                        </div>
                    </div>

                    <div className={styles.inspectorBadge}>
                        <FaCheckCircle className={styles.checkIcon} />
                        <span>{selectedNode.status}</span>
                    </div>
                </div>

                <p className={styles.inspectorDescription}>
                    {selectedNode.details}
                </p>

                <div className={styles.metricsGrid}>
                    {Object.entries(selectedNode.metrics).map(([key, value]) => (
                        <div key={key} className={styles.metricItem}>
                            <span className={styles.metricKey}>{key}</span>
                            <span className={styles.metricVal}>{value}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Live Metrics Ribbon Footer */}
            <div className={styles.ribbonFooter}>
                <div className={styles.ribbonItem}>
                    <span className={styles.ribbonLabel}>Requests:</span>
                    <span className={styles.ribbonValue}>{requestCount.toLocaleString()}</span>
                </div>
                <div className={styles.ribbonDivider}>•</div>
                <div className={styles.ribbonItem}>
                    <span className={styles.ribbonLabel}>RTT Latency:</span>
                    <span className={styles.ribbonValue}>{pingLatency}ms</span>
                </div>
                <div className={styles.ribbonDivider}>•</div>
                <div className={styles.ribbonItem}>
                    <span className={styles.ribbonLabel}>Architecture:</span>
                    <span className={styles.ribbonValue}>MERN Stack</span>
                </div>
                <div className={styles.ribbonDivider}>•</div>
                <div className={styles.ribbonItem}>
                    <span className={styles.ribbonLabel}>Status:</span>
                    <span className={styles.ribbonValueSuccess}>Nominal 🚀</span>
                </div>
            </div>
        </div>
    );
};

export default SystemArchitecture;
