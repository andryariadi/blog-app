import { getPosts } from "@/libs/database/data";
import styles from "./blog.module.css";
import PostCard from "@/components/postCard/PostCard";

export default async function BlogPage() {
  const posts = await getPosts();

  console.log(posts, "<----diblogpage");
  return (
    <>
      <div className={styles.container}>
        {posts.map((post) => (
          <div className={styles.cardContainer}>
            <PostCard posts={post} />
          </div>
        ))}
      </div>
    </>
  );
}
