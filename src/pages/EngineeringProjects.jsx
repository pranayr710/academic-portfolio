import Reveal from '../components/Reveal';

const featuredProjects = [
    {
        title: "Nordic Tech Design Internship — Software Engineering",
        description: "Two working inspection systems for precision bolts during a 3-month internship. First: a sub-pixel dimensional metrology engine that measures thread pitch, major/minor diameter, and hole-to-edge distances using telecentric-camera imagery. Second: a golden-comparison surface-defect detector that aligns each part with a reference part so lighting changes don't raise false alarms.",
        impact: "< 2 µm measurement repeatability · caught a pit the human operator missed",
        tags: ["Python", "OpenCV", "Sub-pixel Metrology", "Anomaly Detection", "Machine Vision"],
        link: "https://github.com/pranayr710",
        highlights: [
            "Sub-pixel thread pitch measurement by fitting lines through many teeth",
            "Validated to < 2 µm repeatability across 40 repeated runs",
            "Golden-comparison defect detector with orientation alignment to suppress lighting false alarms",
            "Automated hole counter from rotating-bolt video with deduplication logic",
            "Studied PatchCore and EfficientAD on MVTec AD benchmark"
        ]
    },
    {
        title: "Open Source — OpenCV & CCExtractor",
        description: "Contributor to two widely used open-source projects since September 2026. In OpenCV's core module I fixed functions that returned wrong or negative results on large values because of integer overflow; in CCExtractor, a C tool that extracts subtitles from broadcast video, I fixed memory-safety and cross-platform bugs.",
        impact: "19 pull requests merged after maintainer review — 11 in OpenCV, 8 in CCExtractor",
        tags: ["C", "OpenCV", "Memory Safety", "Regression Testing", "Code Review", "Cross-platform"],
        link: "https://github.com/search?q=author%3Apranayr710+is%3Apr+is%3Amerged&type=pullrequests",
        image: "work/opencv-pr.webp",
        imageAlt: "A merged OpenCV pull request fixing cv::sum() overflow",
        highlights: [
            "Fixed cv::sum(), cv::norm(), convertTo() and absdiff() wrapping or going negative on large values",
            "Every OpenCV fix shipped with regression tests and passed CI on Linux, Windows, macOS, Android, iOS and ARM",
            "CCExtractor: fixed large video frames (over 32 KB) being silently dropped",
            "CCExtractor: fixed out-of-bounds reads on malformed packets, a crash, a memory leak and a Windows-only timestamp bug"
        ]
    },
    {
        title: "ClassGraph — Classroom Engagement Analytics",
        description: "Turns a single fixed classroom camera into per-student engagement analytics: who each student is, what they are doing, where they are facing, and an attention score over 15-second windows — shown live on a web dashboard with an automatic report for every session.",
        impact: "Nine-model perception chain · live web dashboard · 743 automated tests",
        tags: ["Python", "FastAPI", "YOLO11", "PyTorch", "ByteTrack", "MediaPipe"],
        link: "https://github.com/pranayr710/cv",
        image: "work/classgraph-architecture.webp",
        imageAlt: "ClassGraph architecture: input, detect, per-person models, derive, attention, output",
        wide: true,
        highlights: [
            "YOLO11m detection with ByteTrack tracking; per-person face, pose, head-pose and expression models",
            "Identity resolver that never merges two people visible in the same frame",
            "Scene-layout reasoning to tell a lecture from group work without assuming where the teacher stands",
            "Every reported number measured against hand-labelled ground truth",
            "743 automated tests"
        ]
    },
    {
        title: "Lumina — Visual AI Workflow Automation Builder",
        description: "A drag-and-drop canvas for building automated AI workflows. Camera and microphone feeds go in; object detection, speech-to-text and language models process them; the results trigger email, Slack, Discord, SMS, MQTT or Google Sheets. Vision and audio models run locally through ONNX Runtime.",
        impact: "33 node types · build a workflow from a plain-English description · exports to Node-RED",
        tags: ["TypeScript", "Next.js", "React Flow", "FastAPI", "Python", "ONNX Runtime", "Electron"],
        link: "https://github.com/pranayr710/lumina",
        image: "work/lumina-dashboard.webp",
        imageAlt: "Lumina system dashboard with live detection analytics",
        highlights: [
            "33 node types across inputs, vision, audio, language, logic and outputs",
            "Describe a workflow in English and the AI engine builds the node graph, with a rule-based fallback",
            "Auto-wire infers the connections between unconnected nodes",
            "FastAPI backend with a WebSocket hub; secrets kept in a local vault, not in workflow files",
            "Finished workflows export to Node-RED"
        ]
    },
    {
        title: "STM32 Robotic Arm — Gesture & Voice Control",
        description: "A 4-joint servo robotic arm driven by an STM32 microcontroller programmed in C at register level. The firmware is a fast, safe servo server; a host app streams commands for hand-following, gesture and voice control — and can write a message on paper from eye-blink Morse code, as an accessibility aid.",
        impact: "1 kHz non-blocking control loop · ultrasonic emergency stop · link-loss failsafe",
        tags: ["Embedded C", "STM32", "PWM", "UART", "Bluetooth", "MediaPipe", "Python"],
        link: "https://github.com/pranayr710/robo_arm",
        image: "work/robo-arm.webp",
        imageAlt: "The wooden STM32 robot arm gripping a block on the workbench",
        highlights: [
            "Hardware timer drives a 1 kHz control loop and 50 Hz servo PWM",
            "Interrupt-driven UART command server, so the firmware never blocks",
            "HC-SR04 ultrasonic emergency stop and a failsafe when the link is lost",
            "Hardware-agnostic firmware: servo count, pins, calibration and limits in one config file",
            "Webcam hand-follow, gesture, voice, Bluetooth and joystick control"
        ]
    },
    {
        title: "SmartStore ERP — Store & Inventory Management Backend",
        description: "Spring Boot backend for store and warehouse operations with a Controller → Service → Repository architecture over MySQL. Manages inventory, orders, suppliers and production, with separate login and dashboards for admin, staff and customer.",
        impact: "50 REST endpoints · 8 MySQL tables · Excel and PDF report export",
        tags: ["Java", "Spring Boot", "JPA/Hibernate", "MySQL", "REST API"],
        link: "https://github.com/pranayr710/SmartStore-ERP",
        highlights: [
            "Layered architecture: Controller → Service → Repository",
            "Role-based login and dashboards for admin, staff and customer",
            "Inventory, orders, suppliers and production batch tracking",
            "Reorder and expiring-stock alerts; reports exported to Excel and PDF"
        ]
    },
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
    }
];

