import { createFileRoute, Link } from '@tanstack/react-router'
import { seo } from '~/lib/seo'
import { useLocale } from '~/i18n/useLocale'
import { t, defaultLocale } from '~/i18n/translations'
import type { Locale } from '~/i18n/translations'

export const Route = createFileRoute('/{-$locale}/about')({
  head: ({ params }) => {
    const locale = ((params as any).locale || defaultLocale) as Locale
    const i18n = t(locale)
    return {
      meta: seo({
        title: `${i18n.about.title} — Carla Puscas`,
        description: i18n.about.subtitle,
      }),
      scripts: [
        {
          type: 'application/ld+json',
          children: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Carla Puscas',
            jobTitle: 'Clinical & Educational Psychologist',
            url: 'https://carlapuscas.com/about',
            description:
              'Clinical psychologist, educational psychologist, and vocational counselor with a focus on evidence-based practice, warmth, and genuine human connection.',
            knowsAbout: [
              'Clinical Psychology',
              'Educational Psychology',
              'Vocational Counseling',
              'Cognitive Behavioral Therapy',
              'Learning Differences',
              'Career Transitions',
            ],
            hasCredential: [
              {
                '@type': 'EducationalOccupationalCredential',
                credentialCategory: 'degree',
                name: 'Master of Clinical Psychology',
              },
              {
                '@type': 'EducationalOccupationalCredential',
                credentialCategory: 'degree',
                name: 'Graduate Diploma in Educational Psychology',
              },
            ],
          }),
        },
      ],
    }
  },
  component: AboutPage,
})

function AboutPage() {
  const locale = useLocale()
  const i18n = t(locale)

  return (
    <>
      {/* Hero header */}
      <section className="py-12 md:py-24">
        <div className="text-center mb-16 max-w-[1140px] mx-auto px-6">
          <p className="font-display font-semibold text-xs uppercase tracking-widest text-brown-muted mb-3">{i18n.about.label}</p>
          <h1 className="font-display font-bold text-2xl md:text-4xl leading-tight text-brown mb-4">
            {i18n.about.title}
          </h1>
          <p className="text-lg text-brown-muted max-w-xl mx-auto">
            {i18n.about.subtitle}
          </p>
        </div>
      </section>

      {/* Professional bio */}
      <section className="py-12 md:py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="bg-warm-white border border-brown/8 rounded-2xl p-10 md:p-16 max-w-[800px] mx-auto">
            <h2 className="font-display font-bold text-xl md:text-2xl text-brown mb-4">
              {i18n.about.storyTitle}
            </h2>
            <p className="text-brown-muted leading-relaxed mb-4">
              {i18n.about.storyP1}
            </p>
            <p className="text-brown-muted leading-relaxed mb-4">
              {i18n.about.storyP2}
            </p>
            <p className="text-brown-muted leading-relaxed">
              {i18n.about.storyP3}
            </p>
          </div>
        </div>
      </section>

      {/* Education & approach */}
      <section className="py-12 md:py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[800px] mx-auto">
            <div className="bg-warm-white border border-brown/8 rounded-2xl p-10 md:p-16">
              <h3 className="font-display font-bold text-xl text-brown mb-4">
                {i18n.about.educationTitle}
              </h3>
              <ul className="text-brown-muted leading-relaxed flex flex-col gap-2">
                {i18n.about.educationItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="bg-warm-white border border-brown/8 rounded-2xl p-10 md:p-16">
              <h3 className="font-display font-bold text-xl text-brown mb-4">
                {i18n.about.approachTitle}
              </h3>
              <p className="text-brown-muted leading-relaxed">
                {i18n.about.approachText}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-16 max-w-[1140px] mx-auto px-6">
        <p className="font-display font-semibold text-lg md:text-xl text-brown mb-4">
          {i18n.about.ctaText}
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 font-display font-semibold px-9 py-3.5 rounded-full bg-clay text-warm-white hover:-translate-y-0.5 hover:shadow-lg focus-visible:ring-2 focus-visible:ring-clay/40 focus-visible:ring-offset-2 transition"
        >
          {i18n.about.ctaButton}
        </Link>
      </section>
    </>
  )
}
