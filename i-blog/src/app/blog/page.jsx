import { getPosts, getUsers } from "@/libs/database/data";
import styles from "./blog.module.css";
import PostCard from "@/components/postCard/PostCard";

export const metadata = {
  title: "Post Blog",
  description: "andry ariadi blog post blog description",
};

export default async function BlogPage() {
  const posts = await getPosts();
  const users = await getUsers();

  console.log({ posts, users }, "<----diblogpage");
  return (
    <>
      <div className={styles.container}>
        {posts?.map((post) => (
          <div className={styles.cardContainer} key={post._id}>
            <PostCard posts={post} />
          </div>
        ))}
      </div>
    </>
  );
}
