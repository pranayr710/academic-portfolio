import { useEffect, useRef } from 'react';

/**
 * Scroll-reveal wrapper using IntersectionObserver.
 * CSS handles the transition; prefers-reduced-motion disables it entirely.
 */
const Reveal = ({ children, as = 'div', delay = 0, className = '', ...rest }) => {
    const Tag = as;
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            el.classList.add('visible');
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.style.transitionDelay = `${delay}ms`;
                    el.classList.add('visible');
                    observer.disconnect();
                }
            },
            { threshold: 0.12 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, [delay]);

    return (
        <Tag ref={ref} className={`reveal ${className}`} {...rest}>
            {children}
        </Tag>
    );
};

export default Reveal;
