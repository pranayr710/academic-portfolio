import profile from '../assets/profile.jpg';
import HeroScrub from '../components/HeroScrub';
import ChessPuzzle from '../components/ChessPuzzle';
import OverflowDemo from '../components/OverflowDemo';
import MorseWriter from '../components/MorseWriter';

const BASE = import.meta.env.BASE_URL;
const LINKEDIN = 'https://www.linkedin.com/in/raparla-meghapranay-3820b2321/';
const GITHUB = 'https://github.com/pranayr710';
const MERGED_PRS = 'https://github.com/search?q=author%3Apranayr710+is%3Apr+is%3Amerged&type=pullrequests';
const RESUME = `${BASE}Meghapranay_Raparla_Resume.pdf`;
const ARM_FRAMES = 120;
const armFrame = (i) => `${BASE}arm/${String(i + 1).padStart(4, '0')}.webp`;

const work = [
    {
        title: 'Fixes merged into OpenCV and CCExtractor',
        body: 'In OpenCV\'s core I fixed functions like cv::sum() and convertTo() that quietly returned wrong numbers on large values. In CCExtractor, memory bugs in its video parser. Every fix came with a test that failed before the change.',
        meta: 'C and C++ · 11 merged in OpenCV, 8 in CCExtractor · since September 2026',
        href: MERGED_PRS,
        link: 'See the merged pull requests',
        img: 'work/opencv-pr.webp',
        alt: 'A merged OpenCV pull request: core: stop cv::sum() wrapping at 32 bits',
    },
    {
        title: 'Lumina, a canvas for automation',
        body: 'Drag in a camera or a microphone, let detection and language models work on it, and send the result to email, Slack or a Google Sheet. Or describe the workflow in one sentence and it builds the graph for you.',
        meta: 'TypeScript, Next.js, FastAPI, ONNX Runtime · 33 node types · exports to Node-RED',
        href: 'https://github.com/pranayr710/lumina',
        link: 'Read the code',
        img: 'work/lumina-dashboard.webp',
        alt: 'Lumina dashboard with live detection counts',
    },
    {
        title: 'A robot arm that writes',
        body: 'Four wooden joints on an STM32, programmed in C at register level: a 1 kHz control loop, servo PWM and an ultrasonic emergency stop. It picks things up, writes on paper, and can spell out a message from eye blinks.',
        meta: 'Embedded C on STM32 · Python and MediaPipe on the host',
        href: 'https://github.com/pranayr710/robo_arm',
        link: 'Read the firmware',
        img: 'work/robo-arm.webp',
        alt: 'The wooden STM32 robot arm on a workbench, gripping a block',
        cls: 'center',
    },
    {
        title: 'ClassGraph, attention from one camera',
        body: 'One fixed classroom camera in; for every student, who they are, whether they are writing, reading or on their phone, and an attention score, shown live on a dashboard with a report after each session.',
        meta: 'Python, PyTorch, YOLO11, FastAPI · 743 automated tests',
        href: 'https://github.com/pranayr710/cv',
        link: 'Read the code',
        img: 'work/classgraph-architecture.webp',
        alt: 'ClassGraph architecture from detection to per-student reports',
        cls: 'diagram',
    },
    {
        title: 'PatentIQ, an AI patent assistant',
        body: 'An LLM interviews the inventor like a patent officer, searches 11 patent and research sources in parallel, finds the closest prior art for each claim in a vector database, and writes the report. It runs on a local model, with Gemini as the fallback.',
        meta: 'Python, FastAPI, Next.js, ChromaDB · built with a teammate',
        href: null,
        link: 'Code is private for now',
        img: 'work/patentiq.webp',
        alt: 'PatentIQ landing page with the AI interviewing an inventor',
    },
];

