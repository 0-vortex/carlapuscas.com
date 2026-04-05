import { Link } from '@tanstack/react-router'

const posts = [
  {
    id: 'post-1',
    tag: 'Wellbeing',
    date: '28 March 2026',
    dateTime: '2026-03-28',
    title: 'Five small shifts that make a big difference to your mental health',
    excerpt:
      'Change does not have to be dramatic to be meaningful. These everyday micro-habits are backed by research and easy to start today.',
  },
  {
    id: 'post-2',
    tag: 'Education',
    date: '14 March 2026',
    dateTime: '2026-03-14',
    title: 'Supporting your child through school transitions',
    excerpt:
      'Moving between schools is one of the most stressful events in a young person\'s life. Here is how to make it smoother.',
  },
  {
    id: 'post-3',
    tag: 'Therapy',
    date: '2 March 2026',
    dateTime: '2026-03-02',
    title: 'What to expect from your first session',
    excerpt:
      'First appointments can feel daunting. This guide walks you through what happens, what to bring, and how to prepare.',
  },
]

export function BlogTeaser() {
  return (
    <section className="py-12 md:py-24" aria-labelledby="blog-title">
      <div className="max-w-[1140px] mx-auto px-6 mb-10">
        <div>
          <p className="font-display font-semibold text-xs uppercase tracking-widest text-brown-muted mb-3">
            Blog
          </p>
          <h2 className="font-display font-bold text-2xl md:text-4xl leading-tight text-brown mb-4 text-balance" id="blog-title">
            Latest articles
          </h2>
          <p className="text-brown-muted max-w-lg">
            Thoughts on mental health, education, and the everyday practice of
            living well.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] lg:grid-rows-[auto_auto] gap-6 max-w-[1140px] mx-auto px-6">
        {posts.map((post, index) => (
          <article
            key={post.id}
            className={`bg-warm-white border border-brown/8 rounded-2xl p-6 md:p-10 transition hover:-translate-y-1 hover:shadow-xl min-w-0 ${index === 0 ? 'lg:row-span-2' : ''}`}
          >
            <Link
              to="/blog"
              className="flex flex-col h-full no-underline text-inherit group break-words"
            >
              <span className="inline-block font-display text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full w-fit mb-4 bg-clay-light text-clay">
                {post.tag}
              </span>
              <time className="font-display font-medium text-sm text-brown-muted mb-2" dateTime={post.dateTime}>
                {post.date}
              </time>
              <h3 className={`font-display font-bold leading-snug text-brown mb-4 line-clamp-2 ${index === 0 ? 'text-xl' : 'text-lg'}`}>
                {post.title}
              </h3>
              <p className="text-brown-muted text-sm leading-relaxed grow line-clamp-3">
                {post.excerpt}
              </p>
              <span
                className="inline-flex items-center gap-1 font-display font-semibold text-sm text-sage mt-4 group-hover:gap-2.5 transition-all"
              >
                Read more <span aria-hidden="true">&rarr;</span>
              </span>
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}
