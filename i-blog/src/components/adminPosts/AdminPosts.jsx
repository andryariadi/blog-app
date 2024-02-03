import { getPosts } from "@/libs/database/data";
import styles from "./adminpost.module.css";
import Image from "next/image";
import { deletePost } from "@/libs/database/actions/action";

export default async function AdminPosts() {
  const posts = await getPosts();

  return (
    <>
      <div className={styles.container}>
        <h1>Posts</h1>
        {posts?.map((post) => (
          <div className={styles.postContainer} key={post.id}>
            <div className={styles.postDetail}>
              <Image src={post.imgUrl || "/images/noavatar.png"} alt="post" width={50} height={50} className={styles.img} />
              <span className={styles.title}>{post.title}</span>
            </div>
            <form action={deletePost}>
              <input type="hidden" name="id" value={post.id} />
              <button className={styles.deleteBtn}>Delete</button>
            </form>
          </div>
        ))}
      </div>
    </>
  );
}
