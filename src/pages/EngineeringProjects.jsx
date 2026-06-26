import Reveal from '../components/Reveal';

const featuredProjects = [
    {
        title: "IFDMS — Concurrent Focus Monitoring System",
        description: "A single-threaded monitor can't handle concurrent I/O without blocking. IFDMS uses a layered concurrent architecture: an asyncio event loop runs on a dedicated background thread managing a WebSocket server with multiple simultaneous clients (Chrome extension + desktop HUD), while a synchronous main loop runs the ML pipeline — with thread-safe shared state bridging both layers.",
        impact: "Concurrent asyncio + threading architecture · real-time multi-client WebSocket broadcast",
        tags: ["Python", "asyncio", "WebSockets", "Concurrent Systems", "Flask", "SQLite", "JavaScript"],
        link: "https://github.com/pranayr710/ifdms",
        highlights: [
            "asyncio WebSocket server on a dedicated background thread",
            "Thread-safe BrowserState shared between async and sync layers",
            "Real-time broadcast to multiple simultaneous clients",
            "10+ coordinated modules: classifier, scorer, intervention engine, adaptive learner",
            "Producer-consumer IPC pattern between extension and backend daemon"
        ]
    },
    {
        title: "GeoDroneAI — Autonomous Delivery Route Optimizer",
        description: "Naive shortest-path routing ignores no-fly zones, obstacles, and fleet conflicts. GeoDroneAI simulates multi-drone urban delivery with A* pathfinding, dynamic obstacle re-planning, and geospatial constraint modeling for last-mile logistics.",
        impact: "Cut simulated delivery time 34% vs. naive shortest-path routing",
        tags: ["Python", "A* Algorithm", "Geospatial Analysis", "Simulation"],
        link: "https://github.com/pranayr710/GeoDroneAI-Autonomous-Drone-Delivery-Simulator-with-AI-Optimization",
        highlights: [
            "A* pathfinding with weighted heuristics for delivery priority",
            "Dynamic obstacle grid with real-time path recalculation",
            "Multi-drone fleet coordination with conflict resolution",
            "Geospatial constraint modeling for urban no-fly zones"
        ]
    },
    {
        title: "AttendAI — Face Recognition Attendance System",
        description: "Manual attendance wastes class time and invites proxy fraud. AttendAI automates the full pipeline — webcam capture, LBPH + Haar Cascade recognition, timestamped SQLite logging, and CSV export — on commodity hardware.",
        impact: "Sub-second live recognition with automatic database persistence",
        tags: ["Python", "OpenCV", "LBPH", "Haar Cascade", "SQLite"],
        link: "https://github.com/pranayr710/AttendAI-Smart-Face-Recognition-Attendance-System",
        highlights: [
            "Live face detection and recognition via webcam input",
            "LBPH recognizer trained on per-user image datasets",
            "Automatic attendance logging with timestamps to SQLite",
            "CSV/Excel export for attendance records"
        ]
    },
    {
        title: "SmartStore ERP — Enterprise Resource Planning Backend",
        description: "Spring Boot ERP backend with JWT authentication, role-based access control, and a clean Controller → Service → Repository architecture over Hibernate + MySQL. Manages inventory, orders, and production batches.",
        impact: "7 REST endpoints · 7 normalized tables · JWT auth with RBAC",
        tags: ["Java", "Spring Boot", "JWT", "JPA/Hibernate", "MySQL", "REST API"],
        link: "https://github.com/pranayr710/SmartStore-ERP",
        highlights: [
            "Secure JWT authentication with role-based access control",
            "Layered architecture: Controller → Service → Repository",
            "Inventory, order tracking, and production batch logging",
            "Low-stock alert system and export/reporting module"
        ]
    }
];

const otherProjects = [
    {
        title: "MicroJava AST Interpreter",
        description: "Complete interpreter for the MicroJava language: AST generation, SVG visualization, step-by-step debugger with breakpoints, and symbol table management with memory simulation.",
        impact: "Full pipeline: Lexer → Parser → AST → Interpreter → Debugger",
        tags: ["Java", "JavaFX", "Compilers", "AST"],
        link: "https://github.com/pranayr710/microjava-interpreter"
    },
    {
        title: "FastTyper — Adaptive Typing Trainer",
        description: "Typing trainer with adaptive difficulty, real-time WPM and accuracy tracking, and a progression system from simple words to custom text uploads.",
        impact: "4 typing modes with adaptive difficulty scaling",
        tags: ["JavaScript", "CSS", "HTML", "Python"],
        link: "https://github.com/pranayr710/FastTyper"
    },
    {
        title: "Data Structures Visualiser",
        description: "Step-by-step visualizations of sorting algorithms, tree traversals, and graph algorithms. Vanilla JS + Canvas API — zero dependencies.",
        impact: "8 algorithms with adjustable speed and input size",
        tags: ["JavaScript", "Canvas API", "Algorithms"],
        link: "https://github.com/pranayr710/DataStructures-Visualiser",
        demo: "https://pranayr710.github.io/DataStructures-Visualiser/"
    },
    {
        title: "Movie Recommendation System",
        description: "Content-based recommendation engine using genre similarity, ratings, and user preferences, built on pandas for data processing.",
        impact: "Content-based filtering across structured metadata",
        tags: ["Python", "Pandas", "Recommendation Systems"],
        link: "https://github.com/pranayr710/movie_recomendation_system_sem1project"
    },
    {
        title: "Ships & Ports Management Simulation",
        description: "Maritime logistics simulation modeling four container types, ship scheduling, and port facility coordination with time-tracked operations.",
        impact: "Real-time operation tracking across 4 container types",
        tags: ["Java", "OOP", "Simulation", "Logistics"],
        link: "https://github.com/pranayr710/ShipsAndPortsManagment"
    }
];

