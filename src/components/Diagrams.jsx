
import { motion } from 'framer-motion';

const C2PADiagram = () => (
    <svg viewBox="0 0 900 380" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', maxWidth: '900px' }}>
        <defs>
            <marker id="arrow" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
                <polygon points="0 0, 8 3, 0 6" fill="#64ffda" />
            </marker>
        </defs>

        {/* Row 1: Main flow */}
        {/* Media Input */}
        <rect x="10" y="30" width="120" height="50" rx="4" fill="#112240" stroke="#233554" strokeWidth="1.5" />
        <text x="70" y="58" textAnchor="middle" fill="#ccd6f6" fontSize="11" fontFamily="Inter, sans-serif">Media Input</text>

        <line x1="130" y1="55" x2="160" y2="55" stroke="#64ffda" strokeWidth="1.5" markerEnd="url(#arrow)" />

        {/* C2PA Parser */}
        <rect x="168" y="30" width="140" height="50" rx="4" fill="#112240" stroke="#233554" strokeWidth="1.5" />
        <text x="238" y="52" textAnchor="middle" fill="#ccd6f6" fontSize="10" fontFamily="Inter, sans-serif">C2PA Metadata</text>
        <text x="238" y="66" textAnchor="middle" fill="#ccd6f6" fontSize="10" fontFamily="Inter, sans-serif">Parser</text>

        <line x1="308" y1="55" x2="338" y2="55" stroke="#64ffda" strokeWidth="1.5" markerEnd="url(#arrow)" />

        {/* Decision Diamond */}
        <polygon points="410,20 480,55 410,90 340,55" fill="#112240" stroke="#64ffda" strokeWidth="1.5" />
        <text x="410" y="52" textAnchor="middle" fill="#64ffda" fontSize="9" fontFamily="Inter, sans-serif">Metadata</text>
        <text x="410" y="64" textAnchor="middle" fill="#64ffda" fontSize="9" fontFamily="Inter, sans-serif">Valid?</text>

        {/* YES path → Verified */}
        <line x1="480" y1="55" x2="520" y2="55" stroke="#12D640" strokeWidth="1.5" markerEnd="url(#arrow)" />
        <text x="500" y="48" textAnchor="middle" fill="#12D640" fontSize="9" fontFamily="Inter, sans-serif">YES</text>

        <rect x="528" y="30" width="130" height="50" rx="4" fill="rgba(18,214,64,0.1)" stroke="#12D640" strokeWidth="1.5" />
        <text x="593" y="52" textAnchor="middle" fill="#12D640" fontSize="10" fontFamily="Inter, sans-serif">Verified</text>
        <text x="593" y="66" textAnchor="middle" fill="#12D640" fontSize="10" fontFamily="Inter, sans-serif">Authentic</text>

        {/* NO path → down */}
        <line x1="410" y1="90" x2="410" y2="130" stroke="#ff6b6b" strokeWidth="1.5" markerEnd="url(#arrow)" />
        <text x="430" y="115" textAnchor="start" fill="#ff6b6b" fontSize="9" fontFamily="Inter, sans-serif">NO / ABSENT</text>

        {/* Row 2: AI Pipeline */}
        {/* Preprocessing */}
        <rect x="10" y="140" width="140" height="50" rx="4" fill="#112240" stroke="#233554" strokeWidth="1.5" />
        <text x="80" y="162" textAnchor="middle" fill="#ccd6f6" fontSize="10" fontFamily="Inter, sans-serif">Preprocessing</text>
        <text x="80" y="176" textAnchor="middle" fill="#8892b0" fontSize="8" fontFamily="Inter, sans-serif">Resize · Normalize · Augment</text>

        <line x1="150" y1="165" x2="180" y2="165" stroke="#64ffda" strokeWidth="1.5" markerEnd="url(#arrow)" />

        {/* Connect decision to preprocessing */}
        <line x1="410" y1="138" x2="410" y2="165" stroke="#64ffda" strokeWidth="1" strokeDasharray="4" />
        <line x1="410" y1="165" x2="150" y2="165" stroke="#64ffda" strokeWidth="1" strokeDasharray="4" />

        {/* Ensemble Box */}
        <rect x="188" y="125" width="210" height="80" rx="4" fill="none" stroke="#64ffda" strokeWidth="1.5" strokeDasharray="6" />
        <text x="293" y="140" textAnchor="middle" fill="#64ffda" fontSize="9" fontFamily="Inter, sans-serif">Ensemble Detection</text>

        {/* 3 sub-models */}
        <rect x="196" y="148" width="190" height="16" rx="2" fill="rgba(100,255,218,0.07)" stroke="none" />
        <text x="291" y="160" textAnchor="middle" fill="#ccd6f6" fontSize="8.5" fontFamily="Inter, sans-serif">EfficientNet-B0 (Spatial Features)</text>

        <rect x="196" y="168" width="190" height="16" rx="2" fill="rgba(100,255,218,0.07)" stroke="none" />
        <text x="291" y="180" textAnchor="middle" fill="#ccd6f6" fontSize="8.5" fontFamily="Inter, sans-serif">ResNet-50 (Spatial Features)</text>

        <rect x="196" y="188" width="190" height="16" rx="2" fill="rgba(100,255,218,0.07)" stroke="none" />
        <text x="291" y="200" textAnchor="middle" fill="#ccd6f6" fontSize="8.5" fontFamily="Inter, sans-serif">FFT Analyzer (Frequency Domain)</text>

        <line x1="398" y1="165" x2="440" y2="165" stroke="#64ffda" strokeWidth="1.5" markerEnd="url(#arrow)" />

        {/* Weighted Voting */}
        <rect x="448" y="140" width="130" height="50" rx="4" fill="#112240" stroke="#233554" strokeWidth="1.5" />
        <text x="513" y="162" textAnchor="middle" fill="#ccd6f6" fontSize="10" fontFamily="Inter, sans-serif">Weighted Voting</text>
        <text x="513" y="176" textAnchor="middle" fill="#8892b0" fontSize="8" fontFamily="Inter, sans-serif">Confidence Aggregation</text>

        <line x1="578" y1="165" x2="620" y2="165" stroke="#64ffda" strokeWidth="1.5" markerEnd="url(#arrow)" />

        {/* Final Verdict */}
        <rect x="628" y="140" width="160" height="50" rx="4" fill="rgba(100,255,218,0.1)" stroke="#64ffda" strokeWidth="1.5" />
        <text x="708" y="162" textAnchor="middle" fill="#64ffda" fontSize="10" fontFamily="Inter, sans-serif" fontWeight="600">Final Verdict</text>
        <text x="708" y="176" textAnchor="middle" fill="#8892b0" fontSize="8" fontFamily="Inter, sans-serif">Real / Fake + Confidence %</text>
    </svg>
);

