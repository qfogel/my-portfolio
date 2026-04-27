import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  const goToSection = (id) => (e) => {
    e.preventDefault();
    if (!isHome) {
      navigate('/');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">
        <span className="logo-bracket">&lt;</span>Q<span className="logo-bracket">/&gt;</span>
      </Link>
      <div className="nav-links">
        <a href="#about" onClick={goToSection('about')}>About</a>
        <a href="#projects" onClick={goToSection('projects')}>Projects</a>
        <a href="#contact" onClick={goToSection('contact')}>Contact</a>
        <Link
          to="/blog"
          className={`blog-link ${!isHome ? 'active' : ''}`}
          onClick={() => {
            setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 0);
          }}
        >
          Blog
        </Link>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>
        Built with <span className="footer-accent">React + Vite</span> · Deployed on GitHub Pages
      </p>
    </footer>
  );
}

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;