'use client';

import { GithubLogo, RedditLogo, Stack, TwitterLogo } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = {
    '/': 'Home',
    '/science': 'Science',
    '/blog': 'Blog',
}

const Navbar: React.FC = () => {
    const pathname = usePathname();

    return (
        <nav className="flex flex-col text-left w-full">
            <Link href={'/'} className="flex gap-x-4 cursor-pointer">
                <Stack size={30} className="text-primary" />
                <h1 className="font-bold text-3xl">Exercard</h1>
            </Link>
            <p className="text-light mt-2 text-sm">
                Free & Open-source SRS flashcards with local AI-integration.
            </p>

            <section className="flex items-center justify-between w-full">
                {/* Navigation */}
                <section className="flex gap-x-4">
                    {Object.entries(navLinks).map(([link, title]) => (
                        <Link href={link} key={link} className={`cursor-pointer ${pathname === link ? 'underline' : ''}`}>
                            {title}
                        </Link>
                    ))}
                </section>

                {/* Github & Socials */}
                <section className="flex gap-x-4 mt-4 text-white">
                    <Link href="https://www.github.com/eben-vranken/exercard" target="_blank" className="flex items-center gap-x-2 rounded bg-[#2b3137] p-2">
                        <GithubLogo size={20} weight="bold" />

                    </Link>
                    <Link href="https://www.reddit.com/u/exercard" target="_blank" className="flex items-center gap-x-2 rounded bg-[#FF5700] p-2">
                        <RedditLogo size={20} weight="bold" />
                    </Link>
                    <Link href="https://www.twitter.com/exercard" target="_blank" className="flex items-center gap-x-2 rounded bg-[#1DA1F2] p-2">
                        <TwitterLogo size={20} weight="bold" />
                    </Link>
                </section>
            </section>
        </nav>
    )
};
export default Navbar;