import { useState } from 'react';
import emailjs from '@emailjs/browser'; // harmless to leave; remove if unused

// TODO: replace link '#' values with real GitHub repo or live demo URLs
const PROJECTS = [
  {
    id: 1,
    title: 'VetConnect - SE 370',
    tag: 'Java · SQLite · Swing',
    description:
      'A VA education-benefit certification system for student veterans at CSUSM. Built with an MVC architecture, SQLite database (19 tables), full DAO layer, and Java Swing UI. Designed to streamline the certification workflow between students, the VA school certifying official, and the VA itself.',
    link: '#',
  },
  {
    id: 2,
    title: 'Versus - CIS 444',
    tag: 'Node.js · Express · HTML/CSS/JS',
    description:
      'A retro-styled head-to-head voting web app where users battle images, ideas, and opinions. Features event delegation, dynamic DOM rendering, and a RESTful Express backend. Built as a group project with a focus on clean UX and client–server communication.',
    link: '#',
  },
  {
    id: 3,
    title: 'Task & Assignment Tracker - CIS 341',
    tag: 'Use Case Diagrams · ER/UML',
    description:
      'A system that addresses a real-world business or organizational problem, applying system analysis and design methodologies.',
    link: '#',
  },
  // TODO: add additional projects here using the same shape
];

// TODO: fill in your bio + LinkedIn URL; drop resume.pdf into /public/
const BIO = `TODO: Write 2–3 sentences about yourself — who you are, what you study, what you build.`;
const LINKEDIN_URL = 'https://www.linkedin.com/in/TODO';
const RESUME_URL = '/my-portfolio/resume.pdf';

const SKILLS = ['Java', 'JavaScript', 'Node.js', 'React', 'SQLite', 'SQL', 'HTML/CSS'];

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
      {link && link !== '#' && (
        <a href={link} className="card-link" target="_blank" rel="noopener noreferrer">
          View Project →
        </a>
      )}
    </article>
  );
}

function ContactForm() {
  return (
    <form
      className="contact-form"
      action="https://formsubmit.co/qfogel@gmail.com"
      method="POST"
    >
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" required placeholder="Your name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required placeholder="your@email.com" />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows={5} required placeholder="What's on your mind?" />
      </div>
      <input
        type="hidden"
        name="_next"
        value="https://qfogel.github.io/my-portfolio/?success=true"
      />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_subject" value="New message from portfolio" />
      <button type="submit" className="btn-primary">
        Send Message
      </button>
    </form>
  );
}

function Home() {
  return (
    <div className="home">
      <section id="about" className="section">
        <div className="section-inner">
          <p className="section-label">About</p>
          <h2>A little about me</h2>
          <div className="about-grid">
            <div className="about-text">
              <p>{BIO}</p>
              <div className="about-ctas">
                <a
                  href={LINKEDIN_URL}
                  className="btn-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  href={RESUME_URL}
                  className="btn-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </div>
            </div>
            <div className="about-skills">
              <p className="skills-label">Skills</p>
              <div className="skill-tags">
                {SKILLS.map((s) => (
                  <Tag key={s} label={s} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="section section-alt">
        <div className="section-inner">
          <p className="section-label">Projects</p>
          <h2>Projects</h2>
          <div className="projects-grid">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="section-inner">
          <p className="section-label">Contact</p>
          <h2>Get In Touch</h2>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}

export default Home;