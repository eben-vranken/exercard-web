import { useEffect, useState } from "react";
import { BlogPost } from "@/app/layout";

const useGetAllBlogPosts = () => {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch("/api/blogposts");
                if (!response.ok) {
                    throw new Error("Failed to fetch blog posts");
                }
                const data: BlogPost[] = await response.json();
                setPosts(data);
            } catch (error) {
                console.error("Error fetching blog posts:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    return { posts, loading };
};

export default useGetAllBlogPosts;
