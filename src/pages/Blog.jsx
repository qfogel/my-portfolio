import { useState } from 'react';
import { Link } from 'react-router-dom';

const POSTS = [
  {
    id: 1,
    date: 'March 22, 2026',
    title: 'Slowing Down in San Diego',
    preview:
      'After the most intense semester of my life, I finally had a week with nowhere to be. Here\'s what that looked like.',
    content: `
After a semester of juggling five courses, a group software project, flight-related duties, and trying to actually sleep, spring break felt like the universe hitting a pause button I didn't know existed. No alarms. No standups. No pull requests due by midnight.

I spent the first two days doing almost nothing, and I mean that in the best possible way. Coffee on the back patio in the morning. A long walk down to the beach at Coronado in the afternoon. The kind of day where you look up and it's 3pm and you've somehow managed to read half a novel and watch the tide come in twice. I didn't realize how depleted I was until I finally stopped moving.

By mid-week I started feeling like a human being again. I drove up to Torrey Pines and did the coastal trail — one of those hikes where the trail ends at a cliff edge and you're looking down at the Pacific and you wonder how it's possible to live somewhere this beautiful and spend most of your time staring at a computer screen. Worth it every time.
    `,
  },
  {
    id: 2,
    date: 'March 25, 2026',
    title: 'North County Eats & Reflecting on the Semester',
    preview:
      'Some of the best food I had all break was within ten miles of campus. Also: semester reflections.',
    content: `
One thing I always forget until I'm actually out doing it is how good the food scene is up in North County. I hit a Vietnamese spot in San Marcos that I'd been meaning to try since September — the kind of place that's been there forever, packed on a Tuesday at noon, cash preferred, food that makes you wonder why you ever order delivery. Went back twice.

I also spent one afternoon at Balboa Park just walking around. I hadn't been to the Museum of Photographic Arts in a while, and there was a traveling exhibit on documentary photography from conflict zones that hit differently given my background. Good art does that — finds you where you are and says something specific to you, not just everyone.

As for the semester: it's been the hardest one academically, no question. Operating Systems and Databases were both genuinely challenging. But VetConnect — the project I've been building with my SE 370 group — is the thing I'm most proud of. Taking something from a use case diagram to an actual working Java application with a real database schema and DAO layer is a different kind of satisfaction than passing a test. That one felt earned. Ready for the final push to the finish line.
    `,
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
      <span className="post-read">{isActive ? 'Currently reading' : 'Read post →'}</span>
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
      <div className="post-body">
        {post.content.trim().split('\n\n').map((para, i) => (
          <p key={i}>{para.trim()}</p>
        ))}
      </div>
    </article>
  );
}

function Blog() {
  const [activeId, setActiveId] = useState(1);
  const activePost = POSTS.find(p => p.id === activeId);

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
          {POSTS.map(post => (
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