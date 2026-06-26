import Reveal from '../components/Reveal';

const Contact = () => {
    return (
        <div className="container page" style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '72vh',
            textAlign: 'center',
            maxWidth: '600px'
        }}>
            <Reveal>
                <p className="kicker">05 · Contact</p>

                <h2 style={{
                    fontSize: 'clamp(1.8rem, 5vw, 2.6rem)',
                    fontWeight: '700',
                    letterSpacing: '-0.02em',
                    color: 'var(--text-bright)',
                    marginBottom: '18px',
                    lineHeight: 1.2
                }}>
                    Open to SWE &amp; research internships.<br />Let's talk.
                </h2>

                <p style={{ color: 'var(--text-dim)', fontSize: '0.95rem', lineHeight: '1.75', marginBottom: '34px' }}>
                    Looking for software engineering and research internships in AI/ML, computer vision,
                    and distributed systems — Summer 2027. One email reaches me; I reply within 24 hours.
                </p>

                <a href="mailto:pranayraparla3@gmail.com" className="btn-solid" style={{ fontSize: '0.88rem', padding: '14px 32px' }}>
                    pranayraparla3@gmail.com
                </a>

                <div style={{ display: 'flex', gap: '22px', marginTop: '36px', justifyContent: 'center', fontSize: '1.25rem' }}>
                    <a href="https://github.com/pranayr710" target="_blank" rel="noopener noreferrer"
                        aria-label="GitHub" style={{ color: 'var(--text-dim)' }}>
                        <i className="ri-github-line"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/raparla-meghapranay-3820b2321/" target="_blank" rel="noopener noreferrer"
                        aria-label="LinkedIn" style={{ color: 'var(--text-dim)' }}>
                        <i className="ri-linkedin-box-line"></i>
                    </a>
                    <a href={`${import.meta.env.BASE_URL}Resume.pdf`} target="_blank" rel="noopener noreferrer"
                        aria-label="Resume PDF" style={{ color: 'var(--text-dim)' }}>
                        <i className="ri-file-text-line"></i>
                    </a>
                </div>
            </Reveal>
        </div>
    );
};

export default Contact;
