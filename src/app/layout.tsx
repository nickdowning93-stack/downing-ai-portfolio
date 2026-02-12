import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0a0a0f",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://downing-ai-portfolio.vercel.app"),
  title: "Nicholas MacLeod Downing | AI Builds & Project Portfolio",
  description:
    "40+ projects spanning enterprise AI platforms, iOS apps, SaaS tools, and creative ventures. Explore the full portfolio of AI-powered builds by Nicholas MacLeod Downing.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    title: "Nicholas MacLeod Downing's AI Builds & Project Portfolio",
    description:
      "40+ projects spanning enterprise AI platforms, iOS apps, SaaS tools, and creative ventures. From Shield AI to Risk Forward AI to custom iOS apps.",
    siteName: "Downing AI Builds",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Nicholas MacLeod Downing's AI Builds & Project Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nicholas MacLeod Downing's AI Builds & Project Portfolio",
    description:
      "40+ projects spanning enterprise AI platforms, iOS apps, SaaS tools, and creative ventures.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased bg-[#0a0a0f] text-white`}>
        {children}
      </body>
    </html>
  );
}
