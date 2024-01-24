import Link from "next/link";
import styles from "./postcard.module.css";
import Image from "next/image";

export default function PostCard({ post }) {
  console.log(post, "<----postcard");
  return (
    <>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.imgContainer}>
            <Image src="https://images.pexels.com/photos/9595972/pexels-photo-9595972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="post" fill className={styles.img} />
          </div>
          <span className={styles.date}>01.01.2024</span>
        </div>
        <div className={styles.bottom}>
          <h1 className={styles.title}>Title</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum quos libero aut quam est minima! Animi nihil, quaerat et provident illo sint eveniet enim alias inventore labore nisi velit commodi.</p>
          <Link href="/blog/spot" className={styles.link}>
            Read More
          </Link>
        </div>
      </div>
    </>
  );
}
