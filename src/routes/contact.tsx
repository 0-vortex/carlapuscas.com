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

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // Client-side only for now — server function will be added later
    console.log('Form submitted:', form)
  }

  const inputClasses =
    'w-full px-4 py-3 rounded-xl border border-brown/10 bg-warm-white/80 font-body text-brown placeholder:text-brown-muted/50 focus:outline-none focus:ring-2 focus:ring-clay/40 transition'

  return (
    <>
      {/* Page header */}
      <section className="py-24">
        <div className="text-center mb-16 max-w-[1140px] mx-auto px-6">
          <span className="inline-block font-display text-xs font-bold tracking-[0.15em] uppercase text-sage bg-sage-light px-4 py-1.5 rounded-full mb-4">
            Contact
          </span>
          <h1 className="font-display font-bold text-[clamp(1.75rem,3.5vw,2.5rem)] leading-tight text-brown mb-4">
            Let's Start a Conversation
          </h1>
          <p className="text-lg text-brown-muted max-w-xl mx-auto">
            Whether you have a question, want to book a session, or simply need
            to talk — I am here and happy to listen.
          </p>
        </div>
      </section>

      {/* Two-column layout */}
      <section className="py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[960px] mx-auto">
            {/* Contact info */}
            <div className="glass p-10 flex flex-col gap-6">
              <h2 className="font-display text-[1.375rem] font-bold text-brown">
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
                  I typically respond within 24 to 48 hours during business days.
                </p>
              </div>
            </div>

            {/* Contact form */}
            <div className="glass p-10">
              <h2 className="font-display text-[1.375rem] font-bold text-brown mb-6">
                Send a Message
              </h2>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
                    autoComplete="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={inputClasses}
                  />
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
                    autoComplete="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={inputClasses}
                  />
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
                    <option value="educational">Educational Psychology</option>
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
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me a little about what brings you here..."
                    className={`${inputClasses} min-h-[160px] resize-y`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-clay text-warm-white font-display font-semibold hover:-translate-y-0.5 hover:shadow-lg transition cursor-pointer mt-2"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
