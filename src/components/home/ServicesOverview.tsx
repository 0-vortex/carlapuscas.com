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
    shapeClass: 'rounded-full bg-teal-light text-teal group-hover:bg-teal group-hover:text-warm-white',
    linkColor: 'text-teal',
  },
  {
    icon: <HeartIcon />,
    title: 'Wellbeing Coaching',
    description:
      'Practical strategies rooted in positive psychology to help you build resilience, set boundaries, and thrive.',
    shapeClass: 'rounded-[20px] bg-coral-light text-coral group-hover:bg-coral group-hover:text-warm-white',
    linkColor: 'text-coral',
  },
  {
    icon: <BookIcon />,
    title: 'Educational Support',
    description:
      'Assessments and guidance for learning differences, school transitions, and academic confidence at every stage.',
    shapeClass: 'w-12 h-[4.5rem] rounded-full bg-lavender-light text-lavender group-hover:bg-lavender group-hover:text-warm-white',
    linkColor: 'text-lavender',
  },
]

export function ServicesOverview() {
  return (
    <section className="py-24" aria-labelledby="services-title">
      <div className="text-center mb-16 max-w-[1140px] mx-auto px-6">
        <span className="font-display font-semibold text-xs uppercase tracking-[0.15em] text-sage bg-sage-light px-4 py-1.5 rounded-full inline-block mb-4">
          Services
        </span>
        <h2 className="font-display font-bold text-[clamp(1.75rem,3.5vw,2.5rem)] leading-tight text-brown mb-4" id="services-title">
          How I can help
        </h2>
        <p className="text-brown-muted max-w-lg mx-auto mb-16">
          Every person is different. I offer tailored approaches that meet you
          where you are and help you get where you want to be.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1140px] mx-auto px-6">
        {services.map((service) => (
          <article key={service.title} className="glass p-10 transition hover:-translate-y-1 hover:shadow-xl group">
            <div className="flex justify-center mb-6">
              <div className={`w-[4.5rem] h-[4.5rem] flex items-center justify-center transition ${service.shapeClass}`}>
                {service.icon}
              </div>
            </div>
            <h3 className="font-display font-bold text-xl text-brown mb-4">{service.title}</h3>
            <p className="text-brown-muted text-[0.9375rem] leading-relaxed mb-6">{service.description}</p>
            <Link
              to="/services"
              className={`inline-flex items-center gap-1.5 font-display font-semibold text-sm hover:gap-3 transition-all ${service.linkColor}`}
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
