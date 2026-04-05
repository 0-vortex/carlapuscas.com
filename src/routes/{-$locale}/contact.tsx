import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { seo } from '~/lib/seo'
import { useLocale } from '~/i18n/useLocale'
import { t, defaultLocale } from '~/i18n/translations'
import type { Locale } from '~/i18n/translations'

export const Route = createFileRoute('/{-$locale}/contact')({
  head: ({ params }) => {
    const locale = ((params as any).locale || defaultLocale) as Locale
    const i18n = t(locale)
    return {
      meta: seo({
        title: `${i18n.contact.title} — Carla Puscas`,
        description: i18n.contact.subtitle,
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
              email: 'carlapuscas9@gmail.com',
              telephone: '+40741659943',
              jobTitle: 'Clinical & Educational Psychologist',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Strada William Shakespeare Nr. 5',
                addressLocality: 'Oradea',
                addressCountry: 'RO',
              },
            },
          }),
        },
      ],
    }
  },
  component: ContactPage,
})

function ContactPage() {
  const locale = useLocale()
  const i18n = t(locale)

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
          <p className="font-display font-semibold text-xs uppercase tracking-widest text-brown-muted mb-3">{i18n.contact.label}</p>
          <h1 className="font-display font-bold text-2xl md:text-4xl leading-tight text-brown mb-4">
            {i18n.contact.title}
          </h1>
          <p className="text-lg text-brown-muted max-w-xl mx-auto">
            {i18n.contact.subtitle}
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
                {i18n.contact.infoTitle}
              </h2>

              <div>
                <h3 className="uppercase tracking-wider text-xs font-display font-semibold text-clay mb-2">
                  {i18n.contact.email}
                </h3>
                <a
                  href="mailto:carlapuscas9@gmail.com"
                  className="text-brown-muted underline underline-offset-4"
                >
                  carlapuscas9@gmail.com
                </a>
              </div>

              <div>
                <h3 className="uppercase tracking-wider text-xs font-display font-semibold text-clay mb-2">
                  {i18n.contact.location}
                </h3>
                <p className="text-brown-muted leading-relaxed">
                  {i18n.contact.locationValue}
                  <br />
                  {i18n.contact.locationOnline}
                </p>
              </div>

              <div>
                <h3 className="uppercase tracking-wider text-xs font-display font-semibold text-clay mb-2">
                  {i18n.contact.responseTime}
                </h3>
                <p className="text-brown-muted leading-relaxed">
                  {i18n.contact.responseTimeValue}
                </p>
              </div>
            </div>

            {/* Contact form */}
            <div className="bg-warm-white border border-brown/8 rounded-2xl p-10">
              <h2 className="font-display text-xl font-bold text-brown mb-6">
                {i18n.contact.formTitle}
              </h2>

              {status === 'success' ? (
                <div className="bg-warm-white border border-brown/8 rounded-2xl p-10 text-center">
                  <h2 className="font-display font-bold text-xl text-brown mb-4">
                    {i18n.contact.successTitle}
                  </h2>
                  <p className="text-brown-muted mb-6">
                    {i18n.contact.successMessage}
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="inline-flex items-center gap-2 font-display font-semibold px-8 py-3 rounded-full bg-clay text-warm-white hover:-translate-y-0.5 hover:shadow-lg focus-visible:ring-2 focus-visible:ring-clay/40 focus-visible:ring-offset-2 transition cursor-pointer"
                  >
                    {i18n.contact.sendAnother}
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
                      {i18n.contact.name}
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
                      placeholder={i18n.contact.namePlaceholder}
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
                      {i18n.contact.emailLabel}
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
                      placeholder={i18n.contact.emailPlaceholder}
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
                      {i18n.contact.serviceInterest}
                    </label>
                    <div className="relative">
                    <select
                      id="contact-service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className={`${inputClasses} appearance-none pr-10 cursor-pointer`}
                    >
                      <option value="">{i18n.contact.serviceSelect}</option>
                      <option value="clinical">{i18n.contact.serviceClinical}</option>
                      <option value="educational">
                        {i18n.contact.serviceEducational}
                      </option>
                      <option value="vocational">{i18n.contact.serviceVocational}</option>
                      <option value="not-sure">{i18n.contact.serviceNotSure}</option>
                    </select>
                    <svg className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-brown-muted" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block font-display font-semibold text-sm text-brown mb-2"
                    >
                      {i18n.contact.message}
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={5}
                      maxLength={2000}
                      value={form.message}
                      onChange={handleChange}
                      placeholder={i18n.contact.messagePlaceholder}
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
                      {i18n.contact.errorMessage}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className={`w-full py-4 rounded-full bg-clay text-warm-white font-display font-semibold hover:-translate-y-0.5 hover:shadow-lg focus-visible:ring-2 focus-visible:ring-clay/40 focus-visible:ring-offset-2 transition cursor-pointer mt-2 ${status === 'submitting' ? 'opacity-60 cursor-not-allowed' : ''}`}
                  >
                    {status === 'submitting' ? i18n.contact.sending : i18n.contact.send}
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
