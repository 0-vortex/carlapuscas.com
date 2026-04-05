import { createFileRoute, Link } from '@tanstack/react-router'
import { seo } from '~/lib/seo'
import { useLocale } from '~/i18n/useLocale'
import { useLocalePath } from '~/i18n/useLocalePath'
import { t, defaultLocale } from '~/i18n/translations'
import type { Locale } from '~/i18n/translations'

export const Route = createFileRoute('/{-$locale}/services')({
  head: ({ params }) => {
    const locale = ((params as any).locale || defaultLocale) as Locale
    const i18n = t(locale)
    return {
      meta: seo({
        title: `${i18n.servicesPage.title} — Carla Puscas`,
        description: i18n.servicesPage.subtitle,
      }),
      scripts: [
        {
          type: 'application/ld+json',
          children: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'MedicalBusiness',
            name: 'Carla Puscas Psychology Practice',
            url: 'https://carlapuscas.com/services',
            provider: {
              '@type': 'Person',
              name: 'Carla Puscas',
              jobTitle: 'Clinical & Educational Psychologist',
            },
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Psychology Services',
              itemListElement: [
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Clinical Psychology',
                    description:
                      'Evidence-based therapy for anxiety, depression, trauma, and life transitions.',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Educational Psychology',
                    description:
                      'Assessments and support for learning differences, developmental challenges, and school-related stress.',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Vocational Counseling',
                    description:
                      'Career exploration, decision-making, and professional development guidance.',
                  },
                },
              ],
            },
          }),
        },
      ],
    }
  },
  component: ServicesPage,
})

function ServicesPage() {
  const locale = useLocale()
  const lp = useLocalePath()
  const i18n = t(locale)

  const services = [
    {
      title: i18n.servicesPage.clinical.title,
      description: i18n.servicesPage.clinical.description,
      whoFor: i18n.servicesPage.clinical.whoFor,
      expect: i18n.servicesPage.clinical.expect,
    },
    {
      title: i18n.servicesPage.educational.title,
      description: i18n.servicesPage.educational.description,
      whoFor: i18n.servicesPage.educational.whoFor,
      expect: i18n.servicesPage.educational.expect,
    },
    {
      title: i18n.servicesPage.vocational.title,
      description: i18n.servicesPage.vocational.description,
      whoFor: i18n.servicesPage.vocational.whoFor,
      expect: i18n.servicesPage.vocational.expect,
    },
  ]

  return (
    <>
      {/* Page header */}
      <section className="py-12 md:py-24">
        <div className="text-center mb-16 max-w-[1140px] mx-auto px-6">
          <p className="font-display font-semibold text-xs uppercase tracking-widest text-brown-muted mb-3">{i18n.servicesPage.label}</p>
          <h1 className="font-display font-bold text-2xl md:text-4xl leading-tight text-brown mb-4">
            {i18n.servicesPage.title}
          </h1>
          <p className="text-lg text-brown-muted max-w-xl mx-auto">
            {i18n.servicesPage.subtitle}
          </p>
        </div>
      </section>

      {/* Service detail sections */}
      {services.map((service) => (
        <section key={service.title} className="py-12 md:py-24">
          <div className="max-w-[1140px] mx-auto px-6">
            <div
              className="bg-warm-white border border-brown/8 rounded-2xl p-10 relative overflow-hidden max-w-[860px] mx-auto border-t-4 border-clay"
            >
              <h2 className="font-display font-bold text-2xl text-brown mb-4">
                {service.title}
              </h2>

              <p className="text-brown-muted leading-relaxed mb-6">
                {service.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Who it's for */}
                <div>
                  <h3
                    className="font-display text-sm font-bold uppercase tracking-wider mb-2 text-clay"
                  >
                    {i18n.servicesPage.whoItsFor}
                  </h3>
                  <ul className="space-y-2 text-brown-muted leading-relaxed">
                    {service.whoFor.map((item) => (
                      <li key={item} className="relative pl-4">
                        <span
                          aria-hidden="true"
                          className="absolute left-0 font-bold text-clay"
                        >
                          &bull;
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* What to expect */}
                <div>
                  <h3
                    className="font-display text-sm font-bold uppercase tracking-wider mb-2 text-clay"
                  >
                    {i18n.servicesPage.whatToExpect}
                  </h3>
                  <p className="text-brown-muted leading-relaxed">
                    {service.expect}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="text-center py-16 max-w-[1140px] mx-auto px-6">
        <p className="font-display font-semibold text-lg md:text-xl text-brown mb-4">
          {i18n.servicesPage.ctaTitle}
        </p>
        <p className="text-brown-muted mb-6 max-w-[520px] mx-auto leading-relaxed">
          {i18n.servicesPage.ctaSubtitle}
        </p>
        <Link
          to={lp('/contact')}
          className="inline-flex items-center gap-2 font-display font-semibold px-9 py-3.5 rounded-full bg-clay text-warm-white hover:-translate-y-0.5 hover:shadow-lg focus-visible:ring-2 focus-visible:ring-clay/40 focus-visible:ring-offset-2 transition"
        >
          {i18n.servicesPage.ctaButton}
        </Link>
      </section>
    </>
  )
}
