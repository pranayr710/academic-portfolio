import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Research from './pages/Research';
import EngineeringProjects from './pages/EngineeringProjects';
import TechnicalFocus from './pages/TechnicalFocus';
import Contact from './pages/Contact';
import Effects from './components/Effects';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <div className="page-enter" key={location.pathname}>
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/research" element={<Research />} />
        <Route path="/projects" element={<EngineeringProjects />} />
        <Route path="/focus" element={<TechnicalFocus />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <div className="aurora" aria-hidden="true"></div>
        <div className="bg-grid" aria-hidden="true"></div>
        <Effects />

        <a href="#main" className="skip-link">Skip to content</a>
        <Navbar />
        <ScrollToTop />

        <main id="main" style={{ flex: 1 }}>
          <AnimatedRoutes />
        </main>

        <footer className="site-footer">
          <div className="footer-links">
            <a href="https://github.com/pranayr710" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i className="ri-github-line"></i>
            </a>
            <a href="mailto:pranayraparla3@gmail.com" aria-label="Email">
              <i className="ri-mail-line"></i>
            </a>
          </div>
          <p>verified_human=true · designed &amp; built by Meghapranay Raparla</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
