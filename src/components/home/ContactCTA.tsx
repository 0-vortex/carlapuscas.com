import { Link } from '@tanstack/react-router'

export function ContactCTA() {
  return (
    <section className="py-24" aria-labelledby="cta-title">
      <div className="max-w-[1140px] mx-auto px-6">
        <div className="glass text-center py-24 px-10 mx-auto my-16 relative overflow-hidden">
          {/* Decorative geometric shapes */}
          <div
            className="absolute z-0 opacity-60 w-20 h-20 bg-teal-light rounded-full -top-4 -left-6"
            aria-hidden="true"
          />
          <div
            className="absolute z-0 opacity-60 w-12 h-12 bg-coral-light rounded-[20px] -bottom-2 right-8 rotate-[20deg]"
            aria-hidden="true"
          />
          <div
            className="absolute z-0 opacity-60 w-8 h-[4.5rem] bg-lavender-light rounded-full top-6 -right-2 -rotate-12"
            aria-hidden="true"
          />

          <div className="relative z-10">
            <h2 className="font-display font-extrabold text-[clamp(1.75rem,3.5vw,2.5rem)] leading-tight text-brown mb-4" id="cta-title">
              Ready to take the first step?
            </h2>
            <p className="text-brown-muted max-w-lg mx-auto mb-10">
              Whether you have questions or are ready to book a session, I would
              love to hear from you. Reach out and let us start the conversation.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 font-display font-semibold px-9 py-3.5 rounded-full bg-clay text-warm-white hover:-translate-y-0.5 hover:shadow-lg transition"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
