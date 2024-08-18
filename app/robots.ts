import { SiteBaseUrl } from 'app/sitemap'

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
      },
    ],
    sitemap: `${SiteBaseUrl}/sitemap.xml`,
  }
}
