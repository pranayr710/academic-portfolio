import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/*
 * Scroll-scrubbed film section: the frames of a real video are drawn to a canvas as the
 * visitor scrolls, while the card grows to fill the screen and the two titles part.
 * Ported from a Tailwind/TypeScript component to plain React + CSS (see .hs-* in redesign.css).
 * Under prefers-reduced-motion, or if the frames fail to load, it shows a still instead.
 */

const PIN_VH_MULTIPLE = 2.4;
const IMMERSE_OVERFILL = 1.04;
const CARD_START_SCALE_DESKTOP = 0.62;
const CARD_START_SCALE_MOBILE = 0.84;

function usePrefersReducedMotion() {
    const [reduced, setReduced] = useState(
        () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    );
    useEffect(() => {
        const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
        const update = () => setReduced(mq.matches);
        mq.addEventListener?.('change', update);
        return () => mq.removeEventListener?.('change', update);
    }, []);
    return reduced;
}

const HeroScrub = ({ frameCount, frameUrl, poster, posterAlt, titleTop, titleBottom, aspect = 16 / 9 }) => {
    const sectionRef = useRef(null);
    const canvasRef = useRef(null);
    const imagesRef = useRef([]);
    const lastDrawnRef = useRef(-1);
    const cardRef = useRef(null);
    const titleTopRef = useRef(null);
    const titleBottomRef = useRef(null);

    const [ready, setReady] = useState(false);
    const [framesOk, setFramesOk] = useState(true);
    const reduced = usePrefersReducedMotion();
    const animated = !reduced && framesOk;

    // Load frame 0 first, then the rest in small batches so the page stays responsive.
    useEffect(() => {
        if (reduced) return undefined;
        let cancelled = false;
        let errored = 0;
        const images = new Array(frameCount);
        imagesRef.current = images;

        const loadOne = (i) => {
            const img = new window.Image();
            img.decoding = 'async';
            img.onerror = () => { errored += 1; if (!cancelled && errored >= 5) setFramesOk(false); };
            if (i === 0) {
                img.onload = () => {
                    if (cancelled) return;
                    const canvas = canvasRef.current;
                    if (canvas) {
                        canvas.width = img.naturalWidth;
                        canvas.height = img.naturalHeight;
                        canvas.getContext('2d')?.drawImage(img, 0, 0);
                        lastDrawnRef.current = 0;
                    }
                    setReady(true);
                };
            }
            img.src = frameUrl(i);
            images[i] = img;
        };

        const initial = Math.min(12, frameCount);
        for (let i = 0; i < initial; i += 1) loadOne(i);
        let cursor = initial;
        let timer = null;
        const loadNext = () => {
            if (cancelled) return;
            const end = Math.min(frameCount, cursor + 12);
            for (let i = cursor; i < end; i += 1) loadOne(i);
            cursor = end;
            if (cursor < frameCount) timer = setTimeout(loadNext, 90);
        };
        timer = setTimeout(loadNext, 250);
        const fallback = window.setTimeout(() => {
            if (!cancelled && !images[0]?.complete) setFramesOk(false);
        }, 6000);

        return () => {
            cancelled = true;
            if (timer) clearTimeout(timer);
            window.clearTimeout(fallback);
        };
    }, [reduced, frameCount, frameUrl]);

    // Scroll choreography: card grows to fill the screen, titles part, frames scrub.
    useEffect(() => {
        if (!animated || !ready) return undefined;
        const section = sectionRef.current;
        if (!section) return undefined;

        const ctx = gsap.context(() => {
            const startScale = () => (window.innerWidth < 768 ? CARD_START_SCALE_MOBILE : CARD_START_SCALE_DESKTOP);
            const immerseScale = () => {
                const vw = window.innerWidth;
                const vh = window.innerHeight;
                const baseW = Math.min(vw * 0.92, vh * 0.56 * aspect);
                const baseH = Math.min(vh * 0.56, (vw * 0.92) / aspect);
                if (baseW <= 0 || baseH <= 0) return 1.5;
                return Math.max(vw / baseW, vh / baseH) * IMMERSE_OVERFILL;
            };
            const isLoaded = (i) => {
                const img = imagesRef.current[i];
                return !!img && img.complete && img.naturalWidth > 0;
            };
            const drawFrame = (index) => {
                const canvas = canvasRef.current;
                if (!canvas) return;
                let use = index;
                if (!isLoaded(use)) {
                    let found = -1;
                    for (let d = 1; d < frameCount; d += 1) {
                        if (use - d >= 0 && isLoaded(use - d)) { found = use - d; break; }
                        if (use + d < frameCount && isLoaded(use + d)) { found = use + d; break; }
                    }
                    if (found === -1) return;
                    use = found;
                }
                if (lastDrawnRef.current === use) return;
                canvas.getContext('2d')?.drawImage(imagesRef.current[use], 0, 0, canvas.width, canvas.height);
                lastDrawnRef.current = use;
            };

            gsap.set(cardRef.current, { scale: startScale(), transformOrigin: '50% 50%' });

            const master = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: 'top top',
                    end: 'bottom bottom',
                    scrub: 0.4,
                    invalidateOnRefresh: true,
                    onUpdate: (self) => {
                        const mapped = gsap.utils.clamp(0, 1, (self.progress - 0.12) / 0.66);
                        drawFrame(Math.min(frameCount - 1, Math.floor(mapped * frameCount)));
                    },
                },
            });

            master.to(cardRef.current, { scale: 1, ease: 'power2.out', duration: 0.12 }, 0);
            master.to(titleTopRef.current, { x: () => (window.innerWidth < 768 ? '-70vw' : '-55vw'), ease: 'power2.inOut', duration: 0.12 }, 0);
            master.to(titleBottomRef.current, { x: () => (window.innerWidth < 768 ? '70vw' : '55vw'), ease: 'power2.inOut', duration: 0.12 }, 0);
            master.to(cardRef.current, { scale: immerseScale, ease: 'power2.in', duration: 0.66 }, 0.12);
            master.to([titleTopRef.current, titleBottomRef.current], { opacity: 0, ease: 'power1.in', duration: 0.2 }, 0.12);
            master.to(cardRef.current, { scale: startScale, ease: 'power3.inOut', duration: 0.22 }, 0.78);
            master.to([titleTopRef.current, titleBottomRef.current], { x: 0, opacity: 1, ease: 'power2.inOut', duration: 0.22 }, 0.78);

            ScrollTrigger.refresh();
        }, sectionRef);

        return () => ctx.revert();
    }, [animated, ready, aspect, frameCount]);

    const cardSize = {
        width: `min(92vw, calc(56svh * ${aspect}))`,
        height: `min(56svh, calc(92vw / ${aspect}))`,
    };

    return (
        <section
            ref={sectionRef}
            className={`hs ${animated ? '' : 'hs-static'}`}
            style={{ height: animated ? `${(PIN_VH_MULTIPLE + 1) * 100}vh` : 'auto' }}
            aria-label={posterAlt}
        >
            <div className="hs-sticky">
                <div className="hs-vignette" aria-hidden="true" />
                <div className="hs-stage">
                    <h2 ref={titleTopRef} className="hs-title" aria-hidden={animated}>{titleTop}</h2>
                    <div ref={cardRef} className="hs-card" style={cardSize}>
                        {animated
                            ? <canvas ref={canvasRef} aria-hidden="true" />
                            : <img src={poster} alt={posterAlt} />}
                    </div>
                    <h2 ref={titleBottomRef} className="hs-title" aria-hidden={animated}>{titleBottom}</h2>
                </div>
            </div>
        </section>
    );
};

export default HeroScrub;
