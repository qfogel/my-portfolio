import { useState } from 'react';

const PROJECTS = [
  {
    id: 1,
    title: 'VetConnect',
    tag: 'Java · SQLite · Swing',
    description:
      'A VA education-benefit certification system for student veterans at CSUSM. Built with an MVC architecture, SQLite database (19 tables), full DAO layer, and Java Swing UI. Designed to streamline the certification workflow between students, the VA school certifying official, and the VA itself.',
    link: '#',
  },
  {
    id: 2,
    title: 'Versus',
    tag: 'Node.js · Express · HTML/CSS/JS',
    description:
      'A retro-styled head-to-head voting web app where users battle images, ideas, and opinions. Features event delegation, dynamic DOM rendering, and a RESTful Express backend. Built as a group project with a focus on clean UX and client–server communication.',
    link: '#',
  },
  {
    id: 3,
    title: 'DNS Client & Server',
    tag: 'Python · Sockets · Networking',
    description:
      'A fully functional DNS client/server implementation built from scratch using raw UDP sockets. Includes DNS spoofing detection via transaction ID and source IP validation, multithreaded request handling, and support for A, CNAME, and MX record types.',
    link: '#',
  },
];

function Tag({ label }) {
  return <span className="tag">{label}</span>;
}

function ProjectCard({ title, tag, description, link }) {
  return (
    <article className="project-card">
      <div className="card-header">
        <h3>{title}</h3>
        <Tag label={tag} />
      </div>
      <p>{description}</p>
      {link !== '#' && (
        <a href={link} className="card-link" target="_blank" rel="noopener noreferrer">
          View Project →
        </a>
      )}
    </article>
  );
}

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError('Please fill out all fields.');
      return;
    }
    setError('');
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="form-success">
        <span className="success-icon">✓</span>
        <p>Thanks, {form.name}! I'll get back to you soon.</p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      {error && <p className="form-error">{error}</p>}
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="your@email.com"
          />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="What's on your mind?"
        />
      </div>
            <button type="submit" className="btn-primary">Send Message</button>
          </form>
        );
      }
      
      function Home() {
        return (
          <div className="home">
            <section className="projects">
              <h2>Projects</h2>
              <div className="projects-grid">
                {PROJECTS.map((project) => (
                  <ProjectCard key={project.id} {...project} />
                ))}
              </div>
            </section>
            <section className="contact">
              <h2>Get In Touch</h2>
              <ContactForm />
            </section>
          </div>
        );
      }
      
      export default Home;