import { createFileRoute, Link } from '@tanstack/react-router'
import { seo } from '~/lib/seo'
import { useLocale } from '~/i18n/useLocale'
import { useLocalePath } from '~/i18n/useLocalePath'
import { t, defaultLocale } from '~/i18n/translations'
import type { Locale } from '~/i18n/translations'

export const Route = createFileRoute('/{-$locale}/$')({
  head: ({ params }) => {
    const locale = ((params as any).locale || defaultLocale) as Locale
    const i18n = t(locale)
    return {
      meta: seo({
        title: `${i18n.notFound.title} — Carla Puscas`,
        description: i18n.notFound.message,
      }),
    }
  },
  component: NotFoundPage,
})

function NotFoundPage() {
  const locale = useLocale()
  const lp = useLocalePath()
  const i18n = t(locale)

  return (
    <section className="py-32 text-center">
      <div className="max-w-lg mx-auto px-6">
        <p className="font-display text-6xl font-extrabold text-clay/30 mb-6">
          {i18n.notFound.code}
        </p>
        <h1 className="font-display font-bold text-2xl md:text-3xl text-brown mb-4">
          {i18n.notFound.title}
        </h1>
        <p className="text-brown-muted mb-8 leading-relaxed">
          {i18n.notFound.message}
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            to={lp('/')}
            className="inline-flex items-center gap-2 font-display font-semibold px-8 py-3 rounded-full bg-clay text-warm-white hover:-translate-y-0.5 hover:shadow-lg focus-visible:ring-2 focus-visible:ring-clay/40 focus-visible:ring-offset-2 transition"
          >
            {i18n.notFound.goHome}
          </Link>
          <Link
            to={lp('/contact')}
            className="inline-flex items-center gap-2 font-display font-semibold px-8 py-3 rounded-full border-2 border-brown/20 text-brown hover:border-brown focus-visible:ring-2 focus-visible:ring-clay/40 focus-visible:ring-offset-2 transition"
          >
            {i18n.notFound.getInTouch}
          </Link>
        </div>
      </div>
    </section>
  )
}
