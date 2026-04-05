import { createFileRoute, Link } from '@tanstack/react-router'
import { seo } from '~/lib/seo'

export const Route = createFileRoute('/services')({
  head: () => ({
    meta: seo({
      title: 'Services — Carla Puscas',
      description:
        'Explore clinical psychology, educational psychology, and vocational counseling services offered by Carla Puscas.',
    }),
  }),
  component: ServicesPage,
})

const services = [
  {
    title: 'Clinical Psychology',
    borderClass: 'border-clay',
    accentClass: 'text-clay',
    bulletClass: 'text-clay',
    description:
      'Evidence-based therapy for anxiety, depression, trauma, life transitions, and relational difficulties. I work with adults and older adolescents using an integrative approach grounded in cognitive-behavioral, psychodynamic, and compassion-focused frameworks.',
    whoFor: [
      'Adults experiencing anxiety, depression, or burnout',
      'Individuals processing grief, loss, or trauma',
      'People navigating major life changes or relationship challenges',
      'Those seeking deeper self-understanding and emotional resilience',
    ],
    expect:
      'An initial assessment session to understand your needs, followed by a collaboratively designed treatment plan. Sessions are typically weekly or fortnightly, in person or online.',
  },
  {
    title: 'Educational Psychology',
    borderClass: 'border-teal',
    accentClass: 'text-teal',
    bulletClass: 'text-teal',
    description:
      'Comprehensive assessments and support for children, teens, and families facing learning differences, developmental challenges, or school-related stress. I collaborate with schools and families to create environments where every learner can thrive.',
    whoFor: [
      'Children and adolescents with learning difficulties or ADHD',
      'Families seeking clarity on developmental or behavioral concerns',
      'Schools looking for assessment, recommendations, and staff guidance',
      'Parents navigating educational transitions or school placement',
    ],
    expect:
      'A thorough psycho-educational assessment, a clear written report with actionable recommendations, and a follow-up session to discuss findings and next steps.',
  },
  {
    title: 'Vocational Counseling',
    borderClass: 'border-lavender',
    accentClass: 'text-lavender',
    bulletClass: 'text-lavender',
    description:
      'Structured guidance for career exploration, decision-making, and professional development. Whether you are a student choosing a path, a professional considering a change, or someone re-entering the workforce, I help you connect your strengths and values to meaningful work.',
    whoFor: [
      'Students and young adults exploring career directions',
      'Professionals considering a career change or feeling stuck',
      'Individuals returning to work after a break',
      'Anyone seeking greater purpose and alignment in their work life',
    ],
    expect:
      'Interest and aptitude assessments, structured reflection exercises, and one-on-one sessions to build a clear, personalized action plan.',
  },
] as const

function ServicesPage() {
  return (
    <>
      {/* Page header */}
      <section className="py-24">
        <div className="text-center mb-16 max-w-[1140px] mx-auto px-6">
          <span className="inline-block font-display text-xs font-bold tracking-[0.15em] uppercase text-sage bg-sage-light px-4 py-1.5 rounded-full mb-4">
            Services
          </span>
          <h1 className="font-display font-bold text-[clamp(1.75rem,3.5vw,2.5rem)] leading-tight text-brown mb-4">
            How I Can Help
          </h1>
          <p className="text-lg text-brown-muted max-w-xl mx-auto">
            Three areas of practice, one shared foundation: empathy, evidence,
            and a genuine belief in your capacity for growth.
          </p>
        </div>
      </section>

      {/* Service detail sections */}
      {services.map((service) => (
        <section key={service.title} className="py-24">
          <div className="max-w-[1140px] mx-auto px-6">
            <div
              className={`glass p-10 relative overflow-hidden max-w-[860px] mx-auto border-t-4 ${service.borderClass}`}
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
                    className={`font-display text-sm font-bold uppercase tracking-wider mb-2 ${service.accentClass}`}
                  >
                    Who It's For
                  </h3>
                  <ul className="space-y-2 text-brown-muted leading-relaxed">
                    {service.whoFor.map((item) => (
                      <li key={item} className="relative pl-4">
                        <span
                          aria-hidden="true"
                          className={`absolute left-0 font-bold ${service.bulletClass}`}
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
                    className={`font-display text-sm font-bold uppercase tracking-wider mb-2 ${service.accentClass}`}
                  >
                    What to Expect
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
        <p className="font-display font-semibold text-[clamp(1.125rem,2.5vw,1.5rem)] text-brown mb-4">
          Not sure which service is right for you?
        </p>
        <p className="text-brown-muted mb-6 max-w-[520px] mx-auto leading-relaxed">
          That is completely okay. Reach out and we can figure it out together.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 font-display font-semibold px-9 py-3.5 rounded-full bg-clay text-warm-white hover:-translate-y-0.5 hover:shadow-lg transition"
        >
          Book a Free Consultation
        </Link>
      </section>
    </>
  )
}
