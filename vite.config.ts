import { defineConfig, type Plugin } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import contentCollections from '@content-collections/vite'
import path from 'node:path'
import { readdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs'
import matter from 'gray-matter'

const SITE_URL = 'https://carlapuscas.com'
const locales = ['en', 'ro', 'hu'] as const
const defaultLocale = 'en'

const staticPages = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/about', changefreq: 'monthly', priority: '0.8' },
  { path: '/services', changefreq: 'monthly', priority: '0.9' },
  { path: '/blog', changefreq: 'weekly', priority: '0.8' },
  { path: '/contact', changefreq: 'monthly', priority: '0.7' },
]

function localePath(pagePath: string, locale: string) {
  if (locale === defaultLocale) return pagePath
  return pagePath === '/' ? `/${locale}` : `/${locale}${pagePath}`
}

function getBlogSlugs(dir: string) {
  if (!existsSync(dir)) return [] as { slug: string; published: string | null }[]
  return readdirSync(dir)
    .filter((f) => f.endsWith('.md'))
    .map((f) => {
      const { data } = matter(readFileSync(path.join(dir, f), 'utf-8'))
      return { slug: f.replace(/\.md$/, ''), published: (data.published as string) || null }
    })
}

const blogDir = path.resolve('src/blog')
const blogPosts = {
  en: getBlogSlugs(blogDir),
  ro: getBlogSlugs(path.join(blogDir, 'ro')),
  hu: getBlogSlugs(path.join(blogDir, 'hu')),
}
const allSlugs = [...new Set(Object.values(blogPosts).flatMap((p) => p.map((x) => x.slug)))]

function sitemapPlugin(): Plugin {
  return {
    name: 'generate-sitemap',
    apply: 'build',
    closeBundle() {
      const outDir = path.resolve(process.cwd(), 'dist/client')
      if (!existsSync(outDir)) return

      const urls: string[] = []

      // Static pages
      for (const page of staticPages) {
        const alternates = locales
          .map((l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${SITE_URL}${localePath(page.path, l)}" />`)
          .join('\n')

        for (const locale of locales) {
          urls.push(`  <url>
    <loc>${SITE_URL}${localePath(page.path, locale)}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
${alternates}
  </url>`)
        }
      }

      // Blog posts
      for (const slug of allSlugs) {
        const available = locales.filter((l) => blogPosts[l].some((p) => p.slug === slug))
        const alternates = available
          .map((l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${SITE_URL}${localePath(`/blog/${slug}`, l)}" />`)
          .join('\n')

        for (const locale of available) {
          const post = blogPosts[locale].find((p) => p.slug === slug)
          urls.push(`  <url>
    <loc>${SITE_URL}${localePath(`/blog/${slug}`, locale)}</loc>${post?.published ? `\n    <lastmod>${post.published}</lastmod>` : ''}
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
${alternates}
  </url>`)
        }
      }

      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>`

      writeFileSync(path.resolve(outDir, 'sitemap.xml'), sitemap)
      console.log(`Sitemap generated: ${urls.length} URLs → dist/client/sitemap.xml`)
    },
  }
}

export default defineConfig({
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src'),
    },
  },
  plugins: [
    tanstackStart({
      srcDirectory: 'src',
      prerender: {
        enabled: true,
        crawlLinks: true,
      },
      pages: [
        { path: '/', prerender: { crawlLinks: true } },
        ...locales.filter((l) => l !== defaultLocale).flatMap((l) => [
          { path: `/${l}`, prerender: { crawlLinks: true } },
          { path: `/${l}/about` },
          { path: `/${l}/services` },
          { path: `/${l}/blog`, prerender: { crawlLinks: true } },
          ...allSlugs.map((slug) => ({ path: `/${l}/blog/${slug}` })),
          { path: `/${l}/contact` },
        ]),
        ...allSlugs.map((slug) => ({ path: `/blog/${slug}` })),
      ],
    }),
    react(),
    tailwindcss(),
    contentCollections(),
    sitemapPlugin(),
  ],
})
