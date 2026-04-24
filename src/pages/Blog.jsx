import { useState } from 'react';
import { Link } from 'react-router-dom';

const POSTS = [
  {
    id: 1,
    date: 'March 30, 2026',
    title: 'Slowing Down in San Diego',
    preview:
      "After the most intense semester of my life, I finally had a week with nowhere to be. Here's what that looked like.",
    images: [
      {
        src: 'https://www.tryingtounwind.com/wp-content/uploads/2021/04/20210311_145903-1024x768.jpg',
        caption: 'Coronado Beach - the kind of view that resets everything.',
      },
      {
        src: 'https://coronadotimes.com/wp-content/uploads/2020/11/IMG_1457-2.jpeg',
        caption: 'Low tide at Coronado. Watched it come in twice.',
      },
      {
        src: 'https://ghosty-production.s3.amazonaws.com/fotospot_spots/Torrey-Pines-Beach-Trail-Fotospot_83d82c962658016629623d18992b1f64/large.jpg',
        caption: 'Torrey Pines coastal trail - trail ends at a cliff above the Pacific.',
      },
    ],
    content: `
After a semester of juggling eight courses, a group software project, and trying to actually sleep, spring break felt like the universe hitting a pause button I didn't know existed. No alarms. No deadlines. No assignments due by midnight.

I spent the first two days doing almost nothing, and I mean that in the best possible way. Coffee on the back patio in the morning. A long walk down to the beach at Coronado in the afternoon. The kind of day where you look up and it's 3pm and you've somehow managed to read half a novel and watch the tide come in twice. I didn't realize how depleted I was until I finally stopped moving.

By mid-week I started feeling like a human being again. I drove up to Torrey Pines and did the coastal trail - one of those hikes where the trail ends at a cliff edge and you're looking down at the Pacific and you wonder how it's possible to live somewhere this beautiful and spend most of your time staring at a computer screen. Worth it every time.
    `,
    relatedProjects: [
      // TODO: replace '/#projects' with real project URLs when you have them
      { label: 'VetConnect (SE 370)', href: '/#projects' },
    ],
  },
  {
    id: 2,
    date: 'March 25, 2026',
    title: 'San Diego Eats & Reflecting on the Semester',
    preview:
      'I am a big foodie, and San Diego offers a variety of delicious and local options. Also: what it feels like to decompress after 8 courses.',
    images: [
      {
        src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/42/b9/01/caption.jpg?w=1400&h=800&s=1',
        caption: 'Pho Hoa, one of the best Pho spots in San Diego.',
      },
      {
        src: 'https://media.california.com/media/_versions_webp/articles/hero-balboa___6639x2830____v1800x750__.webp',
        caption: 'Balboa Park - always worth the walk.',
      },
    ],
    content: `
I also spent one afternoon at Balboa Park just walking around. It had been a while since I've been to the park. It's unfortunate now that you have to pay for parking.

As for the semester: carrying eight courses at once has been something I wouldn't wish on anyone, but it's also been proof of what's possible when you stay disciplined. Operating Systems and Databases were both genuinely challenging. But VetConnect — the project I've been building with my SE 370 group — is the thing I'm most proud of. Taking something from a use case diagram to an actual working Java application with a real database schema and DAO layer is a different kind of satisfaction than passing a test. Eight courses in. Still standing. Ready for the final push.
    `,
    relatedProjects: [
      { label: 'VetConnect (SE 370)', href: '/#projects' },
      { label: 'Versus (CIS 444)', href: '/#projects' },
    ],
  },
];

function PostCard({ post, isActive, onSelect }) {
  return (
    <button
      className={`post-card ${isActive ? 'post-card--active' : ''}`}
      onClick={() => onSelect(post.id)}
    >
      <span className="post-date">{post.date}</span>
      <h3>{post.title}</h3>
      <p>{post.preview}</p>
      <span className="post-read">
        {isActive ? 'Currently reading' : 'Read post →'}
      </span>
    </button>
  );
}

function PostContent({ post }) {
  return (
    <article className="post-content">
      <header className="post-header">
        <span className="post-date">{post.date}</span>
        <h2>{post.title}</h2>
      </header>

      {post.images && post.images[0] && (
        <figure className="post-hero-image">
          <img src={post.images[0].src} alt={post.images[0].caption} />
          <figcaption>{post.images[0].caption}</figcaption>
        </figure>
      )}

      <div className="post-body">
        {post.content
          .trim()
          .split('\n\n')
          .map((para, i) => (
            <p key={i}>{para.trim()}</p>
          ))}
      </div>

      {post.images && post.images.length > 1 && (
        <div className="post-gallery">
          {post.images.slice(1).map((img, i) => (
            <figure key={i} className="gallery-item">
              <img src={img.src} alt={img.caption} />
              <figcaption>{img.caption}</figcaption>
            </figure>
          ))}
        </div>
      )}

      {post.relatedProjects && post.relatedProjects.length > 0 && (
        <aside className="post-related">
          <p className="sidebar-label">Related projects</p>
          <ul>
            {post.relatedProjects.map((p) => (
              <li key={p.label}>
                <a
                  href={p.href}
                  className="card-link"
                  target={p.href.startsWith('http') ? '_blank' : undefined}
                  rel={p.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  {p.label} →
                </a>
              </li>
            ))}
          </ul>
        </aside>
      )}
    </article>
  );
}

function Blog() {
  const [activeId, setActiveId] = useState(1);
  const activePost = POSTS.find((p) => p.id === activeId);

  return (
    <main className="blog-page">
      <div className="blog-header">
        <Link to="/" className="back-link">← Back to Portfolio</Link>
        <p className="section-label">Spring Break 2026</p>
        <h1>The Blog</h1>
        <p className="blog-subtitle">
          A week in San Diego. Beaches, food, long walks, and too much coffee.
        </p>
      </div>

      <div className="blog-layout">
        <aside className="blog-sidebar">
          <p className="sidebar-label">Posts</p>
          {POSTS.map((post) => (
            <PostCard
              key={post.id}
              post={post}
              isActive={activeId === post.id}
              onSelect={setActiveId}
            />
          ))}
        </aside>

        <section className="blog-main">
          {activePost && <PostContent post={activePost} />}
        </section>
      </div>
    </main>
  );
}

export default Blog;