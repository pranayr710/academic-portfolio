
export const projectsData = [
    {
        id: 0,
        title: "IFDMS — Concurrent Focus Monitoring System",
        description: "Full-stack concurrent system monitoring browser activity in real time. Backend daemon runs an asyncio event loop on a dedicated thread, managing a WebSocket server with multiple simultaneous client connections (Chrome extension + HUD). Thread-safe shared state bridges the async WS layer and the synchronous main loop; 10+ coordinated modules (classifier, scorer, intervention engine, adaptive learner) run inside a single process with message-passing IPC.",
        impact: "Concurrent asyncio + threading architecture · real-time multi-client WebSocket broadcast · 10+ module pipeline",
        tags: ["Python", "asyncio", "WebSockets", "Concurrent Systems", "Flask", "SQLite", "JavaScript"],
        link: "https://github.com/pranayr710/ifdms",
        category: "Systems",
        featured: true
    },
    {
        id: 1,
        title: "C2PA AI Detector",
        description: "Built a hybrid media authentication pipeline combining cryptographic C2PA metadata verification with an ensemble of CNNs (EfficientNet-B0, ResNet-50) for deepfake detection. Trained on 10K+ real and AI-generated video samples.",
        impact: "Achieved 94.2% detection accuracy on adversarial deepfakes",
        tags: ["Python", "PyTorch", "OpenCV", "C2PA", "EfficientNet"],
        link: "https://github.com/pranayr710/c2pa-ai-detector",
        category: "AI/ML",
        featured: true
    },
    {
        id: 2,
        title: "AttendAI",
        description: "Real-time face recognition attendance system using dlib's 128-dimensional face embeddings with an SVM classifier. Automated the full attendance pipeline from camera capture to database logging with sub-second recognition latency.",
        impact: "96.4% recognition accuracy across 200+ face embeddings",
        tags: ["Python", "OpenCV", "dlib", "SQL", "Flask"],
        link: "https://github.com/pranayr710/AttendAI-Smart-Face-Recognition-Attendance-System",
        category: "AI/ML",
        featured: true
    },
    {
        id: 3,
        title: "GeoDroneAI",
        description: "Autonomous drone delivery route optimizer using A* pathfinding with dynamic obstacle avoidance and geospatial constraints. Simulates multi-drone fleet coordination for last-mile logistics in urban environments.",
        impact: "Reduced simulated delivery time by 34% vs. naive routing",
        tags: ["Python", "A* Algorithm", "Geospatial", "Simulation"],
        link: "https://github.com/pranayr710/GeoDroneAI-Autonomous-Drone-Delivery-Simulator-with-AI-Optimization",
        category: "AI/ML",
        featured: false
    },
    {
        id: 4,
        title: "Strawberry Disease Detection",
        description: "YOLOv8-based plant pathology system trained on a curated dataset of 5,000+ annotated leaf images. Implements transfer learning with data augmentation pipeline for robust field-condition inference.",
        impact: "91.7% mAP@0.5 on leaf blight and powdery mildew detection",
        tags: ["YOLOv8", "Computer Vision", "Transfer Learning", "Python"],
        link: "https://github.com/pranayr710/AI-Based-Strawberry-Disease-Detection-and-Validation-Framework",
        category: "AI/ML",
        featured: false
    },
    {
        id: 5,
        title: "DSA Visualiser",
        description: "Interactive web tool rendering step-by-step visualizations of sorting algorithms (Merge, Quick, Heap), tree traversals (BFS/DFS), and graph algorithms. Built with vanilla JS and Canvas API for zero-dependency performance.",
        impact: "Visualizes 8 algorithms with adjustable speed and input size",
        tags: ["JavaScript", "Canvas API", "Algorithms", "HTML/CSS"],
        link: "https://github.com/pranayr710/DataStructures-Visualiser",
        demo: "https://pranayr710.github.io/DataStructures-Visualiser/",
        category: "Web",
        featured: false
    },
    {
        id: 6,
        title: "Hospital Management System",
        description: "Full-stack hospital operations platform with normalized relational schema (3NF), role-based access control (Admin, Doctor, Patient), and RESTful API layer. Handles appointments, billing, and medical records.",
        impact: "15+ database tables with full CRUD and role-based auth",
        tags: ["Java", "SQL", "REST API", "System Design"],
        link: "https://github.com/pranayr710/hospital-management-system",
        category: "Full Stack",
        featured: false
    }
];
