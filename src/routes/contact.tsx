import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { seo } from '~/lib/seo'

export const Route = createFileRoute('/contact')({
  head: () => ({
    meta: seo({
      title: 'Contact — Carla Puscas',
      description:
        'Get in touch with Carla Puscas for clinical psychology, educational psychology, or vocational counseling.',
    }),
    scripts: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          mainEntity: {
            '@type': 'Person',
            name: 'Carla Puscas',
            email: 'hello@carlapuscas.com',
            jobTitle: 'Clinical & Educational Psychologist',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Cluj-Napoca',
              addressCountry: 'RO',
            },
          },
        }),
      },
    ],
  }),
  component: ContactPage,
})

function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  })
  const [status, setStatus] = useState<
    'idle' | 'submitting' | 'success' | 'error'
  >('idle')

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')

    try {
      // TODO: Replace with createServerFn for email delivery
      // Simulate network delay for now
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setStatus('success')
      setForm({ name: '', email: '', service: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  const inputClasses =
    'w-full px-4 py-3 rounded-xl border border-brown/10 bg-warm-white/80 font-body text-brown placeholder:text-brown-muted/50 focus:outline-none focus:ring-2 focus:ring-clay/40 transition'

  return (
    <>
      {/* Page header */}
      <section className="py-12 md:py-24">
        <div className="text-center mb-16 max-w-[1140px] mx-auto px-6">
          <p className="font-display font-semibold text-xs uppercase tracking-widest text-brown-muted mb-3">Contact</p>
          <h1 className="font-display font-bold text-2xl md:text-4xl leading-tight text-brown mb-4">
            Let's Start a Conversation
          </h1>
          <p className="text-lg text-brown-muted max-w-xl mx-auto">
            Whether you have a question, want to book a session, or simply need
            to talk — I am here and happy to listen.
          </p>
        </div>
      </section>

      {/* Two-column layout */}
      <section className="py-12 md:py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[960px] mx-auto">
            {/* Contact info */}
            <div className="bg-warm-white border border-brown/8 rounded-2xl p-10 flex flex-col gap-6">
              <h2 className="font-display text-xl font-bold text-brown">
                Contact Information
              </h2>

              <div>
                <h3 className="uppercase tracking-wider text-xs font-display font-semibold text-clay mb-2">
                  Email
                </h3>
                <a
                  href="mailto:hello@carlapuscas.com"
                  className="text-brown-muted underline underline-offset-4"
                >
                  hello@carlapuscas.com
                </a>
              </div>

              <div>
                <h3 className="uppercase tracking-wider text-xs font-display font-semibold text-clay mb-2">
                  Location
                </h3>
                <p className="text-brown-muted leading-relaxed">
                  In-person sessions available in Cluj-Napoca, Romania.
                  <br />
                  Online sessions available worldwide.
                </p>
              </div>

              <div>
                <h3 className="uppercase tracking-wider text-xs font-display font-semibold text-clay mb-2">
                  Response Time
                </h3>
                <p className="text-brown-muted leading-relaxed">
                  I typically respond within 24 to 48 hours during business
                  days.
                </p>
              </div>
            </div>

            {/* Contact form */}
            <div className="bg-warm-white border border-brown/8 rounded-2xl p-10">
              <h2 className="font-display text-xl font-bold text-brown mb-6">
                Send a Message
              </h2>

              {status === 'success' ? (
                <div className="bg-warm-white border border-brown/8 rounded-2xl p-10 text-center">
                  <h2 className="font-display font-bold text-xl text-brown mb-4">
                    Message sent
                  </h2>
                  <p className="text-brown-muted mb-6">
                    Thank you for reaching out. I will be in touch soon.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="inline-flex items-center gap-2 font-display font-semibold px-8 py-3 rounded-full bg-clay text-warm-white hover:-translate-y-0.5 hover:shadow-lg focus-visible:ring-2 focus-visible:ring-clay/40 focus-visible:ring-offset-2 transition cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-4"
                  aria-busy={status === 'submitting'}
                >
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block font-display font-semibold text-sm text-brown mb-2"
                    >
                      Name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      maxLength={100}
                      autoComplete="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      aria-describedby="name-hint"
                      className={inputClasses}
                    />
                    <p id="name-hint" className="sr-only">
                      Maximum 100 characters
                    </p>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block font-display font-semibold text-sm text-brown mb-2"
                    >
                      Email
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      maxLength={200}
                      autoComplete="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      aria-describedby="email-hint"
                      className={inputClasses}
                    />
                    <p id="email-hint" className="sr-only">
                      Maximum 200 characters
                    </p>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-service"
                      className="block font-display font-semibold text-sm text-brown mb-2"
                    >
                      Service Interest
                    </label>
                    <select
                      id="contact-service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className={inputClasses}
                    >
                      <option value="">Select a service (optional)</option>
                      <option value="clinical">Clinical Psychology</option>
                      <option value="educational">
                        Educational Psychology
                      </option>
                      <option value="vocational">Vocational Counseling</option>
                      <option value="not-sure">Not sure yet</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block font-display font-semibold text-sm text-brown mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={5}
                      maxLength={2000}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me a little about what brings you here..."
                      aria-describedby="message-hint"
                      className={`${inputClasses} min-h-[160px] resize-y`}
                    />
                    <div
                      id="message-hint"
                      className="flex justify-end mt-1 text-xs text-brown-muted/60"
                    >
                      <span>
                        {form.message.length} / 2000
                      </span>
                    </div>
                  </div>

                  {status === 'error' && (
                    <p
                      className="text-sm text-clay bg-clay-light px-4 py-3 rounded-xl"
                      role="alert"
                    >
                      Something went wrong. Please try again or email me
                      directly.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className={`w-full py-4 rounded-full bg-clay text-warm-white font-display font-semibold hover:-translate-y-0.5 hover:shadow-lg focus-visible:ring-2 focus-visible:ring-clay/40 focus-visible:ring-offset-2 transition cursor-pointer mt-2 ${status === 'submitting' ? 'opacity-60 cursor-not-allowed' : ''}`}
                  >
                    {status === 'submitting' ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
