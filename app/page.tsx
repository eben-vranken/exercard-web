import { readFileSync } from "fs";
import { join } from "path";
import BlogpostList from "@/components/blog/BlogpostList";
import RainingCards from "@/components/UI/animated/RainingCards";

export default async function Home() {
  const filePath = join(process.cwd(), "data", "blogposts.json");
  const fileContents = readFileSync(filePath, "utf-8");
  const posts = JSON.parse(fileContents);

  const generateCards = (cardCount: number) => {
    return Array.from({ length: cardCount }, (_, index) => ({
      id: index,
      position: {
        top: `${Math.random() * -10}vh`,
        left: `${Math.random() * 100}vw`,
      },
      animationDelay: `${Math.random() * 5}s`,
      animationDuration: `${Math.random() * (12 - 8) + 8}s`,
    }));
  };

  const cards = generateCards(10);

  return (
    <section className="w-full min-h-screen flex items-center flex-col">
      <section className="w-full flex-1 overflow-y-auto">
        <BlogpostList posts={posts} />
      </section>

      <RainingCards cards={cards} />
    </section>
  );
}
