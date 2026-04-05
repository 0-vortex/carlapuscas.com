import { createFileRoute } from '@tanstack/react-router'
import { Hero } from '~/components/home/Hero'
import { ServicesOverview } from '~/components/home/ServicesOverview'
import { BlogTeaser } from '~/components/home/BlogTeaser'
import { ContactCTA } from '~/components/home/ContactCTA'
import { WaveDivider } from '~/components/ui/WaveDivider'
import { FanDivider } from '~/components/ui/FanDivider'
import { seo } from '~/lib/seo'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: seo({
      title: 'Carla Puscas — Clinical & Educational Psychologist',
      description:
        'Clinical psychology, educational support, and vocational counseling grounded in empathy, evidence, and genuine human connection.',
    }),
  }),
  component: HomePage,
})

function HomePage() {
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
