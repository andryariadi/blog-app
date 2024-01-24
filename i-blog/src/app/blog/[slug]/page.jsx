import Image from "next/image";
import styles from "./slug.module.css";
import PostUser from "@/components/postUser/PostUser";
import { Suspense } from "react";
import { getPostBySlug } from "@/libs/database/data";

export default async function PostDetailPage({ params }) {
  const { slug } = params;

  const post = await getPostBySlug(slug);

  console.log({ slug, post }, "<--dipostdetailpage");
  return (
    <>
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <Image src={post.imgUrl} alt="postdetail" fill className={styles.img} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{post.title}</h1>
          <div className={styles.detail}>
            <Image src="https://images.pexels.com/photos/9595972/pexels-photo-9595972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="avatar" width={50} height={50} className={styles.avatar} />
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser />
            </Suspense>
            <div className={styles.detailText}>
              <span className={styles.detailTitle}>Published</span>
              <span className={styles.detailValue}>{post.createdAt.toString().slice(4, 15)}</span>
            </div>
          </div>
          <div className={styles.content}>{post.desc}</div>
        </div>
      </div>
    </>
  );
}
