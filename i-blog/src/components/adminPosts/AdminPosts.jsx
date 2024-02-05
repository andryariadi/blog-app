import styles from "./adminpost.module.css";
import { getPosts } from "@/libs/database/data";
import Image from "next/image";
import { deletePost } from "@/libs/database/actions/action";
import { RiDeleteBin6Fill } from "react-icons/ri";
import Search from "../search/Search";
import Pagination from "../pagination/Pagination";

export default async function AdminPosts({ searchParams }) {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;

  const { count, posts } = await getPosts(q, page);

  // console.log({ posts, count }, "<--diposts");

  return (
    <>
      <div className={styles.containerUp}>
        <h1>Posts</h1>
        <Search placeholder={"Search Posts..."} />
      </div>
      <div className={styles.containerDown}>
        {posts?.map((post) => (
          <div className={styles.postContainer} key={post.id}>
            <div className={styles.postDetail}>
              <Image src={post.imgUrl || "/images/noavatar.png"} alt="post" width={50} height={50} className={styles.img} />
              <span className={styles.title}>{post.title}</span>
            </div>
            <form action={deletePost}>
              <input type="hidden" name="id" value={post.id} />
              <button className={styles.deleteBtn}>
                <RiDeleteBin6Fill size={23} color="#871132" />
              </button>
            </form>
          </div>
        ))}
      </div>
      {posts.length > 0 && <Pagination count={count} />}
    </>
  );
}
