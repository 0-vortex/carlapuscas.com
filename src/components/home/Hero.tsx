import { Link } from '@tanstack/react-router'

export function Hero() {
  return (
    <section className="pt-32 pb-16 text-center">
      <div className="max-w-3xl mx-auto px-6">
        <div className="hero-ornament inline-block w-20 h-0.5 bg-clay mb-10 relative" aria-hidden="true" />

        <h1 className="font-display font-extrabold text-[clamp(2.25rem,5vw,3.5rem)] leading-[1.12] tracking-tight text-brown mb-6">
          Helping you find
          <br />
          <em className="not-italic gradient-text">growth, clarity,</em> &amp; balance
        </h1>

        <p className="text-lg text-brown-muted max-w-xl mx-auto mb-10 leading-relaxed">
          Clinical and educational psychology grounded in warmth, evidence, and
          a genuine belief in your potential. Whether you are navigating change
          or seeking deeper understanding, you are in the right place.
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 font-display font-semibold px-9 py-3.5 rounded-full bg-clay text-warm-white hover:-translate-y-0.5 hover:shadow-lg transition"
          >
            Get in touch
          </Link>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 font-display font-semibold px-9 py-3.5 rounded-full bg-transparent border-2 border-brown/20 text-brown hover:border-brown transition"
          >
            Read the blog
          </Link>
        </div>
      </div>
    </section>
  )
}
