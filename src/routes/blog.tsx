import { createFileRoute, Link } from '@tanstack/react-router'
import { seo } from '~/lib/seo'

export const Route = createFileRoute('/blog')({
  head: () => ({
    meta: seo({
      title: 'Blog — Carla Puscas',
      description:
        'Articles and reflections on clinical psychology, educational support, career development, and well-being.',
    }),
  }),
  component: BlogPage,
})

const posts = [
  {
    tag: 'Clinical Psychology',
    tagColorClass: 'text-clay',
    tagBgClass: 'bg-clay-light',
    date: '12 Mar 2026',
    title: 'Why "Just Think Positive" Doesn\'t Work',
    excerpt:
      'Toxic positivity dismisses real feelings. Here is what actually helps when you are struggling, and why sitting with discomfort can be the first step toward healing.',
  },
  {
    tag: 'Education',
    tagColorClass: 'text-teal',
    tagBgClass: 'bg-teal-light',
    date: '28 Feb 2026',
    title: 'Supporting Your Child Through Exam Anxiety',
    excerpt:
      'Exam stress is more than nerves. Learn practical, evidence-based strategies parents can use to help children build resilience and healthy study habits.',
  },
  {
    tag: 'Career',
    tagColorClass: 'text-lavender',
    tagBgClass: 'bg-lavender-light',
    date: '14 Feb 2026',
    title: 'Career Change at 40: It Is Not Too Late',
    excerpt:
      'Feeling stuck in a career that no longer fits? A mid-life career transition is more common — and more achievable — than you might think.',
  },
  {
    tag: 'Well-being',
    tagColorClass: 'text-sage',
    tagBgClass: 'bg-sage-light',
    date: '1 Feb 2026',
    title: 'The Power of Small Rituals',
    excerpt:
      'Morning coffee, evening walks, Sunday journaling — small rituals anchor us. Discover why consistency in the little things has outsized effects on mental health.',
  },
  {
    tag: 'Education',
    tagColorClass: 'text-teal',
    tagBgClass: 'bg-teal-light',
    date: '18 Jan 2026',
    title: 'Neurodiversity in the Classroom',
    excerpt:
      'Every brain learns differently. How schools and families can create inclusive environments that celebrate neurological differences rather than pathologize them.',
  },
  {
    tag: 'Clinical Psychology',
    tagColorClass: 'text-clay',
    tagBgClass: 'bg-clay-light',
    date: '5 Jan 2026',
    title: 'What Therapy Actually Looks Like',
    excerpt:
      'If you have never been to therapy, the unknown can feel daunting. Here is an honest look at what a typical session involves and how to get the most from it.',
  },
] as const

function BlogPage() {
  return (
    <>
      {/* Page header */}
      <section className="py-24">
        <div className="text-center mb-16 max-w-[1140px] mx-auto px-6">
          <span className="inline-block font-display text-xs font-bold tracking-[0.15em] uppercase text-sage bg-sage-light px-4 py-1.5 rounded-full mb-4">
            Blog
          </span>
          <h1 className="font-display font-bold text-[clamp(1.75rem,3.5vw,2.5rem)] leading-tight text-brown mb-4">
            Reflections
          </h1>
          <p className="text-lg text-brown-muted max-w-xl mx-auto">
            Thoughts on psychology, education, career, and the small everyday
            moments that shape how we feel.
          </p>
        </div>
      </section>

      {/* Blog grid */}
      <section className="py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article
                key={post.title}
                className="glass p-8 flex flex-col gap-4 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`inline-block text-xs font-semibold tracking-wider uppercase ${post.tagColorClass} ${post.tagBgClass} px-3 py-1 rounded-full`}
                  >
                    {post.tag}
                  </span>
                  <time className="text-sm text-brown-muted">{post.date}</time>
                </div>

                <h2 className="font-display text-lg font-bold leading-snug text-brown">
                  {post.title}
                </h2>

                <p className="text-brown-muted leading-relaxed text-[0.9375rem] flex-1">
                  {post.excerpt}
                </p>

                <span
                  aria-hidden="true"
                  className="font-body text-sm font-semibold text-clay mt-auto"
                >
                  Read more &rarr;
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-16 max-w-[1140px] mx-auto px-6">
        <p className="font-display font-semibold text-[clamp(1.125rem,2.5vw,1.5rem)] text-brown mb-4">
          Have a question or a topic you would like me to write about?
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 font-display font-semibold px-9 py-3.5 rounded-full border-2 border-clay text-clay hover:-translate-y-0.5 hover:shadow-lg transition"
        >
          Send a Suggestion
        </Link>
      </section>
    </>
  )
}
