import type { Metadata } from "next";
import {EB_Garamond, Fira_Sans, Inter, Neuton, Playfair_Display, Sora, Spectral} from "next/font/google";
import "./globals.css";
import React from "react";

const inter = Sora({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400"],
  style: "normal"
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Northon Studios | A Private Digital Atelier for Luxury Brands",
  description:
    "A private digital atelier composing bespoke websites and commerce experiences for luxury houses, private brands, and heritage companies scaling with intention.",
  keywords: [
    "luxury web design",
    "luxury brand website",
    "bespoke web design",
    "digital atelier",
    "high-end web development",
    "luxury e-commerce",
    "private client branding",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preload" href="/hero.mp4" as="video" type="video/mp4" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>{children}</body>
    </html>
  );
}
