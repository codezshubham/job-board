import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://rojgarsync.in';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin-x8k9p2m-vault-92hf7q-secure-core-a81mz', '/api/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
