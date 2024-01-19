import type { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        disallow: '/',
      },
      {
        userAgent: [
          'Applebot',
          'Bingbot', 
          'Googlebot',
          'Slurp',
          'DuckDuckBot',
          'Baiduspider',
          'facebot',
          'facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)',
          'facebookexternalhit/1.1',
          'facebookcatalog/1.0',
        ],
        allow: ['/'],
        disallow: [
          '/admin',
          '/admin/',
          '/auth/',
        ],
      }
    ],
  }
}