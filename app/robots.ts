import { SiteBaseUrl } from 'app/global'

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
