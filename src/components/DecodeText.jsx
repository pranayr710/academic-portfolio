import { useEffect, useRef, useState } from 'react';

const CHARS = '!<>-_\\/[]{}=+*^?#01';
const reduced = () =>
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Forensic "decode" effect — text resolves from scrambled glyphs, left to right.
 */
const DecodeText = ({ text, delay = 0, duration = 900 }) => {
    const [out, setOut] = useState(() => (reduced() ? text : text.replace(/./g, ' ')));
    const rafRef = useRef(0);

    useEffect(() => {
        if (reduced()) return;
        let start;
        const step = (ts) => {
            if (start === undefined) start = ts;
            const p = (ts - start - delay) / duration;
            if (p < 0) {
                rafRef.current = requestAnimationFrame(step);
                return;
            }
            const clamped = Math.min(p, 1);
            const reveal = Math.floor(clamped * text.length);
            let s = text.slice(0, reveal);
            if (clamped < 1) {
                for (let i = reveal; i < text.length; i++) {
                    s += CHARS[(Math.random() * CHARS.length) | 0];
                }
            }
            setOut(s);
            if (clamped < 1) rafRef.current = requestAnimationFrame(step);
        };
        rafRef.current = requestAnimationFrame(step);
        return () => cancelAnimationFrame(rafRef.current);
    }, [text, delay, duration]);

    return <span aria-label={text}>{out}</span>;
};

export default DecodeText;
