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
        <section className="py-4 border-b border-white/10">
            <h2 className="text-2xl font-bold">
                <Link href={`/posts/${post.slug}`} className="text-primary hover:opacity-80">
                    {post.title}
                </Link>
            </h2>
            <p className="text-light">{post.excerpt}</p>
            <span className="text-sm text-ultralight">{post.date}</span>
        </section>
    );
};

export default BlogPostPreview;
