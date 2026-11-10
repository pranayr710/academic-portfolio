import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import 'remixicon/fonts/remixicon.css';

const navItems = [
    { to: '/', label: 'Home' },
    { to: '/research', label: 'Research' },
    { to: '/projects', label: 'Projects' },
    { to: '/focus', label: 'Focus' },
    { to: '/contact', label: 'Contact' },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const closeMenu = () => setIsOpen(false);

    return (
        <nav className={`site-nav ${scrolled ? 'scrolled' : ''}`} aria-label="Main navigation">
            <NavLink to="/" onClick={closeMenu} className="nav-logo">
                Megha Pranay Raparla
            </NavLink>

            <ul className="desktop-menu">
                {navItems.map((item) => (
                    <li key={item.to}>
                        <NavLink
                            to={item.to}
                            end={item.to === '/'}
                            onClick={closeMenu}
                            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                        >
                            {item.label}
                        </NavLink>
                    </li>
                ))}
                <li>
                    <a href="https://www.linkedin.com/in/raparla-meghapranay-3820b2321/" target="_blank" rel="noopener noreferrer"
                        aria-label="LinkedIn" style={{ color: 'var(--text-dim)', fontSize: '1.15rem', display: 'flex', alignItems: 'center' }}>
                        <i className="ri-linkedin-box-line"></i>
                    </a>
                </li>
                <li>
                    <a href={`${import.meta.env.BASE_URL}Meghapranay_Raparla_Resume.pdf`} target="_blank" rel="noopener noreferrer" className="btn-primary"
                        style={{ padding: '7px 16px', fontSize: '0.72rem' }}>
                        Resume
                    </a>
                </li>
            </ul>

            <button
                className="mobile-icon"
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isOpen}
            >
                <i className={isOpen ? 'ri-close-line' : 'ri-menu-3-line'}></i>
            </button>

            <div className={`drawer-backdrop ${isOpen ? 'open' : ''}`} onClick={closeMenu}></div>
            <aside className={`mobile-drawer ${isOpen ? 'open' : ''}`}>
                {navItems.map((item) => (
                    <NavLink
                        key={item.to}
                        to={item.to}
                        end={item.to === '/'}
                        onClick={closeMenu}
                        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                        style={{ fontSize: '0.9rem' }}
                    >
                        {item.label}
                    </NavLink>
                ))}
                <a href="https://www.linkedin.com/in/raparla-meghapranay-3820b2321/" target="_blank" rel="noopener noreferrer"
                    className="nav-link" style={{ fontSize: '0.9rem' }}>
                    LinkedIn
                </a>
                <a href={`${import.meta.env.BASE_URL}Meghapranay_Raparla_Resume.pdf`} target="_blank" rel="noopener noreferrer" className="btn-primary"
                    style={{ marginTop: '10px', fontSize: '0.75rem' }}>
                    Resume
                </a>
            </aside>
        </nav>
    );
};

export default Navbar;
