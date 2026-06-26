import Reveal from '../components/Reveal';

const focusAreas = [
    {
        title: "Hybrid AI + Cryptographic Security",
        description: "Verification pipelines combining provenance-based trust (C2PA) with probabilistic AI classification for media authentication."
    },
    {
        title: "Computer Vision & Object Detection",
        description: "Detection and classification with CNN architectures (EfficientNet, ResNet) and YOLO-family models for real-world visual recognition."
    },
    {
        title: "Ensemble Learning & Robustness",
        description: "Weighted voting across heterogeneous model ensembles to improve robustness against adversarial and out-of-distribution inputs."
    },
    {
        title: "Algorithmic Optimization & Graph Theory",
        description: "A* pathfinding, constraint satisfaction, and heuristic search applied to logistics optimization and multi-agent coordination."
    },
    {
        title: "Modular System Architecture",
        description: "Software systems with clear separation of concerns, failover logic, and extensible interfaces for production-grade reliability."
    }
];

const explorations = [
    "Studied frequency-domain artifacts in GAN-generated images using FFT spectral analysis to identify periodic signatures invisible in the spatial domain.",
    "Analyzed annotation noise impact on object detection — measured mAP degradation as a function of bounding box jitter in training labels.",
    "Tested ensemble robustness against FGSM and PGD adversarial attacks — observed a 12% accuracy drop under L∞ perturbation budget ε=0.03.",
    "Compared transfer learning convergence (ImageNet → domain fine-tuning) between EfficientNet-B0 and ResNet-50.",
    "Benchmarked NMS IoU threshold sensitivity on overlapping detections — identified 0.45 as optimal for agricultural leaf imagery."
];

const TechnicalFocus = () => {
    return (
        <div className="container page">
            <h2 className="section-title" data-num="03.">Technical Focus</h2>
            <p className="section-subtitle">
                Core areas of depth — and the experiments I ran to earn them.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))', gap: '16px', marginBottom: '60px' }}>
                {focusAreas.map((area, index) => (
                    <Reveal key={area.title} className="skill-group" delay={index * 60}>
                        <h4>{area.title}</h4>
                        <p style={{ color: 'var(--text-dim)', fontSize: '0.86rem', lineHeight: '1.65' }}>
                            {area.description}
                        </p>
                    </Reveal>
                ))}
            </div>

            <Reveal>
                <div className="divider-label">Selected technical explorations</div>
                <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem', marginBottom: '26px', maxWidth: '620px' }}>
                    Independent investigations beyond core project scope:
                </p>
            </Reveal>

            <div className="timeline">
                {explorations.map((exp, index) => (
                    <Reveal key={index} className="timeline-item" delay={index * 60}>
                        <p style={{ color: 'var(--text-dim)', fontSize: '0.88rem', lineHeight: '1.65', maxWidth: '680px' }}>
                            {exp}
                        </p>
                    </Reveal>
                ))}
            </div>
        </div>
    );
};

export default TechnicalFocus;