const EngineeringProjects = () => {
    return (
        <div className="container page">
            <h2 className="section-title" data-num="02.">Engineering Projects</h2>
            <p className="section-subtitle">
                Systems engineering beyond the research lab — backends, simulators, compilers, and tooling.
            </p>

            {featuredProjects.map((project, index) => (
                <Reveal key={project.title} className="glass-card" delay={index * 60}
                    style={{ marginBottom: '22px', padding: '30px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px', flexWrap: 'wrap', gap: '8px' }}>
                        <h3 style={{ fontSize: '1.18rem', color: 'var(--text-bright)', fontWeight: '600', letterSpacing: '-0.01em' }}>
                            {project.title}
                        </h3>
                        <a href={project.link} target="_blank" rel="noopener noreferrer"
                            aria-label={`${project.title} on GitHub`}
                            style={{ color: 'var(--text-dim)', fontSize: '1.15rem' }}>
                            <i className="ri-github-line"></i>
                        </a>
                    </div>

                    <p style={{ color: 'var(--text-dim)', fontSize: '0.92rem', lineHeight: '1.7', marginBottom: '12px', maxWidth: '720px' }}>
                        {project.description}
                    </p>

                    <p className="work-impact" style={{ marginBottom: '16px' }}>
                        <i className="ri-flashlight-line" aria-hidden="true"></i>
                        {project.impact}
                    </p>

                    <ul style={{ fontFamily: 'var(--mono)', fontSize: '0.73rem', color: 'var(--text-dim)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '4px 22px', marginBottom: '16px' }}>
                        {project.highlights.map((h) => (
                            <li key={h}>
                                <span style={{ color: 'var(--accent)', marginRight: '6px' }}>›</span>{h}
                            </li>
                        ))}
                    </ul>

                    <div className="tag-list">
                        {project.tags.map((tag) => <span key={tag} className="tag-pill">{tag}</span>)}
                    </div>
                </Reveal>
            ))}

            <Reveal>
                <div className="divider-label">More builds</div>
            </Reveal>

            <div className="projects-grid">
                {otherProjects.map((project, index) => (
                    <Reveal key={project.title} className="glass-card" delay={index * 50}
                        style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                                <i className="ri-folder-2-line" style={{ fontSize: '1.6rem', color: 'var(--accent)' }} aria-hidden="true"></i>
                                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                    <a href={project.link} target="_blank" rel="noopener noreferrer"
                                        aria-label={`${project.title} on GitHub`}
                                        style={{ fontSize: '1.1rem', color: 'var(--text-dim)' }}>
                                        <i className="ri-github-line"></i>
                                    </a>
                                    {project.demo && (
                                        <a href={project.demo} target="_blank" rel="noopener noreferrer"
                                            aria-label={`${project.title} Live Demo`}
                                            style={{ fontSize: '1.1rem', color: 'var(--text-dim)' }}>
                                            <i className="ri-external-link-line"></i>
                                        </a>
                                    )}
                                </div>
                            </div>

                            <h4 style={{ fontSize: '1.02rem', color: 'var(--text-bright)', marginBottom: '8px', fontWeight: '600' }}>
                                {project.title}
                            </h4>

                            <p style={{ fontSize: '0.85rem', color: 'var(--text-dim)', marginBottom: '10px', lineHeight: '1.6' }}>
                                {project.description}
                            </p>

                            <p style={{ fontFamily: 'var(--mono)', fontSize: '0.71rem', color: 'var(--accent)', marginBottom: '14px' }}>
                                › {project.impact}
                            </p>
                        </div>

                        <div className="tag-list" style={{ marginTop: 'auto' }}>
                            {project.tags.map((tag) => <span key={tag} className="tag-pill">{tag}</span>)}
                        </div>
                    </Reveal>
                ))}
            </div>
        </div>
    );
};

export default EngineeringProjects;
