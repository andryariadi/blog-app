"use client";

import Image from "next/image";
import styles from "./about.module.css";
import Count from "@/components/count/Count";

import { motion } from "framer-motion";
import { fadeIn } from "../../libs/motions/variants";

// export const metadata = {
//   title: "Next.js 14 iBlog About Page",
//   description: "andry ariadi blog about description",
// };

export default function AboutPage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <motion.h2 variants={fadeIn("up", 0.1)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.7 }} className={styles.subTitle}>
            About Agency
          </motion.h2>
          <motion.h1 variants={fadeIn("up", 0.5)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.7 }} className={styles.title}>
            We create digital ideas that are bigger, bolder, braver and better.
          </motion.h1>
          <motion.p variants={fadeIn("up", 0.7)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.7 }} className={styles.desc}>
            {" "}
            We create digital ideas that are bigger, bolder, braver and better. We believe in good ideas flexibility and precission We’re world’s Our Special Team best consulting & finance solution provider. Wide range of web and software
            development services.
          </motion.p>
          <motion.div variants={fadeIn("up", 0.9)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.7 }}>
            <Count />
          </motion.div>
        </div>
        <motion.div variants={fadeIn("down", 0.3)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.7 }} className={styles.imgContainer}>
          <Image src="/images/about.svg" alt="about" fill className={styles.aboutImg} />
        </motion.div>
      </div>
    </>
  );
}
