
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Research from './pages/Research';
import EngineeringProjects from './pages/EngineeringProjects';
import TechnicalFocus from './pages/TechnicalFocus';
import Contact from './pages/Contact';
import { AnimatePresence } from 'framer-motion';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/research" element={<Research />} />
        <Route path="/projects" element={<EngineeringProjects />} />
        <Route path="/focus" element={<TechnicalFocus />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>

        <div className="bg-blobs">
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
        </div>

        <Navbar />

        <main style={{ flex: 1 }}>
          <AnimatedRoutes />
        </main>

        <footer style={{
          textAlign: 'center',
          padding: '20px',
          fontFamily: 'var(--mono)',
          fontSize: '0.7rem',
          color: 'var(--text-dim)',
          letterSpacing: '0.3px'
        }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '8px' }}>
            <a href="https://github.com/pranayr710" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-dim)', fontSize: '0.95rem', transition: 'color 0.2s' }}>
              <i className="ri-github-line"></i>
            </a>
            <a href="mailto:pranayraparla3@gmail.com" style={{ color: 'var(--text-dim)', fontSize: '0.95rem', transition: 'color 0.2s' }}>
              <i className="ri-mail-line"></i>
            </a>
          </div>
          <p>Designed & Built by Meghapranay Raparla</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
