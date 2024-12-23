import Link from 'next/link';

interface BlogPost {
    id: string;
    title: string;
    content: string;
    date: string;
    slug: string;
    excerpt: string;
}

const BlogPostPreview: React.FC<{ post: BlogPost }> = ({ post }) => {
    return (
        <article className="py-4 border-b border-white/10">
            <header>
                <h2 className="text-2xl font-bold">
                    <Link href={`/blog/${post.slug}`} className="text-primary hover:opacity-80">
                        {post.title}
                    </Link>
                </h2>
            </header>
            <p className="text-light">{post.excerpt}</p>
            <time className="text-sm text-ultralight" dateTime={post.date}>
                {new Date(post.date).toLocaleDateString()}
            </time>
        </article>
    );
};

export default BlogPostPreview;
