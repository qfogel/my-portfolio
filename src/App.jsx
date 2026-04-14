import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';

function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">
        <span className="logo-bracket">&lt;</span>Q<span className="logo-bracket">/&gt;</span>
      </Link>
      <div className="nav-links">
        {isHome && (
          <>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </>
        )}
        <Link to="/blog" className={`blog-link ${!isHome ? 'active' : ''}`}>
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