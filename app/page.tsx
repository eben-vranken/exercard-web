'use client'

import RainingCards from "@/components/UI/Animated/RainingCards";
import { GithubLogo } from "@phosphor-icons/react";
import { Stack } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import CookieConsentModal from "@/components/UI/cookiesModal";

export default function Home() {
  return (
    <section className="w-full h-full flex flex-col justify-center items-center gap-y-2 relative">
      <CookieConsentModal />  {/* Add the modal here */}

      <section className="flex gap-x-4 items-center">
        <Stack size={40} className="text-blue-500" />
        <h1 className="font-bold text-3xl">Exercard</h1>
      </section>
      <p className="text-light">
        Free & Open-source SRS flashcards with local AI-integration.
      </p>

      <Link href={"https://www.github.com/eben-vranken/exercard"} target="_blank" className="px-2 py-1 bg-primary rounded hover:opacity-85 flex items-center gap-x-1">
        <GithubLogo size={25} />
        Github
      </Link>

      <RainingCards cardCount={10} />
    </section>
  );
}
