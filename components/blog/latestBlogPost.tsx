import { readFileSync } from "fs";
import { join } from "path";
import BlogPostPreview from "./BlogPostPreview";

const LatestBlogPost: React.FC = () => {
    const filePath = join(process.cwd(), "data", "blogposts.json");
    const fileContents = readFileSync(filePath, "utf-8");

    const posts = JSON.parse(fileContents);
    const latestPost = posts[posts.length - 1];

    return (
        <article>
            <BlogPostPreview post={latestPost} />
        </article>
    )
}

export default LatestBlogPost;