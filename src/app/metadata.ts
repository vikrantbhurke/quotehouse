import type { Metadata } from "next";

const appName = process.env.APP_NAME!;
const appUrl = process.env.NEXT_PUBLIC_APP_URL!;

export const metadata: Metadata = {
  metadataBase: new URL(appUrl),
  title: {
    default: `${appName} - A house full of quotes.`,
    template: `%s | ${appName}`,
  },
  description: `${appName} is a site / app to find, share and contribute quotes.`,
  keywords: [
    "quotes",
    "inspiration",
    "motivation",
    "share quotes",
    "contribute quotes",
    "quote app",
    "quote site",
  ],
  authors: [{ name: "QuoteApp Team", url: appUrl }],
  creator: "QuoteApp Team",
  publisher: "QuoteApp Inc.",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      notranslate: false,
      noarchive: false,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
      { url: "/favicon.svg", sizes: "any", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon-180x180.png",
  },
  openGraph: {
    title: `Welcome to ${appName}!`,
    description: "Find, share and contribute quotes.",
    url: appUrl,
    type: "website",
    images: [
      {
        url: `${appUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: `${appName} – Find, share and contribute quotes.`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Welcome to ${appName}!`,
    description: "Find, share and contribute quotes.",
    images: [`${appUrl}/og-image.jpg`],
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: appUrl,
  },
};
