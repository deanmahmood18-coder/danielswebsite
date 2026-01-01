import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://example.com';
  return [
    {
      url: baseUrl,
      lastModified: new Date()
    },
    {
      url: `${baseUrl}/media-kit`,
      lastModified: new Date()
    },
    {
      url: `${baseUrl}/sponsors`,
      lastModified: new Date()
    },
    {
      url: `${baseUrl}/updates`,
      lastModified: new Date()
    }
  ];
}
