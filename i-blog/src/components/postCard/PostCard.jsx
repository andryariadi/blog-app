import Link from "next/link";
import styles from "./postcard.module.css";
import Image from "next/image";

export default function PostCard({ post }) {
  // console.log(post, "<----postcard");
  return (
    <>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.imgContainer}>
            <Image src={post.imgUrl || "/images/noavatar.png"} alt="post" fill className={styles.img} />
          </div>
          <span className={styles.date}>01.01.2024</span>
        </div>
        <div className={styles.bottom}>
          <h1 className={styles.title}>{post.title}</h1>
          <p className={styles.desc}>{post.desc}</p>
          <Link href={`/blog/${post.slug}`} className={styles.link}>
            Read More
          </Link>
        </div>
      </div>
    </>
  );
}
