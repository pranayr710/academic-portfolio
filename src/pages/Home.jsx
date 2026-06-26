import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import DecodeText from '../components/DecodeText';

/* ---------- Signature element: provenance verification terminal ---------- */
const TERMINAL_LINES = [
    { type: 'cmd', text: 'provenance verify --subject "M. Raparla"' },
    { type: 'kv', key: 'c2pa_manifest', dots: 12, val: 'FOUND', ok: true },
    { type: 'kv', key: 'deepfake_score', dots: 11, val: '0.02 — HUMAN', ok: true },
    { type: 'kv', key: 'models_trained', dots: 11, val: 'CNN ensemble ×3', ok: false },
    { type: 'kv', key: 'adversarial_acc', dots: 10, val: '94.2%', ok: true },
    { type: 'kv', key: 'ships_real_systems', dots: 7, val: 'TRUE', ok: true },
    { type: 'verdict', text: '▌ VERDICT: AUTHENTIC — forward this profile' },
];

const prefersReducedMotion = () =>
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const VerificationTerminal = () => {
    const [count, setCount] = useState(() => (prefersReducedMotion() ? TERMINAL_LINES.length : 0));
    const done = count >= TERMINAL_LINES.length;
    const timer = useRef(null);

    useEffect(() => {
        if (prefersReducedMotion()) return;
        timer.current = setInterval(() => {
            setCount((c) => {
                if (c >= TERMINAL_LINES.length) {
                    clearInterval(timer.current);
                    return c;
                }
                return c + 1;
            });
        }, 420);
        return () => clearInterval(timer.current);
    }, []);

    return (
        <div className="terminal" role="img" aria-label="Terminal verifying authenticity: verdict authentic, forward this profile">
            <div className="terminal-bar" aria-hidden="true">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="terminal-title">authenticity_check.sh</span>
            </div>
            <div className="terminal-body" aria-hidden="true">
                {TERMINAL_LINES.slice(0, count).map((line, i) => {
                    if (line.type === 'cmd') {
                        return <div key={i} className="t-line t-cmd">{line.text}</div>;
                    }
                    if (line.type === 'verdict') {
                        return <div key={i} className="t-line t-verdict">{line.text}</div>;
                    }
                    return (
                        <div key={i} className="t-line">
                            <span className="t-key">{'> '}{line.key} {'.'.repeat(line.dots)} </span>
                            <span className={line.ok ? 't-ok' : 't-val'}>{line.val}</span>
                        </div>
                    );
                })}
                {!done && <span className="cursor-block"></span>}
            </div>
        </div>
    );
};

/* ---------- Selected work data (flagships only) ---------- */
const selectedWork = [
    {
        num: '01',
        title: 'C2PA AI Detector',
        problem:
            'Deepfake detectors fail on novel generators; cryptographic provenance fails when metadata is stripped. I built a hybrid pipeline that checks C2PA signatures first, then falls back to a weighted ensemble of three CNNs (EfficientNet-B0, ResNet-50, frequency-domain) — trained on 10K+ real and synthetic videos.',
        impact: '94.2% accuracy on adversarial deepfakes · skips GPU inference for ~40–60% of verifiable inputs',
        tags: ['PyTorch', 'C2PA', 'EfficientNet', 'ResNet-50', 'FFT analysis'],
        github: 'https://github.com/pranayr710/c2pa-ai-detector',
        caseStudy: '/research',
    },
    {
        num: '02',
        title: 'Strawberry Disease Detection',
        problem:
            'Field-condition plant pathology breaks lab-trained models. I annotated 5,000+ leaf images, fine-tuned YOLOv8 from COCO weights, and tuned NMS thresholds (IoU 0.45) to handle overlapping leaves under real outdoor lighting.',
        impact: '91.7% mAP@0.5 on leaf blight and powdery mildew',
        tags: ['YOLOv8', 'Transfer Learning', 'Data Annotation', 'Python'],
        github: 'https://github.com/pranayr710/AI-Based-Strawberry-Disease-Detection-and-Validation-Framework',
        caseStudy: '/research',
    },
    {
        num: '03',
        title: 'AttendAI',
        problem:
            'Manual attendance wastes class time and invites proxy fraud. I built an end-to-end face-recognition pipeline — camera capture, recognition, database logging, CSV export — running at sub-second latency on commodity hardware.',
        impact: '96.4% recognition accuracy · sub-second per-face inference',
        tags: ['OpenCV', 'Python', 'SQLite', 'Flask'],
        github: 'https://github.com/pranayr710/AttendAI-Smart-Face-Recognition-Attendance-System',
        caseStudy: '/projects',
    },
    {
        num: '04',
        title: 'GeoDroneAI',
        problem:
            'Naive shortest-path routing ignores no-fly zones and fleet conflicts. I implemented A* with weighted heuristics, dynamic obstacle re-planning, and multi-drone conflict resolution for simulated urban last-mile delivery.',
        impact: '34% faster deliveries vs. naive routing in simulation',
        tags: ['A* Search', 'Geospatial', 'Multi-agent', 'Python'],
        github: 'https://github.com/pranayr710/GeoDroneAI-Autonomous-Drone-Delivery-Simulator-with-AI-Optimization',
        caseStudy: '/projects',
    },
    {
        num: '05',
        title: 'IFDMS — Concurrent Focus Monitor',
        problem:
            'A single-threaded monitor can\'t handle concurrent I/O (WebSocket clients, OS polling, DB writes) without blocking. I built a layered concurrent architecture: asyncio event loop on a background thread manages the WebSocket server and multiple simultaneous clients, while a synchronous main loop runs the ML pipeline — with thread-safe shared state bridging both.',
        impact: 'Concurrent asyncio + threading · real-time multi-client broadcast · 10+ coordinated modules',
        tags: ['Python', 'asyncio', 'WebSockets', 'Concurrent Systems', 'Flask'],
        github: 'https://github.com/pranayr710',
        caseStudy: '/projects',
    },
];

