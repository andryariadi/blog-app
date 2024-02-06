import { getPosts, getUsers } from "@/libs/database/data";
import styles from "./blog.module.css";
import PostCard from "@/components/postCard/PostCard";

export const metadata = {
  title: "Post Blog",
  description: "andry ariadi blog post blog description",
};

const getAllPosts = async () => {
  const res = await fetch("http://localhost:3000/api/blog", {
    next: {
      revalidate: 3600,
    },
  });

  if (!res.ok) throw new Error("Failed to fetch data");

  return res.json();
};

export default async function BlogPage() {
  // Fetch data without an API
  // const posts = await getPosts();
  // const users = await getUsers();

  // Fetch data with an API
  const posts = await getAllPosts();

  console.log(posts, "<----diblogpage");
  return (
    <>
      <div className={styles.container}>
        {posts?.map((post) => (
          <div className={styles.cardContainer} key={post._id}>
            <PostCard post={post} />
          </div>
        ))}
      </div>
    </>
  );
}
