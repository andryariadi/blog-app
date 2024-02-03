import Image from "next/image";
import styles from "./postuser.module.css";
import userImg from "../../../public/images/noavatar.png";
import { getUserById } from "@/libs/database/data";

export default async function PostUser({ userId }) {
  const user = await getUserById(userId);

  console.log({ user }, "<--postuser");
  return (
    <>
      <div className={styles.container}>
        <Image src={user?.imgUrl || userImg} alt="avatar" width={50} height={50} className={styles.avatar} />
        <div className={styles.textContainer}>
          <span className={styles.title}>Author</span>
          <span className={styles.username}>{user?.username}</span>
        </div>
      </div>
    </>
  );
}
