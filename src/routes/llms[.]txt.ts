import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/llms.txt')({
  server: {
    handlers: {
      GET: async () => {
        const content = `# Carla Puscas — Clinical & Educational Psychologist

> Carla Puscas is a clinical psychologist, educational psychologist, and vocational counselor based in Cluj-Napoca, Romania. She offers evidence-based therapy, educational assessments, and career guidance grounded in warmth, empathy, and genuine human connection.

## Services

### Clinical Psychology
Evidence-based therapy for adults and older adolescents navigating anxiety, depression, trauma, life transitions, and relational difficulties. Integrative approach using cognitive-behavioral, psychodynamic, and compassion-focused frameworks.

### Educational Psychology
Comprehensive assessments and support for children, teens, and families facing learning differences, developmental challenges, or school-related stress. Collaboration with schools and families to create environments where every learner can thrive.

### Vocational Counseling
Structured guidance for career exploration, decision-making, and professional development. Helping individuals connect their strengths, values, and aspirations to meaningful work.

## Key Facts
- Location: Cluj-Napoca, Romania (in-person and online worldwide)
- Languages: Romanian, English
- Approach: Evidence-based, integrative, person-centered
- Specializations: Anxiety, depression, learning differences, career transitions, school-related stress
- Contact: hello@carlapuscas.com

## Pages
- Home: https://carlapuscas.com
- About: https://carlapuscas.com/about
- Services: https://carlapuscas.com/services
- Blog: https://carlapuscas.com/blog
- Contact: https://carlapuscas.com/contact

## Blog Topics
Monthly articles on clinical psychology, educational psychology, career guidance, and wellbeing. Topics include therapy expectations, supporting children through academic pressure, career transitions at midlife, and evidence-based wellbeing strategies.
`

        return new Response(content, {
          headers: {
            'Content-Type': 'text/plain; charset=utf-8',
            'Cache-Control': 'public, max-age=86400',
          },
        })
      },
    },
  },
})
