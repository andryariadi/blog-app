import styles from "./blog.module.css";
import PostCard from "@/components/postCard/PostCard";

export default function BlogPage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.cardContainer}>
          <PostCard />
        </div>
        <div className={styles.cardContainer}>
          <PostCard />
        </div>
        <div className={styles.cardContainer}>
          <PostCard />
        </div>
        <div className={styles.cardContainer}>
          <PostCard />
        </div>
      </div>
    </>
  );
}
