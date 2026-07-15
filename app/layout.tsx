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
const basePath = process.env.__NEXT_ROUTER_BASEPATH || "";
export const metadata: Metadata = {
  title: "California",
  description:
    "An interactive visual presentation about California: location, history, food, culture, icons, and distinct neighborhoods.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: `${basePath}/estados-unidos.png`,
        media: "(prefers-color-scheme: light)",
      },
      {
        url: `${basePath}/estados-unidos.png`,
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: `${basePath}/estados-unidos.png`,
        type: "image/svg+xml",
      },
    ],
    apple: `${basePath}/estados-unidos.png`,
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
