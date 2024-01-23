import Image from "next/image";
import styles from "./about.module.css";
import Count from "@/components/count/Count";

export default function AboutPage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h2 className={styles.subTitle}>About Agency</h2>
          <h1 className={styles.title}>We create digital ideas that are bigger, bolder, braver and better.</h1>
          <p className={styles.desc}>
            {" "}
            We create digital ideas that are bigger, bolder, braver and better. We believe in good ideas flexibility and precission We’re world’s Our Special Team best consulting & finance solution provider. Wide range of web and software
            development services.
          </p>
          <Count />
        </div>
        <div className={styles.imgContainer}>
          <Image src="/images/about.png" alt="about" fill className={styles.aboutImg} />
        </div>
      </div>
    </>
  );
}
