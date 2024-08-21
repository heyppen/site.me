import "./global.css";
import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

// import Footer from "./components/footer";
import { SiteBaseUrl } from "./global";
import { Footer } from "./components/footer";
// import { cx } from "./ui";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(SiteBaseUrl),
  title: {
    default: "tentt dev",
    template: "%s | tentt dev",
  },
  description: "tentt dev",
  icons: `${SiteBaseUrl}/icon.png`,
  openGraph: {
    title: "tentt dev",
    description: "tentt dev",
    url: SiteBaseUrl,
    siteName: "tentt def",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-zinc-900 text-zinc-200 m-auto max-w-3xl md:max-w-4xl px-4">
        {children}
        <Analytics />
        <SpeedInsights />
        <Footer />
      </body>
    </html>
  );
}
