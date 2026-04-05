export function seo({
  title,
  description,
  image,
}: {
  title: string
  description?: string
  image?: string
}) {
  const tags: Array<Record<string, string>> = [
    { title },
    { name: 'description', content: description ?? '' },
    { name: 'og:title', content: title },
    { name: 'og:description', content: description ?? '' },
    { name: 'og:type', content: 'website' },
  ]
  if (image) {
    tags.push(
      { name: 'og:image', content: image },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:image', content: image },
    )
  }
  return tags
}
