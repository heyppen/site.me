import './global.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { SiteBaseUrl } from './global'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(SiteBaseUrl),
  title: {
    default: 'tentt dev',
    template: '%s | tentt dev',
  },
  description: 'tentt dev',
  icons: `${SiteBaseUrl}/icon.png`,
  openGraph: {
    title: 'tentt dev',
    description: 'tentt dev',
    url: SiteBaseUrl,
    siteName: 'tentt def',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-black bg-white dark:text-white dark:bg-black',
        inter.className,
      )}
    >
      <body className="antialiased max-w-4xl mx-4 mt-4 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          {/* <Navbar /> */}
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  )
}
