import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import "./globals.css";
import { ColorSchemeScript, mantineHtmlProps } from "@mantine/core";
import { Providers } from "@/global/components/common";
import { outfit } from "@/global/styles/fonts";
import Script from "next/script";
import clsx from "clsx";

type RootLayoutProps = {
  children: React.ReactNode;
};

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const isProd = process.env.NODE_ENV === "production";

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        {isProd && (
          <>
            {/* Google Analytics - Only loads in production */}
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />

            <Script id="gtag-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-20J7PPVFVY');
              `}
            </Script>
          </>
        )}

        <ColorSchemeScript />
      </head>
      <body className={clsx(outfit.className, "antialiased")}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
