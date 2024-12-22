import { readFileSync } from "fs";
import { join } from "path";
import BlogpostList from "@/components/blog/BlogpostList";

export default async function Home() {
  const filePath = join(process.cwd(), "data", "blogposts.json");
  const fileContents = readFileSync(filePath, "utf-8");
  const posts = JSON.parse(fileContents);

  return (
    <section className="w-full min-h-screen flex items-center flex-col">
      <section className="w-full flex-1 overflow-y-auto">
        <BlogpostList posts={posts} />
      </section>
    </section>
  );
}
