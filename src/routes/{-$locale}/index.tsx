import { createFileRoute } from '@tanstack/react-router'
import { Hero } from '~/components/home/Hero'
import { ServicesOverview } from '~/components/home/ServicesOverview'
import { BlogTeaser } from '~/components/home/BlogTeaser'
import { ContactCTA } from '~/components/home/ContactCTA'
import { WaveDivider } from '~/components/ui/WaveDivider'
import { FanDivider } from '~/components/ui/FanDivider'
import { seo } from '~/lib/seo'
import { useLocale } from '~/i18n/useLocale'
import { t, defaultLocale } from '~/i18n/translations'
import type { Locale } from '~/i18n/translations'

export const Route = createFileRoute('/{-$locale}/')({
  head: ({ params }) => {
    const locale = ((params as any).locale || defaultLocale) as Locale
    const i18n = t(locale)
    return {
      meta: seo({
        title: i18n.meta.siteTitle,
        description: i18n.meta.siteDescription,
      }),
    }
  },
  component: HomePage,
})

function HomePage() {
  const locale = useLocale()
  const i18n = t(locale)

  return (
    <>
      <Hero />
      <WaveDivider variant="hero-to-services" />
      <ServicesOverview />
      <FanDivider />
      <WaveDivider variant="services-to-blog" />
      <BlogTeaser />
      <WaveDivider variant="blog-to-contact" />
      <ContactCTA />
    </>
  )
}
