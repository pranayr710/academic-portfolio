
import { motion, AnimatePresence } from 'framer-motion';
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
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const closeMenu = () => setIsOpen(false);

    return (
        <motion.nav
            initial={{ y: -70 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.4 }}
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0 40px',
                height: '60px',
                background: scrolled ? 'rgba(10, 25, 47, 0.95)' : 'transparent',
                backdropFilter: scrolled ? 'blur(10px)' : 'none',
                position: 'fixed',
                top: 0,
                width: '100%',
                zIndex: 1000,
                transition: 'background 0.25s, backdrop-filter 0.25s'
            }}
        >
            <NavLink to="/" onClick={closeMenu} style={{
                fontFamily: 'var(--mono)',
                fontSize: '0.95rem',
                fontWeight: '700',
                color: 'var(--primary)',
                letterSpacing: '-0.5px',
                textDecoration: 'none'
            }}>
                MR
            </NavLink>

            {/* Desktop */}
            <ul className="desktop-menu" style={{ display: 'flex', gap: '25px', alignItems: 'center', listStyle: 'none' }}>
                {navItems.map((item, i) => (
                    <li key={item.to}>
                        <NavLink
                            to={item.to}
                            end={item.to === '/'}
                            onClick={closeMenu}
                            style={({ isActive }) => ({
                                fontFamily: 'var(--mono)',
                                fontSize: '0.78rem',
                                color: isActive ? 'var(--primary)' : 'var(--text-dim)',
                                textDecoration: 'none',
                                transition: 'color 0.2s'
                            })}
                        >
                            <span style={{ color: 'var(--primary)', marginRight: '2px' }}>0{i + 1}.</span> {item.label}
                        </NavLink>
                    </li>
                ))}
                <li>
                    <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '6px 14px', fontSize: '0.72rem' }}>
                        Resume
                    </a>
                </li>
            </ul>

            {/* Mobile Hamburger */}
            <div className="mobile-icon" onClick={() => setIsOpen(!isOpen)} style={{ display: 'none', fontSize: '1.4rem', color: 'var(--primary)', cursor: 'pointer', zIndex: 1001 }}>
                <i className={isOpen ? 'ri-close-line' : 'ri-menu-3-line'}></i>
            </div>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={closeMenu}
                            style={{
                                position: 'fixed',
                                top: 0, left: 0, right: 0, bottom: 0,
                                background: 'rgba(10, 25, 47, 0.7)',
                                zIndex: 998
                            }}
                        />
                        {/* Drawer */}
                        <motion.aside
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ duration: 0.25, ease: 'easeOut' }}
                            style={{
                                position: 'fixed',
                                top: 0,
                                right: 0,
                                width: '65vw',
                                maxWidth: '280px',
                                height: '100vh',
                                background: 'var(--bg-light)',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '22px',
                                zIndex: 999
                            }}
                        >
                            {navItems.map((item, i) => (
                                <NavLink
                                    key={item.to}
                                    to={item.to}
                                    end={item.to === '/'}
                                    onClick={closeMenu}
                                    style={({ isActive }) => ({
                                        fontFamily: 'var(--mono)',
                                        fontSize: '0.85rem',
                                        color: isActive ? 'var(--primary)' : 'var(--text)',
                                        textDecoration: 'none',
                                        textAlign: 'center'
                                    })}
                                >
                                    <span style={{ display: 'block', color: 'var(--primary)', fontSize: '0.7rem', marginBottom: '2px' }}>0{i + 1}.</span>
                                    {item.label}
                                </NavLink>
                            ))}
                            <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ marginTop: '8px', fontSize: '0.75rem' }}>
                                Resume
                            </a>
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
