import { MetadataRoute } from 'next'

// Single-page site — search engines ignore #fragments, so only the root is listed
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://gopikrishnanb.co.in',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
