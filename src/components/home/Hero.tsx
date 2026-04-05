import { Link } from '@tanstack/react-router'
import { useLocale } from '~/i18n/useLocale'
import { useLocalePath } from '~/i18n/useLocalePath'
import { t } from '~/i18n/translations'

export function Hero() {
  const locale = useLocale()
  const lp = useLocalePath()
  const i18n = t(locale)

  return (
    <section className="pt-20 pb-12 md:pt-40 md:pb-20 text-center">
      <div className="max-w-3xl mx-auto px-6">
        <div className="hero-ornament inline-block w-32 h-0.5 bg-clay mb-8 relative" aria-hidden="true" />

        <h1 className="font-display font-extrabold text-4xl md:text-6xl lg:text-7xl leading-[1.12] tracking-tight text-brown mb-6 text-balance">
          {i18n.hero.headline} <span className="text-clay">{i18n.hero.headlineAccent}</span>
        </h1>

        <p className="text-lg md:text-xl font-light text-brown-muted max-w-xl mx-auto mb-8 leading-relaxed text-pretty">
          {i18n.hero.subtitle}
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="tel:+40741659943"
            className="inline-flex items-center gap-2 font-display font-semibold px-9 py-3.5 rounded-full bg-clay text-warm-white hover:-translate-y-0.5 hover:shadow-lg focus-visible:ring-2 focus-visible:ring-clay/40 focus-visible:ring-offset-2 transition no-underline"
          >
            {i18n.hero.cta}
          </a>
          <Link
            to={lp('/blog')}
            className="inline-flex items-center gap-2 font-display font-semibold px-9 py-3.5 rounded-full bg-transparent border-2 border-brown/20 text-brown hover:border-brown focus-visible:ring-2 focus-visible:ring-clay/40 focus-visible:ring-offset-2 transition"
          >
            {i18n.hero.ctaSecondary}
          </Link>
        </div>
      </div>
    </section>
  )
}
