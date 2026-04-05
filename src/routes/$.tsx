import { createFileRoute, Link } from '@tanstack/react-router'
import { seo } from '~/lib/seo'

export const Route = createFileRoute('/$')({
  head: () => ({
    meta: seo({
      title: 'Page Not Found — Carla Puscas',
      description: 'The page you are looking for does not exist.',
    }),
  }),
  component: NotFoundPage,
})

function NotFoundPage() {
  return (
    <section className="py-32 text-center">
      <div className="max-w-lg mx-auto px-6">
        <p className="font-display text-6xl font-extrabold text-clay/30 mb-6">
          404
        </p>
        <h1 className="font-display font-bold text-2xl md:text-3xl text-brown mb-4">
          Page not found
        </h1>
        <p className="text-brown-muted mb-8 leading-relaxed">
          The page you are looking for does not exist or has been moved. Let me
          help you find what you need.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-display font-semibold px-8 py-3 rounded-full bg-clay text-warm-white hover:-translate-y-0.5 hover:shadow-lg focus-visible:ring-2 focus-visible:ring-clay/40 focus-visible:ring-offset-2 transition"
          >
            Go home
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 font-display font-semibold px-8 py-3 rounded-full border-2 border-brown/20 text-brown hover:border-brown focus-visible:ring-2 focus-visible:ring-clay/40 focus-visible:ring-offset-2 transition"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  )
}
