import { readFileSync } from "fs";
import { join } from "path";
import { BlogPost } from "@/app/layout";
import { notFound } from "next/navigation";

interface PostPageProps {
    params: { slug: string };
}

export default async function PostPage({ params }: PostPageProps) {
    const { slug } = await params;

    const filePath = join(process.cwd(), "data", "blogposts.json");
    const fileContents = readFileSync(filePath, "utf-8");
    const posts: BlogPost[] = JSON.parse(fileContents);

    const post = posts.find((post) => post.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <main className="w-full mt-[2.5%] h-full flex flex-col gap-y-4 relative">
            <article>
                <h1 className="font-bold text-3xl">{post.title}</h1>
                <p className="text-sm text-ultralight mb-2">{post.date}</p>
                <section className="blog-content text-lg text-light flex flex-col">
                    <section
                        dangerouslySetInnerHTML={{ __html: post.content }}
                        className="flex flex-col"
                    />
                </section>
            </article>
        </main>
    );
}
