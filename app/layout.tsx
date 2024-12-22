import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/UI/Navbar";

const inter = localFont({
  src: "./fonts/Inter.ttf",
  variable: "--font-inter",
  weight: "100 200 300 400 500 600 700 800 900",
});

export const metadata: Metadata = {
  title: "Exercard",
  description: "Open-Source SRS flashcards with local AI, free, forever.",
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
        className={`${inter.variable} w-full flex flex-col items-center antialiased h-screen p-5`}
      >
        <section className="w-full md:w-2/3 lg:w-1/2 2xl:w-1/3">
          <Navbar />

          {children}
        </section>
      </body>
    </html>
  );
}
