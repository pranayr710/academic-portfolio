
import { motion } from 'framer-motion';

const featuredProjects = [
    {
        title: "GeoDroneAI — Autonomous Delivery Route Optimizer",
        description: "AI-driven simulation for optimizing multi-drone delivery routes in urban environments. Implements A* pathfinding with dynamic obstacle avoidance, geospatial constraint modeling, and fleet coordination logic for last-mile logistics.",
        impact: "Reduced simulated delivery time by 34% vs. naive shortest-path routing",
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
        title: "AttendAI — Smart Face Recognition Attendance System",
        description: "Real-time face recognition attendance system using LBPH (Local Binary Patterns Histograms) and Haar Cascade classifiers. Automates the full pipeline from camera capture to database logging with live detection and CSV export.",
        impact: "Live face detection with sub-second recognition and SQLite persistence",
        tags: ["Python", "OpenCV", "LBPH", "Haar Cascade", "SQLite"],
        link: "https://github.com/pranayr710/AttendAI-Smart-Face-Recognition-Attendance-System",
        highlights: [
            "Live face detection and recognition via webcam input",
            "LBPH face recognizer trained on per-user image datasets",
            "Automatic attendance logging with timestamp to SQLite",
            "CSV/Excel export for attendance records"
        ]
    },
    {
        title: "SmartStore ERP — Enterprise Resource Planning Backend",
        description: "Full-stack enterprise resource planning system built with Spring Boot. Features JWT-based authentication, role-based access control (Admin/User), RESTful API layer, and Hibernate ORM with MySQL for inventory, orders, and production batch management.",
        impact: "7 REST endpoints, 7 database tables, JWT auth with role-based access",
        tags: ["Java", "Spring Boot", "JWT", "JPA/Hibernate", "MySQL", "REST API"],
        link: "https://github.com/pranayr710/SmartStore-ERP",
        highlights: [
            "Secure JWT authentication with role-based access control",
            "Clean layered architecture: Controller → Service → Repository",
            "Product inventory, order tracking, and production batch logging",
            "Low-stock alert system and export/reporting module"
        ]
    }
];

const otherProjects = [
    {
        title: "MicroJava AST Interpreter",
        description: "A complete interpreter for the MicroJava language featuring AST generation, graphical SVG visualization, step-by-step debugger with breakpoints, and symbol table management with memory area simulation.",
        impact: "Full interpreter pipeline: Lexer → Parser → AST → Interpreter → Debugger",
        tags: ["Java", "JavaFX", "Compilers", "AST", "Apache Batik"],
        link: "https://github.com/pranayr710/ast-interpreter_java-"
    },
    {
        title: "FastTyper — Adaptive Typing Trainer",
        description: "Interactive typing speed trainer with adaptive difficulty, real-time WPM and accuracy tracking, multiple modes (words, sentences, numbers), and a learning progression system from simple words to custom text uploads.",
        impact: "4 typing modes, adaptive difficulty scaling, local progress tracking",
        tags: ["JavaScript", "CSS", "HTML", "Python"],
        link: "https://github.com/pranayr710/FastTyper"
    },
    {
        title: "Data Structures Visualiser",
        description: "Interactive web tool rendering step-by-step visualizations of sorting algorithms (Merge, Quick, Heap), tree traversals (BFS/DFS), and graph algorithms. Built with vanilla JavaScript and Canvas API for zero-dependency performance.",
        impact: "Visualizes 8 algorithms with adjustable speed and input size",
        tags: ["JavaScript", "Canvas API", "Algorithms", "HTML/CSS"],
        link: "https://github.com/pranayr710/DataStructures-Visualiser"
    },
    {
        title: "Movie Recommendation System",
        description: "Content-based recommendation engine that suggests movies based on genre similarity, ratings, and user preferences. Built with Python using pandas for data processing and similarity computation.",
        impact: "Content-based filtering across structured movie metadata",
        tags: ["Python", "Pandas", "Recommendation Systems"],
        link: "https://github.com/pranayr710/movie_recomendation_system_sem1project"
    },
    {
        title: "Ships & Ports Management Simulation",
        description: "Java-based maritime logistics simulation system modeling multi-container type management (basic, heavy, liquid, refrigerated), ship scheduling, and port facility coordination with time-tracked operations.",
        impact: "Simulates 4 container types with real-time operation tracking",
        tags: ["Java", "OOP", "Simulation", "Logistics"],
        link: "https://github.com/pranayr710/ShipsAndPortsManagment"
    }
];

