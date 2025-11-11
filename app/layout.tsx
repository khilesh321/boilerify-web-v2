import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LenisWrapper from "@/components/LenisWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Boilerify - Generate full-stack React + Express apps instantly",
  description: "A CLI tool that scaffolds React + Vite + Express projects in seconds — so you can start building, not configuring.",
  keywords: ["boilerify", "CLI tool", "React", "Vite", "Express", "full-stack", "scaffolding", "boilerplate", "npm package"],
  authors: [{ name: "Khilesh Jawale", url: "https://www.linkedin.com/in/khilesh-jawale/" }],
  creator: "Khilesh Jawale",
  publisher: "Khilesh Jawale",
  icons: {
    icon: '/favicon.svg',
  },
  metadataBase: new URL('https://boilerify.dev'),
  openGraph: {
    title: "Boilerify - Generate full-stack React + Express apps instantly",
    description: "A CLI tool that scaffolds React + Vite + Express projects in seconds — so you can start building, not configuring.",
    type: "website",
    url: "https://boilerify.dev",
    siteName: "Boilerify",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Boilerify - Full-stack project scaffolding made easy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Boilerify - Generate full-stack React + Express apps instantly",
    description: "A CLI tool that scaffolds React + Vite + Express projects in seconds — so you can start building, not configuring.",
    images: ["/og-image.png"],
    creator: "@khilesh321",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LenisWrapper>
          {children}
        </LenisWrapper>
      </body>
    </html>
  );
}
