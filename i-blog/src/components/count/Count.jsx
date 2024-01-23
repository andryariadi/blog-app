"use client";

import styles from "./count.module.css";
import CountUp from "react-countup";

export default function Count() {
  return (
    <>
      <div className={styles.container}>
        <CountUp start={0} end={100} duration={3} />
      </div>
    </>
  );
}
