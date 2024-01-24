import Image from "next/image";
import styles from "./slug.module.css";
import PostUser from "@/components/postUser/PostUser";
import { Suspense } from "react";

export default function PostDetailPage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <Image src="https://images.pexels.com/photos/9595972/pexels-photo-9595972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="postdetail" fill className={styles.img} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Title</h1>
          <div className={styles.detail}>
            <Image src="https://images.pexels.com/photos/9595972/pexels-photo-9595972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="avatar" width={50} height={50} className={styles.avatar} />
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser />
            </Suspense>
            <div className={styles.detailText}>
              <span className={styles.detailTitle}>Published</span>
              <span className={styles.detailValue}>01.01.2024</span>
            </div>
          </div>
          <div className={styles.content}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quo iste incidunt dolor ipsa rerum, sit accusamus dignissimos magnam cupiditate voluptas! Saepe maxime autem nemo earum quo aliquid? Doloribus, commodi.
          </div>
        </div>
      </div>
    </>
  );
}