const StrawberryDiagram = () => (
    <svg viewBox="0 0 900 200" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', maxWidth: '900px' }}>
        <defs>
            <marker id="arrow2" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
                <polygon points="0 0, 8 3, 0 6" fill="#64ffda" />
            </marker>
        </defs>

        {/* Field Image */}
        <rect x="10" y="30" width="110" height="50" rx="4" fill="#112240" stroke="#233554" strokeWidth="1.5" />
        <text x="65" y="52" textAnchor="middle" fill="#ccd6f6" fontSize="10" fontFamily="Inter, sans-serif">Field Image</text>
        <text x="65" y="66" textAnchor="middle" fill="#8892b0" fontSize="8" fontFamily="Inter, sans-serif">Input</text>

        <line x1="120" y1="55" x2="150" y2="55" stroke="#64ffda" strokeWidth="1.5" markerEnd="url(#arrow2)" />

        {/* Preprocessing */}
        <rect x="158" y="30" width="120" height="50" rx="4" fill="#112240" stroke="#233554" strokeWidth="1.5" />
        <text x="218" y="52" textAnchor="middle" fill="#ccd6f6" fontSize="10" fontFamily="Inter, sans-serif">Preprocessing</text>
        <text x="218" y="66" textAnchor="middle" fill="#8892b0" fontSize="8" fontFamily="Inter, sans-serif">Augment · 640×640</text>

        <line x1="278" y1="55" x2="308" y2="55" stroke="#64ffda" strokeWidth="1.5" markerEnd="url(#arrow2)" />

        {/* YOLO */}
        <rect x="316" y="30" width="120" height="50" rx="4" fill="rgba(100,255,218,0.1)" stroke="#64ffda" strokeWidth="1.5" />
        <text x="376" y="52" textAnchor="middle" fill="#64ffda" fontSize="10" fontFamily="Inter, sans-serif" fontWeight="600">YOLOv8</text>
        <text x="376" y="66" textAnchor="middle" fill="#8892b0" fontSize="8" fontFamily="Inter, sans-serif">Detection Model</text>

        <line x1="436" y1="55" x2="466" y2="55" stroke="#64ffda" strokeWidth="1.5" markerEnd="url(#arrow2)" />

        {/* IoU Filtering */}
        <rect x="474" y="30" width="130" height="50" rx="4" fill="#112240" stroke="#233554" strokeWidth="1.5" />
        <text x="539" y="52" textAnchor="middle" fill="#ccd6f6" fontSize="10" fontFamily="Inter, sans-serif">IoU Filtering</text>
        <text x="539" y="66" textAnchor="middle" fill="#8892b0" fontSize="8" fontFamily="Inter, sans-serif">NMS · Overlap Removal</text>

        <line x1="604" y1="55" x2="634" y2="55" stroke="#64ffda" strokeWidth="1.5" markerEnd="url(#arrow2)" />

        {/* Classification */}
        <rect x="642" y="30" width="130" height="50" rx="4" fill="#112240" stroke="#233554" strokeWidth="1.5" />
        <text x="707" y="52" textAnchor="middle" fill="#ccd6f6" fontSize="10" fontFamily="Inter, sans-serif">Classification</text>
        <text x="707" y="66" textAnchor="middle" fill="#8892b0" fontSize="8" fontFamily="Inter, sans-serif">Blight · Mildew · Healthy</text>

        {/* Training annotation below */}
        <rect x="250" y="110" width="300" height="40" rx="4" fill="rgba(100,255,218,0.05)" stroke="#233554" strokeWidth="1" strokeDasharray="4" />
        <text x="400" y="128" textAnchor="middle" fill="#8892b0" fontSize="9" fontFamily="Inter, sans-serif">Training: Transfer Learning from COCO weights</text>
        <text x="400" y="142" textAnchor="middle" fill="#8892b0" fontSize="9" fontFamily="Inter, sans-serif">5,000+ annotated images</text>

        <line x1="376" y1="80" x2="376" y2="110" stroke="#233554" strokeWidth="1" strokeDasharray="4" />
    </svg>
);

export { C2PADiagram, StrawberryDiagram };
