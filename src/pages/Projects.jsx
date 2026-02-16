
import { motion } from 'framer-motion';
import { projectsData } from '../data/projects';

const Projects = () => {
    const featured = projectsData.filter(p => p.featured);
    const others = projectsData.filter(p => !p.featured);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="container"
            style={{ paddingTop: '100px', paddingBottom: '80px' }}
        >
            <h2 className="section-title" data-num="01.">Projects</h2>
            <p className="section-subtitle">Technical work ranging from deepfake detection to autonomous systems.</p>

            {/* Featured Projects */}
            {featured.map((project, index) => (
                <FeaturedProject key={project.id} project={project} index={index} />
            ))}

            {/* Other Projects */}
            <h3 style={{
                fontSize: '1.3rem',
                color: 'var(--text-bright)',
                textAlign: 'center',
                marginTop: '20px',
                marginBottom: '30px',
                fontWeight: '600'
            }}>
                Other Noteworthy Projects
            </h3>

            <div className="projects-grid">
                {others.map((project, index) => (
                    <ProjectCard key={project.id} project={project} index={index} />
                ))}
            </div>
        </motion.div>
    );
};

const FeaturedProject = ({ project, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.15 }}
        className="featured-card"
        style={{ direction: index % 2 !== 0 ? 'rtl' : 'ltr' }}
    >
        <div className="project-content" style={{ direction: 'ltr' }}>
            <p className="project-label">Featured Project</p>
            <h3 className="project-title">{project.title}</h3>
            <div className="project-desc">{project.description}</div>
            <div className="project-impact">
                <span>▹</span> {project.impact}
            </div>
            <div className="project-tags">
                {project.tags.map((tag, i) => (
                    <span key={i}>{tag}</span>
                ))}
            </div>
            <div className="project-links">
                {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <i className="ri-github-line"></i>
                    </a>
                )}
            </div>
        </div>

        {/* Right side: Impact highlight */}
        <div style={{
            direction: 'ltr',
            background: 'var(--bg-light)',
            borderRadius: '4px',
            padding: '30px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '200px'
        }}>
            <p style={{
                fontFamily: 'var(--mono)',
                fontSize: '0.85rem',
                color: 'var(--primary)',
                textAlign: 'center',
                lineHeight: '2'
            }}>
                {project.tags.map((tag, i) => (
                    <span key={i} className="tag-pill" style={{ margin: '3px' }}>{tag}</span>
                ))}
            </p>
        </div>
    </motion.div>
);

const ProjectCard = ({ project, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
        className="glass-card"
        style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
    >
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                <i className="ri-folder-open-line" style={{ fontSize: '2rem', color: 'var(--primary)' }}></i>
                {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.2rem', color: 'var(--text-dim)' }}>
                        <i className="ri-github-line"></i>
                    </a>
                )}
            </div>

            <h4 style={{ fontSize: '1.15rem', color: 'var(--text-bright)', marginBottom: '10px', fontWeight: '600' }}>
                {project.title}
            </h4>

            <p style={{ fontSize: '0.9rem', color: 'var(--text-dim)', marginBottom: '10px', lineHeight: '1.6' }}>
                {project.description}
            </p>

            <p style={{ fontFamily: 'var(--mono)', fontSize: '0.75rem', color: 'var(--primary)', marginBottom: '15px' }}>
                ▹ {project.impact}
            </p>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: 'auto' }}>
            {project.tags.map((tag, i) => (
                <span key={i} className="tag-pill">{tag}</span>
            ))}
        </div>
    </motion.div>
);

export default Projects;
