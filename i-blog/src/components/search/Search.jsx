import styles from "./search.module.css";
import { IoSearchSharp } from "react-icons/io5";

export default function Search() {
  return (
    <>
      <div className={styles.container}>
        <input type="text" placeholder="Search..." className={styles.input} />
        <div className={styles.icon}>
          <IoSearchSharp size={20} color="#e5e5e5" />
        </div>
      </div>
    </>
  );
}
