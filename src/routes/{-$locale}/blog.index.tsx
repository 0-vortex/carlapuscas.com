import { createFileRoute, Link } from '@tanstack/react-router'
import { allPosts, allPostsRos, allPostsHus } from 'content-collections'
import { seo } from '~/lib/seo'
import { useLocale } from '~/i18n/useLocale'
import { useLocalePath } from '~/i18n/useLocalePath'
import { t, defaultLocale } from '~/i18n/translations'
import type { Locale } from '~/i18n/translations'

function getLocalePosts(locale: Locale) {
  if (locale === 'ro') return allPostsRos
  if (locale === 'hu') return allPostsHus
  return allPosts
}

const dateLocaleMap: Record<Locale, string> = {
  en: 'en-GB',
  ro: 'ro-RO',
  hu: 'hu-HU',
}

export const Route = createFileRoute('/{-$locale}/blog/')({
  head: ({ params }) => {
    const locale = ((params as any).locale || defaultLocale) as Locale
    const i18n = t(locale)
    return {
      meta: seo({
        title: `${i18n.blog.title} — Carla Puscas`,
        description: i18n.blog.subtitle,
      }),
    }
  },
  component: BlogPage,
})

function BlogPage() {
  const locale = useLocale()
  const lp = useLocalePath()
  const i18n = t(locale)

  const localePosts = getLocalePosts(locale)
  const sortedPosts = [...localePosts].sort(
    (a, b) => new Date(b.published).getTime() - new Date(a.published).getTime(),
  )

  return (
    <>
      <section className="py-12 md:py-24">
        <div className="max-w-[1140px] mx-auto px-6 mb-12">
          <p className="font-display font-semibold text-xs uppercase tracking-widest text-brown-muted mb-3">
            {i18n.blog.label}
          </p>
          <h1 className="font-display font-bold text-2xl md:text-4xl leading-tight text-brown mb-4 text-balance">
            {i18n.blog.title}
          </h1>
          <p className="text-lg text-brown-muted max-w-xl">
            {i18n.blog.subtitle}
          </p>
        </div>

        <div className="max-w-[1140px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-warm-white border border-brown/8 rounded-2xl transition hover:-translate-y-1 hover:shadow-xl"
              >
                <Link
                  to={`${lp('/blog')}/${post.slug}` as string}
                  className="block p-6 md:p-8 no-underline text-inherit group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-block text-xs font-semibold tracking-wider uppercase bg-clay-light text-clay px-3 py-1 rounded-full">
                      {i18n.blog.tags[post.tag] || post.tag}
                    </span>
                    <span className="text-sm text-brown-muted">
                      {post.readingTime} {i18n.blog.minRead}
                    </span>
                  </div>
                  <time
                    className="font-display font-medium text-sm text-brown-muted mb-2 block"
                    dateTime={post.published}
                  >
                    {new Date(post.published).toLocaleDateString(dateLocaleMap[locale], {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </time>
                  <h2 className="font-display font-bold text-lg leading-snug text-brown mb-3 line-clamp-2 group-hover:text-clay transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-brown-muted text-sm leading-relaxed line-clamp-3">
                    {post.description}
                  </p>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="text-center py-16 max-w-[1140px] mx-auto px-6">
        <p className="font-display font-semibold text-lg md:text-xl text-brown mb-4">
          {i18n.blog.suggestTopic}
        </p>
        <Link
          to={lp('/contact')}
          className="inline-flex items-center gap-2 font-display font-semibold px-9 py-3.5 rounded-full border-2 border-brown/20 text-brown hover:border-brown focus-visible:ring-2 focus-visible:ring-clay/40 focus-visible:ring-offset-2 transition"
        >
          {i18n.blog.suggestTopicCta}
        </Link>
      </section>
    </>
  )
}