const experience = [
    {
        date: 'Apr – Jun 2026',
        title: 'Software Engineer Intern, Nordic Tech Design, Gurgaon',
        body: 'The only developer on the inspection software in a team of five. Measured thread pitch and diameters to within two microns across 40 runs, and the defect checker caught a pit the operator had missed.',
        figure: '< 2 µm',
    },
    {
        date: 'Sep 2026 – now',
        title: 'Open-source contributor, OpenCV and CCExtractor',
        body: 'Eleven fixes merged into OpenCV\'s core module and eight into CCExtractor, each reviewed by the project\'s maintainers.',
        figure: '19',
    },
    {
        date: '2025 – now',
        title: 'Undergraduate researcher, Amrita Vishwa Vidyapeetham',
        body: 'AI security under faculty supervision: media authentication that combines C2PA signatures with a CNN ensemble.',
        figure: '94.2%',
    },
    {
        date: '2024 – 2028',
        title: 'B.Tech in Computer Science and Engineering, Amrita Vishwa Vidyapeetham, Coimbatore',
        body: 'Data structures, operating systems, computer networks, DBMS and machine learning.',
        figure: '8.34',
    },
];

const skills = [
    ['Languages', ['Python', 'Java', 'C', 'SQL', 'TypeScript']],
    ['Vision and AI', ['OpenCV', 'PyTorch', 'YOLO', 'LLM APIs and RAG']],
    ['Backend and systems', ['FastAPI', 'Spring Boot and MySQL', 'asyncio and WebSockets', 'Embedded C on STM32']],
    ['Tools', ['Git and GitHub', 'Linux', 'Docker', 'Power BI', 'Node-RED']],
];

/* A work row links out when there is public code; otherwise it is a plain block. */
const Row = ({ href, children }) => (href
    ? <a className="w-row" href={href} target="_blank" rel="noopener noreferrer">{children}</a>
    : <div className="w-row">{children}</div>);

