import { defineCollection, defineConfig } from '@content-collections/core'
import { z } from 'zod'

const posts = defineCollection({
  name: 'posts',
  directory: './src/blog',
  include: '*.md',
  schema: z.object({
    title: z.string(),
    published: z.string(),
    description: z.string(),
    tag: z.string(),
    author: z.string().default('Carla Puscas'),
    locale: z.string().default('en'),
    content: z.string(),
  }),
  transform: (post) => {
    const slug = post._meta.path
    const wordCount = post.content.split(/\s+/).length
    const readingTime = Math.ceil(wordCount / 230)

    return {
      ...post,
      slug,
      readingTime,
    }
  },
})

const postsRo = defineCollection({
  name: 'postsRo',
  directory: './src/blog/ro',
  include: '*.md',
  schema: z.object({
    title: z.string(),
    published: z.string(),
    description: z.string(),
    tag: z.string(),
    author: z.string().default('Carla Puscas'),
    locale: z.string().default('ro'),
    content: z.string(),
  }),
  transform: (post) => {
    const slug = post._meta.path
    const wordCount = post.content.split(/\s+/).length
    const readingTime = Math.ceil(wordCount / 230)

    return {
      ...post,
      slug,
      readingTime,
    }
  },
})

const postsHu = defineCollection({
  name: 'postsHu',
  directory: './src/blog/hu',
  include: '*.md',
  schema: z.object({
    title: z.string(),
    published: z.string(),
    description: z.string(),
    tag: z.string(),
    author: z.string().default('Carla Puscas'),
    locale: z.string().default('hu'),
    content: z.string(),
  }),
  transform: (post) => {
    const slug = post._meta.path
    const wordCount = post.content.split(/\s+/).length
    const readingTime = Math.ceil(wordCount / 230)

    return {
      ...post,
      slug,
      readingTime,
    }
  },
})

export default defineConfig({
  content: [posts, postsRo, postsHu],
})