const otherProjects = [
    {
        title: "CloudShield — Network Attack Detection",
        description: "Machine-learning capstone (team of three): classifies network flows as normal or one of nine attacks, tested on machines held out from training. The tuned bagging model reached 92.2% accuracy and ROC-AUC 0.989 on 11,088 unseen flows.",
        impact: "12 models compared · machine-held-out evaluation",
        tags: ["Python", "scikit-learn", "Pandas"],
        link: "https://github.com/pranayr710/CloudShield"
    },
    {
        title: "PatentIQ — AI Patent Search Assistant",
        description: "Built with a teammate: an LLM interviews an inventor, searches 11 patent and research sources in parallel, retrieves the closest prior art for each claim from a ChromaDB vector store, and writes a patentability report. Long LLM analysis runs as background jobs with progress polling.",
        impact: "RAG over 11 sources · local LLM with Gemini fallback",
        tags: ["Python", "FastAPI", "Next.js", "ChromaDB", "LLMs", "RAG"],
        link: "https://github.com/pranayr710"
    },
    {
        title: "MicroJava AST Interpreter",
        description: "Complete interpreter for the MicroJava language: AST generation, SVG visualization, step-by-step debugger with breakpoints, and symbol table management with memory simulation.",
        impact: "Full pipeline: Lexer → Parser → AST → Interpreter → Debugger",
        tags: ["Java", "JavaFX", "Language Processing", "AST"],
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

const BASE = import.meta.env.BASE_URL;

const EngineeringProjects = () => (
    <div className="container">
        <Reveal className="px-head">
            <span className="kicker">Projects</span>
            <h2 className="section-title" style={{ marginTop: '10px' }}>Engineering projects</h2>
            <p className="section-subtitle">
                Systems engineering beyond the research lab — automation, embedded firmware, backends and open source.
            </p>
        </Reveal>

        <div className="px-grid">
            {featuredProjects.map((project, index) => (
                <Reveal key={project.title} className={`px-card${project.wide ? ' wide' : ''}`} delay={(index % 2) * 60}>
                    {project.image && (
                        <div className={`px-media${project.wide ? ' contain' : ''}`}>
                            <img src={`${BASE}${project.image}`} alt={project.imageAlt} loading="lazy" />
                        </div>
                    )}
                    <div className="px-body">
                        <div className="px-top">
                            <h3>{project.title}</h3>
                            <a href={project.link} target="_blank" rel="noopener noreferrer"
                                className="hx-icon-btn" style={{ width: '40px', height: '40px', fontSize: '1.05rem', flexShrink: 0 }}
                                aria-label={`${project.title} on GitHub`}>
                                <i className="ri-github-fill"></i>
                            </a>
                        </div>
                        <p>{project.description}</p>
                        <div className="px-impact">{project.impact}</div>
                        <ul className="px-list">
                            {project.highlights.map((h) => <li key={h}>{h}</li>)}
                        </ul>
                        <div className="px-tags">
                            {project.tags.map((tag) => <span key={tag} className="hx-tag">{tag}</span>)}
                        </div>
                    </div>
                </Reveal>
            ))}
        </div>

        <Reveal className="hx-section-head" style={{ marginTop: '80px' }}>
            <div>
                <span className="kicker">More builds</span>
                <h2>Other projects</h2>
            </div>
        </Reveal>

        <div className="px-other" style={{ marginBottom: '80px' }}>
            {otherProjects.map((project, index) => (
                <Reveal key={project.title} className="px-mini" delay={index * 50}>
                    <div className="px-top">
                        <h4>{project.title}</h4>
                        <a href={project.link} target="_blank" rel="noopener noreferrer"
                            aria-label={`${project.title} on GitHub`} style={{ color: 'var(--text-dim)', fontSize: '1.1rem' }}>
                            <i className="ri-github-line"></i>
                        </a>
                    </div>
                    <p>{project.description}</p>
                    <div className="px-tags">
                        {project.tags.map((tag) => <span key={tag} className="hx-tag">{tag}</span>)}
                    </div>
                </Reveal>
            ))}
        </div>
    </div>
);

export default EngineeringProjects;
