/// <reference types="vite/client" />
import type { ReactNode } from 'react'
import {
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts,
} from '@tanstack/react-router'
import { Header } from '~/components/layout/Header'
import { Footer } from '~/components/layout/Footer'
import appCss from '~/styles/app.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#FBF8FC' },
      {
        title: 'Carla Puscas — Clinical & Educational Psychologist',
      },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: 'anonymous',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap',
      },
    ],
  }),
  component: RootComponent,
  notFoundComponent: () => {
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
            The page you are looking for does not exist.
          </p>
          <a
            href="/"
            className="inline-flex items-center gap-2 font-display font-semibold px-8 py-3 rounded-full bg-clay text-warm-white hover:-translate-y-0.5 hover:shadow-lg focus-visible:ring-2 focus-visible:ring-clay/40 focus-visible:ring-offset-2 transition"
          >
            Go home
          </a>
        </div>
      </section>
    )
  },
  errorComponent: ({ error }) => {
    return (
      <section className="py-32 text-center">
        <div className="max-w-lg mx-auto px-6">
          <h1 className="font-display font-bold text-2xl text-brown mb-4">
            Something went wrong
          </h1>
          <p className="text-brown-muted mb-8">
            We encountered an unexpected error. Please try refreshing the page.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="inline-flex items-center gap-2 font-display font-semibold px-8 py-3 rounded-full bg-clay text-warm-white hover:-translate-y-0.5 hover:shadow-lg focus-visible:ring-2 focus-visible:ring-clay/40 focus-visible:ring-offset-2 transition cursor-pointer"
          >
            Refresh page
          </button>
        </div>
      </section>
    )
  },
})

function RootComponent() {
  return (
    <RootDocument>
      <div
        className="aurora-bg fixed inset-0 -z-10 bg-warm-white animate-[aurora-shift_70s_ease-in-out_infinite_alternate]"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 10% 20%, var(--color-aurora-1) 0%, transparent 60%),
            radial-gradient(ellipse 70% 50% at 85% 15%, var(--color-aurora-2) 0%, transparent 55%),
            radial-gradient(ellipse 60% 70% at 50% 80%, var(--color-aurora-3) 0%, transparent 55%),
            radial-gradient(ellipse 50% 40% at 30% 55%, var(--color-aurora-4) 0%, transparent 50%),
            var(--color-warm-white)
          `,
        }}
        aria-hidden="true"
      />
      <a
        href="#main-content"
        className="absolute -top-full left-4 bg-brown text-cream px-4 py-2 rounded-xl font-display font-semibold z-[1000] no-underline focus:top-4"
      >
        Skip to content
      </a>

      <Header />

      <main id="main-content">
        <Outlet />
      </main>

      <Footer />
    </RootDocument>
  )
}

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="font-body text-base leading-relaxed text-brown bg-warm-white overflow-x-hidden antialiased">
        {children}
        <Scripts />
      </body>
    </html>
  )
}
