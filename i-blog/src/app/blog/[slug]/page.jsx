import Image from "next/image";
import styles from "./slug.module.css";
import PostUser from "@/components/postUser/PostUser";
import { Suspense } from "react";
// import { getPostBySlug } from "@/libs/database/data";
import SkeletonUser from "@/components/skeleton/SkeletonUser";

export const generateMetadata = async ({ params }) => {
  const { slug } = params;

  const post = await getPostBySlug(slug);

  return {
    title: post.title,
    description: post.desc,
  };
};

const getPostBySlug = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/blog/${slug}`, {
    next: {
      revalidate: 3600,
    },
  });

  if (!res.ok) throw new Error("Failed to fetch detail post!");

  return res.json();
};

export default async function PostDetailPage({ params }) {
  const { slug } = params;

  // Fetch data without an API
  // const post = await getPostBySlug(slug);

  // Fetch data with an API
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
            <Suspense fallback={<SkeletonUser />}>
              <PostUser userId={post.userId} />
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