const EngineeringProjects = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="container"
            style={{ paddingTop: '100px', paddingBottom: '80px' }}
        >
            <h2 className="section-title" data-num="02.">Engineering Projects</h2>
            <p className="section-subtitle">
                Systems engineering, full-stack development, and interactive tooling.
            </p>

            {/* Featured Engineering Projects */}
            {featuredProjects.map((project, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.12, duration: 0.4 }}
                    className="glass-card"
                    style={{ marginBottom: '25px', padding: '28px' }}
                >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px', flexWrap: 'wrap', gap: '8px' }}>
                        <h3 style={{ fontSize: '1.15rem', color: 'var(--text-bright)', fontWeight: '600' }}>
                            {project.title}
                        </h3>
                        {project.link && (
                            <a href={project.link} target="_blank" rel="noopener noreferrer"
                                style={{ color: 'var(--text-dim)', fontSize: '1.1rem' }}>
                                <i className="ri-github-line"></i>
                            </a>
                        )}
                    </div>

                    <p style={{ color: 'var(--text-dim)', fontSize: '0.92rem', lineHeight: '1.7', marginBottom: '10px' }}>
                        {project.description}
                    </p>

                    <p style={{ fontFamily: 'var(--mono)', fontSize: '0.78rem', color: 'var(--primary)', marginBottom: '14px' }}>
                        ▹ {project.impact}
                    </p>

                    <div style={{ marginBottom: '14px' }}>
                        <p style={{ fontSize: '0.78rem', color: 'var(--text-dim)', marginBottom: '6px', fontWeight: '500' }}>Key Details:</p>
                        <ul style={{ fontFamily: 'var(--mono)', fontSize: '0.73rem', color: 'var(--text-dim)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3px 20px' }}>
                            {project.highlights.map((h, i) => (
                                <li key={i} style={{ listStyle: 'none' }}>
                                    <span style={{ color: 'var(--primary)', marginRight: '6px' }}>▹</span>{h}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                        {project.tags.map((tag, i) => (
                            <span key={i} className="tag-pill">{tag}</span>
                        ))}
                    </div>
                </motion.div>
            ))}

            {/* Other Notable Projects */}
            <h3 style={{
                fontSize: '1.2rem',
                color: 'var(--text-bright)',
                textAlign: 'center',
                margin: '40px 0 25px',
                fontWeight: '600'
            }}>
                Other Notable Projects
            </h3>

            <div className="projects-grid">
                {otherProjects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.3 + index * 0.08 }}
                        className="glass-card"
                        style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
                    >
                        <div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                                <i className="ri-folder-open-line" style={{ fontSize: '1.8rem', color: 'var(--primary)' }}></i>
                                {project.link && (
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.1rem', color: 'var(--text-dim)' }}>
                                        <i className="ri-github-line"></i>
                                    </a>
                                )}
                            </div>

                            <h4 style={{ fontSize: '1.05rem', color: 'var(--text-bright)', marginBottom: '8px', fontWeight: '600' }}>
                                {project.title}
                            </h4>

                            <p style={{ fontSize: '0.85rem', color: 'var(--text-dim)', marginBottom: '8px', lineHeight: '1.6' }}>
                                {project.description}
                            </p>

                            <p style={{ fontFamily: 'var(--mono)', fontSize: '0.72rem', color: 'var(--primary)', marginBottom: '12px' }}>
                                ▹ {project.impact}
                            </p>
                        </div>

                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginTop: 'auto' }}>
                            {project.tags.map((tag, i) => (
                                <span key={i} className="tag-pill">{tag}</span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default EngineeringProjects;
