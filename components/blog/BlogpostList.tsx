import { BlogPost } from '@/app/layout';
import BlogPostPreview from './BlogPostPreview';

interface BlogPostListProps {
    posts: BlogPost[];
}

const BlogPostList: React.FC<BlogPostListProps> = ({ posts }) => {
    if (!posts || posts.length === 0) {
        return <p>No blog posts available.</p>;
    }

    return (
        <section className="w-full">
            <section className="space-y-6">
                {posts.map((post) => (
                    <article key={post.id}>
                        <BlogPostPreview post={post} />
                    </article>
                ))}
            </section>
        </section>
    );
};

export default BlogPostList;