/* ---------- Skills ---------- */
const skillGroups = [
    {
        title: 'ML & Computer Vision',
        items: [
            ['PyTorch / TensorFlow', 'daily'],
            ['CNNs · YOLO · ensembles', 'deep'],
            ['OpenCV · dlib', 'deep'],
            ['Adversarial robustness', 'research'],
        ],
    },
    {
        title: 'Languages',
        items: [
            ['Python', 'primary'],
            ['Java', 'strong'],
            ['JavaScript', 'strong'],
            ['SQL', 'strong'],
        ],
    },
    {
        title: 'Systems & Backend',
        items: [
            ['asyncio · WebSockets · threading', 'shipped'],
            ['Spring Boot · JWT auth', 'shipped'],
            ['REST API design', 'shipped'],
            ['MySQL · SQLite', 'shipped'],
        ],
    },
    {
        title: 'Methods',
        items: [
            ['Concurrent / async systems', 'applied'],
            ['Frequency-domain analysis', 'research'],
            ['Transfer learning', 'applied'],
            ['A* / heuristic search', 'applied'],
        ],
    },
];

/* ---------- Timeline ---------- */
const timeline = [
    {
        date: '2025 — PRESENT',
        title: 'AI Security Research — Amrita Vishwa Vidyapeetham',
        body: 'Built a hybrid C2PA + CNN-ensemble media authentication system under faculty supervision. Reached 94.2% adversarial deepfake accuracy and cut GPU load by pre-filtering cryptographically verifiable media.',
    },
    {
        date: '2025 — PRESENT',
        title: 'Applied CV — Agricultural Pathology',
        body: 'Curated and annotated a 5,000+ image dataset; fine-tuned YOLOv8 to 91.7% mAP@0.5 for in-field strawberry disease detection.',
    },
    {
        date: '2025 — PRESENT',
        title: 'Concurrent Systems — IFDMS Focus Monitor',
        body: 'Designed and built a multi-threaded monitoring system: asyncio WebSocket server on a background thread, thread-safe shared state, real-time broadcast to multiple simultaneous clients, and a 10+ module coordinated pipeline.',
    },
    {
        date: '2024 — PRESENT',
        title: 'B.Tech Computer Science — Amrita Vishwa Vidyapeetham',
        body: 'Specializing in machine learning, computer vision, and distributed systems. Shipped 10+ projects spanning compilers, concurrent backends, ERP systems, and autonomous-systems simulation alongside coursework.',
    },
];

