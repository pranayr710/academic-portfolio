import { useEffect } from 'react';

const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = () => window.matchMedia('(pointer: fine)').matches;

/**
 * Global cursor effects: spotlight, mouse-tracked card glow, terminal 3D tilt.
 * Desktop-only (pointer: fine), disabled under prefers-reduced-motion.
 */
const Effects = () => {
    // Scroll progress bar — tied directly to user scroll, safe under reduced motion
    useEffect(() => {
        const bar = document.createElement('div');
        bar.className = 'scroll-progress';
        document.body.appendChild(bar);
        let raf = 0;
        const update = () => {
            raf = 0;
            const max = document.documentElement.scrollHeight - window.innerHeight;
            bar.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
        };
        const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
        window.addEventListener('scroll', onScroll, { passive: true });
        update();
        return () => {
            window.removeEventListener('scroll', onScroll);
            if (raf) cancelAnimationFrame(raf);
            bar.remove();
        };
    }, []);

    useEffect(() => {
        if (reduced() || !finePointer()) return;

        const spot = document.createElement('div');
        spot.className = 'cursor-spotlight';
        document.body.appendChild(spot);

        let raf = 0;
        let lastEvent = null;

        const apply = () => {
            raf = 0;
            const e = lastEvent;
            if (!e) return;

            spot.style.setProperty('--spot-x', e.clientX + 'px');
            spot.style.setProperty('--spot-y', e.clientY + 'px');

            const card = e.target.closest?.(
                '.glass-card, .skill-group, .metric-card, .work-row, .research-section'
            );
            if (card) {
                const r = card.getBoundingClientRect();
                card.style.setProperty('--mx', (e.clientX - r.left) + 'px');
                card.style.setProperty('--my', (e.clientY - r.top) + 'px');
            }

            const t = document.querySelector('.terminal');
            if (t) {
                const r = t.getBoundingClientRect();
                const pad = 90;
                if (
                    e.clientX > r.left - pad && e.clientX < r.right + pad &&
                    e.clientY > r.top - pad && e.clientY < r.bottom + pad
                ) {
                    const dx = (e.clientX - (r.left + r.width / 2)) / r.width;
                    const dy = (e.clientY - (r.top + r.height / 2)) / r.height;
                    t.style.transform =
                        `perspective(950px) rotateY(${(dx * 5).toFixed(2)}deg) rotateX(${(-dy * 5).toFixed(2)}deg)`;
                } else {
                    t.style.transform = '';
                }
            }
        };

        const onMove = (e) => {
            lastEvent = e;
            if (!raf) raf = requestAnimationFrame(apply);
        };

        window.addEventListener('mousemove', onMove, { passive: true });
        return () => {
            window.removeEventListener('mousemove', onMove);
            if (raf) cancelAnimationFrame(raf);
            spot.remove();
        };
    }, []);

    return null;
};

export default Effects;
