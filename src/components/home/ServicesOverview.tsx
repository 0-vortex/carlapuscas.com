import { Link } from '@tanstack/react-router'

function BrainIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 2a5 5 0 0 1 4.5 7.2A5 5 0 0 1 19 14a5 5 0 0 1-3 4.6V22h-4v-3.4A5 5 0 0 1 9 14a5 5 0 0 1 2.5-4.8A5 5 0 0 1 12 2Z" />
      <path d="M12 2v8" />
      <path d="M9 6.5 12 10l3-3.5" />
    </svg>
  )
}

function HeartIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}

function BookIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
      <path d="M8 7h6" />
      <path d="M8 11h4" />
    </svg>
  )
}

const services = [
  {
    icon: <BrainIcon />,
    title: 'Clinical Psychology',
    description:
      'Evidence-based therapy for anxiety, depression, and emotional wellbeing. A safe space to explore, understand, and heal.',
  },
  {
    icon: <HeartIcon />,
    title: 'Educational Psychology',
    description:
      'Assessments and tailored support for learning differences, neurodevelopmental needs, and academic confidence at every stage.',
  },
  {
    icon: <BookIcon />,
    title: 'Vocational Counseling',
    description:
      'Guidance for career transitions, vocational planning, and finding meaningful work aligned with your strengths and values.',
  },
]

export function ServicesOverview() {
  return (
    <section className="py-12 md:py-24" aria-labelledby="services-title">
      <div className="text-center mb-16 max-w-[1140px] mx-auto px-6">
        <p className="font-display font-semibold text-xs uppercase tracking-widest text-brown-muted mb-3">
          Services
        </p>
        <h2 className="font-display font-bold text-2xl md:text-4xl leading-tight text-brown mb-4 text-balance" id="services-title">
          How I can help
        </h2>
        <p className="text-brown-muted max-w-lg mx-auto mb-16">
          Every person is different. I offer tailored approaches that meet you
          where you are and help you get where you want to be.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-[1140px] mx-auto px-6">
        {services.map((service) => (
          <article key={service.title} className="bg-warm-white border border-brown/8 rounded-2xl p-6 md:p-10 transition hover:-translate-y-1 hover:shadow-xl group min-w-0 break-words">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 flex items-center justify-center transition rounded-full bg-clay-light text-clay group-hover:bg-clay group-hover:text-warm-white">
                {service.icon}
              </div>
            </div>
            <h3 className="font-display font-bold text-xl text-brown mb-4">{service.title}</h3>
            <p className="text-brown-muted text-sm leading-relaxed mb-6 line-clamp-3">{service.description}</p>
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 font-display font-semibold text-sm hover:gap-3 transition-all text-clay"
            >
              Learn more
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}
