import { Link } from '@tanstack/react-router'
import { allPosts, allPostsRos, allPostsHus } from 'content-collections'
import { useLocale } from '~/i18n/useLocale'
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

export function BlogTeaser() {
  const locale = useLocale()
  const i18n = t(locale)
  const basePath = locale === defaultLocale ? '' : `/${locale}`

  const localePosts = getLocalePosts(locale)
  const latestPosts = [...localePosts]
    .sort((a, b) => new Date(b.published).getTime() - new Date(a.published).getTime())
    .slice(0, 3)

  return (
    <section className="py-12 md:py-24" aria-labelledby="blog-title">
      <div className="max-w-[1140px] mx-auto px-6 mb-10">
        <div>
          <p className="font-display font-semibold text-xs uppercase tracking-widest text-brown-muted mb-3">
            {i18n.blog.label}
          </p>
          <h2 className="font-display font-bold text-2xl md:text-4xl leading-tight text-brown mb-4 text-balance" id="blog-title">
            {i18n.blog.title}
          </h2>
          <p className="text-brown-muted max-w-lg">
            {i18n.blog.subtitle}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] lg:grid-rows-[auto_auto] gap-6 max-w-[1140px] mx-auto px-6">
        {latestPosts.map((post, index) => (
          <article
            key={post.slug}
            className={`bg-warm-white border border-brown/8 rounded-2xl p-6 md:p-10 transition hover:-translate-y-1 hover:shadow-xl min-w-0 ${index === 0 ? 'lg:row-span-2' : ''}`}
          >
            <Link
              to={`${basePath}/blog/${post.slug}`}
              className="flex flex-col h-full no-underline text-inherit group break-words"
            >
              <span className="inline-block font-display text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full w-fit mb-4 bg-clay-light text-clay">
                {post.tag}
              </span>
              <time className="font-display font-medium text-sm text-brown-muted mb-2" dateTime={post.published}>
                {new Date(post.published).toLocaleDateString(dateLocaleMap[locale], {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </time>
              <h3 className={`font-display font-bold leading-snug text-brown mb-4 line-clamp-2 ${index === 0 ? 'text-xl' : 'text-lg'}`}>
                {post.title}
              </h3>
              <p className="text-brown-muted text-sm leading-relaxed grow line-clamp-3">
                {post.description}
              </p>
              <span className="inline-flex items-center gap-1 font-display font-semibold text-sm text-clay mt-4 group-hover:gap-2.5 transition-all" aria-hidden="true">
                {i18n.blog.readMore} &rarr;
              </span>
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}
