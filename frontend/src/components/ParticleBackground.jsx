import React, { useEffect, useRef } from 'react';
import styles from '../styles/components/ParticleBackground.module.css';

const ParticleBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particles = [];
        let mouse = { x: null, y: null, radius: 140 };

        // Color palette matching the user's reference: warm gold, amber, pale gold, and occasional telemetry neon
        const palette = [
            { r: 245, g: 208, b: 97 },  // Bright gold #f5d061
            { r: 212, g: 175, b: 55 },  // Classic metallic gold #d4af37
            { r: 254, g: 243, b: 199 }, // Pale glowing champagne #fef3c7
            { r: 245, g: 158, b: 11 },  // Warm amber #f59e0b
            { r: 34, g: 197, b: 94 }    // Telemetry green #22c55e (matching screenshot)
        ];

        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            initParticles();
        };

        const handleMouseMove = (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        const handleMouseLeave = () => {
            mouse.x = null;
            mouse.y = null;
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        window.addEventListener('mouseleave', handleMouseLeave);

        class Particle {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                // Subtle anti-gravity: slight upward bias with gentle horizontal drift
                this.vx = (Math.random() - 0.5) * 0.45;
                this.vy = -Math.random() * 0.4 - 0.1; // Gentle anti-gravity upward floating
                this.radius = Math.random() * 1.6 + 1.2; // 1.2px - 2.8px
                this.baseAlpha = Math.random() * 0.45 + 0.45; // 0.45 - 0.90
                this.alpha = this.baseAlpha;
                this.pulseSpeed = Math.random() * 0.02 + 0.01;
                this.pulseAngle = Math.random() * Math.PI * 2;
                this.color = palette[Math.floor(Math.random() * palette.length)];
            }

            update() {
                // Subtle breathing glow pulsation
                this.pulseAngle += this.pulseSpeed;
                this.alpha = this.baseAlpha + Math.sin(this.pulseAngle) * 0.25;

                // Anti-gravity float
                this.x += this.vx;
                this.y += this.vy;

                // Gentle mouse anti-gravity deflection
                if (mouse.x !== null && mouse.y !== null) {
                    const dx = this.x - mouse.x;
                    const dy = this.y - mouse.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < mouse.radius) {
                        const force = (1 - dist / mouse.radius) * 1.2;
                        const angle = Math.atan2(dy, dx);
                        this.x += Math.cos(angle) * force;
                        this.y += Math.sin(angle) * force;
                    }
                }

                // Smooth screen wrap-around (re-enter from bottom when exiting top)
                if (this.y < -10) {
                    this.y = height + 10;
                    this.x = Math.random() * width;
                }
                if (this.y > height + 10) {
                    this.y = -10;
                    this.x = Math.random() * width;
                }
                if (this.x < -10) this.x = width + 10;
                if (this.x > width + 10) this.x = -10;
            }

            draw() {
                ctx.save();
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                
                // Delicate glowing aura
                ctx.shadowBlur = 10;
                ctx.shadowColor = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${Math.min(1, this.alpha * 1.2)})`;
                ctx.fillStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.alpha})`;
                ctx.fill();
                ctx.restore();
            }
        }

        const initParticles = () => {
            particles = [];
            // Optimal density based on screen size (minimal & clean)
            const count = Math.min(85, Math.max(35, Math.floor((width * height) / 18000)));
            for (let i = 0; i < count; i++) {
                particles.push(new Particle());
            }
        };

        initParticles();

        // Draw fine connecting web lines
        const connectParticles = () => {
            const maxDistance = width < 768 ? 95 : 135;

            for (let a = 0; a < particles.length; a++) {
                for (let b = a + 1; b < particles.length; b++) {
                    const dx = particles[a].x - particles[b].x;
                    const dy = particles[a].y - particles[b].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < maxDistance) {
                        const lineOpacity = (1 - dist / maxDistance) * 0.22;
                        
                        ctx.beginPath();
                        ctx.moveTo(particles[a].x, particles[a].y);
                        ctx.lineTo(particles[b].x, particles[b].y);

                        // Gradient stroke between connected particle colors
                        const grad = ctx.createLinearGradient(
                            particles[a].x, particles[a].y,
                            particles[b].x, particles[b].y
                        );
                        grad.addColorStop(0, `rgba(${particles[a].color.r}, ${particles[a].color.g}, ${particles[a].color.b}, ${lineOpacity})`);
                        grad.addColorStop(1, `rgba(${particles[b].color.r}, ${particles[b].color.g}, ${particles[b].color.b}, ${lineOpacity})`);

                        ctx.strokeStyle = grad;
                        ctx.lineWidth = 0.65;
                        ctx.stroke();
                    }
                }

                // Fine line to mouse cursor if within range
                if (mouse.x !== null && mouse.y !== null) {
                    const dxM = particles[a].x - mouse.x;
                    const dyM = particles[a].y - mouse.y;
                    const distM = Math.sqrt(dxM * dxM + dyM * dyM);

                    if (distM < mouse.radius) {
                        const mouseLineOpacity = (1 - distM / mouse.radius) * 0.28;
                        ctx.beginPath();
                        ctx.moveTo(particles[a].x, particles[a].y);
                        ctx.lineTo(mouse.x, mouse.y);
                        ctx.strokeStyle = `rgba(${particles[a].color.r}, ${particles[a].color.g}, ${particles[a].color.b}, ${mouseLineOpacity})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
            }
        };

        // Render loop
        let isRunning = true;
        const render = () => {
            if (!isRunning) return;
            ctx.clearRect(0, 0, width, height);

            connectParticles();

            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();
            }

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        // Pause animation when tab is not visible to conserve battery
        const handleVisibilityChange = () => {
            if (document.hidden) {
                cancelAnimationFrame(animationFrameId);
            } else {
                render();
            }
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);

        return () => {
            isRunning = false;
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, []);

    return (
        <canvas 
            ref={canvasRef} 
            className={styles.antiGravityCanvas} 
            aria-hidden="true" 
        />
    );
};

export default ParticleBackground;
