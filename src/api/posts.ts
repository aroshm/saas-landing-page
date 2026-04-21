interface Post {
  id: number;
  title: string;
  body: string;
  image: string;
  date: string;
  category: string;
}

export const getPost = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) throw new Error("Failed to fetch posts");

  const data = await response.json();

  return data.map((post: Post) => ({
    id: post.id,
    title: post.title,
    body: post.body,
    image: `https://picsum.photos/seed/${post.id}/600/400`,
    date: "08-11-2021",
    category: "General",
  }));
};
