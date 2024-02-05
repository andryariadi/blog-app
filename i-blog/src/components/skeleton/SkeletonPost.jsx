import styles from "./skeleton.module.css";

export default function SkeletonPost() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.loader}></div>
      </div>
    </>
  );
}
