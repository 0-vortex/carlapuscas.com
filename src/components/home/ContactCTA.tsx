import { Link } from '@tanstack/react-router'

export function ContactCTA() {
  return (
    <section className="py-12 md:py-24" aria-labelledby="cta-title">
      <div className="max-w-3xl mx-auto px-6">
        <div className="glass text-center py-12 px-8 md:py-16 md:px-12">
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-brown mb-4" id="cta-title">
            The first step is simple
          </h2>
          <p className="text-brown-muted max-w-md mx-auto mb-8">
            Whether you have questions or are ready to book a session, I would love to hear from you.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 font-display font-semibold px-9 py-3.5 rounded-full bg-clay text-warm-white hover:-translate-y-0.5 hover:shadow-lg focus-visible:ring-2 focus-visible:ring-clay/40 focus-visible:ring-offset-2 transition"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  )
}
