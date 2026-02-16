
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '75vh',
                textAlign: 'center',
                padding: '100px 25px 80px',
                maxWidth: '550px',
                margin: '0 auto'
            }}
        >
            <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                style={{ fontFamily: 'var(--mono)', fontSize: '0.8rem', color: 'var(--primary)', marginBottom: '12px' }}
            >
                05. Contact
            </motion.p>

            <motion.h2
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                style={{ fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', fontWeight: '700', color: 'var(--text-bright)', marginBottom: '18px' }}
            >
                Get In Touch
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                style={{ color: 'var(--text-dim)', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '30px' }}
            >
                I'm looking for research internship opportunities in AI/ML and systems engineering.
                If you have an opportunity, a question about my work, or want to collaborate — I'd be happy to hear from you.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}
            >
                <a href="mailto:pranayraparla3@gmail.com" className="btn-primary">
                    Email Me
                </a>
                <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary">
                    Download Resume
                </a>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                style={{ display: 'flex', gap: '20px', marginTop: '30px' }}
            >
                <a href="https://github.com/pranayr710" target="_blank" rel="noopener noreferrer"
                    style={{ fontSize: '1.2rem', color: 'var(--text-dim)' }}>
                    <i className="ri-github-fill"></i>
                </a>
                <a href="mailto:pranayraparla3@gmail.com"
                    style={{ fontSize: '1.2rem', color: 'var(--text-dim)' }}>
                    <i className="ri-mail-fill"></i>
                </a>
            </motion.div>
        </motion.div>
    );
};

export default Contact;
