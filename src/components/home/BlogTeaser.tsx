import { Link } from '@tanstack/react-router'

const posts = [
  {
    tag: 'Wellbeing',
    tagClass: 'bg-teal-light text-teal',
    date: '28 March 2026',
    title: 'Five small shifts that make a big difference to your mental health',
    excerpt:
      'Change does not have to be dramatic to be meaningful. These everyday micro-habits are backed by research and easy to start today.',
    slug: '/blog/five-small-shifts',
  },
  {
    tag: 'Education',
    tagClass: 'bg-coral-light text-coral',
    date: '14 March 2026',
    title: 'Supporting your child through school transitions',
    excerpt:
      'Moving between schools is one of the most stressful events in a young person\'s life. Here is how to make it smoother.',
    slug: '/blog/school-transitions',
  },
  {
    tag: 'Therapy',
    tagClass: 'bg-lavender-light text-lavender',
    date: '2 March 2026',
    title: 'What to expect from your first session',
    excerpt:
      'First appointments can feel daunting. This guide walks you through what happens, what to bring, and how to prepare.',
    slug: '/blog/first-session',
  },
]

export function BlogTeaser() {
  return (
    <section className="py-24" aria-labelledby="blog-title">
      <div className="max-w-[1140px] mx-auto px-6 mb-10">
        <div className="text-center">
          <span className="font-display font-semibold text-xs uppercase tracking-[0.15em] text-sage bg-sage-light px-4 py-1.5 rounded-full inline-block mb-4">
            Blog
          </span>
          <h2 className="font-display font-bold text-[clamp(1.75rem,3.5vw,2.5rem)] leading-tight text-brown mb-4" id="blog-title">
            Latest articles
          </h2>
          <p className="text-brown-muted max-w-lg mx-auto">
            Thoughts on mental health, education, and the everyday practice of
            living well.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] md:grid-rows-[auto_auto] gap-6 max-w-[1140px] mx-auto px-6">
        {posts.map((post, index) => (
          <article
            key={post.slug}
            className={`glass p-10 flex flex-col transition hover:-translate-y-1 hover:shadow-xl no-underline text-inherit ${index === 0 ? 'md:row-span-2' : ''}`}
          >
            <span className={`inline-block font-display text-[0.6875rem] font-bold tracking-wider uppercase px-3 py-1 rounded-full w-fit mb-4 ${post.tagClass}`}>
              {post.tag}
            </span>
            <time className="font-display font-medium text-sm text-brown-muted mb-2" dateTime={post.date}>
              {post.date}
            </time>
            <h3 className={`font-display font-bold leading-snug text-brown mb-4 ${index === 0 ? 'text-xl' : 'text-lg'}`}>
              {post.title}
            </h3>
            <p className="text-brown-muted text-[0.9375rem] leading-relaxed grow">
              {post.excerpt}
            </p>
            <Link
              to={post.slug}
              className="inline-flex items-center gap-1 font-display font-semibold text-sm text-sage mt-4 hover:gap-2.5 transition-all"
            >
              Read more <span aria-hidden="true">&rarr;</span>
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}
