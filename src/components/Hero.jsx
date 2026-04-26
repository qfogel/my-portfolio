function Hero() {
  return (
    <section className="hero">
      <p className="hero-eyebrow">Hi, I'm</p>
      <h1 className="hero-name">Quinn Fogel.</h1>
      <p className="hero-tagline">
        CIS student at CSUSM · building full-stack software.
      </p>
      <p className="hero-sub">
        I design and ship clean, well-tested applications — from Java + SQLite
        systems to React front-ends. Currently wrapping up my degree and looking
        for what's next.
      </p>
      <div className="hero-ctas">
        <a href="#projects" className="btn-primary">See my work</a>
        <a href="#contact" className="btn-secondary">Get in touch</a>
      </div>
      <span className="hero-badge mono">scroll ↓</span>
    </section>
  );
}

export default Hero;
