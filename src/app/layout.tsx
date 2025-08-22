/* eslint-disable @next/next/next-script-for-ga */
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import { Layout } from "@/components";

// Optimized fonts for better performance
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
});

export const metadata: Metadata = {
  title: "Zain | Full-Stack Developer",
  description:
    "Full-stack developer specializing in React, Node.js, and modern web technologies. Building efficient, scalable applications with clean code architecture.",
  keywords:
    "full-stack developer, React, Node.js, JavaScript, TypeScript, Next.js, web development, portfolio, software engineer",
  authors: [{ name: "Zain" }],
  creator: "Zain",
  publisher: "Zain",
  metadataBase: new URL("https://yourdomain.vercel.app"), // Replace with your actual domain
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Zain | Full-Stack Developer",
    description:
      "Full-stack developer specializing in modern web technologies and creating efficient, scalable applications.",
    type: "website",
    locale: "en_US",
    url: "https://yourdomain.vercel.app", // Replace with your actual domain
    siteName: "Zain Portfolio",
    images: [
      {
        url: "/og-image.jpg", // Consider adding an OpenGraph image
        width: 1200,
        height: 630,
        alt: "Zain - Full-Stack Developer",
      },
    ],
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
  verification: {
    // google: 'your-google-verification', // Add when you set up Google Search Console
    // yandex: 'your-yandex-verification', // Optional
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${robotoMono.variable}`}>
      <head>
        {/* Remove Nepcha Analytics if not configured, or replace with your analytics */}
        {/* <script
          defer
          data-site="YOUR_DOMAIN_HERE"
          src="https://api.nepcha.com/js/nepcha-analytics.js"
        ></script> */}

        {/* Consider adding Vercel Analytics instead */}
        {/* <script defer src="/_vercel/insights/script.js"></script> */}

        <link rel="shortcut icon" href="/favicon.ico" type="image/png" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Preload critical resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Layout>
          {children}
          {/* <FixedPlugin /> - Remove if not needed for minimal design */}
        </Layout>
      </body>
    </html>
  );
}
