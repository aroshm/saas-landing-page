import BlogCardLg from "./BlogCardLg";
import BlogCardSm from "./BlogCardSm";
import { getPost } from "../api/posts";
import { useEffect, useState } from "react";

interface Post {
  id: number;
  title: string;
  body: string;
  image: string;
  date: string;
  category: string;
}

const Blog = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPost()
      .then((data) => setPosts(data))
      .catch(() => setError("Something went wrong"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-center py-5">Loading...</p>;
  if (error) return <p className="text-center py-5">{error}</p>;

  const featuredPosts = posts.slice(0, 2);
  const listPosts = posts.slice(2, 6);

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col justify-between items-start mb-12 md:flex-row md:items-center">
          <h2 className="text-[42px] font-bold mb-2.5">Our Latest Blog Posts</h2>
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg">
            See All Blog Posts
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {featuredPosts.map((post) => (
            <div>
              <BlogCardLg
                key={post.id}
                title={post.title}
                body={post.body}
                image={`https://picsum.photos/seed/${post.id}/600/400`}
                date="08-11-2021"
                category="General"
              />
            </div>
          ))}
          <div>
            {listPosts.map((post) => (
              <BlogCardSm
                key={post.id}
                title={post.title}
                image={`https://picsum.photos/seed/${post.id}/600/400`}
                date="08-11-2021"
                category="General"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
