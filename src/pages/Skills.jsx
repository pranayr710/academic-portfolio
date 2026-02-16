
import { motion } from 'framer-motion';

const SkillCategory = ({ title, skills, delay }) => (
    <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: delay, duration: 0.5 }}
        style={{
            background: 'var(--bg-card)',
            padding: '25px',
            borderRadius: '15px',
            border: '1px solid rgba(255,255,255,0.05)',
            backdropFilter: 'blur(10px)',
            marginBottom: '30px'
        }}
    >
        <h3 style={{ color: 'var(--primary-color)', marginBottom: '20px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '10px' }}>{title}</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '15px' }}>
            {skills.map((skill, index) => (
                <div key={index}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                        <span style={{ color: 'white' }}>{skill.name}</span>
                        <span style={{ color: 'var(--text-dim)' }}>{skill.level}%</span>
                    </div>
                    <div style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px', overflow: 'hidden' }}>
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ delay: delay + 0.2 + (index * 0.1), duration: 1, type: "spring" }}
                            style={{ height: '100%', background: `linear-gradient(90deg, var(--primary-color), var(--secondary-color))`, borderRadius: '3px' }}
                        />
                    </div>
                </div>
            ))}
        </div>
    </motion.div>
);

const Skills = () => {
    const languages = [
        { name: "Python", level: 95 },
        { name: "Java", level: 85 },
        { name: "C / C++", level: 80 },
        { name: "JavaScript", level: 85 },
        { name: "SQL", level: 90 }
    ];

    const ai = [
        { name: "TensorFlow / PyTorch", level: 85 },
        { name: "OpenCV", level: 90 },
        { name: "Deep Learning (CNN/RNN)", level: 85 },
        { name: "NLP / Transformers", level: 80 },
        { name: "Data Analysis (Pandas/NumPy)", level: 95 }
    ];

    const web = [
        { name: "React.js", level: 85 },
        { name: "HTML5 / CSS3", level: 90 },
        { name: "Node.js", level: 75 },
        { name: "Flask / Django", level: 85 },
        { name: "Git / GitHub", level: 90 }
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="container"
            style={{ paddingTop: '100px', paddingBottom: '50px' }}
        >
            <h2 className="section-title">Technical Proficiency</h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                <SkillCategory title="Languages & Core" skills={languages} delay={0.1} />
                <SkillCategory title="AI & Data Science" skills={ai} delay={0.2} />
                <SkillCategory title="Web & Tools" skills={web} delay={0.3} />
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                style={{ textAlign: 'center', marginTop: '50px', padding: '30px', background: 'rgba(18, 214, 64, 0.05)', borderRadius: '15px', border: '1px dashed var(--accent-color)' }}
            >
                <h3 style={{ color: 'var(--accent-color)', marginBottom: '10px' }}>🔥 Current Focus</h3>
                <p style={{ color: 'var(--text-dim)' }}>Exploring <strong>Generative Adversarial Networks (GANs)</strong> and <strong>Autonomous Swarm Intelligence</strong>.</p>
            </motion.div>

        </motion.div>
    );
};

export default Skills;
