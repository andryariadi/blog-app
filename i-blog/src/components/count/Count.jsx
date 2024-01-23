"use client";

import styles from "./count.module.css";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function Count() {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <>
      <div className={styles.container} ref={ref}>
        {inView && (
          <>
            <div className={styles.countContainer}>
              <div className={styles.count}>
                <CountUp start={0} end={10} duration={3} /> K+
              </div>
              <p className={styles.title}>Year of Experiance</p>
            </div>
            <div className={styles.countContainer}>
              <div className={styles.count}>
                <CountUp start={0} end={243} duration={3} /> K+
              </div>
              <p className={styles.title}>People reached</p>
            </div>
            <div className={styles.countContainer}>
              <div className={styles.count}>
                <CountUp start={0} end={5} duration={3} /> K+
              </div>
              <p className={styles.title}>Services and plugins</p>
            </div>
          </>
        )}
      </div>
    </>
  );
}
