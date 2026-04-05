import { createFileRoute, Link } from '@tanstack/react-router'
import { seo } from '~/lib/seo'

export const Route = createFileRoute('/about')({
  head: () => ({
    meta: seo({
      title: 'About — Carla Puscas',
      description:
        'Learn about Carla Puscas — clinical psychologist, educational psychologist, and vocational counselor dedicated to helping people thrive.',
    }),
  }),
  component: AboutPage,
})

function AboutPage() {
  return (
    <>
      {/* Hero header */}
      <section className="py-24">
        <div className="text-center mb-16 max-w-[1140px] mx-auto px-6">
          <span className="inline-block font-display text-xs font-bold tracking-[0.15em] uppercase text-sage bg-sage-light px-4 py-1.5 rounded-full mb-4">
            About
          </span>
          <h1 className="font-display font-bold text-[clamp(1.75rem,3.5vw,2.5rem)] leading-tight text-brown mb-4">
            About Carla
          </h1>
          <p className="text-lg text-brown-muted max-w-xl mx-auto">
            A psychologist who believes in meeting people where they are — and
            walking alongside them toward where they want to be.
          </p>
        </div>
      </section>

      {/* Professional bio */}
      <section className="py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="glass p-10 md:p-16 max-w-[800px] mx-auto">
            <h2 className="font-display font-bold text-[clamp(1.25rem,3vw,1.75rem)] text-brown mb-4">
              My Story
            </h2>
            <p className="text-brown-muted leading-relaxed mb-4">
              I am a clinical and educational psychologist with a deep commitment
              to understanding the whole person — not just the symptoms, but the
              story behind them. My work spans clinical practice, educational
              support, and vocational counseling, drawing on years of training and
              a genuine belief that every individual has the capacity for growth.
            </p>
            <p className="text-brown-muted leading-relaxed mb-4">
              I trained in clinical psychology with a focus on evidence-based
              approaches, including cognitive-behavioral therapy, psychodynamic
              methods, and integrative techniques. Over time, my practice
              naturally expanded to include educational psychology — helping
              children, teens, and families navigate learning differences,
              developmental challenges, and school-related stress.
            </p>
            <p className="text-brown-muted leading-relaxed">
              Vocational counseling became a natural extension of my work, as I
              witnessed how deeply career uncertainty can affect mental health and
              sense of self. I help individuals at all stages of life find
              clarity, purpose, and direction in their professional paths.
            </p>
          </div>
        </div>
      </section>

      {/* Education & approach */}
      <section className="py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[800px] mx-auto">
            <div className="glass p-10 md:p-16">
              <h3 className="font-display font-bold text-xl text-brown mb-4">
                Education
              </h3>
              <ul className="text-brown-muted leading-relaxed flex flex-col gap-2">
                <li>Master of Clinical Psychology</li>
                <li>Graduate Diploma in Educational Psychology</li>
                <li>Certified Vocational Counselor</li>
                <li>Ongoing professional development in trauma-informed care</li>
              </ul>
            </div>

            <div className="glass p-10 md:p-16">
              <h3 className="font-display font-bold text-xl text-brown mb-4">
                My Approach
              </h3>
              <p className="text-brown-muted leading-relaxed">
                I practice with warmth, curiosity, and respect. My approach is
                integrative — I draw from multiple therapeutic frameworks to
                tailor support to each person's unique needs. I believe in
                collaboration: you are the expert on your own life, and I am here
                to offer tools, perspective, and a safe space to explore.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-16 max-w-[1140px] mx-auto px-6">
        <p className="font-display font-semibold text-[clamp(1.125rem,2.5vw,1.5rem)] text-brown mb-4">
          Ready to take the next step?
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 font-display font-semibold px-9 py-3.5 rounded-full bg-clay text-warm-white hover:-translate-y-0.5 hover:shadow-lg transition"
        >
          Get in Touch
        </Link>
      </section>
    </>
  )
}
