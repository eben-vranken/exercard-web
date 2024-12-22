import { readFileSync } from "fs";
import { join } from "path";
import BlogpostList from "@/components/blog/BlogpostList";
import RainingCards, { generateCards } from "@/components/UI/animated/RainingCards";

export default async function Home() {
  const filePath = join(process.cwd(), "data", "blogposts.json");
  const fileContents = readFileSync(filePath, "utf-8");
  const posts = JSON.parse(fileContents);

  // Generate the cards data server-side
  const cards = generateCards(10);

  return (
    <section className="w-full min-h-screen flex items-center flex-col">
      <section className="w-full flex-1 overflow-y-auto">
        <BlogpostList posts={posts} />
      </section>

      <RainingCards cardCount={10} cards={cards} />
    </section>
  );
}
