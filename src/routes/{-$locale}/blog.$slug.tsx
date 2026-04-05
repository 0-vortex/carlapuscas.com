import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { allPosts, allPostsRos, allPostsHus } from 'content-collections'
import { renderMarkdown } from '~/lib/markdown'
import { seo } from '~/lib/seo'
import parse from 'html-react-parser'
import { useLocale } from '~/i18n/useLocale'
import { useLocalePath } from '~/i18n/useLocalePath'
import { t, defaultLocale, isValidLocale } from '~/i18n/translations'
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

export const Route = createFileRoute('/{-$locale}/blog/$slug')({
  loader: async ({ params }) => {
    const locale = (params.locale && isValidLocale(params.locale) ? params.locale : defaultLocale) as Locale
    const localePosts = getLocalePosts(locale)
    const post = localePosts.find((p: { slug: string }) => p.slug === params.slug)
    if (!post) throw notFound()
    const markup = await renderMarkdown(post.content)
    return { post, markup }
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {}
    const { post } = loaderData
    return {
      meta: seo({
        title: `${post.title} — Carla Puscas`,
        description: post.description,
      }),
      scripts: [
        {
          type: 'application/ld+json',
          children: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: post.title,
            description: post.description,
            author: {
              '@type': 'Person',
              name: post.author,
              url: 'https://carlapuscas.com/about',
            },
            publisher: {
              '@type': 'Person',
              name: 'Carla Puscas',
            },
            datePublished: post.published,
          }),
        },
      ],
    }
  },
  component: BlogPostPage,
})

function BlogPostPage() {
  const { post, markup } = Route.useLoaderData()
  const locale = useLocale()
  const lp = useLocalePath()
  const i18n = t(locale)

  return (
    <article className="py-12 md:py-24">
      <div className="max-w-[1140px] mx-auto px-6">
        {/* Post header */}
        <header className="max-w-2xl mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block text-xs font-semibold tracking-wider uppercase bg-clay-light text-clay px-3 py-1 rounded-full">
              {i18n.blog.tags[post.tag] || post.tag}
            </span>
            <span className="text-sm text-brown-muted">
              {post.readingTime} {i18n.blog.minRead}
            </span>
          </div>
          <h1 className="font-display font-extrabold text-3xl md:text-5xl leading-tight text-brown mb-4 text-balance">
            {post.title}
          </h1>
          <p className="text-lg text-brown-muted font-light leading-relaxed mb-4">
            {post.description}
          </p>
          <div className="flex items-center gap-2 text-sm text-brown-muted">
            <span className="font-display font-semibold text-brown">
              {post.author}
            </span>
            <span>&middot;</span>
            <time dateTime={post.published}>
              {new Date(post.published).toLocaleDateString(dateLocaleMap[locale], {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </time>
          </div>
        </header>

        {/* Post content */}
        <div className="prose max-w-2xl">
          {parse(markup)}
        </div>

        {/* Back to blog */}
        <div className="max-w-2xl mt-16 pt-8 border-t border-brown/8">
          <Link
            to={lp('/blog')}
            className="inline-flex items-center gap-2 font-display font-semibold text-sm text-clay hover:gap-3 transition-all"
          >
            <span aria-hidden="true">&larr;</span> {i18n.blog.backToArticles}
          </Link>
        </div>
      </div>
    </article>
  )
}
