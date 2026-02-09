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
  title: "Northon Studios | Web Design & Development Agency",
  description:
    "We craft digital experiences that convert. Strategic design meets technical excellence for ambitious brands.",
  keywords: [
    "web design",
    "web development",
    "digital agency",
    "branding",
    "marketing",
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
