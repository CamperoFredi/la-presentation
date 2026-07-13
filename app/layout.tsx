import "./globals.css";
import {Analytics} from "@vercel/analytics/next";
import type {Metadata, Viewport} from "next";
import {Bricolage_Grotesque, Inter} from "next/font/google";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Los Angeles — City of Angels",
  description:
    "An interactive visual presentation about Los Angeles: location, history, food, culture, icons, and distinct neighborhoods.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/estados-unidos.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/estados-unidos.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/estados-unidos.png",
        type: "image/svg+xml",
      },
    ],
    apple: "/estados-unidos.png",
  },
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    {media: "(prefers-color-scheme: light)", color: "white"},
    {media: "(prefers-color-scheme: dark)", color: "black"},
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
