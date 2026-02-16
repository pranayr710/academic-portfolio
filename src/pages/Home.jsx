
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <section style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            padding: '0 25px',
            maxWidth: '1000px',
            margin: '0 auto',
            width: '100%'
        }}>
            <div>
                <motion.h1
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.4 }}
                    style={{
                        fontSize: 'clamp(2.5rem, 7vw, 4.5rem)',
                        fontWeight: '800',
                        color: 'var(--text-bright)',
                        lineHeight: '1.1',
                        marginBottom: '12px',
                        letterSpacing: '-1px'
                    }}
                >
                    Meghapranay Raparla
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                    style={{
                        fontSize: '1rem',
                        color: 'var(--text-dim)',
                        marginBottom: '20px',
                        fontWeight: '400'
                    }}
                >
                    Computer Science Undergraduate · AI Security & Computer Vision Research
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                    style={{
                        fontSize: '0.95rem',
                        color: 'var(--text-dim)',
                        maxWidth: '560px',
                        lineHeight: '1.7',
                        marginBottom: '35px'
                    }}
                >
                    Working on hybrid AI + cryptographic systems for media authentication
                    and real-world object detection under faculty supervision at <a href="https://www.amrita.edu" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)' }}>Amrita University</a>.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.4 }}
                    style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}
                >
                    <Link to="/research" className="btn-primary">View Research</Link>
                    <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary">Resume</a>
                </motion.div>
            </div>
        </section>
    );
};

export default Home;