const Home = () => {
    return (
        <div className="container">
            <section className="hero">
                <div>
                    <p className="status-badge"><span className="pulse-dot" aria-hidden="true"></span>Open to SWE &amp; research internships — Summer 2027</p>
                    <p className="kicker">AI Security · Computer Vision · Distributed Systems · Amrita University</p>
                    <h1 className="hero-name">
                        <DecodeText text="Meghapranay" /><br />
                        <DecodeText text="Raparla" delay={350} /><span className="accent-dot">.</span>
                    </h1>
                    <p className="hero-position">
                        I build systems that decide whether what you're seeing is <strong>real</strong> —
                        hybrid cryptographic + deep-learning pipelines for media authentication.
                    </p>
                    <p className="hero-cred">
                        94.2% adversarial deepfake detection · CNN ensemble · 10K+ sample training set
                    </p>
                    <div className="hero-actions">
                        <Link to="/research" className="btn-solid">Read the research</Link>
                        <a href={`${import.meta.env.BASE_URL}Resume.pdf`} target="_blank" rel="noopener noreferrer" className="btn-primary">Resume</a>
                        <a href="https://www.linkedin.com/in/raparla-meghapranay-3820b2321/" target="_blank" rel="noopener noreferrer" className="btn-primary" aria-label="LinkedIn profile">
                            <i className="ri-linkedin-box-line" style={{ marginRight: '6px' }}></i>LinkedIn
                        </a>
                    </div>
                </div>

                <VerificationTerminal />
            </section>

            <section style={{ paddingBottom: '30px' }} aria-labelledby="work-title">
                <Reveal>
                    <h2 className="section-title" id="work-title" data-num="01.">Selected Work</h2>
                    <p className="section-subtitle">
                        Four systems, each with a measurable result. Deep technical write-ups live on the
                        research and projects pages.
                    </p>
                </Reveal>

                {selectedWork.map((w, i) => (
                    <Reveal key={w.num} className="work-row" delay={i * 60}>
                        <span className="work-num">{w.num}</span>
                        <div>
                            <h3 className="work-title">
                                <Link to={w.caseStudy} className="work-title-link">{w.title}</Link>
                            </h3>
                            <p className="work-problem">{w.problem}</p>
                            <p className="work-impact">
                                <i className="ri-flashlight-line" aria-hidden="true"></i>
                                {w.impact}
                            </p>
                            <div className="tag-list">
                                {w.tags.map((t) => <span key={t} className="tag-pill">{t}</span>)}
                            </div>
                        </div>
                        <div className="work-links">
                            <Link to={w.caseStudy} aria-label={`${w.title} case study`} title="Case study">
                                <i className="ri-article-line"></i>
                            </Link>
                            <a href={w.github} target="_blank" rel="noopener noreferrer"
                                aria-label={`${w.title} on GitHub`} title="GitHub">
                                <i className="ri-github-line"></i>
                            </a>
                        </div>
                    </Reveal>
                ))}
            </section>

            <section aria-labelledby="skills-title">
                <Reveal>
                    <div className="divider-label" id="skills-title">02 · Technical Skills</div>
                </Reveal>
                <div className="skills-grid">
                    {skillGroups.map((g, i) => (
                        <Reveal key={g.title} className="skill-group" delay={i * 70}>
                            <h4>{g.title}</h4>
                            <ul>
                                {g.items.map(([name, lvl]) => (
                                    <li key={name}>
                                        <span>{name}</span>
                                        <span className="lvl">{lvl}</span>
                                    </li>
                                ))}
                            </ul>
                        </Reveal>
                    ))}
                </div>
            </section>

            <section aria-labelledby="timeline-title">
                <Reveal>
                    <div className="divider-label" id="timeline-title">03 · Experience &amp; Education</div>
                </Reveal>
                <div className="timeline">
                    {timeline.map((t, i) => (
                        <Reveal key={t.title} className="timeline-item" delay={i * 80}>
                            <p className="timeline-date">{t.date}</p>
                            <h4>{t.title}</h4>
                            <p>{t.body}</p>
                        </Reveal>
                    ))}
                </div>
            </section>

            <section style={{ padding: '90px 0 60px', textAlign: 'center' }} aria-labelledby="cta-title">
                <Reveal>
                    <p className="kicker">04 · About</p>
                    <h2 id="cta-title" style={{
                        fontSize: 'clamp(1.5rem, 4vw, 2.2rem)',
                        color: 'var(--text-bright)',
                        letterSpacing: '-0.02em',
                        maxWidth: '680px',
                        margin: '0 auto 18px',
                        lineHeight: 1.3,
                    }}>
                        Research, systems, and the gap between them.
                    </h2>
                    <p style={{
                        color: 'var(--text-dim)',
                        fontSize: '0.95rem',
                        maxWidth: '560px',
                        margin: '0 auto 34px',
                        lineHeight: 1.75,
                    }}>
                        Third-year CS undergraduate at Amrita University. I work on AI security and media
                        forensics under faculty supervision, and build concurrent systems and production
                        backends alongside coursework. Currently seeking SWE and research internships for
                        Summer 2027 — I collaborate well and take feedback seriously.
                    </p>
                    <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href="mailto:pranayraparla3@gmail.com" className="btn-solid">
                            pranayraparla3@gmail.com
                        </a>
                        <Link to="/contact" className="btn-primary">Contact page</Link>
                    </div>
                </Reveal>
            </section>
        </div>
    );
};

export default Home;
