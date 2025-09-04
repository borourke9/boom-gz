import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://www.nexgensites.com/', changeFrequency: 'weekly', priority: 1.0 },
    { url: 'https://www.nexgensites.com/work', changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://www.nexgensites.com/contact', changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://www.nexgensites.com/services', changeFrequency: 'monthly', priority: 0.8 },
  ];
}



