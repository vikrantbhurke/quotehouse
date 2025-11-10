import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import "./globals.css";
import { ColorSchemeScript, mantineHtmlProps } from "@mantine/core";
import { Providers } from "@/global/components/common";
import { outfit } from "@/global/styles/fonts";
import clsx from "clsx";

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body className={clsx(outfit.className, "antialiased")}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
