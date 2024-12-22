import { readFileSync } from "fs";
import { join } from "path";
import BlogpostList from "@/components/blog/BlogpostList";
import Link from "next/link";
import { GithubLogo, RedditLogo, TwitterLogo } from "@phosphor-icons/react/dist/ssr";

export default async function Home() {
  const filePath = join(process.cwd(), "data", "blogposts.json");
  const fileContents = readFileSync(filePath, "utf-8");
  const posts = JSON.parse(fileContents);

  return (
    <section className="w-full min-h-screen flex items-center flex-col">
      {/* Links */}
      <section className="w-full flex gap-x-4 mt-4 text-white">
        <Link href="https://www.github.com/eben-vranken/exercard" target="_blank" className="flex items-center gap-x-2 rounded bg-[#2b3137] p-2">
          <GithubLogo size={20} weight="bold" />
          Github
        </Link>
        <Link href="https://www.reddit.com/u/exercard" target="_blank" className="flex items-center gap-x-2 rounded bg-[#FF5700] p-2">
          <RedditLogo size={20} weight="bold" />
          Reddit
        </Link>
        <Link href="https://www.twitter.com/exercard" target="_blank" className="flex items-center gap-x-2 rounded bg-[#1DA1F2] p-2">
          <TwitterLogo size={20} weight="bold" />
          Twitter
        </Link>
      </section>

      <section className="w-full flex-1 overflow-y-auto">
        <BlogpostList posts={posts} />
      </section>
    </section>
  );
}
