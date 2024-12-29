import { readFileSync } from "fs";
import { join } from "path";
import { BlogPost } from "@/app/layout";
import { notFound } from "next/navigation";

interface PostPageProps {
    params: Promise<{ slug: string }>;
}

const PostPage: React.FC<PostPageProps> = async ({ params }) => {
    const { slug } = await params;

    const filePath = join(process.cwd(), "data", "blogposts.json");
    const fileContents = readFileSync(filePath, "utf-8");
    const posts: BlogPost[] = JSON.parse(fileContents);

    const post = posts.find((post) => post.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <main className="w-full mt-[2.5%] h-full flex flex-col gap-y-4 relative blogpost">
            <article>
                <header>
                    <h1 className="font-bold text-3xl text-main">{post.title}</h1>
                    <p className="text-sm text-light mb-2">{post.date}</p>
                </header>
                <section className="blog-content text-lg flex flex-col">
                    <section
                        dangerouslySetInnerHTML={{ __html: post.content }}
                        className="flex flex-col "
                    />
                </section>
            </article>
        </main>
    );
}

export default PostPage;