const Home = () => (
    <>
        {/* ---------- First screen: who, what, one hard fact ---------- */}
        <div className="container">
            <section className="h-hero" aria-labelledby="hero-title">
                <div>
                    <p className="h-eyebrow">Meghapranay Raparla · Computer science, Amrita University</p>
                    <h1 id="hero-title">I build software that has to work in the <em>real world</em>.</h1>
                    <p className="h-intro">
                        I&apos;m a third-year student in Coimbatore. I like problems you can measure: a bolt
                        measured to two microns, an OpenCV bug proven with a failing test, a robot arm that
                        writes what you blink.
                    </p>
                    <ul className="h-facts">
                        <li><b>19</b>fixes merged into OpenCV and CCExtractor</li>
                        <li><b>&lt; 2 µm</b>inspection software, Nordic Tech Design</li>
                    </ul>
                    <div className="h-actions">
                        <a href="#work" className="btn-solid">See my work <i className="ri-arrow-down-line" aria-hidden="true"></i></a>
                        <a href={RESUME} target="_blank" rel="noopener noreferrer" className="btn-primary">Download resume</a>
                    </div>
                </div>
                <figure className="h-portrait">
                    <img src={profile} alt="Meghapranay Raparla" />
                </figure>
            </section>
        </div>

        {/* ---------- The one moment: real footage of the robot arm, scrubbed by scroll ---------- */}
        <HeroScrub
            frameCount={ARM_FRAMES}
            frameUrl={armFrame}
            poster={`${BASE}work/robo-arm.webp`}
            posterAlt="Footage of the STM32 robot arm picking up a block and writing on paper"
            titleTop="Hand-built"
            titleBottom="robot arm."
        />

        <div className="container">
            {/* ---------- Work ---------- */}
            <section className="h-sec" id="work" aria-labelledby="work-title">
                <h2 id="work-title">Selected work</h2>
                <div className="w-list">
                    {work.map((w, i) => (
                        <Row key={w.title} href={w.href}>
                            <div>
                                <span className="w-num">{String(i + 1).padStart(2, '0')}</span>
                                <h3>{w.title}</h3>
                                <p>{w.body}</p>
                                <p className="w-meta">{w.meta}</p>
                                <span className={`w-link${w.href ? '' : ' muted'}`}>
                                    {w.link} {w.href && <i className="ri-arrow-right-up-line" aria-hidden="true"></i>}
                                </span>
                            </div>
                            <span className={`w-pic ${w.cls || ''}`}>
                                <img src={`${BASE}${w.img}`} alt={w.alt} loading="lazy" />
                            </span>
                        </Row>
                    ))}
                </div>
            </section>

            {/* ---------- Two things to try ---------- */}
            <section className="h-sec" aria-labelledby="try-title">
                <h2 id="try-title">Two things to try</h2>
                <div className="t-grid">
                    <OverflowDemo />
                    <MorseWriter />
                </div>
            </section>

            {/* ---------- How I work ---------- */}
            <section className="h-sec" aria-labelledby="story-title">
                <p className="h-eyebrow" id="story-title">How I work</p>
                <div className="s-grid">
                    <p className="s-quote">My first six pull requests to OpenCV were all <em>closed</em>.</p>
                    <div className="s-body">
                        <p>
                            I was fixing things other people had already fixed, from a copy of the code that
                            was months out of date. So I changed how I work, and since September nineteen of my
                            fixes have been merged.
                        </p>
                        <ol className="s-steps">
                            <li>Start from the latest code, and check nobody is already on it.</li>
                            <li>Prove the bug with a test that fails before touching anything.</li>
                            <li>Fix it, then show the unrelated failures were already there.</li>
                        </ol>
                    </div>
                </div>
            </section>

            {/* ---------- Experience ---------- */}
            <section className="h-sec" aria-labelledby="exp-title">
                <h2 id="exp-title">Experience and education</h2>
                <div className="e-list">
                    {experience.map((e) => (
                        <div key={e.title} className="e-item">
                            <span className="e-date">{e.date}</span>
                            <div>
                                <h3>{e.title}</h3>
                                <p>{e.body}</p>
                            </div>
                            <span className="e-figure">{e.figure}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* ---------- Skills ---------- */}
            <section className="h-sec" aria-labelledby="skills-title">
                <h2 id="skills-title">Tools I use</h2>
                <div className="k-grid">
                    {skills.map(([group, items]) => (
                        <div key={group}>
                            <h3>{group}</h3>
                            <ul>{items.map((s) => <li key={s}>{s}</li>)}</ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* ---------- Off the keyboard ---------- */}
            <section className="h-sec" aria-labelledby="off-title">
                <p className="h-eyebrow" id="off-title">Off the keyboard</p>
                <div className="o-grid">
                    <div>
                        <p className="o-big">6<sup>th</sup></p>
                        <p className="o-caption">
                            at the Under-11 National Chess Championship in 2016. I still play, at a rating of 1406.
                        </p>
                        <ul className="o-list" style={{ marginTop: '28px' }}>
                            <li><b>Vice-Captain</b>, Chess Club, Amrita</li>
                            <li><b>Captain</b>, CSE chess team</li>
                            <li><b>Google Student Ambassador</b>, Amrita</li>
                            <li><b>Member</b>, Amrita Center for Entrepreneurship</li>
                        </ul>
                    </div>
                    <ChessPuzzle />
                </div>
            </section>

            {/* ---------- Contact ---------- */}
            <section className="h-sec" aria-labelledby="contact-title" style={{ paddingBottom: 'clamp(90px, 14vh, 150px)' }}>
                <h2 id="contact-title">Say hello</h2>
                <p className="h-intro" style={{ marginTop: '18px' }}>I&apos;m looking for a software or research internship for summer 2027.</p>
                <a className="c-mail" href="mailto:pranayraparla3@gmail.com">pranayraparla3@gmail.com</a>
                <div className="c-links">
                    <a className="btn-primary" href={GITHUB} target="_blank" rel="noopener noreferrer"><i className="ri-github-fill" aria-hidden="true"></i>GitHub</a>
                    <a className="btn-primary" href={LINKEDIN} target="_blank" rel="noopener noreferrer"><i className="ri-linkedin-box-fill" aria-hidden="true"></i>LinkedIn</a>
                    <a className="btn-primary" href={RESUME} target="_blank" rel="noopener noreferrer"><i className="ri-file-text-line" aria-hidden="true"></i>Resume</a>
                </div>
            </section>
        </div>
    </>
);

export default Home;
