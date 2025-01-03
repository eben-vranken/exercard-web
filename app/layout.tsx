import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavbarWrapper from "@/components/UI/NavbarWrapper";
import CookieConsentWrapper from "@/components/cookies/CookieConsentWrapper";

// const inter = localFont({
//   src: "./fonts/Inter.ttf",
//   variable: "--font-inter",
//   weight: "100 200 300 400 500 600 700 800 900",
// });

const inconsolata = localFont({
  src: "./fonts/Inconsolata.ttf",
  variable: "--font-inconsolata",
  weight: "200 300 400 500 600 700 800 900",
});

export const metadata: Metadata = {
  title: "Exercard - Open-Source SRS Flashcards with Local AI",
  description: "Exercard is an open-source SRS flashcard app featuring local AI, designed for efficient learning and privacy. Free, forever.",
  keywords: [
    "flashcards",
    "open-source",
    "srs",
    "spaced repetition",
    "ai",
    "artificial intelligence",
    "local",
    "free",
    "privacy",
    "exercard"
  ],
  authors: [{ name: "Eben Vranken", url: "https://www.github.com/eben-vranken" }],
};

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  date: string;
  slug: string;
  excerpt: string;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inconsolata.variable} absolute left-1/2 -translate-x-1/2 flex w-full md:w-2/3 lg:w-1/2 2xl:w-1/3 flex-col items-center antialiased min-h-screen p-5`}
      >
        <NavbarWrapper />
        {children}

        <CookieConsentWrapper />
      </body>
    </html>
  );
}