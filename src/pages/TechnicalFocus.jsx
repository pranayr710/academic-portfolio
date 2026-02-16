
import { motion } from 'framer-motion';

const focusAreas = [
    {
        title: "Hybrid AI + Cryptographic Security Systems",
        description: "Designing verification pipelines that combine provenance-based trust (C2PA) with probabilistic AI classification for media authentication."
    },
    {
        title: "Computer Vision & Object Detection",
        description: "Building detection and classification systems using CNN architectures (EfficientNet, ResNet) and YOLO-family models for real-world visual recognition tasks."
    },
    {
        title: "Ensemble Learning & Robustness",
        description: "Investigating weighted voting strategies across heterogeneous model ensembles to improve classification robustness against adversarial and out-of-distribution inputs."
    },
    {
        title: "Algorithmic Optimization & Graph Theory",
        description: "Applying A* pathfinding, constraint satisfaction, and heuristic search to logistics optimization and multi-agent coordination problems."
    },
    {
        title: "Modular System Architecture Design",
        description: "Structuring software systems with clear separation of concerns, failover logic, and extensible interfaces for production-grade reliability."
    }
];

const explorations = [
    "Studied frequency-domain artifacts in GAN-generated images using FFT spectral analysis to identify periodic signatures invisible in spatial domain.",
    "Analyzed annotation noise impact on object detection performance — measured mAP degradation as a function of bounding box jitter in training labels.",
    "Explored ensemble robustness against FGSM and PGD adversarial attacks — observed 12% accuracy drop under L∞ perturbation budget ε=0.03.",
    "Investigated transfer learning convergence rates across ImageNet → domain-specific fine-tuning, comparing EfficientNet-B0 vs. ResNet-50 adaptation speed.",
    "Benchmarked NMS IoU threshold sensitivity on overlapping detection scenarios — identified optimal threshold of 0.45 for agricultural leaf images."
];

const TechnicalFocus = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="container"
            style={{ paddingTop: '100px', paddingBottom: '80px' }}
        >
            <h2 className="section-title" data-num="03.">Technical Focus</h2>
            <p className="section-subtitle">
                Core areas of technical depth and ongoing investigation.
            </p>

            {/* Focus Areas */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '15px', marginBottom: '60px' }}>
                {focusAreas.map((area, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.08, duration: 0.3 }}
                        className="glass-card"
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                            <span style={{ color: 'var(--primary)', fontFamily: 'var(--mono)', fontSize: '0.8rem' }}>▹</span>
                            <h4 style={{ color: 'var(--text-bright)', fontSize: '0.95rem', fontWeight: '600' }}>
                                {area.title}
                            </h4>
                        </div>
                        <p style={{ color: 'var(--text-dim)', fontSize: '0.85rem', lineHeight: '1.6' }}>
                            {area.description}
                        </p>
                    </motion.div>
                ))}
            </div>

            {/* Selected Technical Explorations */}
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
            >
                <h3 style={{ fontSize: '1.2rem', color: 'var(--text-bright)', fontWeight: '600', marginBottom: '20px' }}>
                    Selected Technical Explorations
                </h3>
                <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem', marginBottom: '20px' }}>
                    Independent investigations and experiments beyond core project scope:
                </p>

                <div style={{ borderLeft: '2px solid var(--bg-light)', paddingLeft: '20px' }}>
                    {explorations.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 + index * 0.08, duration: 0.3 }}
                            style={{ marginBottom: '16px', position: 'relative' }}
                        >
                            <div style={{
                                position: 'absolute',
                                left: '-25px',
                                top: '8px',
                                width: '8px',
                                height: '8px',
                                borderRadius: '50%',
                                background: 'var(--primary)',
                                opacity: 0.6
                            }} />
                            <p style={{ color: 'var(--text-dim)', fontSize: '0.85rem', lineHeight: '1.6' }}>
                                {exp}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </motion.div>
    );
};

export default TechnicalFocus;
