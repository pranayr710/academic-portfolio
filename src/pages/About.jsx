
import { motion } from 'framer-motion';
import certImg from '../assets/qualcomm_cert.jpg';

const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="container"
            style={{ paddingTop: '100px', paddingBottom: '80px' }}
        >
            <h2 className="section-title" data-num="02.">About Me</h2>

            <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: '50px', marginTop: '10px' }}>

                {/* Left: Bio */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                >
                    <p style={{ color: 'var(--text-dim)', fontSize: '1rem', lineHeight: '1.8', marginBottom: '15px' }}>
                        I'm a second-year Computer Science student at <a href="https://www.amrita.edu" target="_blank" rel="noopener noreferrer">Amrita Vishwa Vidyapeetham</a> who
                        enjoys building things that live at the intersection of AI research and practical software engineering.
                    </p>

                    <p style={{ color: 'var(--text-dim)', fontSize: '1rem', lineHeight: '1.8', marginBottom: '15px' }}>
                        My recent focus has been on <strong style={{ color: 'var(--text)' }}>media forensics</strong> — specifically building hybrid systems
                        that combine cryptographic provenance (C2PA) with deep learning to authenticate digital media. I've also worked on
                        autonomous systems, computer vision for agriculture, and educational tools.
                    </p>

                    <p style={{ color: 'var(--text-dim)', fontSize: '1rem', lineHeight: '1.8', marginBottom: '25px' }}>
                        I write most of my code in <strong style={{ color: 'var(--text)' }}>Python</strong> and <strong style={{ color: 'var(--text)' }}>Java</strong>,
                        and I'm comfortable across the stack from training CNNs in PyTorch to building REST APIs to deploying with Git.
                    </p>

                    <p style={{ color: 'var(--text-dim)', fontSize: '0.95rem', marginBottom: '5px' }}>Technologies I work with regularly:</p>

                    <ul style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '8px 40px',
                        marginTop: '10px',
                        fontFamily: 'var(--mono)',
                        fontSize: '0.8rem',
                        color: 'var(--text-dim)'
                    }}>
                        {['Python', 'Java', 'JavaScript', 'SQL', 'PyTorch / TensorFlow', 'OpenCV', 'React', 'Flask / Django', 'Git', 'YOLOv8'].map((tech, i) => (
                            <li key={i} style={{ marginBottom: '2px' }}>
                                <span style={{ color: 'var(--primary)', marginRight: '8px' }}>▹</span>{tech}
                            </li>
                        ))}
                    </ul>
                </motion.div>

                {/* Right: Education & Credentials */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
                >
                    {/* Education Card */}
                    <div className="glass-card">
                        <p style={{ fontFamily: 'var(--mono)', fontSize: '0.75rem', color: 'var(--primary)', marginBottom: '8px' }}>Education</p>
                        <h4 style={{ color: 'var(--text-bright)', fontSize: '1.1rem', fontWeight: '600', marginBottom: '4px' }}>
                            B.Tech — Computer Science & Engineering
                        </h4>
                        <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem', marginBottom: '4px' }}>
                            Amrita Vishwa Vidyapeetham, Coimbatore
                        </p>
                        <p style={{ fontFamily: 'var(--mono)', fontSize: '0.8rem', color: 'var(--text-dim)' }}>
                            2024 – 2028
                        </p>
                    </div>

                    {/* Certification Card */}
                    <div className="glass-card">
                        <p style={{ fontFamily: 'var(--mono)', fontSize: '0.75rem', color: 'var(--primary)', marginBottom: '8px' }}>Certification</p>
                        <h4 style={{ color: 'var(--text-bright)', fontSize: '1.1rem', fontWeight: '600', marginBottom: '4px' }}>
                            Qualcomm AI Upskilling Program
                        </h4>
                        <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem', marginBottom: '12px' }}>
                            Completed — Focused on edge AI deployment and model optimization techniques.
                        </p>
                        <div style={{
                            width: '100%',
                            height: '180px',
                            borderRadius: '4px',
                            overflow: 'hidden',
                            border: '1px solid rgba(100, 255, 218, 0.1)'
                        }}>
                            <img
                                src={certImg}
                                alt="Qualcomm AI Certificate"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    filter: 'grayscale(0.2) contrast(1.1)'
                                }}
                            />
                        </div>
                    </div>

                    {/* Resume CTA */}
                    <a href="/Resume.pdf" target="_blank" className="btn-primary" style={{ textAlign: 'center', marginTop: '10px' }}>
                        Download Resume
                    </a>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default About;
