import Image from "next/image";
import styles from "./home.module.css";
import SocialMedia from "@/components/socilamedia/SocialMedia";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Creative Thoughts Agency.</h1>
          <p className={styles.desc}> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero blanditiis adipisci minima reiciendis a autem assumenda dolore.</p>
          <div className={styles.btnContainer}>
            <button className={styles.btn}>Learn More</button>
            <button className={styles.btn}>Contact</button>
          </div>
          <SocialMedia />
        </div>
        <div className={styles.imgContainer}>
          <Image src="/images/hero.gif" alt="hero" fill className={styles.heroImg} />
        </div>
      </div>
    </>
  );
}
