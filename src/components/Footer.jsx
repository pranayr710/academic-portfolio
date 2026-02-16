
const Footer = () => (
    <footer style={{
        width: '100%',
        padding: '30px 20px',
        textAlign: 'center',
        color: 'var(--text-dim)',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        marginTop: 'auto',
        position: 'relative',
        zIndex: 10
    }}>
        <div style={{ marginBottom: '10px' }}>
            <a href="https://github.com/pranayr710" target="_blank" style={{ margin: '0 10px', fontSize: '1.2rem', color: 'var(--text-main)' }}>
                <i className="ri-github-fill"></i>
            </a>
            <a href="mailto:pranayraparla3@gmail.com" style={{ margin: '0 10px', fontSize: '1.2rem', color: 'var(--text-main)' }}>
                <i className="ri-mail-line"></i>
            </a>
        </div>
        <p style={{ fontSize: '0.9rem' }}>© 2026 Meghapranay Raparla. Built with <span style={{ color: 'var(--primary-color)' }}>React</span> & <span style={{ color: 'var(--secondary-color)' }}>AI</span>.</p>
    </footer>
);

export default Footer;
