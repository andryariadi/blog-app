import styles from "./postuser.module.css";

export default function PostUser() {
  return (
    <>
      <div className={styles.container}>
        <span className={styles.title}>Author</span>
        <span className={styles.username}>Andry Ariadi</span>
      </div>
    </>
  );
}
