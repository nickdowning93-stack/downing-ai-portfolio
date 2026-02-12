import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Downing AI Builds | Project Portfolio",
  description:
    "A complete portfolio of every project, venture, and creation by Nick Downing — from enterprise AI platforms to iOS apps to creative writing.",
  icons: {
    icon: "/favicon.ico",
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
