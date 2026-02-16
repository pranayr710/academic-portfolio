
import { motion } from 'framer-motion';
import { C2PADiagram, StrawberryDiagram } from '../components/Diagrams';

const fade = (delay = 0) => ({
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0 },
    transition: { delay, duration: 0.4 }
});

const Research = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="container"
            style={{ paddingTop: '100px', paddingBottom: '80px' }}
        >
            <h2 className="section-title" data-num="01.">Research</h2>
            <p className="section-subtitle">
                Systems-level research in AI security and computer vision, conducted under faculty supervision.
            </p>

            {/* ==================== C2PA ==================== */}
            <motion.section {...fade(0.1)} className="research-section" style={{ marginBottom: '80px' }}>
                <h3 className="research-heading">
                    Hybrid C2PA + AI Media Authentication System
                </h3>
                <p className="research-meta">
                    Deepfake Detection · Media Forensics · Ensemble Learning
                </p>
                <p className="research-status">
                    Manuscript preparation in progress for submission to peer-reviewed venue.
                </p>

                {/* 1. Problem Statement */}
                <div className="research-block">
                    <h4 className="block-title">1. Problem Statement</h4>
                    <p className="block-text">
                        The rapid proliferation of AI-generated synthetic media (deepfakes) has created an urgent need for robust authentication systems.
                        Existing solutions rely on either cryptographic provenance <em>(which fails when metadata is stripped)</em> or
                        AI-based detection <em>(which suffers from high false-positive rates on novel generators)</em>.
                        No single approach provides reliable end-to-end verification.
                        This work addresses the gap by designing a <strong>hybrid pipeline</strong> that combines both approaches
                        in a failover architecture, ensuring coverage across the full spectrum of media manipulation scenarios.
                    </p>
                </div>

                {/* 2. System Architecture */}
                <div className="research-block">
                    <h4 className="block-title">2. System Architecture</h4>
                    <p className="block-text" style={{ marginBottom: '20px' }}>
                        The system operates in two stages. First, C2PA metadata is parsed and cryptographically verified. If verification succeeds, the media is marked authentic with zero computational overhead. If metadata is absent or invalid, the input is routed to an ensemble of deep learning models for AI-based classification.
                    </p>
                    <div style={{ background: 'var(--bg-light)', borderRadius: '6px', padding: '25px', overflow: 'auto' }}>
                        <C2PADiagram />
                    </div>
                    <p className="diagram-caption">Fig. 1 — Hybrid verification pipeline with cryptographic-first, AI-fallback architecture.</p>
                </div>

                {/* 3. Technical Implementation */}
                <div className="research-block">
                    <h4 className="block-title">3. Technical Implementation</h4>
                    <ul className="block-list">
                        <li><strong>EfficientNet-B0</strong> — Lightweight CNN for spatial artifact detection. Selected for its parameter efficiency (5.3M params) enabling real-time inference.</li>
                        <li><strong>ResNet-50</strong> — Deeper spatial feature extractor providing complementary representations to EfficientNet. Captures higher-order manipulation artifacts.</li>
                        <li><strong>FFT Analyzer</strong> — Frequency-domain model analyzing spectral signatures. GAN-generated images exhibit characteristic periodic artifacts in Fourier space that spatial models often miss.</li>
                        <li><strong>Weighted Voting</strong> — Model outputs are aggregated via learned confidence weights rather than simple majority voting. Weights are optimized on a held-out validation set to minimize false-positive rate.</li>
                        <li><strong>Hybrid Architecture Rationale</strong> — The cryptographic-first approach eliminates unnecessary GPU computation for verifiable media (estimated 40–60% of inputs), while the AI fallback handles the remaining unverifiable samples.</li>
                    </ul>
                </div>

                {/* 4. Experimental Evaluation */}
                <div className="research-block">
                    <h4 className="block-title">4. Experimental Evaluation</h4>
                    <div className="metrics-grid">
                        <div className="metric-card">
                            <span className="metric-value">94.2%</span>
                            <span className="metric-label">Detection Accuracy</span>
                        </div>
                        <div className="metric-card">
                            <span className="metric-value">0.93</span>
                            <span className="metric-label">F1-Score</span>
                        </div>
                        <div className="metric-card">
                            <span className="metric-value">10K+</span>
                            <span className="metric-label">Video Samples</span>
                        </div>
                        <div className="metric-card">
                            <span className="metric-value">~320ms</span>
                            <span className="metric-label">Inference Latency</span>
                        </div>
                    </div>
                    <p className="block-text" style={{ marginTop: '15px' }}>
                        Evaluated on a custom dataset of 10,000+ real and AI-generated video samples sourced from multiple GAN architectures (StyleGAN2, ProGAN) and diffusion-based generators. Testing included adversarial samples with post-processing (compression, cropping, noise injection).
                    </p>
                </div>

                {/* 5. Challenges & Trade-offs */}
                <div className="research-block">
                    <h4 className="block-title">5. Challenges & Trade-offs</h4>
                    <ul className="block-list">
                        <li>Increased ensemble latency (~320ms per sample) compared to single-model inference (~90ms). Mitigated by cryptographic pre-filtering.</li>
                        <li>C2PA metadata is absent in the majority of existing synthetic media, forcing reliance on the AI fallback path for legacy content.</li>
                        <li>Observable model bias toward StyleGAN-generated samples (overrepresented in training data), with reduced performance on diffusion-based outputs.</li>
                    </ul>
                </div>

                {/* 6. Limitations */}
                <div className="research-block">
                    <h4 className="block-title">6. Limitations</h4>
                    <ul className="block-list">
                        <li>Vulnerable to adversarial perturbations specifically crafted to fool the ensemble (e.g., FGSM-based attacks on EfficientNet).</li>
                        <li>Cannot provide cryptographic authenticity guarantees without C2PA metadata — AI-based classification is inherently probabilistic.</li>
                        <li>Frequency-domain analysis degrades significantly under heavy JPEG compression (quality &lt; 30).</li>
                        <li>Current training data may not generalize to future, unseen generative architectures.</li>
                    </ul>
                </div>

                <a href="https://github.com/pranayr710/c2pa-ai-detector" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ marginTop: '20px' }}>
                    View on GitHub →
                </a>
            </motion.section>

            {/* ==================== STRAWBERRY ==================== */}
            <motion.section {...fade(0.2)} className="research-section">
                <h3 className="research-heading">
                    AI-Based Strawberry Disease Detection & Validation Framework
                </h3>
                <p className="research-meta">
                    Computer Vision · Object Detection · Agricultural AI
                </p>

                {/* 1. Problem Statement */}
                <div className="research-block">
                    <h4 className="block-title">1. Problem Statement</h4>
                    <p className="block-text">
                        Early detection of plant diseases is critical for preventing crop loss in agriculture. Manual visual inspection is unreliable, time-consuming, and dependent on expert availability.
                        Automated detection systems using deep learning can provide consistent, real-time diagnosis directly from field images, reducing response time from days to seconds.
                    </p>
                </div>

                {/* 2. Pipeline Architecture */}
                <div className="research-block">
                    <h4 className="block-title">2. Detection Pipeline</h4>
                    <p className="block-text" style={{ marginBottom: '20px' }}>
                        The pipeline processes raw field images through augmentation, YOLO-based detection, and IoU-based post-processing to filter redundant overlapping detections.
                    </p>
                    <div style={{ background: 'var(--bg-light)', borderRadius: '6px', padding: '25px', overflow: 'auto' }}>
                        <StrawberryDiagram />
                    </div>
                    <p className="diagram-caption">Fig. 2 — End-to-end detection pipeline from field image capture to disease classification.</p>
                </div>

                {/* 3. Technical Highlights */}
                <div className="research-block">
                    <h4 className="block-title">3. Technical Highlights</h4>
                    <ul className="block-list">
                        <li><strong>YOLOv8 (Ultralytics)</strong> — Selected for real-time inference capability and strong small-object detection performance on agricultural datasets.</li>
                        <li><strong>Transfer Learning</strong> — Initialized from COCO pre-trained weights, then fine-tuned on domain-specific strawberry leaf images to overcome limited training data.</li>
                        <li><strong>Annotation Pipeline</strong> — 5,000+ images manually annotated with bounding boxes for three classes: Leaf Blight, Powdery Mildew, and Healthy.</li>
                        <li><strong>IoU-based Overlap Filtering</strong> — Non-Maximum Suppression (NMS) with tuned IoU threshold (0.45) to eliminate duplicate detections on overlapping leaf regions.</li>
                    </ul>
                </div>

                {/* 4. Evaluation */}
                <div className="research-block">
                    <h4 className="block-title">4. Evaluation</h4>
                    <div className="metrics-grid">
                        <div className="metric-card">
                            <span className="metric-value">91.7%</span>
                            <span className="metric-label">mAP@0.5</span>
                        </div>
                        <div className="metric-card">
                            <span className="metric-value">89.3%</span>
                            <span className="metric-label">Precision</span>
                        </div>
                        <div className="metric-card">
                            <span className="metric-value">87.1%</span>
                            <span className="metric-label">Recall</span>
                        </div>
                        <div className="metric-card">
                            <span className="metric-value">5,000+</span>
                            <span className="metric-label">Annotated Images</span>
                        </div>
                    </div>
                </div>

                {/* 5. Limitations */}
                <div className="research-block">
                    <h4 className="block-title">5. Limitations</h4>
                    <ul className="block-list">
                        <li>Performance degrades under variable lighting conditions (shadows, overexposure) common in outdoor agricultural settings.</li>
                        <li>Dataset exhibits class imbalance — Healthy samples are overrepresented relative to disease classes, biasing recall metrics.</li>
                        <li>Real-world variability (different strawberry cultivars, growth stages) not fully represented in training data.</li>
                        <li>Model has not been validated on edge devices (e.g., Raspberry Pi) for in-field deployment latency.</li>
                    </ul>
                </div>

                <a href="https://github.com/pranayr710/AI-Based-Strawberry-Disease-Detection-and-Validation-Framework" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ marginTop: '20px' }}>
                    View on GitHub →
                </a>
            </motion.section>
        </motion.div>
    );
};

export default Research;
