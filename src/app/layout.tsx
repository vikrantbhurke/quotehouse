import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import "./globals.css";
import { ColorSchemeScript, mantineHtmlProps } from "@mantine/core";
import { Providers } from "@/global/components/common";
import { outfit } from "@/global/styles/fonts";
// import Script from "next/script";
import clsx from "clsx";

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        {/* Google Analytics */}
        {/* <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-20J7PPVFVY`}
          strategy="afterInteractive"
        />

        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-20J7PPVFVY');
          `}
        </Script> */}

        <ColorSchemeScript />
      </head>
      <body className={clsx(outfit.className, "antialiased")}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
