import { readFileSync } from "fs";
import { join } from "path";
import BlogPostList from "@/components/blog/BlogpostList";
import React from "react";

export default async function Blog() {
    const filePath = join(process.cwd(), "data", "blogposts.json");
    const fileContents = readFileSync(filePath, "utf-8");
    const posts = JSON.parse(fileContents);

    return <main className="w-full flex-1 overflow-y-auto">
        <BlogPostList posts={posts} />
    </main>
};