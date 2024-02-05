import styles from "./pagination.module.css";

export default function Pagination() {
  return (
    <>
      <div className={styles.container}>
        <button className={styles.btn}>Prev</button>
        <button className={styles.btn}>Next</button>
      </div>
    </>
  );
}
