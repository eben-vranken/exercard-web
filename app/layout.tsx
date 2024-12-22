import type { GetServerSideProps, Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import useGetAllBlogPosts from "@/hooks/useGetAllBlogPosts";
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
        className={`${inter.variable} antialiased h-screen p-5`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
