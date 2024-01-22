import Image from "next/image";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <>
      <div>
        <div className={styles.container}>
          <div className={styles.logo}>
            <Image src="/icons/footer.svg" alt="logo" width={60} height={60} className="logo" />
          </div>
          <div className={styles.text}>AndryAriadi creative thoughts agency © All rights reserved.</div>
        </div>
      </div>
    </>
  );
}
